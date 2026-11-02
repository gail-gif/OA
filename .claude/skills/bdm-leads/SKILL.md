---
name: bdm-leads
description: Fill in the next batch of empty rows on the BDM tab of Gail's "Lost Leads Data" sheet with lead details from HubSpot, then create a personalised re-engagement draft in Gmail for each real lead. Use when Gail asks to add information to the BDM tab, continue the BDM list "from where you left off", or types /bdm-leads. Arguments (all optional) - number of rows (default 30), starting row.
---

# BDM leads: fill the BDM tab from HubSpot, then draft emails

Gail Galima-Mendoza (Freedom Plan Specialist, Outsourcing Angel) works through old lost deals listed on the BDM tab.
The deal names are already in the sheet. Your job is to fill in the lead details from HubSpot and draft one email per real lead.

Never send email. Only create drafts.
Never contact current or former clients. That's the CAX team's job, not Gail's.

## Inputs

| Input | Default |
|---|---|
| Sheet | https://docs.google.com/spreadsheets/d/174oyOjj3QzDf_92_D3106hI-EamoACXrxvrrodVSAEs (title "Lost Leads Data", tab `BDM`) |
| Number of rows | 30 |
| Starting row | The first row where column C is empty. Read `BDM!A1:H2000` to find it. |

## The BDM tab

Columns: Deal Name | Close Date | Lead Name | Country | Company Name / Website | Lost Reason | Email | Phone number | Touch point Sent (Y/N) | Call NOTES

Columns A and B are already filled. You fill **C to H only**. Never touch A, B, I or J.

## Step 1. Look the deals up in HubSpot

1. Read A:H for the target rows. Copy each deal name exactly as it appears in the sheet, including trailing spaces, emoji and odd capitalisation.
2. Search `DEAL` with `dealname` IN [the names]. Properties: `dealname`, `closedate`, `closed_lost_reason`, `description`.
   - If a name has a trailing space, also include the version without it, as either can match.
   - One name can match two deals, for example an older duplicate. Use the one whose close date matches column B.
   - If a name doesn't match anything, try a `query` search with the key words. If it's still not found, write "Not found in HubSpot" in C and explain in F.
3. Search `CONTACT` with `associatedWith` deals IN [the deal IDs]. Properties: `firstname`, `lastname`, `email`, `phone`, `mobilephone`, `company`, `website`, `city`, `state`, `country`.

## Step 2. Fill columns C to H

Write all the rows in one `update_values` call to `BDM!C{start}:H{end}`, one row per sheet row in order.

- **C, Lead Name:** first and last name. Remove HubSpot tags such as "[HUB]" or "✓".
- **D, Country:** "City - Country", for example "Sydney - Australia" or "Dayton, Ohio - USA". Use just the country if there's no city.
- **E, Company Name / Website:** "Company / domain", for example "Soneta Plumbing / soneta.com.au". Take the domain from the email when it's a business address. If the company field is junk, such as a description of their needs, use the business from the email domain.
- **F, Lost Reason:** a tidied, short version of `closed_lost_reason`. If it's long, for example a pasted email, summarise it in a few words. If it's empty, write "No reason recorded in HubSpot".
- **G, Email**
- **H, Phone number:** prefer `mobilephone`, then `phone`. Prefix it with an apostrophe (`'+61 417 868 143`). Leave it blank if it's not a real number.

## Step 3. Pick who gets an email

Check Gmail first (`newer_than:60d` with all the emails in one `{...}` search). Skip anyone already mid-conversation.

Skip these, because they aren't real leads or outreach is pointless:
- "Not a lead", job applicants, people who are VAs themselves, and anyone from the Philippines
- People looking for a partnership or to sell their own services, such as building a VA team or network marketing
- "Referred to partners"
- "Enquiry only"
- Leads who wanted something we don't offer: a business coach, social media strategist, cold calling, or under 5 hours a week
- Current or former clients
- Rows not found in HubSpot

Everyone else gets a draft. That includes "no response", price or budget, not ready, hired elsewhere, other options, "will be in touch", COVID or other timing reasons, and needing a specialist.

## Step 4. One Gmail draft per lead

Create a separate standalone draft for each lead with `create_draft` (plain-text `body`, no `replyToMessageId`).

**Subject:** `It's been a while, {First name}`

**Structure:**

```
Hi {First name},

{Opening: hope all is well at {Company}! When you spoke and why it didn't go ahead, said kindly.}

{Middle: tailored to the reason and their industry, plus the 20 hours a week line.}

You tell us what's taking up your time, and we find the right person for you. We handle the searching, screening and onboarding, and we stay behind your Angel with ongoing support.

Got questions? Just hit reply and ask me anything: what an Angel could take on first, what it costs, or how quickly we could get someone started. No question is too small.

If it's easier to talk it through, you can grab a time with me here: https://calendly.com/gail-b7d0/freedom-audit-with-gail

Warm regards,
Gail Galima-Mendoza
Freedom Plan Specialist | Outsourcing Angel
```

Opening and middle by lost reason:
- **No response:** "We connected back in {year} about {what they wanted}, but we never got a chance to finish the conversation." Then "I wanted to check in and see how things have grown since."
- **Price or budget:** "...and the investment didn't feel right at the time. I completely understand." Then "a lot can change in a few years" and "It's worth weighing the cost against what your own hours are worth."
- **Not ready, or decided not to proceed:** "The timing wasn't quite right then, so I wanted to check in and see how things have grown since."
- **Hired directly, other options, another agency:** "I hope that's been working well for you. A lot can change in a few years, though." Then extra capacity, or cover when their person is away.
- **Said they'd be in touch later:** "you mentioned you'd come back to it down the track, so I wanted to follow up as promised."
- **COVID or other outside events:** name it kindly, for example "when the COVID lockdowns had just turned everything upside down".
- **Needed a specialist:** "We can find specialist Angels as well as generalists."

**Middle:** use what they asked for in the HubSpot deal `description` ("How we can Help"). Add industry tasks:
- Trades: quotes, job scheduling, invoicing, customer follow-ups ("so you can stay on the tools")
- Real estate: listings, client follow-ups, paperwork, scheduling
- Education: student enquiries, bookings
- Agencies: campaign support, reporting

Always end the middle with "You can start at 20 hours a week and add more as you grow."

Don't invent discounts, offers, prices, statistics or results. Don't mention past discounts from deal names.

For more than about 10 leads, write the emails to a JSON file in the scratchpad first. Then create the drafts and confirm them with `list_drafts`. Recreate any that are missing.

## Report back

Tell Gail, briefly:
- Which rows were filled (for example 973–1002), and any row not found in HubSpot
- How many drafts were created, and that nothing was sent
- Who was skipped and why, in groups
- That the next empty row is {end + 1}
- Anything to check, such as missing phones or odd deal names
