---
name: oa-basics
description: Gail's house rules, people, links and quick maths for every Outsourcing Angel sales task. Read this first whenever another of Gail's skills runs, or when Gail asks who someone is, what a link is, or for a quick AUD/PHP or time-zone sum.
---

# OA basics: read before any of Gail's tasks

Gail Galima-Mendoza is the **Freedom Plan Specialist** (Sales & Business Development lead) at **Outsourcing Angel (OA)**. OA places experienced offshore staff ("Angels", mostly from the Philippines) with Australian, NZ and US businesses.
Gail works in Philippine time (PHT). PHT is the same as Perth/WA time.

## Golden rules (never break)
1. **Draft, don't send.** Every email is a Gmail draft. Only send when Gail clearly says "send it", "send it away", "do not put it in drafts" or "I trust you to send them".
2. **Reply in the existing thread** and keep the same CCs.
3. **Never invent** prices, discounts, offers, policies or statistics. Anything unknown goes in as `[CONFIRM: ...]` and is listed for Gail.
4. **Don't contact current or former clients.** That's the CAX team's job ("I am not part of the CAX team").
5. **Keep it simple.** No tables or "sheets" in reports or emails unless she asks. Short beats long.
6. **Never say "price"** as a reason leads say no. Say "shopping around" or "comparing options".
7. Angels are experienced (3+ years). OA does **not** train them; the client only teaches their own processes.
8. Do one client at a time so Gail can check it. Never mix one client's details into another's document. Proofread twice.
9. Flag uncertain items (test bookings, guessed dates, time-zone conversions, estimated counts) instead of hiding them.

## Voice and sign-offs
- Australian English. Warm, polite, conversational, not pushy or salesy.
- If they've already had a call, don't re-introduce Gail or OA.
- Client sign-off: "Warm regards," or "Warmly," then **Gail Galima-Mendoza, Freedom Plan Specialist | Outsourcing Angel**.
- Internal reports to Ms Linh: open "Hi Ms Linh," and close "Much Love,".
- API-made drafts lose her Gmail signature, and the Gmail tool can't attach files. Always remind her to attach decks or PDFs.

## Links
- Freedom Audit booking: https://calendly.com/gail-b7d0/freedom-audit-with-gail
- Deposit (AUD): https://payments.outsourcingangel.com/service-deposit-form/
- Deposit (USD): https://payments.outsourcingangel.com/service-deposit-form-usd/
- Sales dashboard ("Sales Pulse"): https://claude.ai/artifact/PbvZBGBM2DqZvX2KJPkf2x
- Notion Sales Calendar data source: `collection://d85cdda2-4477-4ac4-8991-9ca18d4451e4` (calendar view `view://83abd86e-aa67-41d7-b44c-7bbd57be2048`)
- Notion Weekly Huddle data source: `collection://525fd8ed-48b2-4a33-8f91-5b2d597d1278`
- Notion Rocks data source: `collection://1b2b691b-e059-81f7-8b5a-000b04ae840a`
- Lost Leads Data sheet: https://docs.google.com/spreadsheets/d/174oyOjj3QzDf_92_D3106hI-EamoACXrxvrrodVSAEs
- Prices, packages and terms: `.claude/skills/freedom-audit/reference/offer.md` (the source of truth)

## People
| Who | Role | Notes |
|---|---|---|
| Ms Linh (Linh Podetti) | Founder/CEO | linh@outsourcingangel.com.au. Always "Ms Linh", never "Lyn". Big referral source. |
| Ms Wendy | Leadership/Ops | wendy@outsourcingangel.com.au |
| Nadine | Marketing | nadine@outsourcingangel.com.au. "To" on the weekly sales report. |
| Charyl | Recruitment Manager | charyl@outsourcingangel.com.au |
| Heidi | Other sales consultant | |
| Ms Cha | Helped set up Claude | |
| Scott Empringham | X100 referral partner | scott@empmediagroup.com. New referrals: use `/scott-referrals` (sheet + intro email). Updates go in the "Scott Leads Update and Follow-Up" thread, CC Yuki and Linh. |
| Yuki | Referral source | |
| Rob Lee | Bright Coast AI, Fractional AI partner | OA keeps 15%, Rob gets 85%. |

## Customer journey words
Freedom Audit (discovery call) → Alignment Call → Freedom Plan ($500 refundable deposit per role) → Strategy session / presentation → candidate profiles (1–2 weeks) → Angel starts.
Products ("10 ways to buy"): Freedom Plan, Angel Match, Angel Essentials, Angel Managed, Angel Accelerate, Angel Growth + AI, Angel Teams, Angel Departments, OAX100 Marketing, Fractional Partners (AI + Marketing).
Notion proposal codes: FT ADV, PT ADV, PT Specialist, FT Specialist, PT Tech, etc.

## Quick maths
- Hours: 20 hrs/week = 86.67 hrs/month; full-time = 173.3 hrs/month. Total = fee + hours × rate, rounded to $10.
- GST (AU clients): 10% on talent + fee.
- AUD to PHP: Gail uses **44** as a quick rate. The real rate is in her Airwallex account (market is about 44.7–44.9). Show both when it matters.
- Time zones: convert US PT/CT, Sydney/Melbourne and WA to PHT. Mention daylight-saving changes (US clocks change early November; AU east coast is on daylight saving Oct–Apr).

## Known tool limits
- **Fathom is connected** (read-only). Use `/call-analysis` for any recorded call. Always read the full transcript, not just the summary.
- GoHighLevel (GHL), JustCall and Google Chat are **not connected**. Give paste-ready text for GHL.
- HubSpot is read-only. HubSQL and aggregate reports return "Forbidden"; use search instead.
- Notion SQL has a usage limit. If it's used up, page through the view instead.
- Gmail search can hit quota ("Resource has been exhausted"); use get_thread on known ids. After a create_draft timeout, check list_drafts before retrying so you don't make duplicates.
- Gmail drafts sometimes vanish after Gail opens them. Recreate if asked.
