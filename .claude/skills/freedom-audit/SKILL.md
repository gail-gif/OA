---
name: freedom-audit
description: Gail's Outsourcing Angel Freedom Audit and Alignment Call workflow. Before the Freedom Audit, writes the call script. After it, reads the Fathom recording and creates the proposal deck (.pptx), a Gmail draft and the Notion Sales Calendar update. Once the client pays the deposit, writes the Alignment Call script, the pre-call email and the post-call recap email. Use when Gail types /freedom-audit, or asks for a Freedom Audit or Alignment Call script, proposal, proposal email, alignment email or Sales Calendar update for a client.
---

# Freedom Audit and Alignment Call

Gail Galima-Mendoza is the Freedom Plan Specialist at Outsourcing Angel (OA). OA places offshore virtual assistants ("Angels") from the Philippines.
- The **Freedom Audit** is OA's discovery call. It ends with a proposal.
- The **Alignment Call** comes after the client pays the $500 Freedom Plan deposit. It collects everything needed to build their Freedom Plan and brief Recruitment.

The journey runs: Freedom Audit → proposal → deposit → **Alignment Call** → Freedom Plan + candidate profiles (1–2 weeks) → presentation / interviews.

Arguments: the client's name, and optionally `script`, `proposal` or `alignment`. If Gail doesn't say which, work it out:
- No Fathom recording with this client: **before the Freedom Audit**.
- A Freedom Audit recording but no deposit yet: **after the Freedom Audit**.
- Deposit paid (VA Deposit Date on the Notion card, or Gail says so), or Gail mentions alignment: **Alignment Call** (see the section near the end).

Read `reference/offer.md` first, every time. It holds the packages, prices, terms, deposit links and the hours math. Never invent prices, policies or terms. Anything not in `offer.md` or the call goes in as a yellow `[CONFIRM: ...]` placeholder, and you list those for Gail.

## Before the call: Freedom Audit script

1. **Gather context:**
   - the client's job description or notes from Gail
   - their Notion Sales Calendar card: search Notion for the client's name, under Sales Home / Sales Calendar
   - past emails with them in Gmail
   - any earlier calls in Fathom
   - Gail's current call script: Google Doc "FREEDOM AUDIT CALL STRUCTURE (NEW VERSION)"
2. **Create the script as a Claude Doc**, titled "Freedom Audit Script — <Client> (<Company>)". Sections:
   1. **Pre-call cheat sheet:** what we know vs what to confirm (table), signals to listen for, red flags, the package Gail wants to lead with, and checks to do before the call.
   2. **Opening, frame control and early qualification:** use scripted quotes.
   3. **Discovery:** why now, the business snapshot, who does the work today, pain and impact, past attempts. Every answer gets a "go one level deeper" follow-up.
   4. **Role deep-dive:** priorities, tools, volume, the hours for each area, and the role's open questions.
   5. **Budget,** then recap, success definition, pre-close question and Freedom Plan positioning.
   6. **Package pitch and pricing** from `offer.md`.
   7. **Close, likely objections (table) and the P.A.I.N. score** (Problem, Aligned, Investment, Now, each out of 2).
3. **Follow Gail's instructions on the package.** If she says to lead with Angel Essential or Angel Managed, recommend only that one. If the role mixes very different skills, such as creative and customer service, add a one-person vs two-person decision table and questions to size the hours.
4. Write in plain, warm language. Scripted lines go in quote blocks.

## After the call: proposal, email and Sales Calendar

### 1. Read the call

Find the meeting with Fathom `list_meetings` and read the full transcript with `get_meeting_transcript`. Capture:
- the business and the role, in the client's own words
- the tasks and hours (20 hours a week minimum)
- the currency, packages and prices Gail quoted, including any discount
- what Gail promised to send, such as a sample profile
- objections and next steps

### 2. Build the proposal deck

1. Copy `reference/example_fields.json` to the scratchpad and rewrite every value for this client.
   - `heard`: 4 cards of what we heard
   - `steps`: 6 role steps
   - `cards`: 3 role facts
   - `packages`, `pricing`, `freedom`, `next`: the offer and next steps
2. Keep the lengths close to the example. The template boxes are fixed size:
   - step descriptions: about 45–65 characters
   - heard bodies: about 100–130 characters
3. Pricing slide:
   - If Gail offered two packages, use the two-package layout from the example: `col1` is Essential, `col2` is Managed, `col3` is the Angel's rate.
   - If she offered one package, use `col1` = agency fee, `col2` = hourly rate, `col3` = estimated total, and change the slide 4 titles to match.
   - Use the client's currency and deposit link from `offer.md`, and put the currency in `pricing.footnote`.
