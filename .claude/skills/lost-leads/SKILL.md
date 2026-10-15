---
name: lost-leads
description: Pull lost leads from HubSpot (deals in the "Closed Lost (Leads)" stage) for a given year, add them to Gail's HubSpot_Lost_Leads Google Sheet, and create a personalised re-engagement draft in Gmail for each one. Use when Gail asks to extract, export or follow up lost leads from HubSpot, or types /lost-leads. Arguments (all optional) - year, number of leads, sheet link. Example - "/lost-leads 2025 30".
---

# Lost leads: HubSpot → Google Sheet → Gmail drafts

Gail Galima-Mendoza (Freedom Plan Specialist, Outsourcing Angel) uses this to re-engage old lost leads.
Three steps, in order: pull the leads, add them to the sheet, draft one email per lead.

## Inputs

Read these from the arguments, or use the defaults:

| Input | Default |
|---|---|
| Year the deal was lost | The year Gail names. If none, ask. |
| Number of leads | 30 |
| Sheet | https://docs.google.com/spreadsheets/d/1s3hB5gsD1wC4POeO2EUEWqNZBBJ-zhMKgbjOTI1aaO4 (title "HubSpot_Lost_Leads", tab "Lost leads") |

Never send email. Only create drafts.

## Step 1. Pull lost deals from HubSpot

1. Search `DEAL` with `dealstage` EQ `closedlost` (label "Closed Lost (Leads)", Sales Pipeline) and `closedate` BETWEEN `<year>-01-01T00:00:00Z` and `<year>-12-31T23:59:59Z`.
   Properties: `dealname`, `closedate`, `closed_lost_reason`. Sort `closedate` DESCENDING, limit 100. Page with `offset` if you need more candidates.
2. Read the sheet's column B (emails) first, so you skip anyone already in it.
3. Choose the leads. Skip:
   - Not real clients. The lost reason says "not a lead", "a VA", "job applicant", "looking to sell his services" or "partnership", or the reason says the lead is from the Philippines.
   - Bounced emails ("bouncing back", "address not found").
   - Replacement or existing-client cards ("Replacement", "Done with the replacement").
   - Reasons that make outreach pointless, such as a government role that must stay local, or a lead referred to a partner.
   - Duplicates. One person can have several deals ("2nd VA", "2nd FT ADV"). Keep one row per person.
   - Anyone already in the sheet, or anyone Gail is actively working in Gmail this month.
   - Leads with reasons like "rescheduled" and nothing else.
   Prefer warm reasons: not ready, pre-revenue, budget or price, held off, "check in later", hired locally, not enough work. Then "no response".
4. Fetch contacts with one `CONTACT` search using `associatedWith` deals `IN` [the deal IDs]. Properties: `firstname`, `lastname`, `email`, `phone`, `company`.
   - Match contacts to deals by name. If a deal has two contacts (for example, a second person at the same company), use the one whose name matches the deal.
   - If two contacts share a phone number and look like duplicates, keep the one that matches the deal name.
   - If you can't fill the count after the exclusions, pull the next page of deals.

## Step 2. Add them to the sheet

Columns on tab `Lost leads`: Name | Email | Phone | Business name | Deal lost on | Lost reason | Check

- One `append_values` call to range `'Lost leads'!A1:G1` with all the rows.
- **Phone:** prefix with an apostrophe (`'+61 415 121 335`). Without it, Sheets reads a leading `+` as a formula.
- **Deal lost on:** `YYYY-MM-DD` from `closedate`.
- **Business name:** the HubSpot `company`. If that's empty or junk (for example "Owner/ Manager" or "Less than $1000 per month."), use the business from the email domain with "(from email)", or leave it blank.
- **Lost reason:** tidy up `closed_lost_reason` into a short phrase.
- **Check:** short notes only where useful, such as "Phone in HubSpot is invalid", "Prefers Rob", "Had deals open for 3 roles", "Asked to speak again in 6 months".
- Read the new rows back with `get_values` and check they landed correctly.

## Step 3. One Gmail draft per lead

Create a separate draft for each lead (`create_draft`, plain-text `body`, no `replyToMessageId`).

- **Subject:** `It's been a while, {First name}`. If there's no usable first name (for example just an initial), use `It's been a while` and open with "Hi there".
- **Tone:** warm, personal, short. Mention when you spoke and why it didn't go ahead, in a kind way. Paint a picture of the time they'd get back. Invite questions.
- Tailor the middle of the email to the lost reason:
  - **Not ready / pre-revenue / held off / not looking / not enough work:** "The timing wasn't quite right then, so I wanted to check in and see how things have grown since." For "not enough work", mention they can start at 20 hours a week and add more as they grow.
  - **Price / budget:** "The investment didn't feel right at the time, and I completely understand." Then: it's worth weighing the cost against what your own hours are worth; start at 20 hours a week and add more as the business grows.
  - **Hired locally / went another way / another agency:** "I hope that's been working well for you." Then: a lot can change in a year; extra capacity, or cover if their person is away; we handle searching, screening, onboarding and ongoing support.
  - **No response:** "We connected back in {year} about bringing on support, but we never got a chance to finish the conversation."
  - **They asked to reconnect later** (for example "in 6 months" or "next year"): mention it, since you're following up as agreed.
- Add a line about their industry where you can tell what it is (real estate: listings and client follow-ups; studio or gym: bookings and member enquiries; bookkeeping: document chasing and data entry; recruitment: candidate follow-ups and scheduling).
- Always include:
  - What we do: "You tell us what's taking up your time, and we find the right person for you. We handle the searching, screening and onboarding, and we stay behind your Angel with ongoing support."
  - The questions invite: "Got questions? Just hit reply and ask me anything: what an Angel could take on first, what it costs, or how quickly we could get someone started. No question is too small."
  - Booking link: https://calendly.com/gail-b7d0/freedom-audit-with-gail
  - Sign-off:
    ```
    Warm regards,
    Gail Galima-Mendoza
    Freedom Plan Specialist | Outsourcing Angel
    ```
- Don't invent discounts, offers, prices, statistics or results. The only terms to mention are the 20 hours a week minimum and starting small and scaling up.

## Report back

Tell Gail, briefly:
- How many deals matched the year in HubSpot, and how many you added (with the sheet row range).
- Who you skipped and why, in groups (job applicants, bounced, duplicates, already in the sheet).
- That the drafts are in Gmail and nothing was sent.
- Anything to check before sending, such as missing first names, invalid phones, or a lead you weren't sure about.
