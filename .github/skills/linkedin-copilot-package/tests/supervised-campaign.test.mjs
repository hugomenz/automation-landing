// Tests for the supervised_campaign gate. Run: node --test
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  authorizeCampaignAction,
  assertCampaignAction,
  campaignPolicy,
  isAlwaysForbidden,
} from '../lib/campaign-policy.mjs';

const approvedRun = { approved: true, id: 'RUN-01' };
const base = { mode: 'supervised_campaign', run: approvedRun, url: 'https://www.linkedin.com/company/prewa-verpackungsmaschinen-gmbh/' };

test('follow is allowed ONLY in supervised_campaign mode', () => {
  assert.equal(authorizeCampaignAction('follow_company', base).allowed, true);
  assert.equal(authorizeCampaignAction('follow_person', { ...base, url: 'https://www.linkedin.com/in/x/' }).allowed, true);
  // wrong mode -> blocked
  assert.equal(authorizeCampaignAction('follow_company', { ...base, mode: 'read_only' }).allowed, false);
  assert.equal(authorizeCampaignAction('follow_company', { ...base, mode: undefined }).allowed, false);
});

test('connect is allowed only with an approved RUN and an exact short note', () => {
  const ctx = { ...base, url: 'https://www.linkedin.com/in/erdinc-erboral-874354193/', exactText: 'Ich untersuche gerade unvollständige Anfragen im Maschinenbau. Ihre Rolle im technischen Vertrieb passt dazu gut. Ich würde mich gern vernetzen.' };
  assert.equal(authorizeCampaignAction('connect', ctx).allowed, true);
  assert.equal(authorizeCampaignAction('connect', { ...ctx, exactText: '' }).allowed, false);
  assert.equal(authorizeCampaignAction('connect', { ...ctx, exactText: 'x'.repeat(300) }).allowed, false);
});

test('follow limits document the one-time RUN-01 setup exception', () => {
  assert.equal(campaignPolicy.limits.max_follows_per_run, 2);
  assert.deepEqual(campaignPolicy.limits.initial_follow_exception, {
    run_id: 'RUN-01',
    max_follows: 25,
    reason: 'one-time campaign setup block explicitly fixed by the campaign owner',
  });
});

test('create_post is allowed only with an approved RUN', () => {
  const ctx = { ...base, url: 'https://www.linkedin.com/feed/', exactText: 'Ein Beitrag.' };
  assert.equal(authorizeCampaignAction('create_post', ctx).allowed, true);
  assert.equal(authorizeCampaignAction('create_post', { ...ctx, run: { approved: false } }).allowed, false);
  assert.equal(authorizeCampaignAction('create_post', { ...ctx, run: undefined }).allowed, false);
});

test('comment is allowed only with exact approved text', () => {
  const ctx = { ...base, url: 'https://www.linkedin.com/feed/update/urn:li:activity:1/', exactText: 'Konkreter Kommentar.' };
  assert.equal(authorizeCampaignAction('comment_on_post', ctx).allowed, true);
  assert.equal(authorizeCampaignAction('comment_on_post', { ...ctx, exactText: '' }).allowed, false);
  assert.equal(authorizeCampaignAction('comment_on_post', { ...ctx, exactText: undefined }).allowed, false);
  assert.equal(authorizeCampaignAction('comment_on_post', { ...ctx, exactText: 'x'.repeat(500) }).allowed, false);
});

test('update_own_profile requires an approved changeset', () => {
  const ctx = { ...base, url: 'https://www.linkedin.com/in/hugomartin-menz/' };
  assert.equal(authorizeCampaignAction('update_own_profile', { ...ctx, changesetApproved: true }).allowed, true);
  assert.equal(authorizeCampaignAction('update_own_profile', { ...ctx, changesetApproved: false }).allowed, false);
});

test('dynamic messages and replies require a fresh specific approval', () => {
  const message = { ...base, url: 'https://www.linkedin.com/messaging/thread/1/', exactText: 'Danke fuers Vernetzen. Wo verlieren Sie vor einer ersten Budgetindikation heute am meisten Zeit: beim Sortieren der Anfrage, beim Klaeren von Anforderungen oder beim fruehen Engineering?' };
  const reply = { ...base, url: 'https://www.linkedin.com/feed/update/urn:li:activity:1/', exactText: 'Danke. Genau an dieser Stelle helfen saubere offene Punkte und sichtbare Annahmen, bevor die Kalkulation weiterlaeuft.' };
  assert.equal(authorizeCampaignAction('send_message', message).allowed, false);
  assert.equal(authorizeCampaignAction('send_message', { ...message, responseApproved: true }).allowed, true);
  assert.equal(authorizeCampaignAction('reply', reply).allowed, false);
  assert.equal(authorizeCampaignAction('reply', { ...reply, responseApproved: true }).allowed, true);
});

test('react / repost / invite / endorse / subscribe / unfollow stay blocked even in campaign mode', () => {
  for (const a of ['react', 'like', 'repost', 'share', 'invite', 'endorse', 'subscribe', 'unfollow', 'accept_connection', 'open_message_composer']) {
    assert.equal(isAlwaysForbidden(a), true, `${a} must be always forbidden`);
    assert.equal(authorizeCampaignAction(a, { ...base, exactText: 'x' }).allowed, false, `${a} must not be authorized`);
  }
});

test('an already-executed action is not repeated (idempotency)', () => {
  const ctx = { ...base, alreadyExecuted: true };
  assert.equal(authorizeCampaignAction('follow_company', ctx).allowed, false);
});

test('an unapproved RUN cannot execute anything', () => {
  const ctx = { ...base, run: { approved: false, id: 'RUN-02' }, exactText: 'x' };
  for (const a of ['follow_company', 'follow_person', 'connect', 'create_post', 'comment_on_post', 'update_own_profile', 'send_message', 'reply']) {
    assert.equal(authorizeCampaignAction(a, { ...ctx, changesetApproved: true, responseApproved: true }).allowed, false, `${a} must need approval`);
  }
});

test('missing or non-http URL is refused', () => {
  assert.equal(authorizeCampaignAction('follow_company', { ...base, url: '' }).allowed, false);
  assert.equal(authorizeCampaignAction('follow_company', { ...base, url: 'javascript:void(0)' }).allowed, false);
});

test('assertCampaignAction throws on refusal and passes on success', () => {
  assert.throws(() => assertCampaignAction('send_message', { ...base, url: 'https://www.linkedin.com/messaging/thread/1/', exactText: 'x' }));
  assert.doesNotThrow(() => assertCampaignAction('connect', { ...base, url: 'https://www.linkedin.com/in/x/', exactText: 'Ich wuerde mich gern vernetzen.' }));
  assert.doesNotThrow(() => assertCampaignAction('follow_company', base));
});
