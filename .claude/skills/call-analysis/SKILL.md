---
name: call-analysis
description: Analyse any of Gail's recorded Fathom calls (Freedom Audit, Alignment, Strategy, partner or internal) - a clean summary, the client's needs in their own words, a coaching scorecard of how Gail ran the call, objections and how they were handled, P.A.I.N. score, buying signals, risks, promises made and next steps - then offer the right follow-up (proposal, email, Notion notes, Freedom Plan). Also compares several calls for patterns. Use when Gail asks to analyse, review, summarise or get feedback on a call, "how did my call go", "what did X say", or "analyse my calls this week".
---

# Call analysis (Fathom)

Read the `oa-basics` skill first. Fathom is connected and read-only.

## 1. Find the call
- Gail gives a Fathom link: use `get_recording_by_url`.
- Gail gives a name: use `list_meetings` with `created_after` set to the last 30 days and match the title or invitees. You can also use `search_meetings` by first name with `recorded_by: "anyone"`. `find_person` sometimes misses people.
- "My calls this week": use `list_meetings` from Monday, with `include_summary: true`.
- If two calls match (e.g. "Matt Ston" on 27 Oct and "Matt Stone" on 3 Nov), use the newest one and say which you picked.
- If a call isn't recorded, say so and ask Gail for her notes.

**Always read the full transcript** (`get_meeting_transcript`, passing the url for timestamped links). The Fathom AI summary alone isn't enough. Never state what someone said unless it's in the transcript.
Fix names Fathom garbles: "Elsewhere City Agile" = Outsourcing Angel; "Lynn" / "Lyn" = Ms Linh.

## 2. Work out the call type
Freedom Audit (discovery) • Alignment Call • Strategy / Freedom Plan presentation • Follow-up • Partner (Rob, Scott) • Internal (Council, Trifecta, L10). Each type changes what "good" looks like below.

## 3. The analysis (plain bullets, short, no tables unless Gail asks)

**A. Call snapshot**
- Who attended, date (client time + PHT), length, call type, Fathom link.

**B. Summary**
- 5–7 bullets of what happened, in order.

**C. What the client needs (their own words)**
- The business, the role, tasks, hours, tools, start date and budget.
- Quote 2–4 key lines with timestamps.

**D. How Gail ran the call (coaching scorecard)**
Rate each as Strong / OK / Work on. Give one example from the transcript and one tip for each.
1. **Opening and frame:** set the agenda and time, built rapport.
2. **Discovery depth:** asked "why now", the pain, its impact and past attempts, and went one level deeper.
3. **Listening:** an estimate of talk ratio (aim: the client talks more on audits), plus interruptions.
4. **Role clarity:** tasks, hours, tools and success are all clear.
5. **Value before price:** outcomes first, and the Freedom Plan positioned before the numbers.
6. **Pricing accuracy:** fees, rates and totals match `reference/offer.md` in the `freedom-audit` skill. **Flag any figure that doesn't** (wrong package fee, totals that don't add up, a missing GST or currency).
7. **Objection handling:** each objection, what Gail said, and a better line if needed.
8. **Close and next step:** a clear next step with a date, and a deposit or booking asked for.

**E. P.A.I.N. score** (for audits)
- Problem, Aligned, Investment, Now: each 0–2, with a total out of 8 and one line on why.

**F. Buying signals and risks**
- Signals: urgency, budget agreed, decision-maker on the call, asked about start dates.
- Risks: price hesitation ("shopping and comparing"), under 20 hrs, a role we can't fill, sensitive data, payment-before-start pushback.

**G. Promises made**
- Everything Gail said she'd send or do (sample profile, proposal, answers, intro to Charyl), with owner and date.

**H. Recommended next steps**
- 3–5 actions with dates.
- Suggest the status for the Notion card (Pending Decision / HOT / WARM / Lost + reason).

**I. One thing to do better next time**
- A single, kind, specific tip.

## 4. Offer the follow-up (don't do it until Gail says yes)
| After a… | Offer |
|---|---|
| Freedom Audit | `/freedom-audit` proposal + email, `/sales-calendar-notes`, `/ghl-notes` |
| Alignment Call | `/alignment-call` recap email + Recruitment brief, then `/freedom-plan` |
| Strategy / presentation | `/candidate-profiles-email` or `/email-reply` |
| Partner call | `/fractional-partner` summary for Ms Wendy, `/message-to-linh` |
| Any call | `/meeting-booking` for the next call |

## 5. Comparing several calls ("analyse my calls this week/month")
- List each call with its type, P.A.I.N. total, outcome and next step.
- Patterns:
  - common objections
  - where calls stall
  - average talk ratio
  - pricing mistakes
  - what the best calls did differently
- Give the top 3 coaching points for next week.
- Good input for the Monday huddle ("Most Important Learning") and the weekly report.

## Rules
- Kind, honest coaching. Celebrate what went well first.
- Never say "price" as a reason for no. Say "shopping and comparing".
- Don't invent quotes, numbers or promises. If something wasn't said, write "not discussed".
- Keep client details to that client only.
