---
name: weekly-sales-report
description: Build Gail's weekly "Sales Update" for Ms Linh (week + month-to-date) from the Notion Sales Calendar and Gmail, then save it as a Gmail draft in the "Sales Report and Updates" thread. Use on Thursdays/Fridays or whenever Gail asks for the weekly sales report, "report like last week", or month/quarter highlights.
---

# Weekly sales report

Read `.claude/skills/oa-basics/SKILL.md` first.

## 1. Gather
- **Notion Sales Calendar**: filter by `Discovery Call Booked` for this week (Mon–Fri) and month to date. Fields: Name, Email, Status, Discovery Call Outcome, Original Source, Aquisition, Proposal, date:Proposal Sent, date:VA Deposit Date, Lost Reason, Notes / Status. If SQL is used up, page the calendar view.
- **Exclude**: test bookings (Nadine Ahmed, "Mochi TheCat", "Gigi NadineTEST", "test TEST"), and deposits from existing clients that didn't come through sales.
- **Gmail sent**: count BDM/reactivation emails by subject ("It's been a while", "Things have changed at Outsourcing Angel", "Still need a hand?", "Last note", "100 Tasks", "Connecting for Your Freedom Audit"). Count bounces. Find replies: warm, not interested, out of office.
- **Gmail inbox**: "not continuing" emails become Lost (with reason). Check replies from Scott's and Ms Linh's leads.
- If Gail pasted last week's version, **copy its format and her edits** (e.g. "(old lead)" tags, source fixes).

## 2. Write it (plain bullets, CAPITALISED headings, no tables)
```
SALES UPDATE | Week of <dates> + <Month> Month-to-Date

FUNNEL PERFORMANCE (THIS WEEK)
• Total Calls Booked • Qualified • Unqualified • Cancelled / No-Show • Deposits from Sales
• Deposit Conversion from Booked Calls: X% (a/b) • Qualified Call to Deposit: X% (a/b)
FUNNEL PERFORMANCE (MONTH-TO-DATE)   (same lines)
DEPOSITS CLOSED (MONTH)       Name | Source | Company / Package / Role | Date
QUALIFIED LEADS (AWAITING DEPOSIT)   Name | Source | Stage | Status note
LOST (THIS WEEK / EARLIER THIS MONTH) with reason
NO SHOW / CANCELLED
SCOTT'S LEADS
MS LINH'S LEADS
NEW INBOUND
BDM & REACTIVATION   This week / month total / results / warm / not interested (count + names) / out of office
SALES DASHBOARD (ROCK 2)   progress + link
THIS WEEK'S FOCUS
NEXT WEEK'S FOCUS
```
Source labels: Organic, Paid Social, AI Mapping, BDM, Workshop, Ms Linh's referral / personal contact, Scott's lead (X100), Chirp AI.

## 3. Check, then deliver
- List anything uncertain for Gail before she sends it.
- She adds updates one by one ("add Arun to Ms Linh's leads", "Krystie just paid"). Recalculate the % each time.
- "Combine all" = one complete report.
- "Add it as a draft" = reply in the **"Sales Report and Updates"** thread to nadine@, CC linh@ and wendy@. Open "Hi Ms Linh,", close "Much Love,". For big outreach numbers, write "several hundred" if she wants it rounded.

## Variants
- **Monthly / quarterly highlights**: deposits list, qualified→deposit %, partner wins (X100, Fractional), placements, Rocks progress.
- **Highlight / Heads up / Help** for the huddle: see the `weekly-huddle` skill.
