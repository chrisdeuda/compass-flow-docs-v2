# Phase 01: Nixpacks Config

## Context

[plan.md](./plan.md)

Railway's Nixpacks auto-detects Node.js via `package.json`. Build flow:
1. `npm install` — installs deps
2. `npm run build` — runs `docusaurus build`, outputs to `build/`
3. `npm start` — must serve `build/` on `$PORT`

Current `start` script (`docusaurus start`) runs a dev server — NOT suitable for Railway.
Railway also requires binding to `0.0.0.0`, not `localhost`.

## Overview

- **Date:** 2026-03-05
- **Description:** Update package.json start script + docusaurus.config.ts URL for Railway
- **Priority:** P2
- **Status:** completed
- **Live URL:** https://compass-flow-docs-production.up.railway.app

## Requirements

- `npm start` serves `build/` statically
- Binds to `0.0.0.0:$PORT` (Railway injects `$PORT` at runtime)
- No new runtime dependencies (use `npx serve`)
- `docusaurus.config.ts` `url` matches Railway deployment URL

## Related Files

- `package.json` — `scripts.start` needs replacement
- `docusaurus.config.ts` — `url` field (line 8) needs update

## Implementation Steps

### Step 1 — Update `package.json` start script

Change `scripts.start` from:
```json
"start": "docusaurus start"
```
To:
```json
"start": "npx serve -s build -l tcp://0.0.0.0:$PORT"
```

Flags:
- `-s`: SPA mode — redirects 404s to `index.html`
- `-l tcp://0.0.0.0:$PORT`: binds to all interfaces on Railway's assigned port

### Step 2 — Update URL in `docusaurus.config.ts`

Change line 8 from:
```ts
url: 'https://compass-flow-docs.netlify.app',
```
To:
```ts
url: 'https://compass-flow-docs.up.railway.app',
```

> Note: After Railway creates the service, update to the actual URL if different.

### Step 3 — Deploy on Railway

1. Go to [railway.app](https://railway.app) → **New Project** → **Deploy from GitHub repo**
2. Select repo: `chrisdeuda/compass-flow-docs`
3. Railway auto-detects Node.js via Nixpacks — no extra config needed
4. Wait for build to complete (runs `npm run build` then `npm start`)
5. Go to **Settings → Domains** to get the assigned URL
6. If URL differs from `https://compass-flow-docs.up.railway.app`, update `docusaurus.config.ts` `url` field and push — Railway auto-redeploys

> No `railway.toml` or `Dockerfile` needed — Nixpacks handles everything.

## Todo

- [x] Replace `start` script in `package.json`
- [x] Update `url` in `docusaurus.config.ts`
- [x] Deploy via `railway up` CLI
- [x] URL assigned: `https://compass-flow-docs-production.up.railway.app`
- [x] Updated `docusaurus.config.ts` with real URL
- [ ] Commit + push changes
- [ ] Verify site loads and navigation works

## Success Criteria

- Railway build log: `npm run build` completes without errors
- `npm start` log: `serve` binds to `0.0.0.0:PORT`
- Site accessible at Railway URL
- Navigation and internal links work correctly

## Risk Assessment

- **Low:** `npx serve` version drift — mitigate by pinning `serve@14` if needed
- **Low:** Railway URL differs from placeholder — just update config and redeploy

## Security Considerations

- Static site only, no backend — minimal attack surface
- No env vars required
