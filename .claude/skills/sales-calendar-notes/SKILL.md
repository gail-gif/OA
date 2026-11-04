---
name: sales-calendar-notes
description: Write or update the notes on a client's card in the Notion Sales Calendar - the dated Notes / Status line, Sales Deal summary, Lead Overview, key fields, and the page-body call notes in Gail's format (Call Details, Business Overview, Current Setup, Needs, Key Insights, Proposal Presented, Readiness Snapshot, Next Steps) after any call, proposal, deposit, follow-up or loss. Use when Gail says "update the Notion card", "add notes in Notion", "log this in the sales calendar", or "mark X as won/lost".
---

# Notion Sales Calendar notes

Read the `oa-basics` skill first.
Data source: `collection://d85cdda2-4477-4ac4-8991-9ca18d4451e4` (Sales Home → 📆 Sales Calendar).

## 1. Find the right card
Search by name and email. If there are several cards (rebookings, a 2nd VA), use the newest live one and say which. **Fetch it before writing.** Keep existing text, add to it, and never wipe a field.

## 2. Fields to update, by moment

| Moment | Fields |
|---|---|
| **Call booked** | Discovery Call Booked, Consultant, Original Source, Aquisition, Email |
| **After the Freedom Audit** | Discovery Call Outcome, Status = Lead - Pending Decision (if qualified), Proposal code, Industry, Country, Company Size, Lead Overview, Requirements |
| **Proposal sent** | date:Proposal Sent, Sales Deal, Follow-Up Timeline (Day 1) |
| **Follow-ups** | Follow-Up Timeline (Day 1 / 2 / 4 / 7 / 10), Last Follow-Up date |
| **Deposit paid** | VA Deposit Date, Status = **Lead - Won**, Closed Won Date |
| **After the Alignment Call** | Notes / Status line + an "Alignment Call" page section |
| **VA started** | VA DDR Setup, DDR LINK / GHL DDR LINK |
| **Lost** | Status = Lead - Lost (or DEAD LEAD if they went quiet early or it's spam), Lost Reason, Closed Lost Date (leave blank for back-dated clean-ups) |

**Values that must match Notion exactly:**
- **Status:**
  - Lead - Pending DC
  - Lead - Pending Decision
  - HOT LEAD
  - WARM LEAD
  - Lead - Won
  - Lead - Lost
  - DEAD LEAD
- **Discovery Call Outcome:**
  - Connected & Qualified
  - Connected & Unqualified
  - Connected 2nd Call Required
  - Connected & Unable to provide service
  - No show
  - Cancelled
  - Rescheduled
  - No Show - VA
  - Cancelled - VA
- **Proposal codes:**
  - FT ADV, PT ADV, 10Hrs ADV, PT GEN
  - PT Specialist, FT Specialist
  - S&S, S&S + FT ADV, S&S + PT ADV
  - 2nd FT ADV, 2nd PT ADV, 2nd PT Specialist
  - Marketing Audit, Marketing Machine
  - AI Fractional

  If nothing fits (e.g. Angel Essential), pick the closest and say so.
- **Consultant:** Gail, Heidi, Linh.
- **Original Source:** use the existing options. Map "Linh's Personal Contact" to Referral (Linh), and Scott leads to Scott Referral (X100). Never leave it blank: blanks show as "Not recorded" on the dashboard.

## 3. Notes / Status line
Always start with the date in Gail's format, short and factual:
- `10/28 - Freedom Audit done, qualified, PT ADV proposal to send`
- `10/30 - Proposal sent, Angel Essential $720 + $15/hr`
- `11/03 - Alignment call done, profiles due 11/14`
- `11/05 - Deposit paid (AUD $500)`

## 4. Page-body notes (Gail's format)
Add these under the card's content, newest at the top, with a heading like "Freedom Audit – 28 Oct 2026":
1. **Call Details:** date, who attended, Fathom link
2. **Business Overview:** what they do, team size, location
3. **Current Setup:** who does the work today, tools
4. **Needs:** the role, tasks, hours, start date
5. **Key Insights:** pains and their own words, urgency, preferences
6. **Proposal Presented:** package, fee, rate, estimated total, currency, any discount
7. **Readiness Snapshot:** P.A.I.N. score / budget / decision-maker / timing
8. **Next Steps:** a checklist with owners and dates

Add a **Deal Summary** when there's a deal:
- JD
- Package
- Pricing
- Proposal
- Shift dates and time (client time + PHT)
- Communication tool

After the Alignment Call, add an **Alignment Call** section:
- Fathom link
- Agreed role
- Hours and start date
- Ideal Angel
- KPIs
- Profiles due date

## 5. Check, then report
- For anything you inferred, ask Gail to confirm first. She'll say "all is correct".
- Report the card link, the fields changed, and anything left for her (e.g. GHL still needs the paste block from `/ghl-notes`).
- If the Notion query allowance is used up, use search and fetch instead.
