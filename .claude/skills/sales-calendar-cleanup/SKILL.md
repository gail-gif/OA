---
name: sales-calendar-cleanup
description: Audit and tidy Gail's Notion Sales Calendar - stale "Lead - Pending DC" records, deposit-paid leads not marked Won, missing Original Source, 90-day-quiet leads to Lost, duplicates and test bookings - by checking Fathom, Gmail, Calendar and HubSpot, then bulk-updating after Gail approves. Use when Gail asks to clean up, fix data health, check pending leads, or fix "Not recorded" sources.
---

# Sales Calendar clean-up

Read the `oa-basics` skill first.
Data source: `collection://d85cdda2-4477-4ac4-8991-9ca18d4451e4`.

**Always propose first, change after Gail says yes.** Leave `Closed Lost Date` blank for back-dated clean-ups so the "Why deals are lost" chart isn't skewed.

## Status values
Lead - Pending DC • Lead - Pending Decision • HOT LEAD • WARM LEAD • Lead - Won • Lead - Lost • DEAD LEAD

## Checks Gail runs
1. **Pending DC audit**: Status = Lead - Pending DC with a past `Discovery Call Booked` date. For each lead, check:
   - Fathom: list meetings by date.
   - Gmail: proposal, pricing, deposit, reschedule. JustCall summaries also land in Gmail.
   - Google Calendar: did they rebook?
   - HubSpot: deal stage.

   Return per lead: call held? | proposal? | last contact | recommended Status + Lost Reason | confidence.
2. **Deposit paid, not Won**: records with `VA Deposit Date` set and Status ≠ Lead - Won. List them, confirm, then set to Won.
3. **"Not recorded" source**: `Original Source` is empty. Map from `Aquisition` where possible:
   - "Linh's Personal Contact" → Referral (Linh)
   - "BDM" → BDM
   - "Referral Scott" → Scott Referral
   - "Discovery Call Form" → look up the original source in HubSpot.

   List what can't be resolved.
4. **90-day quiet → Lost**: Consultant = Gail, still open, no deposit, no activity and no Gmail contact for 90+ days.
5. **Data issues to flag**:
   - duplicates
   - test bookings
   - outcome vs status mismatches (e.g. Qualified but still Pending DC; deposit but Lost)
   - proposal date before DC date
   - email typos
   - wrong source

## Rules for the recommended status
- Quiet recent leads → DEAD LEAD.
- Declined with a reason → Lead - Lost.
- Spam → DEAD LEAD.
- Old rebooked duplicates → Lost with "DC Rescheduled".
- Lost Reason values:
  - DC Rescheduled
  - No show to DC. No response to emails
  - No response.
  - Not ready to hire.
  - No longer interested.
  - Found an alternative solution
  - Decided to go on a different direction/path.
  - Only looking for a few hours per month
  - Hiring VA On hold
  - Unqualified
  - VA looking for a job

## Doing the updates
Fields: Status, Lost Reason, Notes / Status (start with the date, e.g. "10/28 - …"), date:Proposal Sent, Email.
If someone else has changed a record since you checked, leave it and ask.
If the Notion SQL allowance runs out, page the view and tell Gail the final check is pending.
Afterwards, offer to refresh the Data Health panel on the Sales dashboard.
