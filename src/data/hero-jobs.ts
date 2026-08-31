export type HeroJobIcon =
  | "outbound"
  | "research"
  | "follow-up"
  | "answer-desk"
  | "pipeline"
  | "account-growth"
  | "competitive"
  | "chief-of-staff";

export type HeroJob = {
  name: string;
  icon: HeroJobIcon;
  account: string;
  signal: string;
  work: string;
  result: string;
  user: string;
  bot: string;
};

export const HERO_JOBS = [
  {
    name: "Sales Outbound",
    icon: "outbound",
    account: "Sample target account",
    signal: "New public source saved",
    work: "I reviewed the saved source, kept its link, and drafted an email around one Zoom workflow.",
    result: "Sourced email draft ready",
    user: "Show me the source before I approve it.",
    bot: "Attached. The draft stays queued.",
  },
  {
    name: "Account Research",
    icon: "research",
    account: "Sample account",
    signal: "Account added to the research list",
    work: "I checked current public sources and wrote a short account brief. Every note keeps its source.",
    result: "Source-linked account brief ready",
    user: "Brief me before the call.",
    bot: "Ready. Every note includes its source.",
  },
  {
    name: "Call Follow-up",
    icon: "follow-up",
    account: "Sample customer call",
    signal: "Approved meeting notes added",
    work: "I grouped the approved notes, updated the working deck, and drafted the recap. Both stay in draft.",
    result: "Recap and working deck ready",
    user: "Keep both in draft.",
    bot: "Done. Nothing leaves without your review.",
  },
  {
    name: "Answer Desk",
    icon: "answer-desk",
    account: "Sample customer thread",
    signal: "Product question received",
    work: "I checked approved sources for Zoom Workplace and Zoom Phone. I marked anything that still needs an owner.",
    result: "Sourced answer draft ready",
    user: "Flag anything that needs a specialist.",
    bot: "Flagged. The reply stays in draft.",
  },
  {
    name: "Pipeline Health",
    icon: "pipeline",
    account: "Sample pipeline",
    signal: "Weekly review started",
    work: "I grouped the open next steps and missing source notes. I left every unknown field open.",
    result: "Account review list ready",
    user: "Show me what still needs an owner.",
    bot: "Ready. Each open field is marked.",
  },
  {
    name: "Account Growth",
    icon: "account-growth",
    account: "Sample existing account",
    signal: "Account review started",
    work: "I reviewed the approved product notes. Zoom Phone, Zoom Customer Experience, and Zoom AI Companion stay as questions until the account confirms a need.",
    result: "Growth questions ready",
    user: "Add them to the account review.",
    bot: "Added. The seller still confirms every question.",
  },
  {
    name: "Competitive Prep",
    icon: "competitive",
    account: "Sample customer call",
    signal: "Competitor topic added to the notes",
    work: "I found the approved comparison, kept the source attached, and drafted a short answer for the next call.",
    result: "Source-linked talk track ready",
    user: "Add it to the call brief.",
    bot: "Added. The source stays attached.",
  },
  {
    name: "Sales Chief of Staff",
    icon: "chief-of-staff",
    account: "Weekly seller review",
    signal: "Review window opened",
    work: "I gathered the approved drafts, open questions, and next steps. I separated seller decisions from follow-up work.",
    result: "Weekly action brief ready",
    user: "Show me what needs my decision.",
    bot: "Ready. The rest stays with the account owners.",
  },
] as const satisfies readonly HeroJob[];
