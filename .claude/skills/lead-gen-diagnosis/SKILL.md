---
name: lead-gen-diagnosis
description: Act as Gail's marketing/SEO strategist - diagnose why inbound leads are low using HubSpot source data, the Sales Calendar, the Rock decks and web research, then give causes, checks and a simple 90-day plan. Use for "brain dump", "why are we not getting leads", marketing or SEO questions.
---

# Lead generation diagnosis (brain dump)

Read `.claude/skills/oa-basics/SKILL.md` first. Put on the marketing and SEO hat. Be direct and practical.

## Data
- HubSpot contacts by `hs_analytics_source` (organic search, paid, referrals, direct, offline/BDM) per year and month. Aggregate reports may be Forbidden, so use search and count.
- Sales Calendar `Original Source` and conversion by source.
- Rock decks in this repo (e.g. "Volume is the gap", lost reasons).
- Web research on competitors and listings. The OA website may be blocked by the network; say so and list what Gail or the web person should check.

## Findings so far (Nov 2026, for reference)
- HubSpot organic-search contacts went from 294 (2023), 347 (2024) and 250 (2025, last one 31 Oct 2025) to just 1 in 2026.
- Only 3% of 2026 contacts came from online channels, and web forms stopped on 10 Aug 2026.
- Likely causes:
  - tracking or forms broken after a site change (forms may now route to GHL)
  - missing redirects
  - competitors' "Outsourcing Angel alternatives" pages
  - OA absent from listicles and AI answers, with inconsistent directory details
  - the site offer doesn't match the $500 Freedom Plan / 10 ways to buy

## Output
1. What the numbers say (short).
2. Likely causes, ranked.
3. Checks to run this week:
   - Search Console
   - test-submit every form
   - confirm the HubSpot script and GA4
   - ask the web person what changed and when
   - make lead source a required field
4. Simple 90-day plan:
   - fix the basics
   - make the Freedom Plan the main call to action
   - Google Business Profile and reviews
   - comparison and niche pages
   - case studies
   - a "Marketing-sourced Freedom Audits per month" Rock
5. Offer to turn it into a one-page action plan for the team.
