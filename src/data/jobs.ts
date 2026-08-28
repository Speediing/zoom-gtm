import type { Artifact, GtmJob, SlideCard } from "./types";

export const SAMPLE_ACCOUNT_DECK: SlideCard[] = [
  {
    n: 1,
    kicker: "Working draft",
    voice: "us",
    title: "Meeting goal",
    body: "Review the current collaboration setup and agree on which team should test first.",
  },
  {
    n: 2,
    kicker: "Product path",
    voice: "us",
    title: "Start with one workflow",
    body: "Keep Zoom Workplace in focus. Bring in Zoom Phone, Zoom Customer Experience, or Zoom AI Companion only when the account confirms a need.",
  },
  {
    n: 3,
    kicker: "Open questions",
    voice: "us",
    title: "What the next meeting must answer",
    body: "Who owns the rollout? Which workflow causes the most work today? What does the team need to see next?",
  },
];

export const SAMPLE_ACCOUNT_ANSWER_BRIEF: Extract<
  Artifact,
  { kind: "redlines" }
> = {
  kind: "redlines",
  title: "Sample account answer brief",
  paperTitle: "Questions to review",
  from: "Customer team, new product questions",
  marks: [
    {
      text: "How do Zoom Workplace and Zoom Phone fit together?",
      note: "Link the approved product pages. Keep the answer to what those sources confirm.",
      take: true,
    },
    {
      text: "What changes for admins?",
      note: "Pull the current admin guide. Ask a specialist to check any deployment detail before the rep sends.",
      take: true,
    },
    {
      text: "Can we cover pricing in this reply?",
      note: "Wait until the account owner confirms packaging and commercial terms.",
      take: false,
    },
  ],
  reply: {
    to: "Customer team",
    subject: "Follow-up on Zoom Workplace and Zoom Phone",
    body: "Hi team,\n\nI pulled together the approved product links for Zoom Workplace and Zoom Phone. I also flagged the admin and pricing questions that need an owner to review them.\n\nI will send the checked answers once those owners confirm the details.\n\nBest,\nYour Zoom rep",
  },
};

export const SAMPLE_ACCOUNT_OUTREACH: Extract<
  Artifact,
  { kind: "outbound" }
> = {
  kind: "outbound",
  title: "Sample account outreach pack",
  account: "Sample account",
  hypothesis: [
    {
      k: "Why this account",
      body: "Start with a current public signal. Keep its source attached to the draft.",
    },
    {
      k: "Why Zoom",
      body: "Map one confirmed workflow to the right Zoom product family. Do not turn the note into a product list.",
    },
    {
      k: "Why now",
      body: "Use the date on the public source. Do not add urgency that the source does not support.",
    },
  ],
  evidence: [
    {
      source: "Company site",
      finding: "Add the confirmed public signal here and keep the source link.",
    },
    {
      source: "Recent news or an open role",
      finding: "Add a second source only when it points to the same workflow.",
    },
  ],
  targets: [
    {
      name: "Account owner",
      role: "Zoom seller",
      why: "Reviews the account logic and decides whether the draft is useful.",
    },
    {
      name: "Customer workflow owner",
      role: "Prospect",
      why: "Owns the work described in the confirmed public signal.",
    },
  ],
  page: {
    headline: "A working brief for Sample account",
    body: "One public signal, one Zoom workflow, and one clear reason to meet. Every claim stays tied to a source.",
  },
};

