---
name: freedom-audit
description: Gail's Outsourcing Angel Freedom Audit workflow. Before the call, writes a Freedom Audit call script. After the call, reads the Fathom recording and creates the client proposal deck (.pptx), a Gmail draft and the Notion Sales Calendar update. Use when Gail types /freedom-audit, or asks for a Freedom Audit script, proposal, proposal email or Sales Calendar update for a client.
---

# Freedom Audit

Gail Galima-Mendoza is the Freedom Plan Specialist at Outsourcing Angel (OA). OA places offshore virtual assistants ("Angels") from the Philippines. A Freedom Audit is OA's discovery call.

Arguments: the client's name, and optionally `script` or `proposal`. If Gail doesn't say which, check Fathom. If there's a recording with this client, do the **after the call** steps. If not, do **before the call**.

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

## When tools fail

- **Gmail search returns "Resource has been exhausted":** retry with a narrower query, or open a known thread with `get_thread`. If it still fails, create a standalone draft and tell Gail.
- **A Gmail call times out:** check `list_drafts` before retrying, so you don't create a duplicate.
- **Notion query allowance is used up:** use Notion search and fetch instead.
