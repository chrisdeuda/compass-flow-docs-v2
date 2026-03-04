---
title: "Deploy Docusaurus to Railway via Nixpacks"
description: "Add start script and update site URL to deploy Docusaurus changelog to Railway without Docker"
status: pending
priority: P2
effort: 15m
branch: chrisdeuda/chengdu
tags: [railway, deployment, docusaurus, nixpacks]
created: 2026-03-05
---

# Deploy Docusaurus to Railway via Nixpacks

## Overview

Deploy Compass Flow Docusaurus changelog site to Railway using Nixpacks auto-detection.
Railway detects Node.js, runs `npm run build`, then `npm start`. Two file changes unlock this:
a production-compatible `start` script and the correct Railway URL in `docusaurus.config.ts`.

## Phases

| # | Phase | Effort | Status |
|---|-------|--------|--------|
| 1 | [Nixpacks Config](./phase-01-nixpacks-config.md) | 15m | pending |

## Key Decisions

- Use `npx serve` (no new dependency) instead of adding `serve` to deps
- Bind to `0.0.0.0:$PORT` — Railway requires host binding, not localhost
- URL placeholder: `https://compass-flow-docs.up.railway.app` (update post-deploy if Railway assigns different URL)

## Out of Scope

- Custom domain setup
- CI/CD pipeline configuration
- Docker/Dockerfile
