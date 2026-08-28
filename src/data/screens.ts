import type { ClipId, JobId } from "./types";

export type SiteKind =
  | "granola"
  | "figma"
  | "gmail"
  | "gdoc"
  | "linkedin"
  | "research"
  | "page"
  | "clip";

export type ChromeTab = {
  id: string;
  host: string;
  label: string;
};

export type ComputerBeat = {
  pill: string;
  host: string;
  path?: string;
  title: string;
  site: SiteKind;
  clip?: ClipId;
  tabs: ChromeTab[];
};

const granola = { id: "granola", host: "granola.app", label: "Granola" };
const figma = { id: "figma", host: "figma.com", label: "Figma" };
const gmail = { id: "gmail", host: "mail.google.com", label: "Gmail" };
const gdoc = { id: "gdoc", host: "docs.google.com", label: "Docs" };
const linkedin = {
  id: "linkedin",
  host: "www.linkedin.com",
  label: "LinkedIn",
};
const web = {
  id: "web",
  host: "sample-account.example",
  label: "Public sources",
};

export const SCREENS: Record<JobId, Record<string, ComputerBeat>> = {
  "meeting-brief": {
    m1: {
      pill: "Opening the approved meeting notes",
      host: "granola.app",
      path: "/notes/sample-account",
      title: "Sample account call",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m2: {
      pill: "Grouping the approved notes",
      host: "granola.app",
      path: "/notes/sample-account",
      title: "Sample account call",
      site: "granola",
      tabs: [granola, figma, gmail],
    },
    m3: {
      pill: "Updating the deck while the call is live",
      host: "granola.app",
      path: "/notes/sample-account",
      title: "Sample account call",
      site: "clip",
      clip: "03-slides-granola",
      tabs: [granola, figma, gmail],
    },
    m4: {
      pill: "Writing the approved notes into the deck",
      host: "figma.com",
      path: "/file/sample-account-next-meeting",
      title: "Sample account next meeting",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
    m5: {
      pill: "Keeping the deck in draft",
      host: "figma.com",
      path: "/file/sample-account-next-meeting",
      title: "Sample account next meeting",
      site: "figma",
      tabs: [granola, figma, gmail],
    },
  },
  "answer-desk": {
    m1: {
      pill: "Opening the customer thread",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m2: {
      pill: "Checking approved sources",
      host: "mail.google.com",
      path: "/mail/u/0/#inbox",
      title: "Inbox",
      site: "clip",
      clip: "01-morning-inbox",
      tabs: [gmail, gdoc],
    },
    m3: {
      pill: "Building the answer brief",
      host: "docs.google.com",
      path: "/document/d/sample-account-answer-brief",
      title: "Sample account answer brief",
      site: "gdoc",
      tabs: [gmail, gdoc],
    },
    m4: {
      pill: "Drafting the checked reply",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
    m5: {
      pill: "Keeping the reply in draft",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [gmail, gdoc],
    },
  },
  "account-scout": {
    m1: {
      pill: "Reviewing current public sources",
      host: "sample-account.example",
      path: "/company",
      title: "Sample account",
      site: "research",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m2: {
      pill: "Keeping each source with its note",
      host: "sample-account.example",
      path: "/company",
      title: "Sample account",
      site: "clip",
      clip: "02-prospecting-pg",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m3: {
      pill: "Writing the account case",
      host: "docs.google.com",
      path: "/document/d/sample-account-case",
      title: "Sample account case",
      site: "gdoc",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m4: {
      pill: "Matching sources to account owners",
      host: "docs.google.com",
      path: "/document/d/sample-account-case",
      title: "Sample account case",
      site: "gdoc",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m5: {
      pill: "Drafting a LinkedIn message",
      host: "www.linkedin.com",
      path: "/messaging/compose",
      title: "Message",
      site: "linkedin",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m6: {
      pill: "Drafting an email",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m7: {
      pill: "Building the account page",
      host: "sample-account.example",
      path: "/working-brief",
      title: "Sample account working brief",
      site: "page",
      tabs: [web, gdoc, linkedin, gmail],
    },
    m8: {
      pill: "Keeping every draft parked",
      host: "mail.google.com",
      path: "/mail/u/0/#drafts",
      title: "Drafts",
      site: "gmail",
      tabs: [web, gdoc, linkedin, gmail],
    },
  },
};

export function beatFor(
  jobId: JobId,
  messageId: string | undefined,
): ComputerBeat | undefined {
  if (!messageId) return undefined;
  return SCREENS[jobId]?.[messageId];
}
