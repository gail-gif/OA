"""Build a Freedom Audit proposal deck from the OA proposal template.

Usage:
    python3 build_proposal.py <fields.json> <output.pptx>

The template is the 7-slide Outsourcing Angel proposal (cover, what we heard,
role at a glance, two packages, pricing, Freedom Plan deposit, next steps).
Every field in FIELDS must be present in the JSON; the script fails if any is
missing, so no text from the original template client leaks into a new deck.
See ../reference/example_fields.json for a complete example.
"""
import json
import shutil
import sys
import tempfile
import zipfile
from pathlib import Path

TEMPLATE = Path(__file__).resolve().parent.parent / "template" / "proposal_template.pptx"

# (slide number, text in the template, field key). List fields use "key.N" or "key.N.sub".
FIELDS = [
    (1, "Your Angel Essential Proposal", "title"),
    (1, "One dedicated Angel to run your inquiries, so your team can stay on the creative work.", "subtitle"),
    (1, "Krystie Cekic  ·  The Play Agency", "prepared_for"),

    (2, "Your busiest season, at capacity", "heard.0.title"),
    (2, "It's peak time of year for events and your small team is stretched — so getting support in place quickly matters.", "heard.0.body"),
    (2, "The process is already well-built", "heard.1.title"),
    (2, "Pipedrive, pre-prepared email templates and a clear hand-off to your event designers. It needs a dedicated owner, not a redesign.", "heard.1.body"),
    (2, "One person, kept simple", "heard.2.title"),
    (2, "A single Angel, managed by you directly, working alongside your event designers — as simple as possible, without too many hands in the pie.", "heard.2.body"),
    (2, "Room to do more", "heard.3.title"),
    (2, "As you onboard them, there are PA-style tasks for you as CEO and content scheduling that could fill any spare time.", "heard.3.body"),

    (3, "Your inquiry-to-event flow, handled", "role_title"),
    (3, "Inquiry lands", "steps.0.title"),
    (3, "New website inquiries arrive in your Pipedrive inbox.", "steps.0.desc"),
    (3, "Reply & screen", "steps.1.title"),
    (3, "A same-day reply, within about six hours, using your templates to gather the date, time, brief and budget.", "steps.1.desc"),
    (3, "Create the deal", "steps.2.title"),
    (3, "Sync the email to a Pipedrive deal, label it and enter the details.", "steps.2.desc"),
    (3, "Hand to a designer", "steps.3.title"),
    (3, "Assign the deal, with notes, to the right event designer.", "steps.3.desc"),
    (3, "Artist invite", "steps.4.title"),
    (3, "Send the calendar invitation to the artist.", "steps.4.desc"),
    (3, "Chase invoices", "steps.5.title"),
    (3, "Follow up on unpaid invoices for upcoming events, using your templates.", "steps.5.desc"),
    (3, "20 hrs / week", "cards.0.title"),
    (3, "Four hours a day to start — growing gradually if you need more.", "cards.0.desc"),
    (3, "Reports to you", "cards.1.title"),
    (3, "You onboard them and oversee the process; they work directly with your event designers.", "cards.1.desc"),
    (3, "Part of the team", "cards.2.title"),
    (3, "Pipedrive-fluent, email-first, and added to your team chat like a new employee.", "cards.2.desc"),

    (4, "ANGEL ESSENTIAL", "packages.label"),
    (4, "Simple support, with you in the driver's seat", "packages.title"),
    (4, "What's included", "packages.left_title"),
    (4, "Candidate profiles with skills, work history and an intro video", "packages.left_items.0"),
    (4, "Payroll handled for your Angel", "packages.left_items.1"),
    (4, "One dedicated Project Manager, checking in monthly", "packages.left_items.2"),
    (4, "Your Freedom Plan blueprint, included", "packages.left_items.3"),
    (4, "Health vouchers, an annual incentive and quarterly meetups funded for your Angel", "packages.left_items.4"),
    (4, "Free replacement within the first 30 days, and a fair fee after", "packages.left_items.5"),
    (4, "You stay in control", "packages.right_title"),
    (4, "You manage the day-to-day and set the priorities", "packages.right_items.0"),
    (4, "Your Angel joins your team chat from day one", "packages.right_items.1"),
    (4, "Extra tasks are welcome, so long as they fit their skills", "packages.right_items.2"),
    (4, "Start at 20 hours and build up gradually, with no jump to full-time required", "packages.right_items.3"),
    (4, "Want more hands-on support later? Angel Managed adds a Team Leader and an Account Manager.", "packages.note"),

    (5, "AGENCY FEE", "pricing.col1_label"),
    (5, "$720/mo", "pricing.col1_value"),
    (5, "The standard $800, with your 10% welcome discount already applied. Covers payroll, your Project Manager and your Freedom Plan.", "pricing.col1_desc"),
    (5, "YOUR ANGEL'S HOURLY RATE", "pricing.col2_label"),
    (5, "$10–$15/hr", "pricing.col2_value"),
    (5, "Set by each candidate based on their experience, and visible on their profile before you decide. We take no cut of it.", "pricing.col2_desc"),
    (5, "EST. TOTAL", "pricing.col3_label"),
    (5, "$1,590–", "pricing.col3_value_line1"),
    (5, "$2,020", "pricing.col3_value_line2"),
    (5, "AUD per month, excl. tax, at 20 hrs/week (4 hrs/day)", "pricing.col3_desc"),
    (5, "a $500 refundable Freedom Plan deposit — explained on the next page", "pricing.begin_text"),
    (5, "The estimated total is the agency fee plus your Angel's pay, so it moves with the rate of the candidate you choose and the hours you settle on.", "pricing.footnote"),

    (6, "3-month minimum, then 30 days' notice to cancel", "freedom.term_bullet"),
    (6, "You choose from 3–4 candidate profiles, with optional skills testing first", "freedom.choose_bullet"),

    (7, "Let's get you moving before the rush", "next.title"),
    (7, "The refundable $500 starts your Freedom Plan.", "next.step1_desc"),
    (7, "We book it as early as Monday and draft your tasks, KPIs and success metrics.", "next.step2_desc"),
    (7, "Typically 1–2 weeks, and sooner if we already have a match in our pool.", "next.step3_desc"),
    (7, "Meet 3–4 profiles, choose your Angel, and onboard them into your team.", "next.step4_desc"),
    (7, "payments.outsourcingangel.com/service-deposit-form/", "next.deposit_link"),
]
FOOTER_TEMPLATE = "OUTSOURCING ANGEL  ·  PROPOSAL FOR THE PLAY AGENCY"


