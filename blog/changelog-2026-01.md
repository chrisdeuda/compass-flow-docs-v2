---
slug: changelog-2026-01
title: Changelog - January 2026
date: 2026-01-31
author: Chris Devz
---

# January 2026 Updates

<!-- truncate -->

## What's New

### Wizard Theme — Quiz Questions & Section Screens (PR #20)

The full wizard/forest aesthetic is now applied across all quiz and section screens.

- **ScenarioCard** (quiz questions) — forest background with dark overlay, diamond progress indicator showing section progress, styled answer buttons with custom cursor on hover
- **SectionAnchor** (between sections) — forest background, GoldCompass decoration, "Section Complete" indicator, wizard-styled continue button
- Progress bar removed from the section-questions view — progress is now integrated directly inside the card

### Page Intro (PR #26)

Added an introductory page to the start of the quiz flow, giving users context before they begin the assessment.

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

## Documentation

- Updated MailerLite and Google Sheets setup guides — Railway env vars replaced with Supabase secrets
- Added deprecation notice to Express backend directory
