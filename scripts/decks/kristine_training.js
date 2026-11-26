const pptxgen = require("pptxgenjs");
const React = require("react");
const RDS = require("react-dom/server");
const sharp = require("sharp");
const fa = require("react-icons/fa");
const { applyTheme } = require(process.env.APPLY_THEME || "./apply_theme.js");

const OUT = process.argv[2];
const HEX = {
  navy: "1B2530", ink: "212B35", green: "1F8A6D", green2: "2FAE8B", slate: "6B7684",
  mint: "E1F3EC", mist: "F4F6F6", line: "E6E9EA", gold: "E2A53D", white: "FFFFFF",
};
const THEME = {
  name: "Outsourcing Angel", headFontFace: "Cambria", bodyFontFace: "Calibri",
  colors: { dk1: HEX.ink, lt1: HEX.white, dk2: HEX.navy, lt2: HEX.mist,
    accent1: HEX.green, accent2: HEX.green2, accent3: HEX.slate, accent4: HEX.mint,
    accent5: HEX.line, accent6: HEX.gold, hlink: HEX.green, folHlink: HEX.slate },
};

async function icon(Comp, color) {
  const svg = RDS.renderToStaticMarkup(React.createElement(Comp, { color: "#" + color, size: 256 }));
  const buf = await sharp(Buffer.from(svg)).resize(256, 256).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}