export const JOBS: GtmJob[] = [
  {
    id: "meeting-brief",
    number: 1,
    title: "Build the next meeting while this one is live",
    trigger: "A customer call starts",
    backgroundAction: "Following approved meeting notes and updating a working deck",
    problem:
      "Reps lose time turning meeting notes into a useful follow-up. The detail is fresh during the call, but the deck often waits until later.",
    botJob:
      "Guide follows the approved notes, groups the open questions, and updates the working deck. The rep reviews every slide before it leaves the room.",
    storyboard: [
      {
        when: "The call starts",
        label: "Guide opens the approved notes and the working deck.",
        scene: "call",
        visual: {
          kind: "live-call",
          title: "Sample account call",
          people: [
            { initials: "ZR", name: "Zoom rep" },
            { initials: "CT", name: "Customer team" },
          ],
        },
      },
      {
        when: "During the call",
        label: "The agent groups only the notes the rep has approved.",
        scene: "notes",
        visual: {
          kind: "live-notes",
          title: "Approved meeting notes",
          items: [
            "Current setup captured",
            "Open questions grouped",
            "Next meeting goal named",
          ],
          signals: ["Zoom Workplace", "Zoom Customer Experience"],
        },
      },
      {
        when: "Before the call ends",
        label: "The open deck gets a focused product path and clear questions.",
        scene: "deck",
        visual: {
          kind: "deck-update",
          eyebrow: "Working draft",
          headline: "A useful next meeting",
          product: "Start with one Zoom workflow",
          status: "Deck updated",
        },
      },
      {
        when: "Ready for rep review",
        label: "The last frame is the deck the rep can edit and share.",
        scene: "deck",
        slides: SAMPLE_ACCOUNT_DECK,
      },
    ],
    unlock:
      "The rep leaves the call with a useful draft instead of a blank follow-up task.",
    outcome:
      "Approved notes become a focused deck before the next meeting is booked.",
    clips: ["03-slides-granola"],
    demo: {
      title: "Guide",
      subtitle: "Approved notes to a working deck",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "guide",
          name: "Guide",
          role: "bot",
          persona: "Turns approved call notes into a focused next-meeting deck",
          color: "#2D8CFF",
        },
        {
          id: "builder",
          name: "Builder",
          role: "bot",
          persona: "Updates the working deck and keeps every slide in draft",
          color: "#5B7CFA",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "guide",
          kind: "routine",
          body: "The customer call started. I opened the approved notes and the working deck. I will use only notes the rep confirms.",
        },
        {
          id: "m2",
          from: "guide",
          kind: "text",
          body: "I grouped the current setup, the open questions, and the goal for the next meeting.",
        },
        {
          id: "m3",
          from: "builder",
          kind: "text",
          body: "I am updating the last slides now. Zoom Workplace stays in focus. The other Zoom product families remain parked until the account confirms a need.",
        },
        {
          id: "m4",
          from: "builder",
          kind: "draft",
          draftLabel: "Working deck",
          artifact: {
            kind: "slides",
            title: "Sample account next meeting",
            cards: SAMPLE_ACCOUNT_DECK,
          },
        },
        {
          id: "m5",
          from: "guide",
          kind: "system",
          body: "Nothing shared. The deck stays a draft until the rep approves it.",
        },
      ],
    },
  },
  {
    id: "answer-desk",
    number: 2,
    title: "Bring approved answers into the customer reply",
    trigger: "A product question lands",
    backgroundAction: "Checking approved sources and drafting a reply",
    problem:
      "A product question can send a rep across docs, Slack, and specialist calendars. The customer waits while the rep checks which answer is current.",
    botJob:
      "Relay finds the approved sources, drafts the parts they support, and marks the questions that still need an owner. The rep sends only after review.",
    storyboard: [
      {
        when: "A question lands",
        label: "Relay opens the thread and starts with the customer questions.",
        scene: "notes",
        visual: {
          kind: "customer-email",
          sender: "Customer team",
          subject: "Questions on Zoom Workplace and Zoom Phone",
          summary: "Product, admin, and pricing questions",
        },
      },
      {
        when: "While the rep is away",
        label: "The agent checks approved sources and separates facts from follow-up work.",
        scene: "inspect",
        visual: {
          kind: "answers-found",
          sources: [
            { name: "Product docs", answer: "Relevant pages attached" },
            { name: "Admin guide", answer: "Deployment owner flagged" },
            { name: "Account notes", answer: "Prior context included" },
          ],
          status: "Sources checked",
        },
      },
      {
        when: "Back in the inbox",
        label: "A draft is ready with clear holds for the account owner.",
        scene: "send",
        visual: {
          kind: "reply-ready",
          to: "Customer team",
          subject: "Follow-up on Zoom Workplace and Zoom Phone",
          status: "Ready for review",
        },
      },
      {
        when: "Ready for rep review",
        label: "The last frame is the answer brief and the reply draft.",
        scene: "send",
        artifact: SAMPLE_ACCOUNT_ANSWER_BRIEF,
      },
    ],
    unlock:
      "The rep reviews a sourced draft instead of starting with a blank page and a list of people to chase.",
    outcome:
      "Approved sources become a reply draft with clear owners for the open questions.",
    clips: ["01-morning-inbox"],
    demo: {
      title: "Relay",
      subtitle: "Approved sources to a checked reply",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "relay",
          name: "Relay",
          role: "bot",
          persona: "Finds approved sources and marks what still needs an owner",
          color: "#00A7B5",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "relay",
          kind: "routine",
          body: "A customer thread landed. I am checking the current product docs, the admin guide, and the account notes.",
        },
        {
          id: "m2",
          from: "relay",
          kind: "text",
          body: "The product links are ready. I marked the admin and pricing questions for owner review. I did not guess.",
        },
        {
          id: "m3",
          from: "relay",
          kind: "draft",
          draftLabel: "Answer brief",
          artifact: SAMPLE_ACCOUNT_ANSWER_BRIEF,
        },
        {
          id: "m4",
          from: "relay",
          kind: "draft",
          draftLabel: "Gmail reply",
          artifact: {
            kind: "gmail",
            title: "Reply to the customer team",
            to: SAMPLE_ACCOUNT_ANSWER_BRIEF.reply.to,
            subject: SAMPLE_ACCOUNT_ANSWER_BRIEF.reply.subject,
            body: SAMPLE_ACCOUNT_ANSWER_BRIEF.reply.body,
          },
        },
        {
          id: "m5",
          from: "relay",
          kind: "system",
          body: "Nothing sent. The account owner reviews the reply first.",
        },
      ],
    },
  },
  {
    id: "account-scout",
    number: 3,
    title: "Turn public account signals into a first draft",
    trigger: "A target account enters the list",
    backgroundAction: "Reviewing public sources and building account-specific drafts",
    problem:
      "Cold outreach falls flat when it starts with a persona and a product list. A useful first draft starts with a current source and one workflow the account may care about.",
    botJob:
      "Scout reviews public sources, keeps the links, and writes a draft around one confirmed signal. The rep checks the logic before anything goes out.",
    storyboard: [
      {
        when: "A target account enters the list",
        label: "Scout opens current public sources without waiting for a prompt.",
        scene: "inspect",
        visual: {
          kind: "account-research",
          account: "Sample account",
          sources: ["Company site", "Recent news", "Open roles"],
          signal: "Source notes ready",
        },
      },
      {
        when: "After the source check",
        label: "The agent writes a simple account case and keeps every claim tied to a link.",
        scene: "notes",
        visual: {
          kind: "three-why",
          items: [
            { label: "Why this account", answer: "Use a current signal" },
            { label: "Why Zoom", answer: "Map one workflow" },
            { label: "Why now", answer: "Keep the source date" },
          ],
        },
      },
      {
        when: "Drafts ready",
        label: "The rep gets an email, a message, and a one-page brief to review.",
        scene: "map",
        visual: {
          kind: "outreach-ready",
          person: "Customer workflow owner",
          channels: ["Email", "LinkedIn", "Account page"],
          status: "Drafts only",
        },
      },
      {
        when: "Ready for rep review",
        label: "The last frame is the sourced outreach pack.",
        scene: "send",
        artifact: SAMPLE_ACCOUNT_OUTREACH,
      },
    ],
    unlock:
      "The rep starts with a sourced account draft and can reject weak logic before it reaches a customer.",
    outcome:
      "Public sources become an account brief and outreach drafts that stay tied to evidence.",
    clips: ["02-prospecting-pg"],
    demo: {
      title: "Scout",
      subtitle: "Public sources to account-specific drafts",
      participants: [
        { id: "you", name: "You", role: "you" },
        {
          id: "scout",
          name: "Scout",
          role: "bot",
          persona: "Builds account drafts from current public sources",
          color: "#7B61FF",
        },
      ],
      messages: [
        {
          id: "m1",
          from: "scout",
          kind: "routine",
          body: "Sample account entered the target list. I am reviewing the company site, recent news, and open roles. Drafts only.",
        },
        {
          id: "m2",
          from: "scout",
          kind: "text",
          body: "The source notes are ready. I kept each link and left out any claim the sources do not support.",
        },
        {
          id: "m3",
          from: "scout",
          kind: "draft",
          draftLabel: "Account case",
          artifact: {
            kind: "packet",
            title: "Sample account case",
            fields: SAMPLE_ACCOUNT_OUTREACH.hypothesis.map((item) => ({
              label: item.k,
              value: item.body,
            })),
          },
        },
        {
          id: "m4",
          from: "scout",
          kind: "draft",
          draftLabel: "Sources and owners",
          artifact: {
            kind: "packet",
            title: "Sources and owners",
            fields: [
              ...SAMPLE_ACCOUNT_OUTREACH.evidence.map((item) => ({
                label: item.source,
                value: item.finding,
              })),
              ...SAMPLE_ACCOUNT_OUTREACH.targets.map((person) => ({
                label: `${person.name}, ${person.role}`,
                value: person.why,
              })),
            ],
          },
        },
        {
          id: "m5",
          from: "scout",
          kind: "draft",
          draftLabel: "LinkedIn message",
          artifact: {
            kind: "linkedin",
            title: "LinkedIn draft",
            to: "Customer workflow owner",
            role: "Sample account",
            body: "I found a current public signal that may connect to one Zoom workflow. I kept the source in a short account note. Would it be useful if I sent it before we speak?",
          },
        },
        {
          id: "m6",
          from: "scout",
          kind: "draft",
          draftLabel: "Email draft",
          artifact: {
            kind: "gmail",
            title: "Email draft",
            to: "Customer workflow owner",
            subject: "A sourced note for Sample account",
            body: "Hi,\n\nI found a current public signal that may connect to one Zoom workflow. I kept the source in a short account note. Would it be useful if I sent it before we speak?\n\nBest,\nYour Zoom rep",
          },
        },
        {
          id: "m7",
          from: "scout",
          kind: "draft",
          draftLabel: "Account page",
          artifact: SAMPLE_ACCOUNT_OUTREACH,
        },
        {
          id: "m8",
          from: "scout",
          kind: "system",
          body: "Nothing sent. The rep reviews every source and draft first.",
        },
      ],
    },
  },
];

export function getJob(id: string): GtmJob | undefined {
  return JOBS.find((job) => job.id === id);
}
