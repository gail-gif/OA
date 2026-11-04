# START HERE: OA Sales Claude Skills (23)

These are the 23 sales skills Gail built with Claude. Anyone at OA can install them on their own Claude and run them. Each skill is one **.zip** file in the **skill-zips** folder next to this guide.

## Before you start (5 minutes)

1. **Connect your tools** in Claude (Settings → Connectors): **Gmail, Google Calendar, Google Drive, Notion, HubSpot, Fathom**. Skills only see what *your* accounts can see.
2. **Turn on code execution**: Settings → Capabilities → "Code execution and file creation". Skills don't work without it.

## Install: Claude app (claude.ai, desktop or Cowork)

1. Download the zips you want from **skill-zips**. Always include **oa-basics.zip**, because every other skill reads it first.
2. In Claude go to **Settings → Capabilities → Skills → Upload skill**, then pick a zip. Repeat for each one. Don't unzip them first.
3. Make the skills yours (do this once, see "Personalise oa-basics" below).

## Install: Claude Code (terminal)

1. Download the zips into one folder.
2. Unzip them into your personal skills folder:

```
mkdir -p ~/.claude/skills && for f in *.zip; do unzip -o "$f" -d ~/.claude/skills; done
```

3. Restart Claude Code. Type `/` to see the skills.

## Personalise oa-basics (important)

The skills were written for Gail. The **Your details** block at the top of **oa-basics** tells every skill to use *your* name, title, sign-off, booking link and time zone instead.

- **Easiest:** after installing, ask Claude: *"Open my oa-basics skill and fill in Your details: name …, title …, email …, booking link …, time zone …. Then give me the updated oa-basics zip."* Re-upload that zip (Claude app) or let it edit the file in place (Claude Code).
- If you skip this, Claude asks for your details the first time it needs them.
- Never send emails with Gail's Calendly link or sign-off. oa-basics tells Claude not to.

## How to run a skill

Type the slash command (e.g. `/email-reply`) or just ask in plain words, e.g. "draft a reply to Sarah's email", "prep a Freedom Audit script for Henry". Claude picks the right skill.
Golden rule built in: **everything is a Gmail draft, nothing is sent** unless you clearly say "send it".

## The 23 skills

**Email & communication**
1. **email-reply** (`/email-reply`): drafts a reply or follow-up inside the existing thread, same CCs, warm tone.
2. **follow-up-sweep** (`/follow-up-sweep`): finds everyone who hasn't replied to an invite, proposal or campaign and drafts a nudge for each; lists emails you haven't answered.
3. **candidate-profiles-email** (`/candidate-profiles-email`): sends clients their shortlisted Angel profiles and Freedom Plan in a warm email.
4. **message-to-linh** (`/message-to-linh`): short WhatsApp-style updates and review requests to Ms Linh and Ms Wendy.

**Lead generation & reactivation**
5. **lost-leads** (`/lost-leads`): pulls old lost deals from HubSpot into the Lost Leads sheet and drafts an "It's been a while" email for each, 30 per batch.
6. **bdm-leads** (`/bdm-leads`): fills the BDM tab with HubSpot lead details and drafts a re-engagement email for each, 30 rows per batch.
7. **lead-gen-diagnosis** (`/lead-gen-diagnosis`): marketing and SEO review of why inbound leads are low, with a 90-day plan.

**Client journey** (Freedom Audit → proposal → deposit → Alignment Call → Freedom Plan → candidates)
8. **freedom-audit** (`/freedom-audit`): call script before; after the call, reads Fathom and builds the proposal deck, proposal email and Notion update.
9. **alignment-call** (`/alignment-call`): call script with Freedom Plan checklist, pre-call email, recap email, Notion update, recruitment brief for Charyl.
10. **call-analysis** (`/call-analysis`): summary, client needs, coaching scorecard, objections, P.A.I.N. score, pricing accuracy check, promises and next steps.
11. **freedom-plan** (`/freedom-plan`): the client's 30-slide Freedom Plan (Part A recommendation, Part B playbook), optional interactive version.
12. **ghl-notes** (`/ghl-notes`): ready-to-paste GHL opportunity and "Freedom Audit Summary" note.
13. **meeting-booking** (`/meeting-booking`): books calls with a Google Meet link, converts US/AU/PH time zones, sets reminders.

**Reporting, data & dashboard**
14. **weekly-sales-report** (`/weekly-sales-report`): weekly and month-to-date Sales Update for Ms Linh, from Notion and Gmail.
15. **weekly-huddle** (`/weekly-huddle`): fills your Monday Huddle row in Notion.
16. **sales-dashboard** (`/sales-dashboard`): looks after the OA Sales Pulse dashboard: explains numbers, changes panels, runs a walkthrough.
17. **sales-calendar-notes** (`/sales-calendar-notes`): writes the notes on a client's Notion Sales Calendar card at every stage.
18. **sales-numbers** (`/sales-numbers`): the 15 sales metrics and quarter-on-quarter comparisons.
19. **sales-calendar-cleanup** (`/sales-calendar-cleanup`): finds and fixes Notion data problems (stale leads, deposits not marked Won, missing sources, duplicates).

**Strategy & growth**
20. **quarterly-rocks** (`/quarterly-rocks`): Rock recap deck, Rock reports in Notion, 6-minute presenter script, next quarter's Rocks.
21. **promo-playbook** (`/promo-playbook`): seasonal promotions as sales pitches (pitch, objection, close) plus the email to Marketing.
22. **fractional-partner** (`/fractional-partner`): pricing slides, sales framework, commission maths and emails for the Fractional AI & Marketing partner offer.

**Foundation**
23. **oa-basics** (`/oa-basics`): rules, team contacts, links, pricing and quick maths (AUD→PHP, time zones). Every other skill reads this first. Install it first.

## Good to know

- **Access:** the skills point to OA's Notion Sales Calendar, Weekly Huddle and Rocks databases and the "Lost Leads Data" sheet. You need access to those (ask Gail) or the skill will say it can't find them.
- **Sales Pulse dashboard** (sales-dashboard, sales-numbers): anyone with the link can view it, but only Gail can change it. Others can explain numbers but not edit panels.
- **Prices** live in `freedom-audit` → `reference/offer.md`. Update that one file when pricing changes, then share the new zip.
- **Freedom Plan template:** freedom-plan matches the design of a previous Freedom Plan deck if you have one (e.g. in Drive); otherwise it follows built-in design notes.
- **Updating a skill:** upload the new zip with the same name to replace the old one.
- **Problems?** Check your connectors first, then ask Gail.
