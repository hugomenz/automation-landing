---
name: landing-dev-server
description: 'Start, serve, build, or test the Angular landing app from the repository root. Use when asked to run ng serve, npm start, build, or tests for the landing. Always change into apps/landing first or use npm --prefix apps/landing. If port 4200 is busy, pass an explicit port such as 4301.'
user-invocable: false
---

# Landing Dev Server

## When to Use
- Start the Angular landing locally from the repository root
- Run `ng serve`, `npm run start`, `npm run build`, or `npm test` for the landing app
- Avoid command failures caused by running Node or Angular commands from the repo root instead of `apps/landing`

## Procedure
1. Treat `apps/landing` as the working directory for all app commands.
2. For interactive sessions, prefer changing into that folder first.
3. For one-shot commands from the repo root, prefer `npm --prefix apps/landing ...`.
4. If port `4200` is already occupied, pass an explicit alternate port such as `4301`.

## Commands

### Interactive PowerShell session from repo root
```powershell
Set-Location .\apps\landing
npm run start -- --host 127.0.0.1 --port 4301
```

### One-shot commands from repo root
```powershell
npm --prefix .\apps\landing run build
npm --prefix .\apps\landing test
npm --prefix .\apps\landing run start -- --host 127.0.0.1 --port 4301
```

## Guardrail
- Do not run `npm run start` from the repository root unless a root package is added in the future.
- Do not assume `4200` is free.