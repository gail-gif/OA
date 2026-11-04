---
name: freedom-plan
description: Create a client's Freedom Plan (30-slide PPTX in the Yasmine v2 "living document" design, plus optional HTML and interactive versions) from their Fathom Freedom Audit and Alignment calls, JD and Notion card, then draft the email that sends it. Use when Gail asks to create, update or make an interactive/HTML version of a Freedom Plan.
---

# Freedom Plan

Read the `oa-basics` skill and `reference/offer.md` in the `freedom-audit` skill first.
Design: dark cover, green accents, Cambria headings, Calibri body. If the user has a previous Freedom Plan deck (e.g. in their Drive or project folder), open it and match its design; otherwise build to these design notes. **Do one client at a time.**

## 1. Gather
- **Start with the Alignment Call capture sheet** from `/freedom-audit` (Alignment Call section). If there isn't one, offer to make the Alignment Call script first.
- Fathom: the client's Freedom Audit **and** Alignment call. Read the full transcripts, not just the summary. Search by first name with `recorded_by: "anyone"`; find_person can miss people. Fix names Fathom garbles ("Elsewhere City Agile" = Outsourcing Angel, "Lynn" = Linh).
- The JD (Google Drive or pasted), the Notion Sales Calendar / recruitment card, and any emailed handbooks or schedules.

## 2. Build: Part A, "Our Recommendation" (read once, to decide)
Cover ("Prepared for <Name> | <Company>") • How to use your plan • Key Observations (what we heard, using their own words) • Leverage Gap Analysis (today vs with an Angel) • Your Freedom Stage (1 Task Delegator → 5 Freedom, with today and target) • The Role We Recommend (about 6 areas) • Securing the Right Hire • Candidate Profiles (**only if Gail asks**) • Investment Overview • Next Steps.

## 3. Build: Part B, "Your Freedom Playbook" (kept for the whole relationship)
First-Time Starter Pack (4 slides: Get Ready for Day 1 checklist, How to Delegate with the 5-part brief, Your First Month, Working Well Together) • 12-Month Journey (Day 30 / Day 90 / Month 6 / Month 12) • First 90 Days • Hours, Timezone & Training • Working with <Client> • Freedom Scorecard • Skills & Readiness Checklist • KPIs • Monthly KPI Check-In • Delegation List (Now and Next) • SOP Library • Wins Log • CAX Framework • How OA Supports You • The Goal.
Add client-specific slides when needed (e.g. "Payroll & Sensitive Information": Keeper, view-only bank access, NDA, indemnity).

## 4. Rules
- Never make it feel rushed. The plan is a living document, not a sales sheet.
- Angels are experienced; the client teaches their own processes only.
- Pricing: total = fee + hours × rate (20 hrs/wk = 86.67 hrs/month; FT = 173.3). Compare against what was quoted on the call and **flag any gap**.
- Mark unknowns "To confirm" (hire name, baselines, sensitive wording, "female preferred").
- Proofread twice. No other client's details anywhere.

## 5. Deliver
- PPTX: render previews (LibreOffice → PDF → JPG) and show them in chat. Save as `<First>_<Last>_Freedom_Plan.pptx` where the user can open it (commit it if you're working in a git repo). Bump `_v2` etc. when editing so Gail opens the new file.
- On request: HTML presentation (F = full screen, arrows, N = notes) and/or an **interactive** edition where the client can type notes, tick boxes, rate items and leave feedback (Goal, What we heard, Leverage gap, Freedom Stage, feedback page). Typed entries save and can be downloaded.
- Email: use the `candidate-profiles-email` skill. Subject "Your Freedom Plan for <Company>". Draft only; remind Gail to attach.