def esc(s):
    return s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("'", "&apos;")


def lookup(data, key):
    cur = data
    for part in key.split("."):
        if isinstance(cur, list):
            idx = int(part)
            if idx >= len(cur):
                raise KeyError(key)
            cur = cur[idx]
        else:
            cur = cur[part]
    if not isinstance(cur, str) or not cur.strip():
        raise KeyError(key)
    return cur


def main():
    fields_path, out_path = Path(sys.argv[1]), Path(sys.argv[2])
    data = json.loads(fields_path.read_text(encoding="utf-8"))

    missing = []
    for _, _, key in FIELDS:
        try:
            lookup(data, key)
        except (KeyError, TypeError, ValueError):
            missing.append(key)
    if "footer_name" not in data:
        missing.append("footer_name")
    if missing:
        sys.exit("Missing or empty fields: " + ", ".join(missing))

    with tempfile.TemporaryDirectory() as tmp:
        work = Path(tmp) / "deck"
        with zipfile.ZipFile(TEMPLATE) as z:
            z.extractall(work)

        footer_new = f"OUTSOURCING ANGEL  ·  PROPOSAL FOR {data['footer_name'].upper()}"
        not_found = []
        for n in range(1, 8):
            p = work / "ppt" / "slides" / f"slide{n}.xml"
            xml = p.read_text(encoding="utf-8")
            pairs = [(old, lookup(data, key)) for s, old, key in FIELDS if s == n]
            pairs.append((FOOTER_TEMPLATE, footer_new))
            for old, new in pairs:
                tag = f"<a:t>{esc(old)}</a:t>"
                if tag not in xml:
                    not_found.append((n, old))
                    continue
                xml = xml.replace(tag, f"<a:t>{esc(new)}</a:t>", 1)
            p.write_text(xml, encoding="utf-8")
        if not_found:
            sys.exit(f"Template text not found (template changed?): {not_found}")

        core = work / "docProps" / "core.xml"
        doc_title = esc(data.get("doc_title", data["title"]))
        core.write_text(core.read_text(encoding="utf-8").replace(
            "<dc:title>PptxGenJS Presentation</dc:title>", f"<dc:title>{doc_title}</dc:title>"), encoding="utf-8")

        out_path = out_path.resolve()
        if out_path.exists():
            out_path.unlink()
        with zipfile.ZipFile(out_path, "w", zipfile.ZIP_DEFLATED) as z:
            for f in sorted(work.rglob("*")):
                if f.is_file():
                    z.write(f, f.relative_to(work).as_posix())
    print(f"ok: {out_path}")


if __name__ == "__main__":
    main()
