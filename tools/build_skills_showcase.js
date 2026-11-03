const pptxgen = require("pptxgenjs");
const React = require("react");
const RDS = require("react-dom/server");
const sharp = require("sharp");
const fi = require("react-icons/fi");
const { applyTheme } = require("/root/.claude/skills/synced/805f6df2-4dec-4b14-9289-aa5ce86823ec_3fc63247-1737-472d-ba6b-53ea8e24c4c9/pptx/scripts/apply_theme.js");
const fs = require("fs");

const THEME = { name: "OA Teal", headFontFace: "Calibri", bodyFontFace: "Calibri",
  colors: { dk1: "2B302E", lt1: "FFFFFF", dk2: "0E4F43", lt2: "EEF6F3",
    accent1: "3EAE8C", accent2: "E8A23A", accent3: "0E4F43", accent4: "6B7570", accent5: "CFE7DE", accent6: "3F4442",
    hlink: "0E4F43", folHlink: "3EAE8C" } };
const HEX = THEME.colors;

async function icon(name, color) {
  const svg = RDS.renderToStaticMarkup(React.createElement(fi[name], { color: "#" + color, size: 256 }));
  const buf = await sharp(Buffer.from(svg)).resize(256, 256).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}
const LOGO = "image/png;base64," + fs.readFileSync("logo.png").toString("base64");

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
  pres.title = "Gail's Claude Skills";
  pres.author = "Gail Galima-Mendoza";
  pres.company = "Outsourcing Angel";
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  const C = pres.SchemeColor;

  pres.defineSlideMaster({ title: "TITLE", background: { color: "FFFFFF" },
    objects: [
      { image: { data: LOGO, x: 0.7, y: 0.6, w: 3.3, h: 0.4 } },
      { placeholder: { options: { name: "title", type: "title", x: 0.7, y: 2.1, w: 7.0, h: 1.9, fontSize: 54, bold: true, color: C.text1, valign: "bottom", align: "left", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: 0.7, y: 4.2, w: 7.0, h: 1.4, fontSize: 20, color: C.accent4, valign: "top", align: "left", margin: 0 }, text: "" } },
    ] });
  pres.defineSlideMaster({ title: "CONTENT", background: { color: "FFFFFF" },
    objects: [
      { image: { data: LOGO, x: 0.6, y: 6.98, w: 1.9, h: 0.23 } },
      { placeholder: { options: { name: "kicker", type: "body", x: 0.6, y: 0.35, w: 12.1, h: 0.35, fontSize: 14, bold: true, color: C.accent1, align: "left", margin: 0, charSpacing: 2 }, text: "" } },
      { placeholder: { options: { name: "title", type: "title", x: 0.6, y: 0.7, w: 12.1, h: 0.85, fontSize: 36, bold: true, color: C.text1, valign: "top", align: "left", margin: 0 }, text: "" } },
    ],
    slideNumber: { x: 12.2, y: 6.92, w: 0.5, h: 0.3, fontSize: 11, color: "6B7570", align: "right" } });
  pres.defineSlideMaster({ title: "DARK", background: { color: HEX.dk2 },
    objects: [
      { placeholder: { options: { name: "title", type: "title", x: 0.8, y: 1.0, w: 11.7, h: 1.6, fontSize: 48, bold: true, color: C.background1, valign: "bottom", align: "left", margin: 0 }, text: "" } },
    ] });

  const I = {};
  const names = ["FiMail","FiInbox","FiUserCheck","FiMessageCircle","FiRefreshCw","FiUsers","FiSearch","FiTarget","FiPhoneCall","FiFileText","FiClipboard","FiCalendar","FiBarChart2","FiSun","FiMonitor","FiEdit3","FiPieChart","FiFilter","FiFlag","FiGift","FiCpu","FiBookOpen","FiCheckSquare","FiShield","FiZap","FiArrowRight","FiCheckCircle","FiTerminal","FiSend","FiLink"];
  for (const n of names) { I[n] = await icon(n, "FFFFFF"); I[n + "_t"] = await icon(n, HEX.accent1); I[n + "_d"] = await icon(n, HEX.dk2); }

  function card(s, x, y, w, h, ic, name, cmd, desc, isNew, ds = 15) {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.12, fill: { color: C.background2 }, line: { type: "none" }, objectName: "Card " + name });
    s.addShape(pres.shapes.OVAL, { x: x + 0.3, y: y + 0.3, w: 0.62, h: 0.62, fill: { color: C.accent1 }, line: { type: "none" }, objectName: "Icon circle " + name });
    s.addImage({ data: I[ic], x: x + 0.45, y: y + 0.45, w: 0.32, h: 0.32, altText: name + " icon", objectName: "Icon " + name });
    s.addText(name, { x: x + 1.1, y: y + 0.26, w: w - 1.3, h: 0.4, fontSize: 19, bold: true, color: C.text1, margin: 0, isTextBox: true, objectName: "Name " + name, fit: "none" });
    s.addText(cmd, { x: x + 1.1, y: y + 0.64, w: w - 1.3, h: 0.3, fontSize: (cmd.length > 20 && w < 5) ? 12 : 14, color: C.accent3, margin: 0, isTextBox: true, fontFace: "Consolas", objectName: "Command " + name });
    s.addText(desc, { x: x + 0.3, y: y + 1.12, w: w - 0.6, h: h - 1.3, fontSize: ds, color: C.text1, margin: 0, valign: "top", isTextBox: true, objectName: "Desc " + name });
    if (isNew) {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: x + w - 0.95, y: y + h - 0.48, w: 0.75, h: 0.3, rectRadius: 0.15, fill: { color: C.accent2 }, line: { type: "none" }, objectName: "New chip " + name });
      s.addText("NEW", { x: x + w - 0.95, y: y + h - 0.48, w: 0.75, h: 0.3, fontSize: 11, bold: true, color: C.background1, align: "center", valign: "middle", margin: 0, isTextBox: true, objectName: "New label " + name });
    }
  }
  function grid(s, items, cols, rows, top = 1.8, bottom = 6.75, ds = 15) {
    const L = 0.6, W = 12.13, gap = 0.3, H = bottom - top;
    const cw = (W - gap * (cols - 1)) / cols, ch = (H - gap * (rows - 1)) / rows;
    items.forEach((it, i) => card(s, L + (i % cols) * (cw + gap), top + Math.floor(i / cols) * (ch + gap), cw, ch, it[0], it[1], it[2], it[3], !!it[4], ds));
  }
  function content(section, kicker, title) {
    const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: section });
    s.addText(kicker, { placeholder: "kicker" });
    s.addText(title, { placeholder: "title" });
    return s;
  }

  // 1 Title
  pres.addSection({ title: "Intro" });
  let s = pres.addSlide({ masterName: "TITLE", sectionTitle: "Intro" });
  s.addText("My Claude Skills", { placeholder: "title" });
  s.addText("23 sales workflows I built with Claude\nGail Galima-Mendoza · Freedom Plan Specialist\n9 Oct – 3 Nov 2026", { placeholder: "body" });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.4, y: 1.3, w: 4.2, h: 4.9, rectRadius: 0.2, fill: { color: C.text2 }, line: { type: "none" }, objectName: "Hero panel" });
  s.addText("23", { x: 8.4, y: 2.0, w: 4.2, h: 2.0, fontSize: 130, bold: true, color: C.background1, align: "center", valign: "middle", margin: 0, isTextBox: true, objectName: "Hero number" });
  s.addText("skills, each one a single command", { x: 8.8, y: 4.15, w: 3.4, h: 0.9, fontSize: 20, color: C.accent5, align: "center", valign: "top", margin: 0, isTextBox: true, objectName: "Hero label" });
  s.addNotes("Over the last few weeks I've turned the work I do every day into 23 Claude skills. Each one is a saved workflow I run with a single command, like /weekly-sales-report.");

  // 2 At a glance
  s = content("Intro", "AT A GLANCE", "Four weeks of sales work, done with Claude");
  const stats = [["23", "skills built"], ["17", "Claude work sessions"], ["~300", "tasks completed"], ["~700", "email drafts created"], ["~296", "lost leads reactivated"], ["~260", "BDM leads filled"]];
  stats.forEach(([v, l], i) => {
    const x = 0.6 + (i % 3) * 4.14, y = 1.85 + Math.floor(i / 3) * 2.45;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w: 3.84, h: 2.15, rectRadius: 0.12, fill: { color: i === 0 ? C.text2 : C.background2 }, line: { type: "none" }, objectName: "Stat card " + l });
    s.addText(v, { x: x + 0.35, y: y + 0.25, w: 3.2, h: 1.1, fontSize: 60, bold: true, color: i === 0 ? C.background1 : C.accent3, margin: 0, valign: "middle", isTextBox: true, objectName: "Stat value " + l });
    s.addText(l, { x: x + 0.35, y: y + 1.4, w: 3.2, h: 0.5, fontSize: 18, color: i === 0 ? C.accent5 : C.text1, margin: 0, isTextBox: true, objectName: "Stat label " + l });
  });
  s.addNotes("17 work sessions and about 300 tasks. Around 700 email drafts, nearly 300 lost leads and 260 BDM leads worked through. Counts are rounded because some batches were partial.");

  // 3 Journey
  s = content("Intro", "THE CLIENT JOURNEY", "A skill for every step, from first call to placed Angel");
  const steps = [["Freedom Audit", ["/freedom-audit", "/call-analysis"], "FiTarget"], ["Proposal", ["/freedom-audit", "/ghl-notes"], "FiFileText"], ["Deposit", ["/sales-calendar-notes", "/email-reply"], "FiCheckCircle"], ["Alignment Call", ["/alignment-call", "/meeting-booking"], "FiPhoneCall"], ["Freedom Plan", ["/freedom-plan"], "FiBookOpen"], ["Candidates", ["/candidate-profiles-email"], "FiUserCheck"]];
  steps.forEach(([lab, sk, ic], i) => {
    const cx = 0.6 + i * 2.07, w = 1.85;
    s.addShape(pres.shapes.OVAL, { x: cx + (w - 1.1) / 2, y: 2.0, w: 1.1, h: 1.1, fill: { color: i === 3 ? C.accent2 : C.accent1 }, line: { type: "none" }, objectName: "Step circle " + lab });
    s.addImage({ data: I[ic], x: cx + (w - 0.5) / 2, y: 2.3, w: 0.5, h: 0.5, altText: lab, objectName: "Step icon " + lab });
    if (i < steps.length - 1) s.addImage({ data: I["FiArrowRight_t"], x: cx + w - 0.05, y: 2.38, w: 0.32, h: 0.32, altText: "next", objectName: "Arrow " + i });
    s.addText(`${i + 1}. ${lab}`, { x: cx, y: 3.3, w, h: 0.5, fontSize: 18, bold: true, color: C.text1, align: "center", margin: 0, isTextBox: true, objectName: "Step label " + lab });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: cx, y: 3.95, w, h: 1.5, rectRadius: 0.1, fill: { color: C.background2 }, line: { type: "none" }, objectName: "Step skills bg " + lab });
    s.addText(sk.map((t, j) => ({ text: t, options: { breakLine: j < sk.length - 1 } })), { x: cx + 0.1, y: 4.05, w: w - 0.2, h: 1.3, fontSize: 14, color: C.accent3, fontFace: "Consolas", align: "center", valign: "middle", margin: 0, paraSpaceAfter: 6, isTextBox: true, objectName: "Step skills " + lab });
  });
  s.addText("Plus /call-analysis after every recorded call, and /sales-calendar-notes to log each stage in Notion.", { x: 0.6, y: 5.9, w: 12.1, h: 0.5, fontSize: 16, italic: true, color: C.accent4, margin: 0, isTextBox: true, objectName: "Journey footnote" });
  s.addNotes("This is how the skills follow a client through our journey. The Alignment Call step is new this week.");

  // 4-8 categories
  pres.addSection({ title: "The skills" });
  s = content("The skills", "EMAIL & COMMUNICATION · 4 SKILLS", "Every reply drafted in my voice, in the right thread");
  grid(s, [
    ["FiMail", "Email Reply", "/email-reply", "Drafts a reply or follow-up in the existing thread, with the same CCs, in my warm tone."],
    ["FiInbox", "Follow-Up Sweep", "/follow-up-sweep", "Finds everyone who hasn't replied and drafts a short nudge for each. Lists emails I haven't answered."],
    ["FiUserCheck", "Candidate Profiles Email", "/candidate-profiles-email", "Sends shortlisted Angel profiles and the Freedom Plan in a warm, personal email."],
    ["FiMessageCircle", "Message to Ms Linh", "/message-to-linh", "Short WhatsApp-style updates and review requests to Ms Linh and Ms Wendy."],
  ], 2, 2);
  s.addNotes("These are my most-used skills. Email Reply alone runs dozens of times a day. Everything is a draft; nothing is sent until I check it.");

  s = content("The skills", "LEAD GENERATION & REACTIVATION · 3 SKILLS", "Old leads worked back into the pipeline, 30 at a time");
  grid(s, [
    ["FiRefreshCw", "Lost Leads", "/lost-leads", "Pulls old lost deals from HubSpot into the Lost Leads sheet and drafts a personal “It's been a while” email for each, 30 per batch."],
    ["FiUsers", "BDM Leads", "/bdm-leads", "Fills the BDM tab with lead details from HubSpot and drafts a re-engagement email for each, 30 rows per batch."],
    ["FiSearch", "Lead-Gen Diagnosis", "/lead-gen-diagnosis", "Marketing and SEO review of why inbound leads are low, with a simple 90-day plan to fix it."],
  ], 3, 1, 1.8, 5.2, 18);
  s.addText("~296 lost leads and ~260 BDM leads processed so far", { x: 0.6, y: 5.65, w: 12.1, h: 0.6, fontSize: 22, bold: true, color: C.accent3, margin: 0, isTextBox: true, objectName: "Lead footnote" });
  s.addNotes("Lost Leads and BDM Leads run almost daily. Each batch adds 30 leads to the sheet and creates a personal email for each one.");

  s = content("The skills", "CLIENT JOURNEY · 6 SKILLS", "From Freedom Audit to Freedom Plan, nothing missed");
  grid(s, [
    ["FiTarget", "Freedom Audit", "/freedom-audit", "Call script before. After: proposal deck, email and Notion update from the Fathom recording."],
    ["FiPhoneCall", "Alignment Call", "/alignment-call", "Call script with Freedom Plan checklist, pre-call and recap emails, Recruitment brief.", true],
    ["FiZap", "Call Analysis", "/call-analysis", "Summary, coaching scorecard, objections, P.A.I.N. score and pricing check for any call.", true],
    ["FiBookOpen", "Freedom Plan", "/freedom-plan", "A 30-slide living plan: our recommendation plus the playbook the client keeps."],
    ["FiClipboard", "CRM Notes (GHL)", "/ghl-notes", "Ready-to-paste GHL opportunity and “Freedom Audit Summary” note."],
    ["FiCalendar", "Meeting Booking", "/meeting-booking", "Calendar invites with Meet links, US/AU/PH time zones and reminders."],
  ], 3, 2);
  s.addNotes("Six skills cover the whole client journey. Alignment Call and Call Analysis are new this week.");

  s = content("The skills", "REPORTING, DATA & DASHBOARD · 6 SKILLS", "Reports, Notion and the dashboard kept up to date");
  grid(s, [
    ["FiSend", "Weekly Sales Report", "/weekly-sales-report", "Weekly and month-to-date Sales Update for Ms Linh, from Notion and Gmail."],
    ["FiSun", "Weekly Huddle", "/weekly-huddle", "Monday Huddle in Notion: achievements, priorities, learning, challenges."],
    ["FiMonitor", "Sales Dashboard", "/sales-dashboard", "Live OA Sales Pulse: explains any number, changes panels, team walkthrough.", true],
    ["FiEdit3", "Sales Calendar Notes", "/sales-calendar-notes", "Dated notes and my 8-part call notes on every Notion card, at every stage.", true],
    ["FiPieChart", "Sales Numbers", "/sales-numbers", "My 15 sales metrics and quarter-on-quarter comparisons."],
    ["FiFilter", "Calendar Clean-Up", "/sales-calendar-cleanup", "Fixes stale leads, deposits not marked Won, missing sources and duplicates."],
  ], 3, 2);
  s.addNotes("The weekly report and huddle now take minutes. The Sales Dashboard reads Notion live, and the new notes skill keeps every card complete.");

  s = content("The skills", "STRATEGY, GROWTH & FOUNDATION · 4 SKILLS", "Bigger-picture work, and the rules behind every skill");
  grid(s, [
    ["FiFlag", "Quarterly Rocks", "/quarterly-rocks", "Rock recap deck, Notion Rock reports, a 6-minute presenter script and next quarter's Rocks."],
    ["FiGift", "Promo Playbook", "/promo-playbook", "Seasonal promotions written as sales pitches (pitch, objection, close), plus the email to Marketing."],
    ["FiCpu", "Fractional Partner", "/fractional-partner", "Pricing slides, sales framework, commission maths and emails for our Fractional AI & Marketing offer."],
    ["FiShield", "OA Basics", "/oa-basics", "My rules, team contacts, links, pricing and quick maths. Every other skill reads this first."],
  ], 2, 2);
  s.addNotes("Strategy work like Rocks and promos, plus OA Basics, which holds the rules every other skill follows.");

  // 9 Spotlight Call Analysis
  pres.addSection({ title: "Spotlight" });
  s = content("Spotlight", "NEW · SPOTLIGHT", "Call Analysis: coaching on every recorded call");
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 1.85, w: 4.6, h: 4.9, rectRadius: 0.15, fill: { color: C.text2 }, line: { type: "none" }, objectName: "Spotlight panel" });
  s.addImage({ data: I["FiPhoneCall"], x: 1.0, y: 2.25, w: 0.7, h: 0.7, altText: "Phone", objectName: "Spotlight icon" });
  s.addText("Fathom is now connected to Claude", { x: 1.0, y: 3.15, w: 3.9, h: 0.9, fontSize: 24, bold: true, color: C.background1, margin: 0, isTextBox: true, objectName: "Spotlight heading" });
  s.addText([{ text: "Try it:", options: { bold: true, breakLine: true } }, { text: "/call-analysis Matt Stone", options: { fontFace: "Consolas" } }], { x: 1.0, y: 4.3, w: 3.9, h: 1.0, fontSize: 18, color: C.accent5, margin: 0, isTextBox: true, objectName: "Spotlight example" });
  s.addText("Works for Freedom Audits, Alignment Calls, presentations and partner calls. It can also compare a whole week of calls.", { x: 1.0, y: 5.4, w: 3.9, h: 1.1, fontSize: 15, color: C.background1, margin: 0, isTextBox: true, objectName: "Spotlight note" });
  const parts = [["Summary", "what happened, and the client's needs in their own words"], ["Coaching scorecard", "8 areas, from opening to close, with a tip for each"], ["Objections", "what was said, and a better line if needed"], ["P.A.I.N. score", "Problem, Aligned, Investment, Now (out of 8)"], ["Pricing check", "flags any figure that doesn't match our offer"], ["Promises & next steps", "everything I said I'd send, with dates"]];
  parts.forEach(([h, d], i) => {
    const y = 1.9 + i * 0.8;
    s.addImage({ data: I["FiCheckCircle_t"], x: 5.6, y: y + 0.08, w: 0.4, h: 0.4, altText: "check", objectName: "Check " + h });
    s.addText([{ text: h + "  ", options: { bold: true } }, { text: d }], { x: 6.2, y, w: 6.5, h: 0.6, fontSize: 17, color: C.text1, margin: 0, valign: "middle", isTextBox: true, objectName: "Part " + h });
  });
  s.addNotes("Fathom is now connected, so Claude can read any of my calls and coach me on them. Each part shows here, and it offers the right follow-up afterwards.");

  // 10 Results
  pres.addSection({ title: "Results" });
  s = content("Results", "RESULTS SO FAR · 9 OCT – 2 NOV 2026", "Hundreds of hours of admin handed to Claude");
  s.addChart(pres.charts.BAR, [{ name: "Volume", labels: ["Email drafts", "Lost leads", "BDM leads", "Notion records"], values: [700, 296, 260, 150] }], {
    x: 0.6, y: 1.8, w: 6.4, h: 4.9, barDir: "bar", chartColors: [HEX.accent1], showValue: true, dataLabelPosition: "outEnd", dataLabelFontSize: 14, dataLabelColor: HEX.dk1, dataLabelFontFace: "+mn-lt",
    catAxisLabelColor: HEX.dk1, catAxisLabelFontSize: 14, catAxisLabelFontFace: "+mn-lt", valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, showLegend: false,
    showTitle: true, title: "Approximate volume handled", titleFontSize: 16, titleColor: HEX.dk1, titleFontFace: "+mn-lt", catAxisOrientation: "maxMin", barGapWidthPct: 60, objectName: "Volume chart" });
  const res = [["6", "Freedom Plans", "Yasmine, Rob Zhang, Hank, Tom, May, Krystie"], ["8", "Client proposals", "May, KayPark, Henry, Jordan & Jennifer, Matt, Kinsen, Mariana, Dr K"], ["7", "Freedom Audit scripts", "Henry, Danielle, Jason, Kinsen, Sharon, Dr K, Claire"], ["4", "Weekly sales reports", "plus Monday Huddles, Q2 Rocks deck and dashboard"]];
  res.forEach(([n, l, d], i) => {
    const y = 1.85 + i * 1.22;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.4, y, w: 5.33, h: 1.05, rectRadius: 0.1, fill: { color: C.background2 }, line: { type: "none" }, objectName: "Result card " + l });
    s.addText(n, { x: 7.55, y, w: 0.95, h: 1.05, fontSize: 40, bold: true, color: C.accent3, align: "center", valign: "middle", margin: 0, isTextBox: true, objectName: "Result num " + l });
    s.addText([{ text: l, options: { bold: true, fontSize: 17, breakLine: true } }, { text: d, options: { fontSize: 13, color: C.accent4 } }], { x: 8.6, y: y + 0.08, w: 4.0, h: 0.9, color: C.text1, valign: "middle", margin: 0, isTextBox: true, objectName: "Result text " + l });
  });
  s.addNotes("Counts are approximate. Client work: 6 Freedom Plans, 8 proposals, 7 audit scripts and 4 weekly reports.");

  // 11 Rules + tools
  s = content("Results", "BUILT-IN RULES", "Every skill follows the same house rules");
  const rules = [["FiEdit3", "Drafts only", "Nothing is sent until I say so"], ["FiLink", "Same thread, same CCs", "Replies stay where the conversation is"], ["FiShield", "Never invents prices", "Only approved offers and terms"], ["FiMessageCircle", "Warm and simple", "My voice, no tables, short beats long"], ["FiCheckSquare", "“Shopping and comparing”", "Never “price” as a lost reason"], ["FiUserCheck", "One client at a time", "Proofread twice, no mixed details"]];
  rules.forEach(([ic, h, d], i) => {
    const x = 0.6 + (i % 2) * 6.2, y = 1.85 + Math.floor(i / 2) * 1.2;
    s.addShape(pres.shapes.OVAL, { x, y: y + 0.05, w: 0.7, h: 0.7, fill: { color: C.accent1 }, line: { type: "none" }, objectName: "Rule circle " + h });
    s.addImage({ data: I[ic], x: x + 0.18, y: y + 0.23, w: 0.34, h: 0.34, altText: h, objectName: "Rule icon " + h });
    s.addText([{ text: h, options: { bold: true, fontSize: 18, breakLine: true } }, { text: d, options: { fontSize: 15, color: C.accent4 } }], { x: x + 0.95, y, w: 5.0, h: 0.85, color: C.text1, valign: "middle", margin: 0, isTextBox: true, objectName: "Rule text " + h });
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: 5.6, w: 12.13, h: 1.1, rectRadius: 0.1, fill: { color: C.background2 }, line: { type: "none" }, objectName: "Tools bg" });
  s.addText([{ text: "Connected:  ", options: { bold: true, color: C.accent3 } }, { text: "Gmail · Google Calendar · Drive, Docs & Sheets · Notion · HubSpot · Fathom · GitHub", options: { breakLine: true } }, { text: "Next to connect:  ", options: { bold: true, color: C.accent3 } }, { text: "GoHighLevel · JustCall · Google Chat" }], { x: 0.9, y: 5.65, w: 11.6, h: 1.0, fontSize: 16, color: C.text1, valign: "middle", margin: 0, isTextBox: true, objectName: "Tools text" });
  s.addNotes("These rules live in OA Basics, so every skill behaves the same way.");

  // 12 How to use
  s = content("Results", "HOW IT WORKS", "Three steps, one command");
  const how = [["FiTerminal", "1. Type the command", "Open Claude in the OA workspace and type the skill name plus the client, e.g.", "/freedom-audit Kinsen"], ["FiZap", "2. Claude does the work", "It reads Fathom, Gmail, Notion and HubSpot, then builds the draft, deck or report.", ""], ["FiCheckCircle", "3. I check and send", "Everything lands as a draft. I review it, make changes and send it myself.", ""]];
  how.forEach(([ic, h, d, ex], i) => {
    const x = 0.6 + i * 4.14;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.85, w: 3.84, h: 4.3, rectRadius: 0.12, fill: { color: i === 1 ? C.text2 : C.background2 }, line: { type: "none" }, objectName: "How card " + h });
    s.addShape(pres.shapes.OVAL, { x: x + 0.35, y: 2.2, w: 0.9, h: 0.9, fill: { color: C.accent1 }, line: { type: "none" }, objectName: "How circle " + h });
    s.addImage({ data: I[ic], x: x + 0.57, y: 2.42, w: 0.46, h: 0.46, altText: h, objectName: "How icon " + h });
    s.addText(h, { x: x + 0.35, y: 3.35, w: 3.2, h: 0.5, fontSize: 21, bold: true, color: i === 1 ? C.background1 : C.text1, margin: 0, isTextBox: true, objectName: "How head " + h });
    s.addText(d, { x: x + 0.35, y: 3.95, w: 3.2, h: 1.3, fontSize: 16, color: i === 1 ? C.background1 : C.text1, margin: 0, valign: "top", isTextBox: true, objectName: "How desc " + h });
    if (ex) s.addText(ex, { x: x + 0.35, y: 5.3, w: 3.2, h: 0.45, fontSize: 16, bold: true, fontFace: "Consolas", color: C.accent3, margin: 0, isTextBox: true, objectName: "How example" });
  });
  s.addText("Most tasks that took 30–60 minutes now take a few minutes to check.", { x: 0.6, y: 6.3, w: 12.1, h: 0.45, fontSize: 16, italic: true, color: C.accent4, margin: 0, isTextBox: true, objectName: "How footnote" });
  s.addNotes("Show a live example here if there's time, e.g. /call-analysis on today's call.");

  // 13 Closing
  pres.addSection({ title: "Close" });
  s = pres.addSlide({ masterName: "DARK", sectionTitle: "Close" });
  s.addText("More time for selling", { placeholder: "title" });
  s.addText("The admin runs on Claude. My time goes to clients, calls and closing.", { x: 0.8, y: 2.75, w: 11.7, h: 0.6, fontSize: 22, color: C.accent5, margin: 0, isTextBox: true, objectName: "Close sub" });
  const nexts = [["Share", "Make all 23 skills available in every team session"], ["Connect", "Add GoHighLevel and JustCall to Claude"], ["Try", "Run /call-analysis on your next recorded call"]];
  nexts.forEach(([h, d], i) => {
    const x = 0.8 + i * 3.97;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 4.0, w: 3.67, h: 1.9, rectRadius: 0.12, fill: { color: C.background1, transparency: 88 }, line: { color: C.accent1, width: 1 }, objectName: "Next card " + h });
    s.addText(h, { x: x + 0.3, y: 4.25, w: 3.1, h: 0.55, fontSize: 24, bold: true, color: C.accent1, margin: 0, isTextBox: true, objectName: "Next head " + h });
    s.addText(d, { x: x + 0.3, y: 4.9, w: 3.1, h: 1.1, fontSize: 17, color: C.background1, margin: 0, valign: "top", isTextBox: true, objectName: "Next desc " + h });
  });
  s.addNotes("Next steps: share the skills with the team, connect GHL and JustCall, and try Call Analysis on your next call.");

  const out = "/home/user/OA/Gail_Claude_Skills_Showcase.pptx";
  await pres.writeFile({ fileName: out });
  await applyTheme(out, THEME);
  console.log("written");
})();
