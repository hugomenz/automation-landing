// supervised_campaign gate: authorize ONLY the approved write actions,
// and only when they come from an approved RUN with exact URL + text, once.
// Does not replace the read-only policy; research still uses safe_readonly_browser.
// Zero dependencies. ESM.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

export const campaignPolicy = JSON.parse(
  readFileSync(join(ROOT, 'config', 'supervised-campaign-policy.json'), 'utf8'),
);

const ALLOWED = new Set(campaignPolicy.allowed_actions);
const FORBIDDEN = new Set(campaignPolicy.always_forbidden);
const TEXT_ACTIONS = new Set(['connect', 'create_post', 'comment_on_post', 'send_message', 'reply']);
const RESPONSE_ACTIONS = new Set(['send_message', 'reply']);

/** True for actions forbidden in every mode (connect/message/react/repost/...). */
export function isAlwaysForbidden(action) {
  return FORBIDDEN.has(action);
}

/**
 * Authorize a single campaign write action.
 * @param {string} action one of allowed_actions
 * @param {{mode?:string, run?:{approved?:boolean,id?:string}, url?:string, exactText?:string, changesetApproved?:boolean, responseApproved?:boolean, alreadyExecuted?:boolean}} ctx
 * @returns {{allowed:boolean, reason:string}}
 */
export function authorizeCampaignAction(action, ctx = {}) {
  if (ctx.mode !== 'supervised_campaign')
    return { allowed: false, reason: 'mode is not supervised_campaign' };
  if (FORBIDDEN.has(action))
    return { allowed: false, reason: `action "${action}" is always forbidden` };
  if (!ALLOWED.has(action))
    return { allowed: false, reason: `action "${action}" is not a campaign action` };
  if (!ctx.run || ctx.run.approved !== true)
    return { allowed: false, reason: 'no approved RUN' };
  if (!ctx.url || typeof ctx.url !== 'string' || !/^https?:\/\//.test(ctx.url))
    return { allowed: false, reason: 'missing or invalid exact URL' };
  if (TEXT_ACTIONS.has(action) && !(ctx.exactText && String(ctx.exactText).trim().length > 0))
    return { allowed: false, reason: 'missing exact final text' };
  if (action === 'connect' && String(ctx.exactText).length > campaignPolicy.limits.max_connection_note_chars)
    return { allowed: false, reason: 'connection note exceeds max chars' };
  if (action === 'comment_on_post' && String(ctx.exactText).length > campaignPolicy.limits.max_comment_chars)
    return { allowed: false, reason: 'comment exceeds max chars' };
  if (action === 'send_message' && String(ctx.exactText).length > campaignPolicy.limits.max_message_chars)
    return { allowed: false, reason: 'message exceeds max chars' };
  if (action === 'reply' && String(ctx.exactText).length > campaignPolicy.limits.max_reply_chars)
    return { allowed: false, reason: 'reply exceeds max chars' };
  if (RESPONSE_ACTIONS.has(action) && ctx.responseApproved !== true)
    return { allowed: false, reason: 'dynamic response not specifically approved' };
  if (action === 'update_own_profile' && ctx.changesetApproved !== true)
    return { allowed: false, reason: 'profile changeset not approved' };
  if (ctx.alreadyExecuted === true)
    return { allowed: false, reason: 'already executed (idempotency)' };
  return { allowed: true, reason: 'authorized by approved RUN' };
}

/** Throwing variant used as a guard before any campaign write. */
export function assertCampaignAction(action, ctx = {}) {
  const r = authorizeCampaignAction(action, ctx);
  if (!r.allowed) throw new Error(`supervised_campaign refused "${action}": ${r.reason}`);
  return r;
}
