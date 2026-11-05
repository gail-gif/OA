---
name: post-audit
description: Run after EVERY Freedom Audit call. Reads the Fathom recording and prepares the complete GoHighLevel (GHL) update - every opportunity and contact field, the stage move, the full Post-Freedom Audit Notes for the Notes section, the P.A.I.N. score and the follow-up tasks - in copy-paste order, then updates the Notion Sales Calendar card and the referral tracker. Use when the user says "post audit", "update GHL after my call", "GHL notes for <client>", "I just finished a Freedom Audit with <client>", or types /post-audit.
---

# Post-audit: GHL update after every Freedom Audit

Read the `oa-basics` skill first. This follows Stage 1–2 of the **Sales Administration & Client Handoff SOP** (Notion, Sales Home).

**GHL connection.** GHL is not connected to Claude yet.
- **Not connected (today):** produce a paste-ready **GHL Update Pack** in exactly the order the fields appear in GHL, so the user can copy one block at a time.
- **Connected later:** if a GHL / HighLevel connector appears in your tools, show the pack first, then write it into GHL only after the user says "yes, update GHL".

Never invent anything. If something wasn't said on the call, write **"Not discussed"** and list it under *To confirm*.

## 1. Find the call
- Fathom: `list_meetings` for the last 7 days, matching the client name. You can also use `search_meetings` by first name with `recorded_by: "anyone"`. If the user gives a link, use `get_recording_by_url`.
- Read the **full transcript** with `get_meeting_transcript`, not only the summary.
- Also check:
  - the Notion Sales Calendar card (Original Source, Aquisition, email)
  - the booking email or Calendly details
  - any JD they sent
  - for Scott leads, the `Scott's Leads` sheet row
- Fix names Fathom garbles: "Elsewhere City Agile" = Outsourcing Angel; "Lynn" = Ms Linh.

## 2. Build the GHL Update Pack

### A. Opportunity (Sales → Opportunities → open the lead)
| GHL field | What to put |
|---|---|
| Opportunity name | `<Client Name>_<PT/FT> <Role type>_<Service Offering> (<discount note or "no discount">)`, e.g. `May Ly_PT Specialist_Angel Accelerate (no discount)` |
| Pipeline | OA Client |
| Stage | **Proposal Sent** once the proposal goes out. If it hasn't gone yet, leave the stage as is and list "move to Proposal Sent" as a to-do. |
| Freedom Audit Outcome | Qualified / Unqualified / 2nd call needed / Unable to provide service (the call outcome now lives in this field, not a stage) |
| Opportunity value | Estimated monthly total from offer.md maths (fee + hours × rate), in the client's currency |
| Service Offering | Angel Essential / Angel Managed / Angel Accelerate / Angel Growth / Fractional, whatever was offered |
| Deal Type | e.g. PT ADV, FT ADV, PT Specialist, FT Specialist, PT Tech |
| Primary Pain Point | e.g. Hiring Challenge, Founder Overload, Marketing Execution, Admin Overload. Use the client's main pain. |
| Original Source | Organic / Paid Social / BDM / Referral (Ms Linh) / Scott Referral (X100) / Client Referral / AI Mapping / Chirp AI… Never leave it blank. |
| Proposal Sent date | Today, if sent; otherwise blank |
| Owner | The consultant (from oa-basics Your details) |

### B. Contact
Fill every field, and mark any that are unknown:
- Name
- Email
- Phone
- Company
- Company Size
- Industry
- Country / Time zone
- Website (if known)

### C. Note: "Freedom Audit Summary" (paste into the Notes section)
Use the official **POST-DISCOVERY / FREEDOM AUDIT NOTES** structure, in bullets only:
1. **Call Details:** client name, company, date, sales rep, Fathom link
2. **Business Overview:** what they do, main offer(s), who they serve, stage
3. **Current Setup:** team and roles, daily operations, tools, founder involvement. **VA experience:** worked with a VA before (Yes/No), hired directly or via agency, what worked, what didn't.
4. **What's Currently Working**
5. **Bottlenecks & Pain Points**
6. **Time & Capacity Insight:** where their time goes, what drains them, what they want off their plate
7. **Initial Freedom Framework Signals:** Focus, Roles, Execution, Efficiency, Data. Only what was said.
8. **Goals & Intent:** their own words where possible
9. **Opportunity Signals:** the likely role(s) and quick wins
10. **Readiness Snapshot:** awareness, openness to outsourcing, urgency (Low/Medium/High)
11. **Alignment Call Notes:** what to explore, questions to clarify, what to design in the Freedom Plan
12. **Internal Sales Notes:** communication style, personality, motivations, concerns

Then add, under the note:
- **P.A.I.N. Score:** Problem, Aligned, Investment, Now, each 0–2, with a total out of 8 and one line on why each.
- **Offer discussed:** package, fee, hourly rate range, estimated total, currency, any discount, deposit ($500 per role), 3-month minimum. Flag any figure that doesn't match offer.md.
- **Promises made:** e.g. sample profile, proposal by <date>, answers to questions.
- **Next step:** the agreed next step and date.

Keep it concise but complete. Write "Not discussed" for any gaps.

### D. Tasks (in GHL, assigned to the owner)
- 2-Day follow-up: <date>
- 5-Day follow-up: <date>
- Final follow-up: <date>

Count from the date the proposal is sent, skip weekends, and show the dates.

### E. Stage checklist
- [ ] Contact fields updated
- [ ] Opportunity fields updated
- [ ] Freedom Audit Outcome set
- [ ] Note pasted
- [ ] Tasks created
- [ ] Stage moved to Proposal Sent (after the proposal is sent)

## 3. Update the other systems (same SOP stage)
- **Notion Sales Calendar card:** use the `sales-calendar-notes` skill. Set Discovery Call Outcome, Status (Lead - Pending Decision if qualified), Proposal code, Industry, Company Size, Original Source and a dated Notes / Status line, and paste the same notes into the page body. Ask before writing.
- **Referral tracker:**
  - **Scott lead:** add a dated line to the `Scott's Leads` sheet (see `scott-referrals`).
  - **Ms Linh's lead:** update Ms Linh's Notion board.
- **Proposal not done yet:** offer `/freedom-audit` (proposal deck + email).

## 4. Output format (what the user sees)
1. A one-line summary: client, call date, outcome, P.A.I.N. total.
2. **GHL Update Pack**, blocks A to E, each in its own copy-ready code block. Field name, then a colon, then the value, one field per line.
3. **To confirm:** every "Not discussed" field and any price mismatch.
4. **Next actions:** proposal, Notion update, tracker update and follow-up dates.

Keep the whole pack on one screen per block, so the user can copy each block straight into GHL.

## Doing this after every call
- Run it right after each Freedom Audit: `/post-audit <client name>`.
- For several calls in a day: `/post-audit today` finds every Freedom Audit recorded today and makes one pack per client.
- A daily scheduled check can be set up later, but it needs the Fathom, Notion and Gmail connectors attached to the scheduled task. Only set it up if the user asks.
