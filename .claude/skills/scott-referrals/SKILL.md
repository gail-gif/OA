---
name: scott-referrals
description: Handle every new lead Scott Empringham (X100 / Empringham Media Group) refers to Outsourcing Angel - find Scott's intro emails, add any missing leads to the "Scott Empringham and Linh Podetti's Leads" Google Sheet, and draft Gail's standard intro reply in Scott's thread with Ms Linh's CEO video, the brochure and the eBooks. Use when Gail says "new lead from Scott", "Scott introduced someone", "add Scott's leads to the sheet", "intro me to Scott's referral", or types /scott-referrals.
---

# Scott referrals

Read `.claude/skills/oa-basics/SKILL.md` first. **Draft only, never send.**

Scott Empringham is CEO/Founder of Empringham Media Group (scott@empmediagroup.com). His team: Yuki Nakayama (yuki@), Gladys Pogenio (gladys@), Reeshav (reeshav@), all @empmediagroup.com.
X100 members are clients of Scott's AI marketing program who need a VA to implement it.

## 1. Find new Scott leads
1. Search Gmail for Scott's intro emails:
   - `from:scott@empmediagroup.com newer_than:30d`
   - `from:empmediagroup.com newer_than:30d`, because Yuki or Gladys sometimes send the intro.

   Typical subjects:
   - "New X100 Member - Outsourcing Angel Requested"
   - "Re: Welcome to X100…"
   - "Client Introduction"
   - "Please meet …"
   - "Connecting you with Outsourcing Angels"

   Skip non-lead threads: partner agreement, shout-outs, Scott's own VA, and the "Scott Leads Update and Follow-Up" thread.
2. Read each thread in full. Note:
   - the lead's name, email and company (use the email domain if no company is given)
   - the program (X100 annual, 100-Day LAUNCH…)
   - the date Scott introduced them
   - any role details or X100 requirements Scott listed
3. Read the sheet tab `Scott's Leads` (columns A–M) and compare by name and company. Only **new** names get added. Report anyone already there.

## 2. Add them to the sheet
- **Sheet:** "Scott Empringham and Linh Podetti's Leads", https://docs.google.com/spreadsheets/d/1GgV4N8Z86Ji9UwBiSzFboE7s20qq1cFmir2-x09eHXU, tab `Scott's Leads`.
- **Columns:**
  - A Name
  - B EO Member?
  - C X100 Client Status
  - D Date Received
  - E DC Date
  - F Assigned Consultant
  - G Deposit Date
  - H DDR Date
  - I Package
  - J Notes / Status
  - K PAIN score and Lead status
  - L update
  - M Commission Payment Date
- Write to the **first empty row** after the last name in column A, with `update_values` on an exact range (e.g. `'Scott''s Leads'!A40:J40`). Never overwrite a row.
- **Formats** (match the recent rows):
  - **Name:** "First Last (Company)"; if the last name is unknown, use the initial from the email, e.g. "Robbie B. (Build Bluebird)".
  - **C:** "X100 Member", plus the program if known.
  - **D:** M-D-YYYY, e.g. `11-5-2026`.
  - **F:** Gail.
  - **J:** start with the date, e.g. "Nov 5 - Scott introduced Robbie (email). Intro + Freedom Audit invite drafted…".
- Leave the other columns blank. Gail fills them as the lead moves on.

## 3. Draft Gail's intro reply (her standard script, word for word)
**Reply in Scott's intro thread** (`replyToMessageId` = Scott's message):
- **To:** the lead.
- **CC:** keep everyone already on Scott's email (Scott, Ms Linh, Yuki, Gladys).
- **Subject:** keep the thread subject.
- Use `includeSignature: true` for her Gmail signature.

```
Hi <First name>,

Thanks for the introduction Scott,

Great to connect with you, I'm Gail from Outsourcing Angel.   (link: https://outsourcingangel.com/)

A great place to start is our Freedom Audit call, where we identify tasks you can delegate and map out the best support structure for your business.

Below is a short video of our CEO, Linh Podetti, explaining our process, along with a brochure and a few helpful eBooks.

OA New Service Update 2026 - Watch Video   (link: https://www.loom.com/share/211dea77b1e64dbf933c67902a695501)

When are you free this week for a chat?

Alternatively, you can also book directly through my calendar [ BOOK HERE ] at your convenience.   (link: https://calendly.com/gail-b7d0/freedom-audit-with-gail)

Looking forward to connecting with you.

Much Love,
```

Rules:
- The video line must say **"our CEO, Linh Podetti"**. Ms Linh asked for this wording.
- If Scott's email lists X100 mandatory VA requirements, don't add them to the intro. Keep them for the Freedom Audit and the JD.
- Send both an HTML body (bold "OA New Service Update 2026", gold "BOOK HERE" link) and a plain-text body.

## 4. The PDFs (brochure and eBooks)
The Gmail tool can't attach these large files, so **Gail attaches them in Gmail before sending** (Attach → Insert from Drive). They are the same three files from her past Scott intros:

| File | Drive file |
|---|---|
| OA Brochure 2026 (1).pdf | https://drive.google.com/file/d/12w9ozaxdJ6aUmpcccEbOQSm0r0rkAG8F/view (anyone with the link can view) |
| 100 Task to Outsource to a VA eBook -email size (1).pdf | https://drive.google.com/file/d/1lvzwivqW9i69qetGH5w02Z11vJLzqnB7/view (private) |
| 100 Things You Can Outsource - The 360º Success Way (1).pdf | https://drive.google.com/file/d/1w9sIyds23bvgpOsR50PhEwkpucQ6CC0P/view (private) |

Always remind Gail in the report: **"Attach the brochure and the 2 eBooks before sending."**
Don't change sharing on the private eBooks unless Gail asks.

## 5. Report back
Report briefly:
- the leads found
- which were added (with row numbers) and which were already there
- the draft link and who's on To/CC
- the attachment reminder
- any sheet rows that look out of date, e.g. a deposit paid but the notes still say "no response". Offer to update them; don't change them yourself.

## Later updates
When a Scott lead books, pays a deposit, replies or declines:
- Add a dated line to column J/L.
- Draft the update to Scott in the **"Scott Leads Update and Follow-Up"** thread (CC Yuki and Ms Linh), using `/email-reply`.
