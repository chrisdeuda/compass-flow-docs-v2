---
slug: changelog-2026-02
title: Changelog - February 2026
date: 2026-02-26
author: Chris
---

# February 2026 Updates

<!-- truncate -->

## What's New

### Flipcard Component (CCF-29)

Users can now flip through interactive flashcards in the learning sections. Each card reveals context and insight on the back — keeping the experience engaging without overwhelming the screen.

### Drag & Drop Puzzle — Sections 2 & 3 (CCF-30 / CCF-43)

Two new drag-and-drop games now appear inside the quiz flow:

- **Section 2** — A 7-block ordering puzzle triggers between Q3 and Q4, asking users to arrange micro-lesson concepts in the right sequence before continuing.
- **Section 3** — A 6-block funnel puzzle appears after the section anchor and advances the user to the next section once completed.

When a user submits their order, a **parchment scroll popup** animates on screen to give immediate feedback — correct, incorrect, or out of attempts. Wrong answers auto-reset the board so users can try again.

<video controls width="100%">
  <source src="/assets/changelog/section-2-3-improve-drag.mp4" type="video/mp4" />
</video>

<video controls width="100%">
  <source src="/assets/changelog/Section-2-3-movable-piesces.mp4" type="video/mp4" />
</video>

### Breathing Reset Game — Section 5 (CCF-44)

After answering Q3 in Section 5, users enter a guided breathing exercise before continuing to Q4. The game runs 3 complete breath cycles (inhale → hold → exhale) with animated gradient rings that shift color with each phase. A diamond progress indicator tracks cycles completed. Once done, the quiz flow resumes automatically.

A standalone preview is available at `/breath`.

<video controls width="100%">
  <source src="/assets/changelog/section-5-breathing.mp4" type="video/mp4" />
</video>

### Categorization Puzzle Grid — Section 5 (CCF-39)

Section 5 now includes a drag-and-drop category grid where users place items into the correct columns. Cells highlight with a gold glow on hover, and pieces can be removed by double-clicking. Each drop lands in the exact cell targeted.

### Results Page Flow (CCF-53)

Nine new components build out the post-quiz results experience:

- **Analyzing Results** — loading state while results are computed
- **Power Word Picker** — users select their resonant word
- **Power Word Card** — stylized display of the chosen word
- **Motivational Message** — personalized encouragement based on answers
- **Email Capture** — collects email with multiple state variants (idle, loading, success, error)
- **Benefit Item**, **Progress Bar**, **Success Message**, **Results Flow** — supporting UI


---

## Documentation

- Updated architecture diagrams and local setup guides
- Added git commit workflow guide for the team
