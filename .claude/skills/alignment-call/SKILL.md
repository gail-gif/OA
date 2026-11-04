---
name: alignment-call
description: Gail's Alignment Call workflow, used after a client pays the $500 Freedom Plan deposit. Writes the Alignment Call script (with a Freedom Plan capture sheet), the pre-call "Getting ready" email, then after the call reads Fathom and drafts the recap email, updates the Notion Sales Calendar card and gives a Recruitment brief for Charyl. Use when Gail types /alignment-call, or asks for an alignment script, alignment email, recap after an alignment call, or a recruitment brief.
---

# Alignment Call

Read the `oa-basics` skill and `reference/offer.md` in the `freedom-audit` skill first.

The journey runs: Freedom Audit → proposal → deposit → **Alignment Call** → Freedom Plan + candidate profiles (1–2 weeks) → presentation / interviews.

Arguments: the client's name, and optionally `script`, `email` (pre-call) or `recap` (after the call). If Gail doesn't say which, check Fathom. If there's no Alignment Call recording yet, do steps 1–3. If there is one, do step 4.


Use this once the client has paid the deposit. The Alignment Call has one job: get everything the Freedom Plan and Recruitment need, in the client's own words. Offer.md says the Freedom Plan's KPIs, success metrics, do's and don'ts, skills checklist and training plan are "built in the alignment session", so the script must cover all of them.

## 1. Gather context
- The Freedom Audit Fathom transcript (read it in full), the proposal deck, and the proposal email thread.
- The JD/PD if they sent one (Gmail attachments or Google Drive).
- The Notion Sales Calendar card: package, deposit date, notes.
- The Alignment Call date and time in Google Calendar.
- If Gail has an alignment call structure doc, search Google Drive for "Alignment" and follow it.
- Write down what is **already known** so the client isn't asked the same thing twice.

## 2. Alignment Call script (Claude Doc)
Title: "Alignment Call Script — <Client> (<Company>)". Warm, plain language, with scripted lines in quote blocks. Sections:

1. **Pre-call cheat sheet**
   - What we already know from the Freedom Audit: business, role, hours, package, rate range.
   - What we still need: a table of gaps.
   - Anything sensitive to handle carefully (payroll, banking, client data).
   - Promises we made: sample profile, answers to emailed questions.
2. **Opening (2 min)**
   - Thank them for the deposit and the trust.
   - Set the goal: "Today is about you and how you work, so we can build your Freedom Plan and find the right Angel."
   - Confirm how long they have.
3. **The goal and Freedom Stage**
   - What freedom looks like for them in 90 days and 12 months.
   - The baseline today: hours a week on admin, early starts or late nights, what they're missing out on.
   - These numbers become the Freedom Scorecard "Start" column.
4. **Role and tasks**
   - Walk through the top tasks to hand over and rank them.
   - For each task: how often, how long, which tools, and what "done well" looks like.
   - Split them into Day 1 tasks, Month 1 tasks and later tasks. This becomes the Delegation List (Now and Next).
5. **Ideal Angel**
   - Must-have skills and experience, nice-to-haves, personality and communication style.
   - Deal-breakers.
   - Confirm any preference stated on the Freedom Audit (e.g. female preferred) and flag it for Recruitment.
6. **Hours, time zone and communication**
   - Start date, hours a week and working hours (their time and PHT).
   - Comms tool: WhatsApp / Slack / Google Chat / Teams.
   - Email first or phone? How they like updates; end-of-day report format.
   - Who else the Angel will work with.
7. **Tools and access (Day 1 setup checklist)**
   - Every system, the permission level, and who sets it up.
   - Sensitive data: Keeper or password manager, view-only bank access, NDA.
8. **Success metrics and KPIs**
   - 3–5 measurable KPIs, each with a "how will you check it?" question.
   - What a great first 30 and 90 days look like.
9. **Do's and don'ts, training plan**
   - How they like things done, pet hates, brand voice.
   - Existing SOPs, Looms or examples.
   - Who teaches their process, and how much time they can give in weeks 1–2.
   - Remind them: Angels are experienced, so the client only teaches their own process, not the skills.
10. **Recruitment next steps and close**
    - Profiles in 1–2 weeks (3–4 candidates), then interviews.
    - Agree a date for the Freedom Plan presentation / profile review and book it on the call.
    - Recap the 3 biggest points back to them.
    - Ask: "Is there anything we haven't covered that would make this a perfect match?"

End the script with a **Freedom Plan capture sheet**: one blank line per Freedom Plan section, so Gail can tick off what she has. The sections are: Goal, Key Observations, Leverage Gap, Freedom Stage, Role areas, Ideal hire, Investment, Hours and time zone, Working with <Client>, KPIs, Scorecard baselines, Skills checklist, Delegation list, Setup checklist, Training plan.

## 3. Pre-call email (draft only)
Send it after the deposit or when the call is booked. If there's an existing thread with the client, reply in it and keep the CC.
- **Subject:** "Getting ready for your Alignment Call – <Company>"
- **Content:**
  - Thank them for the deposit (no re-introduction).
  - Confirm the date and time in their time zone, plus the Google Meet link.
  - One line on the purpose: to build their Freedom Plan and brief Recruitment.
  - A short "to make the most of our time" list:
    - the JD/PD if they have one
    - their top tasks to hand over
    - the tools the Angel will use
    - examples of work done well
    - preferred hours and communication tool
    - any sensitive information we should plan for
  - Optional: 3–4 quick questions on KPIs, success metrics and training, like Gail's KayPark email "Your Freedom Plan: a few quick questions + presentation".
  - Close: "No need to have everything ready – we'll work through it together." Then "Warm regards," and Gail's sign-off.

## 4. After the call
1. **Read the Fathom transcript** of the Alignment Call. Fill the capture sheet and list any gaps as `[CONFIRM: ...]`.
2. **Recap email (draft only)**, replying in the same thread:
   - **Subject:** "Thank you – next steps for your Freedom Plan" (or keep the thread subject).
   - Start warmly: "It was lovely chatting with you again!" Mention one specific thing about their business.
   - 3–5 bullets of what we agreed, in their words: role focus, hours and start date, must-have skills, comms tool.
   - Next steps:
     - Freedom Plan and 3–4 candidate profiles within 1–2 weeks
     - the presentation or interview date, if agreed
     - anything they promised to send (JD, access list, SOPs)
   - Close: "Looking forward to hearing your thoughts!" Then "Warm regards," and Gail's sign-off.
3. **Notion Sales Calendar card** (follow `sales-calendar-notes`):
   - Add a dated Notes / Status line, e.g. "11/03 - Alignment call done, profiles due <date>".
   - Add an "Alignment Call" section to the page notes: Fathom link, agreed role, hours, start date, ideal Angel, KPIs, next steps checklist.
4. **Recruitment brief (offer only):** a short paste-ready brief for Charyl covering role, hours and time zone, must-haves, deal-breakers, rate range and the date profiles are due.
5. **Hand off to `/freedom-plan`**, which builds the plan from the capture sheet.

## 5. Report back to Gail
Report briefly:
- links to the script doc and the drafts
- every `[CONFIRM]` item
- what she needs to attach or add
- the profile due date

