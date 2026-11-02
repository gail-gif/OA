---
name: sales-numbers
description: Pull sales funnel metrics from the Notion Sales Calendar (calls booked, attended, qualified, no-shows, proposals, deposits, conversion by source, days to close, outstanding proposals, DDRs) for any date range, compare periods, and maintain the Sales Pulse dashboard artifact. Use when Gail asks for numbers, metrics, Q-on-Q comparisons, conversion rates or dashboard changes.
---

# Sales numbers and dashboard

Read `.claude/skills/oa-basics/SKILL.md` first. "Just put it here first so I can check": show the numbers in chat before they go anywhere.

## Gail's 15 standard metrics (window = Discovery Call Booked date)
1. Total DCs booked (also give the count after removing duplicates and reschedules)
2. Attended (all)
3. Attended & Qualified
4. Attended & Unqualified
5. Linh's Connections (WOM): booked and deposits
6. Client Referral: booked and deposits
7. No-show + cancel
8. Proposals sent
9. Deposits paid
10. Qualified → deposit conversion
11. Conversion by source → deposit
12. Average days to close (and median)
13. Outstanding proposals
14. Outstanding proposals, last 60 days
15. DDRs closed

Give names and companies. The database has no Company field, so infer it from the email domain and say so.
Leave out test bookings. Flag data issues instead of silently fixing them.

## Comparisons
For quarter-on-quarter, show calls booked, qualified (%), unqualified, no-show, cancelled, no-show + cancel rate, deposits and source mix, plus counts by month.

## Dashboard (https://claude.ai/artifact/PbvZBGBM2DqZvX2KJPkf2x)
- Read the artifact first, change only what's asked, then republish to the same URL.
- Explain metrics in plain words. For example, "Not recorded" means Original Source is blank.
- Data Health panel: Pending DC split into "call happened / rebooked / genuine no-shows", deposit-paid-not-Won, 90-day quiet leads.
- Goal (Rock): one screen joining Claude + Notion + GHL, with lost reason and source on 100% of leads.