(async () => {
  const pres = new pptxgen();
  pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
  pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
  pres.title = "From Freedom Audit to Freedom Plan — Training Module";
  pres.author = "Outsourcing Angel";
  const C = pres.SchemeColor;
  // scheme aliases
  const NAVY = C.text2, INK = C.text1, WHITE = C.background1, MIST = C.background2,
    GREEN = C.accent1, GREEN2 = C.accent2, SLATE = C.accent3, MINT = C.accent4, LINE = C.accent5, GOLD = C.accent6;

  const W = 13.333, M = 0.6;
  const footer = (dark) => ({ text: { text: "OUTSOURCING ANGEL   ·   KRISTINE'S TRAINING MODULE",
    options: { x: M, y: 7.0, w: 8, h: 0.3, fontSize: 9, charSpacing: 2, color: dark ? GREEN2 : SLATE, margin: 0 } } });

  pres.defineSlideMaster({
    title: "OA Title", background: { color: NAVY },
    objects: [
      { ellipse: { x: 10.4, y: -1.6, w: 4.6, h: 4.6, fill: { color: WHITE, transparency: 94 }, line: { type: "none" } } },
      { ellipse: { x: -1.2, y: 5.8, w: 3, h: 3, fill: { color: WHITE, transparency: 94 }, line: { type: "none" } } },
      { placeholder: { options: { name: "title", type: "title", align: "left", x: M, y: 2.5, w: 12, h: 1.0, fontFace: "Cambria", fontSize: 44, bold: true, color: WHITE, valign: "top", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: M, y: 3.7, w: 9, h: 1.0, fontSize: 18, color: WHITE, valign: "top", margin: 0 }, text: "" } },
      footer(true),
    ],
  });
  pres.defineSlideMaster({
    title: "OA Divider", background: { color: NAVY },
    objects: [
      { ellipse: { x: 10.4, y: -1.6, w: 4.6, h: 4.6, fill: { color: WHITE, transparency: 94 }, line: { type: "none" } } },
      { placeholder: { options: { name: "title", type: "title", align: "left", x: M, y: 2.9, w: 11, h: 1.0, fontFace: "Cambria", fontSize: 40, bold: true, color: WHITE, valign: "top", margin: 0 }, text: "" } },
      { placeholder: { options: { name: "body", type: "body", x: M, y: 4.0, w: 10, h: 1.2, fontSize: 18, color: WHITE, valign: "top", margin: 0 }, text: "" } },
      footer(true),
    ],
    slideNumber: { x: 12.2, y: 7.0, w: 0.5, h: 0.3, fontSize: 9, color: GREEN2, align: "right" },
  });
  pres.defineSlideMaster({
    title: "OA Content", background: { color: WHITE },
    objects: [
      { placeholder: { options: { name: "eyebrow", type: "body", x: M, y: 0.45, w: 10, h: 0.3, fontSize: 11, bold: true, charSpacing: 3, color: GREEN, margin: 0 }, text: "" } },
      { placeholder: { options: { name: "title", type: "title", align: "left", x: M, y: 0.8, w: 12, h: 0.75, fontFace: "Cambria", fontSize: 34, bold: true, color: NAVY, valign: "top", margin: 0 }, text: "" } },
      footer(false),
    ],
    slideNumber: { x: 12.2, y: 7.0, w: 0.5, h: 0.3, fontSize: 9, color: SLATE, align: "right" },
  });

  const ICON = {};
  const need = { search: fa.FaSearch, compass: fa.FaCompass, bottle: fa.FaExclamationTriangle, link: fa.FaLink,
    map: fa.FaMapSigns, clock: fa.FaClock, tasks: fa.FaTasks, hand: fa.FaHandsHelping, road: fa.FaRoad, star: fa.FaStar,
    pen: fa.FaPencilRuler, list: fa.FaListUl, rocket: fa.FaRocket, user: fa.FaUserTie, chart: fa.FaChartLine,
    book: fa.FaBook, comments: fa.FaComments, check: fa.FaCheck, theater: fa.FaTheaterMasks, file: fa.FaFileAlt,
    bullseye: fa.FaBullseye, quote: fa.FaQuoteLeft, people: fa.FaUserFriends, lightbulb: fa.FaLightbulb };
  for (const [k, v] of Object.entries(need)) {
    ICON[k] = await icon(v, HEX.white);
    ICON[k + "G"] = await icon(v, HEX.green);
  }
  const circleIcon = (s, key, x, y, d, name, fill = GREEN, white = true) => {
    s.addShape(pres.shapes.OVAL, { x, y, w: d, h: d, fill: { color: fill }, line: { type: "none" }, objectName: name + " circle" });
    const p = d * 0.25;
    s.addImage({ data: ICON[white ? key : key + "G"], x: x + p, y: y + p, w: d - 2 * p, h: d - 2 * p, altText: name, objectName: name + " icon" });
  };
  const card = (s, x, y, w, h, fill, name, shadow = false) => s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x, y, w, h, rectRadius: 0.12, fill: { color: fill }, line: { color: fill === WHITE ? LINE : fill, width: 1 }, objectName: name,
    ...(shadow ? { shadow: { type: "outer", color: "000000", opacity: 0.08, blur: 8, offset: 2, angle: 90 } } : {}) });
  const T = (s, text, o) => s.addText(text, { isTextBox: true, margin: 0, valign: "top", fontSize: 14, color: INK, ...o });

  // ---------- 1. Title ----------
  pres.addSection({ title: "Introduction" });
  let s = pres.addSlide({ masterName: "OA Title", sectionTitle: "Introduction" });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: M, y: 0.7, w: 2.6, h: 0.42, rectRadius: 0.21, fill: { color: WHITE }, line: { type: "none" }, objectName: "Brand pill" });
  T(s, [{ text: "OUTSOURCING ", options: { color: NAVY, bold: true } }, { text: "ANGEL", options: { color: GREEN, bold: true } }],
    { x: M, y: 0.7, w: 2.6, h: 0.42, fontSize: 12, charSpacing: 2, align: "center", valign: "middle" });
  T(s, "TRAINING MODULE", { x: M, y: 1.75, w: 6, h: 0.35, fontSize: 13, bold: true, charSpacing: 4, color: GREEN2 });
  s.addText([{ text: "From Freedom Audit to " }, { text: "Freedom Plan", options: { color: GREEN2 } }], { placeholder: "title" });
  s.addText("Practical learning, case study & role-play to help Kristine turn client discovery into the right staffing solution.", { placeholder: "body" });
  // info chips
  const chips = [["user", "Trainee", "Kristine"], ["clock", "Duration", "90–120 minutes"], ["people", "Format", "Case study & role-play"]];
  chips.forEach(([k, lab, val], i) => {
    const x = M + i * 3.35;
    circleIcon(s, k, x, 5.2, 0.55, lab);
    T(s, lab.toUpperCase(), { x: x + 0.7, y: 5.18, w: 2.5, h: 0.25, fontSize: 10, charSpacing: 2, color: GREEN2, bold: true });
    T(s, val, { x: x + 0.7, y: 5.45, w: 2.6, h: 0.35, fontSize: 15, color: WHITE, bold: true });
  });
  s.addNotes("Welcome Kristine. Set the tone: this is a practical session — she'll analyse a real Freedom Plan and run a mock Freedom Audit.");

  // ---------- 2. Session at a glance ----------
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Introduction" });
  s.addText("SESSION AT A GLANCE", { placeholder: "eyebrow" });
  s.addText("Your training roadmap", { placeholder: "title" });
  const agenda = [
    ["A", "Understanding the Freedom Audit", "20 min", "search", 20],
    ["B", "Applying the 5D Framework", "20 min", "compass", 20],
    ["C", "Freedom Plan Case Study", "30 min", "book", 30],
    ["D", "Practical Role-Play", "30 min", "theater", 30],
    ["✓", "Knowledge Check", "15 min", "lightbulb", 15],
  ];
  // proportional timeline bar
  const tx = M, tw = W - 2 * M, total = 125; let cx = tx;
  agenda.forEach(([l, t, d, k, mins], i) => {
    const w = tw * mins / total;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: cx + 0.04, y: 2.0, w: w - 0.08, h: 0.5, rectRadius: 0.08,
      fill: { color: i === 4 ? GOLD : (i % 2 ? GREEN2 : GREEN) }, line: { type: "none" }, objectName: "Timeline " + l });
    T(s, d, { x: cx, y: 2.0, w, h: 0.5, align: "center", valign: "middle", color: WHITE, bold: true, fontSize: 13 });
    cx += w;
  });
  T(s, "≈ 125 minutes of activity — plan for 90–120 minutes by keeping discussion focused", { x: M, y: 2.62, w: 10, h: 0.3, fontSize: 11, italic: true, color: SLATE });
  // cards
  const cw = (tw - 4 * 0.3) / 5;
  agenda.forEach(([l, t, d, k], i) => {
    const x = M + i * (cw + 0.3), y = 3.3;
    card(s, x, y, cw, 3.3, MIST, "Agenda card " + l);
    circleIcon(s, k, x + 0.3, y + 0.35, 0.7, t, i === 4 ? GOLD : GREEN);
    T(s, i === 4 ? "SECTION 3" : "PART " + l, { x: x + 0.3, y: y + 1.3, w: cw - 0.5, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GREEN });
    T(s, t, { x: x + 0.3, y: y + 1.65, w: cw - 0.5, h: 0.9, fontFace: "Cambria", fontSize: 16, bold: true, color: NAVY });
    T(s, d, { x: x + 0.3, y: y + 2.7, w: cw - 0.5, h: 0.3, fontSize: 13, color: SLATE });
  });

  // ---------- 3. Objectives ----------
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Introduction" });
  s.addText("TRAINING OBJECTIVE", { placeholder: "eyebrow" });
  s.addText("By the end of this session, Kristine can…", { placeholder: "title" });
  const objs = [
    ["search", "Explain the purpose", "of a Freedom Audit."],
    ["compass", "Apply the 5D Framework", "during client discovery."],
    ["bottle", "Identify challenges", "and operational bottlenecks in a client's business."],
    ["link", "Connect client needs", "to suitable Angel roles and responsibilities."],
    ["map", "Explain the Freedom Plan", "and how it turns business needs into an actionable staffing solution."],
  ];
  objs.forEach(([k, h, b], i) => {
    const y = 1.95 + i * 0.95;
    card(s, M, y, 8.1, 0.8, i % 2 ? WHITE : MIST, "Objective row " + (i + 1));
    circleIcon(s, k, M + 0.18, y + 0.12, 0.56, h);
    T(s, [{ text: h + " ", options: { bold: true, color: NAVY } }, { text: b, options: { color: INK } }],
      { x: M + 0.95, y: y, w: 7, h: 0.8, valign: "middle", fontSize: 16 });
  });
  card(s, 9.2, 1.95, 3.53, 4.6, NAVY, "Outcome panel");
  T(s, "THE GOAL", { x: 9.5, y: 2.3, w: 3, h: 0.3, fontSize: 11, bold: true, charSpacing: 3, color: GREEN2 });
  T(s, "Understand the business before recommending the solution.", { x: 9.5, y: 2.7, w: 2.95, h: 2.2, fontFace: "Cambria", fontSize: 24, bold: true, color: WHITE });
  T(s, "Every objective builds toward Kristine running a basic Freedom Audit on her own.", { x: 9.5, y: 5.0, w: 2.95, h: 1.2, fontSize: 14, color: WHITE });

  // ---------- 4. Divider: Key learning areas ----------
  pres.addSection({ title: "Key Learning Areas" });
  s = pres.addSlide({ masterName: "OA Divider", sectionTitle: "Key Learning Areas" });
  T(s, "SECTION 2", { x: M, y: 2.4, w: 5, h: 0.35, fontSize: 13, bold: true, charSpacing: 4, color: GREEN2 });
  s.addText("Key Learning Areas", { placeholder: "title" });
  s.addText("A. The Freedom Audit  ·  B. The 5D Framework  ·  C. Case Study  ·  D. Role-Play", { placeholder: "body" });

  // ---------- 5. A: Freedom Audit ----------
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Key Learning Areas" });
  s.addText("PART A  ·  20 MINUTES", { placeholder: "eyebrow" });
  s.addText("Understanding the Freedom Audit", { placeholder: "title" });
  T(s, "Why it matters: we understand the client's business before we recommend a solution. These five questions open up the conversation.",
    { x: M, y: 1.65, w: 11.5, h: 0.5, fontSize: 15, color: SLATE });
  const qs = [
    ["bottle", "Frustrations", "What are the client's biggest frustrations?"],
    ["clock", "Time drains", "What tasks are taking up most of their time?"],
    ["hand", "Delegation", "What responsibilities can be delegated?"],
    ["road", "Growth blockers", "What is stopping their business from growing?"],
    ["star", "The vision", "What does their ideal business look like?"],
  ];
  qs.forEach(([k, h, q], i) => {
    const x = M + i * (cw + 0.3), y = 2.55;
    card(s, x, y, cw, 3.9, WHITE, "Question card " + (i + 1), true);
    T(s, "0" + (i + 1), { x: x + 0.3, y: y + 0.3, w: 1, h: 0.6, fontFace: "Cambria", fontSize: 30, bold: true, color: MINT });
    circleIcon(s, k, x + cw - 0.9, y + 0.3, 0.6, h);
    T(s, h.toUpperCase(), { x: x + 0.3, y: y + 1.25, w: cw - 0.5, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GREEN });
    T(s, q, { x: x + 0.3, y: y + 1.65, w: cw - 0.5, h: 2.0, fontFace: "Cambria", fontSize: 16, bold: true, color: NAVY });
  });
  s.addNotes("Discuss the importance of understanding the client's business before recommending a solution. Ask Kristine which question she thinks is hardest to get an honest answer to, and why.");

  // ---------- 6. B: 5D ----------
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Key Learning Areas" });
  s.addText("PART B  ·  20 MINUTES", { placeholder: "eyebrow" });
  s.addText("Applying the 5D Framework", { placeholder: "title" });
  const five = [
    ["pen", "Design", "Understand the client's desired business outcomes."],
    ["list", "Define", "Establish the role and support required."],
    ["search", "Discover", "Identify challenges and operational bottlenecks."],
    ["tasks", "Develop", "Build the appropriate staffing solution."],
    ["rocket", "Deploy", "Implement the solution and establish the working arrangement."],
  ];
  const fw = 2.15, gap = (tw - 5 * fw) / 4;
  s.addShape(pres.shapes.LINE, { x: M + fw / 2, y: 2.75, w: tw - fw, h: 0, line: { color: LINE, width: 3 }, objectName: "Process connector" });
  five.forEach(([k, h, b], i) => {
    const x = M + i * (fw + gap);
    circleIcon(s, k, x + fw / 2 - 0.55, 2.2, 1.1, h, i % 2 ? GREEN2 : GREEN);
    T(s, "STEP " + (i + 1), { x, y: 3.5, w: fw, h: 0.3, align: "center", fontSize: 11, bold: true, charSpacing: 2, color: SLATE });
    T(s, h, { x, y: 3.8, w: fw, h: 0.55, align: "center", fontFace: "Cambria", fontSize: 24, bold: true, color: NAVY });
    card(s, x, 4.5, fw, 1.75, MIST, h + " card");
    T(s, b, { x: x + 0.2, y: 4.65, w: fw - 0.4, h: 1.5, fontSize: 15, color: INK, align: "center", valign: "middle" });
  });
  s.addNotes("Walk through each D with an example from a recent client. Check Kristine can explain the difference between Design (outcomes) and Discover (bottlenecks).");

  // ---------- 7. C: Case study ----------
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Key Learning Areas" });
  s.addText("PART C  ·  30 MINUTES", { placeholder: "eyebrow" });
  s.addText("Freedom Plan Case Study: May Ly", { placeholder: "title" });
  card(s, M, 1.85, 3.6, 4.75, NAVY, "Case brief panel");
  circleIcon(s, "file", M + 0.35, 2.2, 0.75, "Case study", GREEN);
  T(s, "THE TASK", { x: M + 0.35, y: 3.2, w: 3, h: 0.3, fontSize: 11, bold: true, charSpacing: 3, color: GREEN2 });
  T(s, "Use the May Ly Freedom Plan as a practical example.", { x: M + 0.35, y: 3.55, w: 3, h: 1.3, fontFace: "Cambria", fontSize: 21, bold: true, color: WHITE });
  T(s, "Kristine reviews the plan and identifies each of the six elements on the right.", { x: M + 0.35, y: 5.0, w: 2.95, h: 1.2, fontSize: 14, color: WHITE });
  const items = [
    ["bottle", "Main business challenges"], ["map", "The two parts of the Freedom Plan"], ["user", "The recommended Angel role"],
    ["hand", "Key responsibilities to delegate"], ["chart", "Suggested KPIs & expected outcomes"], ["book", "Why onboarding & SOPs matter"],
  ];
  const gx = 4.55, gw = (W - M - gx - 0.3) / 2, gh = 1.37;
  items.forEach(([k, t], i) => {
    const x = gx + (i % 2) * (gw + 0.3), y = 1.85 + Math.floor(i / 2) * (gh + 0.32);
    card(s, x, y, gw, gh, MIST, "Identify card " + (i + 1));
    circleIcon(s, k, x + 0.3, y + gh / 2 - 0.33, 0.66, t, WHITE, false);
    T(s, "IDENTIFY", { x: x + 1.2, y: y + 0.3, w: gw - 1.4, h: 0.28, fontSize: 10, bold: true, charSpacing: 2, color: GREEN });
    T(s, t, { x: x + 1.2, y: y + 0.6, w: gw - 1.4, h: 0.55, fontSize: 17, bold: true, color: NAVY });
  });
  s.addNotes("Have the May Ly Freedom Plan open. Let Kristine find each element herself before discussing. Probe: why do onboarding and SOPs make or break the placement?");

  // ---------- 8. D: Role-play ----------
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Key Learning Areas" });
  s.addText("PART D  ·  30 MINUTES", { placeholder: "eyebrow" });
  s.addText("Practical Role-Play: Mock Freedom Audit", { placeholder: "title" });
  card(s, M, 1.85, 5.6, 4.75, MINT, "Scenario panel");
  T(s, "THE SET-UP", { x: M + 0.4, y: 2.15, w: 4.8, h: 0.3, fontSize: 11, bold: true, charSpacing: 3, color: GREEN });
  T(s, [{ text: "Trainer ", options: { bold: true, color: NAVY } }, { text: "plays the business owner.", options: { breakLine: true } },
        { text: "Kristine ", options: { bold: true, color: NAVY } }, { text: "conducts the Freedom Audit." }],
    { x: M + 0.4, y: 2.5, w: 4.8, h: 0.8, fontSize: 16, paraSpaceAfter: 4 });
  circleIcon(s, "quote", M + 0.4, 3.55, 0.55, "Scenario", GREEN);
  T(s, "A business owner is overwhelmed with admin, wants to grow the business, but doesn't have time to focus on strategic activities.",
    { x: M + 0.4, y: 4.25, w: 4.8, h: 2.1, fontFace: "Cambria", fontSize: 19, italic: true, color: NAVY });
  T(s, "KRISTINE MUST DEMONSTRATE", { x: 6.75, y: 1.85, w: 6, h: 0.3, fontSize: 11, bold: true, charSpacing: 3, color: GREEN });
  const steps = ["Ask relevant discovery questions", "Identify the client's pain points", "Ask follow-up questions",
    "Understand the desired business outcomes", "Connect needs to a potential staffing solution"];
  steps.forEach((t, i) => {
    const y = 2.3 + i * 0.86;
    card(s, 6.75, y, W - M - 6.75, 0.7, WHITE, "Step " + (i + 1), true);
    s.addShape(pres.shapes.OVAL, { x: 6.9, y: y + 0.12, w: 0.46, h: 0.46, fill: { color: GREEN }, line: { type: "none" }, objectName: "Step num " + (i + 1) });
    T(s, String(i + 1), { x: 6.9, y: y + 0.12, w: 0.46, h: 0.46, align: "center", valign: "middle", color: WHITE, bold: true, fontSize: 14 });
    T(s, t, { x: 7.55, y, w: 5, h: 0.7, valign: "middle", fontSize: 16, color: NAVY, bold: true });
  });
  s.addNotes("Stay in character. Don't volunteer the pain points — make Kristine dig with follow-up questions. Debrief afterwards: what did she uncover, what did she miss?");

  // ---------- 9. Knowledge check ----------
  pres.addSection({ title: "Assessment" });
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Assessment" });
  s.addText("KNOWLEDGE CHECK  ·  15 MINUTES", { placeholder: "eyebrow" });
  s.addText("Five questions for Kristine", { placeholder: "title" });
  const kq = [
    "What is the main purpose of a Freedom Audit?",
    "Why shouldn't we immediately recommend an Angel?",
    "How does a Freedom Plan help a business owner?",
    "Why should a Freedom Plan remain a living document?",
    "How do you translate a client's bottlenecks into Angel responsibilities?",
  ];
  kq.forEach((q, i) => {
    const col = i < 3 ? 0 : 1, row = i < 3 ? i : i - 3;
    const x = M + col * 6.2, y = 1.95 + row * 1.6, w = 5.9;
    card(s, x, y, w, 1.35, i % 2 ? MIST : MINT, "Question " + (i + 1));
    T(s, "Q" + (i + 1), { x: x + 0.3, y, w: 0.9, h: 1.35, valign: "middle", fontFace: "Cambria", fontSize: 30, bold: true, color: GREEN });
    T(s, q, { x: x + 1.25, y, w: w - 1.5, h: 1.35, valign: "middle", fontSize: 17, bold: true, color: NAVY });
  });
  card(s, M + 6.2, 1.95 + 2 * 1.6, 5.9, 1.35, NAVY, "Tip card");
  circleIcon(s, "lightbulb", M + 6.5, 1.95 + 3.2 + 0.35, 0.65, "Tip", GOLD);
  T(s, "Listen for reasoning, not memorised answers. Ask \"why?\" at least once per question.",
    { x: M + 7.4, y: 5.15, w: 4.5, h: 1.35, valign: "middle", fontSize: 15, color: WHITE });

  // ---------- 10. Success criteria ----------
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Assessment" });
  s.addText("SUCCESS CRITERIA", { placeholder: "eyebrow" });
  s.addText("What success looks like", { placeholder: "title" });
  const sc = [
    ["search", "Clear understanding", "of the Freedom Audit process"],
    ["compass", "Explains & applies", "the 5D Framework"],
    ["bullseye", "Confidently identifies", "client pain points"],
    ["link", "Connects challenges", "to staffing solutions"],
    ["comments", "Conducts a basic", "Freedom Audit independently"],
  ];
  sc.forEach(([k, h, b], i) => {
    const x = M + i * (cw + 0.3), y = 2.1;
    card(s, x, y, cw, 3.7, i === 4 ? NAVY : MIST, "Criteria " + (i + 1));
    circleIcon(s, k, x + cw / 2 - 0.45, y + 0.45, 0.9, h, i === 4 ? GOLD : GREEN);
    T(s, h, { x: x + 0.2, y: y + 1.65, w: cw - 0.4, h: 0.85, align: "center", fontFace: "Cambria", fontSize: 19, bold: true, color: i === 4 ? WHITE : NAVY });
    T(s, b, { x: x + 0.2, y: y + 2.5, w: cw - 0.4, h: 0.9, align: "center", fontSize: 15, color: i === 4 ? WHITE : INK });
  });
  T(s, "The final criterion is the destination: Kristine running a Freedom Audit on her own.", { x: M, y: 6.1, w: 11, h: 0.35, fontSize: 13, italic: true, color: SLATE });

  // ---------- 11. Trainer evaluation ----------
  s = pres.addSlide({ masterName: "OA Content", sectionTitle: "Assessment" });
  s.addText("TRAINER'S FINAL EVALUATION", { placeholder: "eyebrow" });
  s.addText("Evaluation & sign-off", { placeholder: "title" });
  const fields = ["Strengths demonstrated", "Areas requiring improvement", "Additional coaching required"];
  fields.forEach((f, i) => {
    const y = 1.85 + i * 1.6;
    card(s, M, y, 7.6, 1.4, WHITE, f + " field", true);
    T(s, f.toUpperCase(), { x: M + 0.3, y: y + 0.22, w: 7, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GREEN });
    [0.75, 1.1].forEach((dy, j) => s.addShape(pres.shapes.LINE, { x: M + 0.3, y: y + dy + 0.1, w: 7.0, h: 0, line: { color: LINE, width: 1 }, objectName: f + " line " + j }));
  });
  card(s, 8.6, 1.85, W - M - 8.6, 4.6, MIST, "Overall result panel");
  T(s, "OVERALL RESULT", { x: 8.9, y: 2.15, w: 3.5, h: 0.3, fontSize: 11, bold: true, charSpacing: 2, color: GREEN });
  ["Meets expectations", "Requires further coaching", "Ready for practical application"].forEach((r, i) => {
    const y = 2.75 + i * 0.85;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.9, y: y + 0.08, w: 0.38, h: 0.38, rectRadius: 0.06, fill: { color: WHITE }, line: { color: GREEN, width: 1.5 }, objectName: "Checkbox " + (i + 1) });
    T(s, r, { x: 9.45, y, w: 3.2, h: 0.55, valign: "middle", fontSize: 16, color: NAVY, bold: true });
  });
  T(s, "Trainer:", { x: 8.9, y: 5.4, w: 1, h: 0.3, fontSize: 12, color: SLATE });
  s.addShape(pres.shapes.LINE, { x: 9.9, y: 5.65, w: 2.6, h: 0, line: { color: SLATE, width: 1 }, objectName: "Trainer line" });
  T(s, "Date:", { x: 8.9, y: 5.85, w: 1, h: 0.3, fontSize: 12, color: SLATE });
  s.addShape(pres.shapes.LINE, { x: 9.9, y: 6.1, w: 2.6, h: 0, line: { color: SLATE, width: 1 }, objectName: "Date line" });

  // ---------- 12. Principle ----------
  s = pres.addSlide({ masterName: "OA Divider", sectionTitle: "Assessment" });
  T(s, "TRAINING PRINCIPLE", { x: M, y: 1.3, w: 6, h: 0.35, fontSize: 13, bold: true, charSpacing: 4, color: GREEN2 });
  T(s, "Don't just teach Kristine to follow a script.", { x: M, y: 1.85, w: 11, h: 0.7, fontFace: "Cambria", fontSize: 32, bold: true, color: WHITE });
  T(s, "Teach her to…", { x: M, y: 2.7, w: 11, h: 0.5, fontSize: 18, color: WHITE });
  const pr = [["building", "search", "Understand", "the client's business"], ["", "bullseye", "Recognise", "the real problem"], ["", "link", "Confidently connect", "that problem to the right solution"]];
  pr.forEach(([_, k, h, b], i) => {
    const x = M + i * 4.1;
    card(s, x, 3.55, 3.8, 2.6, WHITE, "Principle card " + (i + 1));
    circleIcon(s, k, x + 0.35, 3.85, 0.75, h, GREEN);
    T(s, h, { x: x + 0.35, y: 4.8, w: 3.2, h: 0.5, fontFace: "Cambria", fontSize: 22, bold: true, color: NAVY });
    T(s, b, { x: x + 0.35, y: 5.3, w: 3.2, h: 0.7, fontSize: 16, color: INK });
  });

  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  console.log("wrote", OUT);
})();
