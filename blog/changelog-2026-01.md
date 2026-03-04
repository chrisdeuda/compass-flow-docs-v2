---
slug: changelog-2026-01
title: Changelog - January 2026
date: 2026-01-31
author: Chris Devz
---

# January 2026 Updates

<!-- truncate -->

## What's New

### Email Capture — Migrated to Supabase Edge Function (CCF-22)

The email capture backend has been fully migrated from Express/Railway to a Supabase Edge Function. This removes the need for a separate backend server and consolidates everything into Supabase.

**What changed for users:** Nothing visible — email capture works the same way. But it's now faster, more reliable, and cheaper to run.

**Under the hood:**
- A single Edge Function handles validation, database writes, CRM sync, and Google Sheets backup
- Emails are saved to the `email_captures` table with row-level security
- **MailerLite** sync runs fire-and-forget — captured leads are automatically added to the configured group with custom fields
- **Google Sheets** backup also runs fire-and-forget via REST API with JWT/RS256 auth
- Offline queue and retry logic preserved from the previous implementation

**Frontend changes:**
- `backendApiService` now calls `supabase.functions.invoke()` instead of the Express endpoint
- Dead code removed (`supabaseEmailCaptureService.ts` deleted, `emailCaptureService.ts` deprecated)

---

## Bug Fixes

- Restored wizard theme across quiz questions and section components (Phase 3)
- Applied gold compass decoration to `SectionAnchor` component

---

## Documentation

- Updated MailerLite and Google Sheets setup guides — Railway env vars replaced with Supabase secrets
- Added deprecation notice to Express backend directory
