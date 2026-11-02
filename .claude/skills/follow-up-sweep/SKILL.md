---
name: follow-up-sweep
description: Find everyone who hasn't replied (to Freedom Audit invites, proposals, reactivation blasts) in a period and create short in-thread follow-up drafts, or triage the inbox for emails Gail hasn't answered. Use when Gail says "follow up everyone who didn't reply last week/this month", "who hasn't replied", "any emails not replied to", or "list proposals sent this week".
---

# Follow-up sweep and inbox triage

Read `.claude/skills/oa-basics/SKILL.md` first.

## A. "Follow up everyone who didn't reply" (period given by Gail)
1. Search Gmail **sent** in the period. Keep threads where **the last message is Gail's** and nobody has replied.
2. Exclude: anyone followed up in the last few days, anyone who said no or hired elsewhere, current/former clients, bounces, automated mail, and anyone with an existing draft.
3. Group by stage: Freedom Audit invite • Proposal sent • "Things have changed" blast • "It's been a while" • Replied then went quiet.
4. Write a **short nudge** for each, in-thread, tailored to the stage. Include the booking link where it fits.
5. More than about 20 drafts: write the list to a JSON file and use subagents in batches. Check `list_drafts` after any timeout.
6. Report: how many threads checked, drafts made per group, who was skipped and why.

## B. "Who hasn't replied?" (list only, no drafts)
Use the Sales Calendar plus Gmail. Group:
- A = proposal sent, never replied
- B = replied, then went quiet
- D = said no / hired elsewhere / is a client (don't chase)
- E = no proposal yet
Give names, company, last contact date and suggested next step. Gail then picks who to email.

## C. "Any emails not replied to?"
Inbox for the last 3 days where the last message is **not** from Gail and there's no draft. Leave out automated mail. Group into "worth replying properly" and "check back later".

## D. "List the proposals sent this week"
From Gmail subjects "Outsourcing Angel Partnership with …" and the Sales Calendar `Proposal Sent` date. Offer follow-ups for each (except anyone she excludes).

## E. "Proposal non-repliers since <month>"
Sales Calendar records with a proposal and no deposit, cross-checked in Gmail. For big ranges (100+), split by month across subagents. Draft the short "new flexible packages / founder freedom" email only if Gail asks.
