import type { Artifact, DemoMessage, SlideCard } from "@/data/types";
import type { ComputerBeat } from "@/data/screens";
import { CLIPS } from "@/data/clips";
import { SAMPLE_ACCOUNT_DECK } from "@/data/jobs";
import { HeardSlide } from "./HeardSlide";

function asSlides(artifact?: Artifact) {
  return artifact?.kind === "slides" ? artifact : null;
}

function asGmail(artifact?: Artifact) {
  return artifact?.kind === "gmail" ? artifact : null;
}

function asOnePager(artifact?: Artifact) {
  return artifact?.kind === "one-pager" ? artifact : null;
}

function asPacket(artifact?: Artifact) {
  return artifact?.kind === "packet" ? artifact : null;
}

function asLinkedin(artifact?: Artifact) {
  return artifact?.kind === "linkedin" ? artifact : null;
}

function asOutbound(artifact?: Artifact) {
  return artifact?.kind === "outbound" ? artifact : null;
}

function asRedlines(artifact?: Artifact) {
  return artifact?.kind === "redlines" ? artifact : null;
}

export function SiteScreen({
  beat,
  message,
  account,
  sent,
}: {
  beat: ComputerBeat;
  message?: DemoMessage;
  account: string;
  sent: boolean;
}) {
  const artifact = message?.artifact;

  if (beat.site === "clip" && beat.clip) {
    const clip = CLIPS[beat.clip];
    return (
      <div className="site-clip">
        <video
          src={clip.file}
          controls
          playsInline
          controlsList="nodownload"
          aria-label={clip.title}
        />
      </div>
    );
  }

  switch (beat.site) {
    case "granola":
      return <GranolaScreen account={account} />;
    case "figma":
      return <FigmaScreen account={account} artifact={artifact} />;
    case "gmail":
      return (
        <GmailScreen
          account={account}
          artifact={asGmail(artifact)}
          sent={sent}
        />
      );
    case "gdoc":
      return (
        <GdocScreen
          account={account}
          packet={asPacket(artifact)}
          redlines={asRedlines(artifact)}
        />
      );
    case "linkedin":
      return (
        <LinkedInScreen
          account={account}
          artifact={asLinkedin(artifact)}
          sent={sent}
        />
      );
    case "research":
      return <ResearchScreen account={account} />;
    case "page":
      return (
        <PageScreen
          account={account}
          onePager={asOnePager(artifact)}
          outbound={asOutbound(artifact)}
        />
      );
  }
}

function GranolaScreen({ account }: { account: string }) {
  return (
    <div className="site site-granola">
      <header>
        <strong>Granola</strong>
        <span>Live meeting notes</span>
      </header>
      <p className="site-time">{account} call, approved notes only</p>
      <ul>
        <li>
          <span>Setup</span> Capture the current collaboration setup.
        </li>
        <li>
          <span>Owner</span> Confirm who owns the workflow.
        </li>
        <li>
          <span>Need</span> Keep only the problem the customer confirms.
        </li>
        <li>
          <span>Product</span> Start with one Zoom product family.
        </li>
        <li>
          <span>Next</span> Write the questions for the next meeting.
        </li>
      </ul>
    </div>
  );
}

function FigmaScreen({
  account,
  artifact,
}: {
  account: string;
  artifact?: Artifact;
}) {
  const slides = asSlides(artifact);
  const packet = asPacket(artifact);
  const pager = asOnePager(artifact);
  const cards: SlideCard[] = slides?.cards ?? SAMPLE_ACCOUNT_DECK;

  return (
    <div className="site site-figma">
      <header>
        <span className="figma-logo">F</span>
        <strong>
          {slides
            ? slides.title
            : pager
              ? `${account} one-pager`
              : packet
                ? `${account} account brief`
                : `${account} working deck`}
        </strong>
        <em>Draft</em>
      </header>
      <div className="figma-board">
        {packet ? (
          <div className="figma-doc">
            {packet.fields.map((field) => (
              <p key={field.label}>
                <b>{field.label}</b>
                {field.value}
              </p>
            ))}
          </div>
        ) : pager ? (
          <div className="figma-doc">
            {pager.sections.map((section) => (
              <p key={section.heading}>
                <b>{section.heading}</b>
                {section.body}
              </p>
            ))}
          </div>
        ) : (
          <HeardSlide slides={cards} size="sm" />
        )}
      </div>
    </div>
  );
}

function GmailScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asGmail>;
  sent: boolean;
}) {
  return (
    <div className="site site-gmail">
      <header>
        <strong>Gmail</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} customer team`}
      </p>
      <p>
        <span>Subject</span>
        {artifact?.subject || `${account} follow-up`}
      </p>
      <div>
        {artifact?.body ||
          "The draft stays here until the account owner reviews it."}
      </div>
    </div>
  );
}

function GdocScreen({
  account,
  packet,
  redlines,
}: {
  account: string;
  packet: ReturnType<typeof asPacket>;
  redlines: ReturnType<typeof asRedlines>;
}) {
  return (
    <div className="site site-gdoc">
      <header>
        <strong>Docs</strong>
        <span>{packet?.title || redlines?.title || `${account} brief`}</span>
      </header>
      <article>
        {packet ? (
          packet.fields.map((field) => (
            <p key={field.label}>
              <b>{field.label}.</b> {field.value}
            </p>
          ))
        ) : redlines ? (
          redlines.marks.map((mark) => (
            <p key={mark.text}>
              <b>{mark.text}</b> {mark.note}
            </p>
          ))
        ) : (
          <p>Working note for {account}. Every claim needs a source.</p>
        )}
      </article>
    </div>
  );
}

function ResearchScreen({ account }: { account: string }) {
  return (
    <div className="site site-research">
      <header>
        <strong>{account}</strong>
        <span>Public sources</span>
      </header>
      <p className="site-time">Current sources, linked to each note</p>
      <ul>
        <li>
          <span>Company site</span> Add a confirmed signal and keep the link.
        </li>
        <li>
          <span>Recent news</span> Keep the date next to the note.
        </li>
        <li>
          <span>Open roles</span> Use a role only when it names the workflow.
        </li>
        <li>
          <span>Account map</span> Name the owner after checking the source.
        </li>
      </ul>
    </div>
  );
}

function LinkedInScreen({
  account,
  artifact,
  sent,
}: {
  account: string;
  artifact: ReturnType<typeof asLinkedin>;
  sent: boolean;
}) {
  return (
    <div className="site site-linkedin">
      <header>
        <strong>LinkedIn</strong>
        <em>{sent ? "Sent" : "Draft, not sent"}</em>
      </header>
      <p>
        <span>To</span>
        {artifact?.to || `${account} workflow owner`}
        {artifact?.role ? `, ${artifact.role}` : ""}
      </p>
      <div>
        {artifact?.body ||
          "The message stays in draft until the account owner checks the source."}
      </div>
    </div>
  );
}

function PageScreen({
  account,
  onePager,
  outbound,
}: {
  account: string;
  onePager: ReturnType<typeof asOnePager>;
  outbound: ReturnType<typeof asOutbound>;
}) {
  const headline =
    outbound?.page.headline || onePager?.title || `For ${account}`;
  const body =
    outbound?.page.body ||
    onePager?.sections.map((section) => section.body).join(" ") ||
    `A working page for ${account}.`;

  return (
    <div className="site site-page">
      <header>
        <strong>Account page</strong>
        <em>Not live</em>
      </header>
      <h4>{headline}</h4>
      {onePager ? (
        onePager.sections.map((section) => (
          <p key={section.heading}>
            <b>{section.heading}.</b> {section.body}
          </p>
        ))
      ) : (
        <p>{body}</p>
      )}
    </div>
  );
}
