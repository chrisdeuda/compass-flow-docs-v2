---
sidebar_position: 2
---

# Infrastructure

## Hosting

**Platform:** [Railway](https://railway.app) via Nixpacks (no Docker)

**Live URL:** https://compass-flow-docs-production.up.railway.app

## How It Works

Railway auto-detects Node.js and runs:
1. `npm run build` — Docusaurus static build → outputs to `build/`
2. `npm start` — serves `build/` via `npx serve` on `$PORT`

No `Dockerfile` or `railway.toml` needed.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `PORT` | Auto (Railway) | Injected by Railway at runtime |
| `SITE_URL` | Optional | Override the canonical site URL (default: `https://compass-flow-docs-production.up.railway.app`) |

Set variables in: Railway dashboard → Project → Service → **Variables**

## Deployment

### Automatic (via GitHub)
Push to the linked branch → Railway auto-redeploys.

### Manual (via CLI)
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy from project root
railway up
```

## Custom Domain

1. Railway dashboard → Service → **Settings → Domains**
2. Add custom domain
3. Update `SITE_URL` env var to the new domain — no code changes needed

## Project Links

- Railway project: `9f42fe73-c2c6-4a9d-b237-8595da5891ca`
- GitHub repo: https://github.com/chrisdeuda/compass-flow-docs
