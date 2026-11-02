# Gail's Claude Work Log: Skills & Every Task

**Who:** Gail Galima-Mendoza, Freedom Plan Specialist, Outsourcing Angel
**Covers:** 17 Claude sessions, 9 Oct – 2 Nov 2026
**Skills folder:** `.claude/skills/` in this repo. Type `/skill-name` in a session that has this branch, e.g. `/weekly-sales-report`.

## Status labels

| Label | Meaning |
|---|---|
| ✅ DONE | Finished |
| 📝 DRAFT | Saved in Gmail Drafts, **not sent** |
| 📤 SENT | Email actually sent |
| 💬 ANSWERED | Answer or text given in chat only |
| 🟡 PARTIAL | Some of it was done |
| ⛔ BLOCKED | Couldn't be done (tool not connected or permission) |
| ⏳ WAITING ON YOU | Claude asked you a question or needs your decision |
| ✋ STOPPED | You told Claude to stop |

---

## PART 1: Your skills (19)

| # | Skill (type `/name`) | What it does | How often | Status |
|---|---|---|---|---|
| 1 | `/oa-basics` | Your house rules, people, links, pricing pointer, quick maths (AUD→PHP, time zones). Every other skill reads this first. | Always | 🆕 New |
| 2 | `/email-reply` | Reply / follow up one person in the existing thread, in your warm voice. Includes Scott updates. | Dozens a day | 🆕 New |
| 3 | `/follow-up-sweep` | Find everyone who hasn't replied and draft nudges; inbox triage; "proposals sent this week". | Several a week | 🆕 New |
| 4 | `/lost-leads` | HubSpot Closed Lost → "Lost Leads Data" sheet → personalised "It's been a while" drafts (30 a batch). | Almost daily | ✅ Existed, now on this branch |
| 5 | `/bdm-leads` | Fill the BDM tab from HubSpot → re-engagement drafts (30 rows a batch). | Almost daily | ✅ Existed, now on this branch |
| 6 | `/freedom-audit` | Before the call: Freedom Audit script. After the call: proposal deck + email + Notion card. | Every audit | ✅ Existed, now on this branch |
| 7 | `/freedom-plan` | 30-slide Freedom Plan (Yasmine v2 design) + HTML / interactive version + email. | Every alignment call | 🆕 New |
| 8 | `/candidate-profiles-email` | Warm email sending candidate profiles and/or the Freedom Plan after a call. | Every placement | 🆕 New |
| 9 | `/ghl-notes` | Call → Notion card + paste-ready GHL opportunity and "Freedom Audit Summary" note. | Every deal | 🆕 New |
| 10 | `/weekly-sales-report` | Weekly + month-to-date Sales Update to Ms Linh, as a draft in "Sales Report and Updates". | Weekly (Thu/Fri) | 🆕 New |
| 11 | `/weekly-huddle` | Monday Notion Weekly Huddle: Achievements (standing 10), Priorities, Rate & Why, Learning, Challenges, Highlight / Heads up / Help. | Weekly (Mon) | 🆕 New |
| 12 | `/sales-calendar-cleanup` | Notion Sales Calendar hygiene: Pending DC audit, deposit→Won, missing sources, 90-day quiet→Lost. | Monthly | 🆕 New |
| 13 | `/sales-numbers` | Your 15 sales metrics, quarter comparisons, dashboard changes. | As needed | 🆕 New |
| 14 | `/meeting-booking` | Calendar invites with Meet links, time-zone conversion, reminder events. | Several a week | 🆕 New |
| 15 | `/quarterly-rocks` | Rock recap deck, Notion Rock reports, presenter script, next quarter's Rocks. | Quarterly | 🆕 New |
| 16 | `/promo-playbook` | Seasonal promos as sales pitches + email to Marketing. | Seasonal | 🆕 New |
| 17 | `/fractional-partner` | Fractional AI/Marketing partner pricing slides, framework, commission, emails. | As needed | 🆕 New |
| 18 | `/message-to-linh` | Short WhatsApp-style or internal notes to Ms Linh / Ms Wendy. | Weekly | 🆕 New |
| 19 | `/lead-gen-diagnosis` | Marketing/SEO "brain dump": why leads are low + 90-day plan. | As needed | 🆕 New |

---

## PART 2: Things not finished yet / not figured out

Your to-do list from all sessions.