4. Build it:
   ```
   python3 .claude/skills/freedom-audit/scripts/build_proposal.py <fields.json> <Client_Name_Proposal.pptx>
   ```
5. Run the pptx skill's `validate.py`. Render it to images with the pptx skill and look at every slide for text overflowing its box or awkward wrapping. Fix the JSON and rebuild if needed.
6. Save the deck in the repo root as `<Client>_Proposal.pptx`, then commit and push it to the working branch. Send it to Gail with SendUserFile.

### 3. Draft the email (never send)

- **Subject:** "Outsourcing Angel Partnership with <Client name>"
- **Recipient:** the client's email from the Sales Calendar card, Calendly or Gmail. If you can't find it, leave the recipient blank and tell Gail.
- **Length:** keep it short, like Gail's KayPark email. Include:
  - a thank-you
  - that the proposal is attached
  - the role in one line or a few bullets
  - each package's fee and estimated total
  - the right deposit link
  - a sample profile placeholder (yellow `[Insert sample ... profile link here]`) if Gail promised one
  - the offer to answer questions
  - the sign-off: "Warm regards, Gail Galima-Mendoza, Freedom Plan Specialist | Outsourcing Angel"
- **Replies:** reply inside the client's existing thread using `replyToMessageId`, and keep the same cc.
- **Attachments:** the Gmail tool can't attach the .pptx. Always remind Gail to attach the proposal and any sample profile.

### 4. Update the Notion Sales Calendar card

Fetch the client's card (data source `collection://d85cdda2-4477-4ac4-8991-9ca18d4451e4`) first. Then update:
- **Status:** Lead - Pending Decision
- **Discovery Call Outcome:** Connected & Qualified, or another value that matches the call
- **Proposal:** for example FT ADV, PT ADV, PT Specialist or FT Specialist
- **Industry, Country, Original Source**
- **Lead Overview:** a short summary of the business, the role and the package
- **Notes / Status:** start with the date, e.g. "10/28 - Freedom Audit done..."

Leave "Proposal Sent" and "Follow-Up Timeline" blank until Gail sends the email.

Add page notes in Gail's format:
1. Call Details (with the Fathom link)
2. Business Overview
3. Current Setup
4. Needs
5. Key Insights
6. Proposal Presented
7. Readiness Snapshot
8. Next Steps (as a checklist)

### 5. Report back to Gail

Report briefly:
- links to the deck, draft and card
- every `[CONFIRM]` placeholder
- any gap between the prices she said on the call and the math in `offer.md`
- what she still needs to attach or add before sending

## Alignment Call: script, pre-call email and recap email

Use this once the client has paid the deposit. The Alignment Call has one job: get everything the Freedom Plan and Recruitment need, in the client's own words. Offer.md says the Freedom Plan's KPIs, success metrics, do's and don'ts, skills checklist and training plan are "built in the alignment session", so the script must cover all of them.

### 1. Gather context
- The Freedom Audit Fathom transcript (read it in full), the proposal deck, and the proposal email thread.
- The JD/PD if they sent one (Gmail attachments or Google Drive).
- The Notion Sales Calendar card: package, deposit date, notes.
- The Alignment Call date and time in Google Calendar.
- If Gail has an alignment call structure doc, search Google Drive for "Alignment" and follow it.
- Write down what is **already known** so the client isn't asked the same thing twice.

### 2. Alignment Call script (Claude Doc)
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

### 3. Pre-call email (draft only)
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

### 4. After the call
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
3. **Notion Sales Calendar card:**
   - Add a dated Notes / Status line, e.g. "11/03 - Alignment call done, profiles due <date>".
   - Add an "Alignment Call" section to the page notes: Fathom link, agreed role, hours, start date, ideal Angel, KPIs, next steps checklist.
4. **Recruitment brief (offer only):** a short paste-ready brief for Charyl covering role, hours and time zone, must-haves, deal-breakers, rate range and the date profiles are due.
5. **Hand off to `/freedom-plan`**, which builds the plan from the capture sheet.

### 5. Report back to Gail
Report briefly:
- links to the script doc and the drafts
- every `[CONFIRM]` item
- what she needs to attach or add
- the profile due date

## When tools fail

- **Gmail search returns "Resource has been exhausted":** retry with a narrower query, or open a known thread with `get_thread`. If it still fails, create a standalone draft and tell Gail.
- **A Gmail call times out:** check `list_drafts` before retrying, so you don't create a duplicate.
- **Notion query allowance is used up:** use Notion search and fetch instead.
