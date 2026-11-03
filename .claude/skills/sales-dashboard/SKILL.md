---
name: sales-dashboard
description: Look after Gail's live "OA Sales Pulse" dashboard (Claude artifact reading the Notion Sales Calendar) - explain what any number means, add or change panels, fix data-health checks, share it, and walk the team through it. Use when Gail mentions the sales dashboard, Sales Pulse, Rock 2 / "Sales on one screen", or asks why a dashboard number looks wrong.
---

# Sales dashboard ("OA Sales Pulse")

Read `.claude/skills/oa-basics/SKILL.md` first.

- **Link:** https://claude.ai/artifact/PbvZBGBM2DqZvX2KJPkf2x (shared with anyone who has the link; viewers see updates immediately)
- **Data:** it reads the Notion Sales Calendar live, through the **viewer's own Notion connector**. It uses the view "DC Bookings Info" (`view://2b9b691b-e059-808d-af44-000cac1377b0`), sorted newest call first. It loads about 13 months of records and refreshes every 10 minutes, or when someone presses Refresh.
- **Rock:** this is Gail's Sales Rock 2 ("Build and Launch the Sales Dashboard" / "Sales on one screen"). The goal is one screen joining Claude, Notion and GHL, with a lost reason and source on 100% of leads.

## What's on it
1. **Controls:** period (This week / This month / Last month / This quarter / Year to date), consultant (Everyone / Gail / Heidi / Linh), and Refresh.
2. **KPI strip:** Discovery calls, Show-up rate, Qualified, Proposals sent, Deposits paid, VAs started. Each is compared with the same point last period.
3. **What needs doing** (tabs):
   - **Proposals awaiting decision:** shows the follow-up stage due (Day 1 / 2 / 4 / 7 / 10). Older than 21 days says "close the loop". Older than 45 days is hidden by default.
   - **Upcoming calls:** the next 2 weeks.
   - **Deposits waiting for VA start:** amber after 30 days, red after 45.
   - **Hot & warm leads.**
4. **Monthly activity:** a 12-month trend of calls booked, proposals sent and deposits paid.
5. **Where this period's calls got to:** the funnel from booked → showed up → qualified → proposal → deposit → VA started, plus median days for call→proposal, proposal→deposit and deposit→VA start.
6. **Lead sources that convert:** last 6 months. "Not recorded" means `Original Source` is blank.
7. **Team scoreboard** by consultant.
8. **Why deals are lost:** last 6 months, with Lost Reasons grouped:
   - Not a fit
   - Went quiet
   - Budget or price
   - Chose another option
   - Not ready / timing
   - Other
   - No reason recorded
9. **Data health:**
   - Pending DC but the call happened
   - Pending DC but they rebooked
   - Pending DC no-shows
   - Past calls with no outcome
   - Deposit paid but not Won
   - Follow-up stage behind
   - Open leads quiet for 90+ days
   - Recent calls with no consultant
   - Test records

## Which Notion fields drive which numbers
| Dashboard | Notion field |
|---|---|
| Calls | `Discovery Call Booked` |
| Show-up / qualified | `Discovery Call Outcome` ("Connected…" = held; "Connected & Qualified" = qualified) |
| Proposals | `Proposal Sent` date |
| Deposits | `VA Deposit Date` |
| VAs started | `VA DDR Setup` |
| Follow-up stage | `Follow-Up Timeline` and `Last Follow-Up` |
| Sources | `Original Source` |
| Lost | `Status` = Lead - Lost, plus `Lost Reason` / `Lost Reason (1)` and `Closed Lost Date` |

Test bookings (names with "test" or "mochi", or an @outsourcingangel.com.au email) are left out of every number.

**A wrong number is almost always a Notion data problem**, not the dashboard. Explain which field is causing it and offer `/sales-calendar-cleanup` to fix it.

## Making changes
1. Read the artifact first (`Artifact` action `read`) and work from the saved file. Never rebuild it from scratch.
2. Change only what Gail asks. Keep the look (Figtree / Bricolage fonts, teal accent, light and dark themes) and the Notion connector setup.
3. Republish to the **same URL** so the link the team has keeps working.
4. Tell Gail what changed and how to check it, e.g. "press Refresh, then look at Data health".

## Showing or sharing it
- Each person needs the **Notion connector** switched on in claude.ai (Settings → Connectors), and must press Allow the first time.
- For a team walkthrough, give a 1-minute tour: KPIs → What needs doing → Sources → Lost reasons → Data health. Suggest each consultant filter to their own name.

## Still to build (Rock 2)
- GHL connection: not possible until a GHL connector exists. A weekly sync is the fallback.
- Check the dashboard numbers against the manual weekly report counts.
- Use it in every L10.