### Tools and setup
1. ⛔ **GoHighLevel (GHL) is not connected.** GHL entries for May Ly and Krystie Cekic were never made, and every GHL note so far was given as copy-paste text. You need a GHL connector.
2. ⛔ **JustCall is not connected.** Claude gave you the setup link `https://mcp.justcall.host/mcp`; add it under claude.ai → Settings → Connectors.
3. ⛔ **Google Chat is not connected.**
4. ⛔ **HubSpot is read-only.** Reports and HubSQL return "Forbidden" and it needs re-authorising.
5. ⛔ **Weekly huddle automation doesn't work.** The scheduled task "Gail weekly huddle achievements" (Fridays) was created without the Calendar and Notion connectors. Add them, or just run `/weekly-huddle` on Mondays.
6. ⏳ **Merge the skills to your main branch.** The draft PR [gail-gif/OA#1](https://github.com/gail-gif/OA/pull/1) (freedom-audit) was never merged. All skills are now together on branch `claude/adoring-ptolemy-0vtovg`; merge it so every new session has them.
7. ⏳ **README for the repo.** Offered 9 Oct, never answered.

### Emails still sitting in Drafts (not sent)
8. 📝 Reply to **Nadine** about the combined end-of-year campaign ($100 discount question for Ms Linh and Ms Wendy). You may want to delete the "fallback" line.
9. 📝 **Weekly sales report 26–30 Oct** to Nadine / Ms Linh / Ms Wendy. MJ Freitas's deposit date is unknown.
10. 📝 **Hank Chu**: when should Grazielle start + payment setup.
11. 📝 **Arun Dhir**: Freedom Audit invite.
12. 📝 **May Ly**: Freedom Plan + candidate profiles. **Attach the Freedom Plan**, and check whether the older draft is still in Drafts.
13. 📝 **May Ly**: proposal email. Deck not attached, and it says "Angel Managed" vs "Angel Accelerate" in GHL; check which.
14. 📝 **Jessica (HCHC)**: stop reminders, Jason will book himself. Also pause Jason's automated sequences.
15. 📝 31 reactivation drafts from 13 Oct ("Still need a hand?") + the template draft.
16. 📝 Hundreds of follow-up / lost-leads / BDM drafts from 14–29 Oct (except the 30 Oct batches, which were sent).
17. ⛔ Reply to **Manni Katopodis** (LDC Strategies): the send was blocked; the referral-partner page link still needs pasting in.
18. 🟡 **Rob Daguiar (High Note)** Tuesday meeting: the invite to Anthony and Doha was blocked; invite them by hand.
19. 📝 Two stray email drafts to Ms Linh (meant to be WhatsApp), which you can delete.

### Decisions waiting on you
20. ⏳ **Stuart Lemalu (Kinstone)**: someone changed him to Lost, but he had a qualified call and a proposal. Confirm his status.
21. ⏳ **20 deposit-paid leads not marked "Lead - Won"** in Notion. You said "I'll do this later". They are Jordan Nuss, Krystie Cekic, May Ly, Tom Warriner, Joel McCharles, Nelson Liu, Rob Lee, Murielle Sassine, Rob Zhang, Dave Hukka, Jacinta Dudley, Anoushka Gungadin, Loretta Giannopoulos, Chris Kempin, Karen Norris, HT Tran, John Otocka, Tony Merritt, Anca Anderson and Christine Tsai.
22. ⏳ **"Not recorded" lead sources**: 21 records with a blank Original Source. 4 are easy fixes (MJ Freitas, Andrew Owen, Andy Henry, Kirsty Tomas); 16 need HubSpot lookups. Claude offered to fix; no answer yet.
23. ⏳ About **400 pre-2025 "Pending DC" records** were not cleaned up.
24. ⏳ **Other Notion fixes flagged:**
    - duplicates (Jenny Treble ×3, Shelley Ingram)
    - Hank Chu, Julia Knight and Leticia Kirkham: deposit paid but status Lost
    - Dayne Seville: qualified but still Pending DC
    - KayPark status still Pending
    - James Bright's source should be Organic
    - Dr Kelishadi's old card to reopen
    - a blank Feb 2025 record
25. ⏳ **Sales Rock 3 (Freedom Plan idea)** was never picked or created in Notion.
26. ⏳ **Rock 1 Q2 report** is a private Notion page; tell Claude where it should go.
27. ⏳ **Refined Rock deck, slides 9–12**, show the older Q3 Rocks, not the final ones (Every client brings a client / Living Freedom Plan / Sales on one screen).
28. ⏳ **Q1 vs Q2 deposit and source comparison** was blocked by the Notion limit.
29. ⏳ **Rob (Fractional) commission:** confirm in writing "$9,000 to client, $7,650 to you". The referral model (10% vs 15%) is undecided, and the framework doc's QA / communication wording may not match the email.
30. ⏳ **Pricing gaps to check:** KayPark (calculated $3.6–4.1k vs $2.5–2.8k quoted), May Ly ($2,240–2,500 vs $1,800–2,300 quoted).
31. ⏳ **Buyout fee** (Hank's questions): unknown.
32. ⏳ **Reactivation email terms:** is the 20 hours *per week*, and is the replacement promise correct?
33. ⏳ **Monday Huddle:** "One Word" is empty on both rows; week-1 Challenges and Learning were never saved; Highlight / Heads up / Help never added to Notion; the last two daily Priorities were never confirmed.
34. ⏳ **15 sales metrics definitions** (9 Oct): Claude asked you to confirm them.
35. ⏳ **Brain dump action plan:** Claude offered a one-page lead-gen plan for the web person. Also check the website forms and tracking (organic leads dropped to almost zero in 2026).
36. ⏳ **Rob + client meeting** (Linh asked you to book it, 13 Oct), presented in a meeting rather than sent. Blue Wealth later said yes; kickoff is Wed 25 Nov.
37. ⏳ **Freedom Plan v2 starter pack:** confirm with CAX and Recruitment before sending to clients.

---

## PART 3: Every task, grouped by skill

Dates are 2026. Session names in *italics*.

### 🧰 SETUP & CONNECTIONS
1. ✅ 9 Oct: Is GitHub installed correctly? Yes, repo gail-gif/OA works. *(GitHub installation verification)*
2. ✅ 9 Oct: Is Notion connected? Two Notion connectors were installed but off; you switched them on. *(Technical connection checks)*
3. ✅ 12 Oct: Hook up Gmail Calendar. You switched it on and it works.
4. 💬 12 Oct: Can I hook up JustCall? Not connected; setup steps given. ⛔ still not connected.
5. 💬 22 Oct: Is Google Chat connected? No.
6. 🟡 18 Oct: Weekly automatic huddle task. Created, but without connectors (see Part 2 #5).
7. ✅ "Meeting with Ms Cha – Claude setup" added to your activities.

### ✉️ EMAIL REPLIES & FOLLOW-UPS → `/email-reply`
*(FOLLOW UP EMAILS – BDM and REACTIVATION, plus other sessions)*
1. 📝 14 Oct: Follow-ups to 9 clients who never replied (Anne Tran, Daniel Lynch / Oxifresh, Stuart / Kinstone…)
2. 📝 14 Oct: James Bright (missed Freedom Audit)
3. 📝 15 Oct: Leslie (Tabar Music)
4. 📝 15 Oct: Brian Waraksa (send early Nov)
5. 📝 15 Oct: Anne Tran (send after 19 Oct)
6. 📝 16 Oct: Arun Dhir, Freedom Audit invite *(Sales Report)*
7. 📝 20 Oct: Juha
8. 📝 20 Oct: Foong-Yue Cheah ("not hiring this FY")
9. 📝 20 Oct: Scott about Juha's reply
10. 📝 20 Oct: Jason Tran (Genvest), sent by mistake, then Jason at HCHC
11. 📝 20 Oct: 2 replies to people who answered "2 – not now" (incl. Mark, Tiling Connect)
12. 📝 20 Oct: Natasha Ankus (Blue Wealth), proposal + Rob's video
13. 💬 20 Oct: Voicemail line
14. 📤 20 Oct: Daniel Lynch, Angel Essential at USD $720 (you sent it)
15. ✅ 20 Oct: "Make it sound wow": light-touch management + free 30-day replacement
16. 📝 20 Oct: Re-did Dan's vanished draft
17. 📝 20 Oct: Caroline (Team Sun Builders), calendar link
18. 📝 21 Oct: Marilyn (Rayment Excavations), intro from you and Ms Linh
19. 📝 21 Oct: Ms Wendy and Ms Linh, confirming the agreement and 15% commission
20. 📤 21 Oct: "For approval: answers to Natasha's questions" to Ms Linh and Rob (later sent)
21. 📤 21 Oct: Henry Young and Jennifer Olivares proposal follow-ups (you sent them)
22. 📝 21 Oct: 8 Freedom Audit invite follow-ups (Gino, Thomas McGwire, Aparna / SIG Education…)
23. 📝 21 Oct: Cameron Cross (not moving forward)
24. 📝 22 Oct: George (Printly)
25. 📝 22 Oct: Larry (KayPark), invoice or autopay
26. 📤 22 Oct: Larry, Client Resource Hub access (sent)
27. 📝 22 Oct: Ralph (CapTap), why declined + flexible packages
28. 📝 22 Oct: Jordan (KayPark), Freedom Plan questions + presentation 4 Nov
29. 📝 22 Oct: Scott, Jordan Nuss paid the deposit
30. 📝 22 Oct: Krystie Cekic, candidates Clio, Angelica, Sundra
31. 📝 22 Oct: Alex Chen, recruitment process + $500 fee + PT/FT question
32. 📝 22 Oct: Jason (HCHC), gentle booking follow-up
33. 📝 22 Oct: Natasha follow-up and answer to her reply
34. 📝 23 Oct: Taniqua
35. 📤 23 Oct: Miguel (Slate NYC) and Lindsay (Teamocracy) (sent)
36. 📝 23 Oct: Ralph, Angel Essential
37. 💬 23 Oct: When did we last follow up James Bright? 22 Oct
38. 📝 23 Oct: Katrina Boyle, Kirsty Tomas (Region Group), Scott's leads
39. 📝 23 Oct: Gino
40. 📝 23 Oct: Kirsty Tomas reply
41. 📝 23 Oct: Scott, Aparna's reply (moved into the Scott thread)
42. 📝 23 Oct: Arun (Body Genesis) and Richard Ferguson
43. 📝 23 Oct: Jennifer and Jordan Smith, with a sample profile link
44. 📝 26 Oct: Melanie Dobson (M & J Collective), 10% off promo
45. 📝 26 Oct: Caroline, who cancelled
46. 📝 26 Oct: Mike (CC Group Therapy)
47. 📝 27 Oct: Kinsen Siu
48. 💬 27 Oct: Funny line "not from Texas, I'm from the Philippines"
49. 📝 27 Oct: Natasha follow-up
50. 📝 27 Oct: Scott, Marjorie Keppel's team paid the deposit
51. 📝 27 Oct: Scott, Dr Kelishadi booked
52. 📝 27 Oct: Dave Hukka, billing breakdown (Lex, 76 hrs × $15 = $1,254 incl. GST) + back to part-time?
53. 💬 27 Oct: What does Manni (LDC Strategies) need?
54. 📝 27 Oct: Manni, can't partner, but here's the referral incentive. ⛔ send blocked.
55. 📝 27 Oct: Wanda Lau (JWCC)
56. 📤 27 Oct: Hank Chu (sent directly)
57. 📝 27 Oct: Hank, card vs AU BECS direct debit, no surcharge (updated 3×)
58. 📝 27 Oct: Mike Rosenbaum reschedule drafts (4 versions)
59. 📝 27 Oct: Bryce Davis (MMEM)
60. 📝 28 Oct: Claire McDonnell (AMHS), intro + availability
61. 📝 28 Oct: Henry Young follow-up
62. 📝 28 Oct: Kinsen ×3 (JD, $500 per role, soft follow-up)
63. 📝 28 Oct: Lawrence Raja (pausing), Henry, Jason (soft), Jordan Smith
64. 📝 28 Oct: Sue Styles (JD, timeline, hours, invite to call) ×3
65. 📝 28 Oct: Natasha, accept call + "Rob is copied"
66. 📤 28 Oct: Clio intro (you're her project manager, logins + welcome pack). Note: password sent in plain text.
67. 📝 28 Oct: Clio, join the Google Chat space
68. 📝 29 Oct: Laura ("Rufus") explanation + draft
69. 📝 29 Oct: Clio, email Krystie directly
70. 📝 29 Oct: Sharon Bentley, "will get back today" + 1pm reminder
71. 💬 29 Oct: "Who is Claire?" briefing
72. 📝 29 Oct: Kinsen, we can do both roles
73. 📝 29 Oct: May Ly, interview schedule, introducing Charyl
74. 📝 29 Oct: Sharon, can't fill the Finance Officer role, hire locally
75. 📝 29 Oct: Claire, move to Mon/Tue 4:30pm
76. 📝 29 Oct: Hank Chu follow-up, Henry Young (hold until next week)
77. 📝 29 Oct: Natasha, voicemail left / Rob's 11am / Ms Linh joining
78. 📝 29 Oct: Rob reply
79. 📝 29 Oct: Giuliana (Floractive), alignment call next
80. 📝 30 Oct: May Ly, on leave today, will reply Monday
81. 📝 30 Oct: Henry Young, gracious close-out
82. 📝 30 Oct: Rob Daguiar (High Note), 4pm Sydney Tuesday?
83. 📤 30 Oct: Rob Daguiar reply sent + event added. 🟡 invite to Anthony and Doha blocked.
84. 📝 30 Oct: Hank, "when should Grazielle start + payment" *(Sales Report)*
85. 📝 22 Oct: Jessica (HCHC), no more reminders *(Sales Dashboard)*
86. 📝 Hank's 8-section terms questions (contractors, leave, trial, GST $2,699.40/mo, bonuses). 💬 the buyout answer is in chat only. *(Freedom Audit & Proposals)*
87. 📝 Jennifer Barker (Collective Leisure, not hiring) *(Fractional v2)*
88. 📝 Henry Young, Alex Chen, Jennifer Olivares (30-day task list) *(Freedom Plan Creation)*
89. 📝 Kinsen, from Seeta's intro → booked → new offering + Linh's video *(Freedom Plan Creation)*

### 🔁 BULK FOLLOW-UPS & INBOX TRIAGE → `/follow-up-sweep`
1. 💬 15 Oct: List Aug–Sep leads who didn't reply (11 proposal, 8 audit, 9 went quiet)
2. 📝 15 Oct: 19 tailored follow-ups for them
3. 📝 20 Oct: Everyone from last week who hasn't replied (78 drafts)
4. 📝 20 Oct: People who replied then went quiet, e.g. Cecilia (14 drafts)
5. 💬 21 Oct: Everyone from the last 3 months who hasn't replied (~400 threads checked)
6. 💬 21 Oct: Proposals sent this week (Jennifer Olivares, Henry Young…)
7. 💬 21 Oct: Proposal non-repliers back to August, then back to January (~110 checked)
8. 📝 21 Oct: "New flexible packages / founder freedom" email to them (19 drafts)
9. ✋ 22 Oct: Email last year's "pause hiring" clients. You stopped it ("I'm not part of the CAX team").
10. 📝 22 Oct: Everyone who hasn't replied this month (70 drafts; about 27 later sent)
11. 📝 26 Oct: Everyone who didn't reply last week (383 threads → 286 drafts)
12. 📝 28 Oct: This week's proposals except Matt Stone
13. 💬 29 Oct: Any emails not replied to? 25 threads (Dave Hukka, Cecilia, Manni, Skye Class…)

### ♻️ LOST LEADS REACTIVATION → `/lost-leads`
1. ✅ 13 Oct: 30 lost leads (Jan–Jun 2026) into "HubSpot_Lost_Leads" + new email stating 20 hrs / 3 months / Angel stays with OA *(Lost leads extraction)*
2. 📝 13 Oct: Template draft + 30 personal drafts ("Still need a hand, {name}?")
3. ✅ 15–16 Oct: 30 lost leads from 2024 + 30 drafts + **created the /lost-leads skill**
4. 💬 20 Oct: "Remind me the skill to add lost leads"
5. ✅ 20 Oct: /lost-leads 2023 (rows 160–189, 30 drafts)
6. 💬 20 Oct: "What's the skill to create reconnect drafts?" (no duplicates made)
7. ✅ 20 Oct: /lost-leads 2022 into the new sheet (rows 189–218)
8. ✅ 21 Oct: /lost-leads 2025 (rows 219–248) + skill updated to the new sheet
9. ✅ 22 Oct: reactivation emails, which already existed
10. ✅ 22 Oct: /lost-leads (rows 249–278)
11. ✅ 26 Oct: /lost-leads 2025 Jan–Jul (rows 279–308)
12. ✅ 28 Oct: /lost-leads (rows 309–338). ✋ the second batch was stopped.
13. ✅ 29 Oct: /lost-leads (rows 339–368)
14. 📤 30 Oct: /lost-leads, "send them too" (rows 369–394, 26 sent)

### 📇 BDM LEADS → `/bdm-leads`
1. ✅ 20 Oct: Fill 20 empty BDM rows from row 893
2. ✅ 21 Oct: Next 30 rows (913–972) + 22 drafts
3. ✅ 22 Oct: 30 more rows (973–1002), 18 drafts + **created the /bdm-leads skill**
4. 💬 22 Oct: "Are these 30?" 30 rows, 18 drafts (12 skipped)
5. ✅ 22 Oct: /bdm-leads (1003–1032, 18 drafts) + checked "I don't see the drafts"
6. ✅ 26 Oct: /bdm-leads (1033–1062, 23 drafts)
7. ✅ 28 Oct: /bdm-leads (1063–1092, 23 drafts)
8. ✅ 29 Oct: /bdm-leads (1093–1122, 25 drafts)
9. 📤 30 Oct: /bdm-leads, "I trust you to send them" (1123–1152, 20 sent). Next empty row: **1153**.
10. 💬 9 Oct: BDM numbers for the report (90 new leads from 960; Mona Omar, Arianne Duncan warm)

### 🎯 FREEDOM AUDIT SCRIPTS & PROPOSALS → `/freedom-audit`
*(Call extraction and proposal creation; FREEDOM AUDIT AND PROPOSALs; Freedom Plan Creation)*
1. ✅ 12 Oct: May Ly call from Fathom → proposal (Claude Doc)
2. ✅ 12 Oct: Made it look like the Wanda & Hannah deck → May_Ly_Proposal.pptx
3. 📝 12 Oct: Email to May with the AUD deposit link. Deck not attached.
4. ✅ 15 Oct: Fathom notes from both May Ly calls
5. 💬 21 Oct: "Remember my Freedom Audit scripts?" Found the call-structure docs.
6. ✅ Henry Young script (lead with Angel Essential at $15+/hr) → proposal deck → 📝 email + Notion card
7. ✅ Danielle (Jim's Bookkeeping) script, then more probing questions, switched to Angel Managed
8. 📤 Daniella didn't attend; email answering her questions sent
9. ✅ Jason / KayPark script ("flawless"), with OAx100 removed
10. ✅ Jordan & Jennifer Smith proposal → 📝 email with sample profile + USD deposit link
11. 💬 What package did I offer Jennifer Olivares? Angel Managed, FT marketing VA, USD. Call summary given.
12. ✅ Matt Stone proposal (both packages) → 📝 email → follow-up (later sent)
13. ✅ Kinsen Siu script → proposal → email (shortened) → Notion card → ads-specialist reply (sent)
14. ✅ Mariana (EO Greater Bay Area) proposal + email
15. ✅ **Created the /freedom-audit skill** (draft PR #1, not merged)
16. ✅ Sharon Bentley script (accounts only)
17. ✅ Dr Kelishadi script → 📝 post-call email → 📝 email to Scott → proposal ($8–11/hr) + email
18. ✅ Claire (AMHS) script (charity, lead with Essential at $720)
19. ✅ KayPark proposal (Doc → PPTX → pricing fixed → shortened, USD deposit) → 📝 email to Chris (add Jordan, Chad, Larry + attach)
20. 💬 Rate for Rob Zhang: $1,200 + $1,734 = $2,934 + GST. Fathom quote extracted.
21. 💬 GST per Charyl's email: $2,454 + 10% = $2,699.40/month

### 📘 FREEDOM PLANS → `/freedom-plan` + `/candidate-profiles-email`
1. ✅ 13 Oct: Yasmine Johnson Freedom Plan v2, the "Living Freedom Plan" (26 slides) *(Quarterly Sales Report)*
2. ✅ 13 Oct: Restored candidate profile links
3. 💬 13 Oct: What else should a first-time VA client get?
4. ✅ 13 Oct: Added the 4-slide First-Time Starter Pack (now 30 slides). ⏳ check with CAX and Recruitment.
5. 💬 19 Oct: "Remember Yasmine's plan?" Found in Drive.
6. ✅ Rob Zhang (Arova) Freedom Plan, 30 slides + preview
7. ✅ Hank Chu Freedom Plan → no profiles + HTML version → interactive PPTX → v2 (Goal, Leverage Gap, Freedom Stage added)
8. ✅ Tom Warriner (Spinifex) Freedom Plan, PPTX + HTML + interactive
9. 📝 Hank and Tom emails explaining their plans (both later vanished from Drafts)
10. ✅ Sample interactive Freedom Plan (fictional "Jordan Lee")
11. ✅ May Ly Freedom Plan (30 slides + Payroll & Sensitive Info slide) → HTML → interactive HTML → PPTX
12. ✅ Krystie Cekic (The Play Agency) Freedom Plan, 30 slides
13. 📝 Krystie email: "Your Freedom Plan for The Play Agency"
14. 📝 27 Oct: May Ly, Freedom Plan + 4 candidate profiles → rewritten warmer, no intro *(Strategy Session)*

### 🗂️ CRM NOTES (Notion / GHL) → `/ghl-notes`
1. ⛔ 12 Oct: May Ly GHL opportunity "May Ly_PT Specialist_Angel Accelerate (no discount)" (text given)
2. ⛔ 12 Oct: GHL note "Freedom Audit Summary" (text given)
3. 🟡 15 Oct: May Ly deal questions → ✅ Notion card, ⛔ GHL
4. ⛔ 16 Oct: Krystie Cekic GHL opportunity (field table given)
5. ✅ 16 Oct: Krystie Notion card ("all is correct")

### 📊 WEEKLY SALES REPORT → `/weekly-sales-report`
*(SALES REPORT)*
1. ✅ 9 Oct: October report modelled on September (+ Tom Warriner deposit, Sofia Nicotra lost)
2. ✅ 9 Oct: Only 1–9 Oct; Benjamin Ho isn't a sales deposit
3. ✅ 9 Oct: Added BDM, focus sections, other pipeline leads, Arun under Ms Linh. "Combine all". 📤 you sent it.
4. ✅ 16 Oct: Week 12–16 Oct + BDM + Sam Mitchell / Cecilia replies
5. ✅ 16 Oct: Corrections (Rocks done, Nadine Ahmed = test, May = deposit), month-to-date, lost leads from Gmail, James Bright = Organic, Krystie deposit. 📤 you sent it.
6. ✅ 23 Oct: Week + October month-to-date (KayPark deposit), Mariana, Natasha, combined, **no tables**
7. ✅ 30 Oct: Week 26–30 Oct in your format → 📝 draft to Nadine / Ms Linh / Ms Wendy
8. ✅ 30 Oct: Sharon stays Lost; MJ Freitas deposit; Natasha go-ahead → 📝 draft recreated
9. 💬 2 Nov: Whole of October highlights (7 deposits, 54.5% qualified→deposit)

### 🗓️ MONDAY WEEKLY HUDDLE → `/weekly-huddle`
1. ✅ 12 Oct: Last week's activities added to the standing 10 → "don't make it complicated" → added Ms Cha + James Bright *(Technical connection checks)*
2. 💬 12 Oct: Most important learning → one sentence
3. ✅ 19 Oct: Calendar 12–16 Oct → Achievements in Notion
4. ✅ 19 Oct: Priorities (daily + this week) in Notion
5. 💬 19 Oct: Highlight / Heads up / Help (not added to Notion)
6. ✅ 26 Oct: Last week's activity (calendar + sent Gmail) → Notion Achievements + Priorities *(Monday Reports)*
7. ✅ 26 Oct: Rate and Why (Best Costume, car, PS5)
8. 🟡 26 Oct: Most important learning (3–4 sentences) and Challenges were drafted but not saved to Notion
9. 💬 26 Oct: Highlight / Heads up / Help + Fractional Agreement highlight, combined *(Sales Report)*
10. ✅ 2 Nov: Achievements + daily Priorities + this week's audits/alignment/presentations
11. ✅ 2 Nov: Rate and Why (son's 18th, driving) → shortened
12. ✅ 2 Nov: Learning (short), Challenges (fewer leads, RDO removed)
13. 💬 2 Nov: Highlight / Heads up / Help for 26–30 Oct

### 🧹 SALES CALENDAR CLEAN-UP → `/sales-calendar-cleanup`
1. ✅ 22 Oct: Moved 54 quiet (90+ days) records to Lead - Lost + new Data Health check *(Follow-up emails)*
2. ✅ 23 Oct: Checked every "Pending DC" record (~80); only Jason (HCHC) was still pending *(Sales Dashboard)*
3. ✅ 23 Oct: "Yes go ahead": ~95 Notion records updated (statuses, lost reasons, emails)
4. ✋ 23 Oct: Deposit paid → Lead - Won. Stopped ("I'll do this later"); 20 found.
5. ⏳ 23 & 27 Oct: "Not recorded" source explained; fix not done yet

### 📈 SALES NUMBERS & DASHBOARD → `/sales-numbers`
1. ✅ 9 Oct: 15 metrics, Apr–Sep (143 booked, 38 deposits, 42.5% qualified→deposit…) *(Notion data extraction)*
2. 🟡 12 Oct: Q1 vs Q2 leads (83 → 60 booked). ⛔ deposits/sources blocked by the Notion limit.
3. ✅ 23 Oct: Dashboard Data Health redesigned and republished
4. 💬 23 / 27 Oct: What does "Not recorded" mean?

### 📅 MEETINGS & TIME ZONES → `/meeting-booking`
1. ✅ 23 Oct: Reminder to reach out to Kirsty, moved to Tue 1 Dec
2. ✅ 27 Oct: Mike Rosenbaum invite Wed 3pm PST (Thu 6am PH) + Meet link
3. 💬 27 Oct: "What is my Google Calendar link?"
4. ✅ 27 Oct: Dr Kelishadi event fixed to US time (duplicate removed)
5. 💬 27 Oct: 9:30am PST Friday in PH time
6. ✅ 27 Oct: Mike Rosenbaum invite Monday 9am PST
7. 💬 28 Oct: 1:30 WA → PH (same time)
8. ✅ 28 Oct: "Call with Claire" invite + Meet
9. ✅ 28 Oct: "Freedom Plan Presentation – KayPark" Thu 5 Nov 8am Central
10. ✅ 29 Oct: Sharon reminder 1pm
11. 🟡 30 Oct: Rob Daguiar Tuesday 4pm Sydney (guest invites blocked)

### 🪨 QUARTERLY ROCKS → `/quarterly-rocks`
*(QUARTERLY SALES REPORT AND ROCKS; Notion data extraction)*
1. ✅ 11 Oct: Refined the Q2 Sales Rock Recap deck (simple, OA branding)
2. ✅ 11 Oct: Rock 2 slide shows the full 2027 product line-up (10 ways to buy)
3. ✅ 12 Oct: Original deck tile → "10 ways to buy"
4. ✅ 12 Oct: Lost reasons say "shopping and comparing", not price
5. 🟡 12 Oct: Rock 1 report in Notion (private page, not placed)
6. ✅ 12 Oct: Rock 2 report added to the Rock 2 page
7. ✅ 12 Oct: Rock 3 report added to the Rock 3 page
8. ✅ 12 Oct: 6-minute presentation script
9. ✅ 12 Oct: Added next quarter's 3 Rocks slides to the deck
10. 🟡 12 Oct: Q1 vs Q2 comparison (see Sales Numbers)
11. 💬 12–13 Oct: Proposed rocks → simple → "wow" → change Rock 2 → People/Product mapping → Rock 3 Systems → Living Freedom Plan
12. ✅ 16 Oct: Created Rock 1 and Rock 2 (Dashboard) in Notion + filled Problem / Objective / Ideal / Acceptable / Done / KPIs
13. 💬 16 Oct: Rock 3 ideas → more → "too complicated" → simple → product offers. ⏳ not chosen.

### 🎁 PROMOTIONS → `/promo-playbook`
1. ✅ 23 Oct: End-of-year / start-of-year promo ideas (no blanket 10%; OA doesn't train Angels)
2. ✅ Made it a sales plan, then 6 sales pitches (Beat the January Rush, Freedom Gift Box…)
3. ✅ Office closure dates, 10% option, combined, simplified (1–2 week recruitment), tables removed
4. ✅ Book bundle instead of discount; Early Bird $100/month for as long as they stay
5. 📤 Email to Nadine (CC Ms Linh, Ms Wendy), with Productivity Hacks book and no stacking. Sent.
6. 💬 2 Nov: What does Nadine mean? → 📝 reply draft

### 🤝 FRACTIONAL PARTNER → `/fractional-partner`
*(FRACTIONAL PARTNER; FRACTIONAL v2)*
1. ✅ 13 Oct: Pricing slide + "how it works" slide ($9,000 + GST)
2. ✅ 13 Oct: "One price, everything included" slide, billed by OA
3. ✅ 13 Oct: Redesigned so it doesn't look copied from Rob
4. 💬 13 Oct: Does OA still get commission? Yes, 15% = $1,350/month
5. 💬 20 Oct: Found the fractional docs in Drive
6. 🟡 20 Oct: Were the v2 questions answered at Council? Couldn't confirm (not recorded).
7. ✅ 20 Oct: Simple sales framework for Ms Linh (artifact) + transparency, "Ms Linh" spelling, sales process, contract answer, month to month, detailed monthly report, comms CC rule, pricing options, partner paid after review
8. ✅ 20 Oct: Made it a Google Doc
9. 📝 20 Oct: Email to Ms Linh and Ms Wendy for feedback (moved into Ms Wendy's thread)
10. 🟡 QA wording: added to the email; ⛔ doc edit blocked at first
11. 📝 Reply to Rob: "we'll discuss and get back to you"
12. 💬 WhatsApp to Ms Linh about Rob's proposal (not an email)
13. 💬 Rob's direct-contract idea: not fair to OA as it stands → protections table
14. ✅ Doc: 3-month commitment then month to month; replaced "No contract needed"
15. ✅ 3-months-upfront 5% discount added to the doc
16. 📝 "Sorry to butt in" reply to Rob (OA's role after kick-off)
17. 💬 WhatsApp to Ms Linh on deliverables
18. 💬 30 Oct: Summary for Ms Wendy of the Natasha + Rob call
19. 💬 30 Oct: Natasha's "Let's get started" (Blue Wealth yes; kickoff 25 Nov; 90 days, 30 staff)

### 💬 MESSAGES TO MS LINH / MS WENDY → `/message-to-linh`
See Fractional Partner #9, #12, #17, #18 and Promotions #5.

### 📣 MARKETING / LEAD GEN → `/lead-gen-diagnosis`
1. 💬 2 Nov: "Why are we not getting leads?" HubSpot shows organic leads fell to almost zero in 2026; causes + 90-day plan. ⛔ website check blocked by the network; ⛔ HubSpot reports forbidden. *(MY BRAIN DUMP)*
2. 💬 16 Oct: 15 sales ideas from what other sales teams do, then 5 simple ones *(Notion data extraction)*
3. 💬 16 Oct: New product offers ($500 Freedom Plan first, Angel Essentials, 2nd Angel, AI Mapping)

### 🧮 QUICK MATHS → `/oa-basics`
1. 💬 2 Nov: 600 × 44 = 26,400
2. 💬 2 Nov: Airwallex AUD→PHP rate (~44.7–44.9 market; check your account)
3. 💬 2 Nov: 800 and 1,000 AUD in PHP
4. 💬 2 Nov: Total AUD 2,400 = PHP 105,600 (at 44) to 107,520 (at 44.8)

---

## PART 4: Files in this repo

| File | What |
|---|---|
| `OA_Q2_Sales_Rock_Recap_Refined.pptx` | 12-slide Q2 recap + next-quarter Rocks |
| `OA_Q2_Sales_Rock_Recap_Original_Updated.pptx` | Your original deck with the "10 ways to buy" tile |
| `Yasmine_Johnson_Freedom_Plan_v2.pptx` | Living Freedom Plan template (30 slides) |
| `.claude/skills/*` | The 19 skills above |

Other client decks and Freedom Plans (May Ly, Hank Chu, Tom Warriner, Rob Zhang, Krystie Cekic, KayPark, Henry Young, Matt Stone, Kinsen Siu, Mariana, Dr Kelishadi, Jordan & Jennifer Smith, Fractional pricing) were saved on other `claude/…` branches of this repo.
