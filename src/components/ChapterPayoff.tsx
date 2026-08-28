import type { Artifact, StoryBeat } from "@/data/types";
import { HeardSlide } from "./HeardSlide";

function OutboundPack({
  artifact,
}: {
  artifact: Extract<Artifact, { kind: "outbound" }>;
}) {
  const source = artifact.evidence[0];

  return (
    <div className="leave leave-out-phone">
      <div className="out-phone" aria-label="Scout approval chat">
        <div className="out-phone-notch" aria-hidden />
        <header className="out-phone-header">
          <span className="out-phone-back" aria-hidden>
            ‹
          </span>
          <span className="out-phone-agent" aria-hidden>
            ✦
          </span>
          <p>
            <strong>Scout</strong>
            <small>{artifact.account}, drafts ready</small>
          </p>
          <span className="out-phone-desktop" aria-hidden>
            ▣
          </span>
        </header>

        <div className="out-phone-thread">
          <article className="out-email-card">
            <p className="out-email-label">Draft email</p>
            <p className="out-email-subject">
              Subject, a sourced note for {artifact.account}
            </p>
            <div className="out-email-copy">
              <p>Hi,</p>
              <p>
                I found a current public signal that may connect to one Zoom
                workflow. I kept the source in a short account note.
              </p>
              {source ? (
                <p>
                  <strong>{source.source}.</strong> {source.finding}
                </p>
              ) : null}
              <p>Would it be useful if I sent the note before we speak?</p>
              <p>Your Zoom rep</p>
            </div>
            <footer>
              <span>Approve</span>
              <span>Keep as draft</span>
            </footer>
          </article>

          <p className="out-message is-you">Approve this draft.</p>
          <p className="out-message is-bot">
            Approved. The other drafts stay queued.
          </p>
        </div>

        <footer className="out-phone-composer">
          <span aria-hidden>+</span>
          <p>Message Scout</p>
          <span aria-hidden>◉</span>
        </footer>
      </div>
    </div>
  );
}

function AnswerPack({
  artifact,
}: {
  artifact: Extract<Artifact, { kind: "redlines" }>;
}) {
  return (
    <div className="leave leave-paper">
      <header className="leave-paper-top">
        <div>
          <p className="leave-kicker">Approved sources first</p>
          <h3>{artifact.title}</h3>
        </div>
        <p className="leave-paper-from">{artifact.from}</p>
      </header>
      <div className="leave-paper-split">
        <section className="leave-marks">
          <p className="leave-kicker">{artifact.paperTitle}</p>
          <ol>
            {artifact.marks.map((mark) => (
              <li key={mark.text} className={mark.take ? "is-take" : "is-hold"}>
                <p className="leave-mark-line">{mark.text}</p>
                <p className="leave-mark-note">
                  <b>{mark.take ? "Draft" : "Hold"}.</b> {mark.note}
                </p>
              </li>
            ))}
          </ol>
        </section>
        <section className="leave-reply">
          <p className="leave-kicker">Reply draft, not sent</p>
          <p className="leave-reply-meta">
            <span>To</span>
            {artifact.reply.to}
          </p>
          <p className="leave-reply-meta">
            <span>Subject</span>
            {artifact.reply.subject}
          </p>
          <p className="leave-reply-body">{artifact.reply.body}</p>
        </section>
      </div>
    </div>
  );
}

export function ChapterPayoff({
  beat,
  value,
}: {
  beat: StoryBeat;
  value?: string;
}) {
  const slides = beat.slides;
  const artifact = beat.artifact;

  let body = null;
  if (slides?.length) {
    body = <HeardSlide slides={slides} size="lg" />;
  } else if (artifact?.kind === "redlines") {
    body = <AnswerPack artifact={artifact} />;
  } else if (artifact?.kind === "outbound") {
    body = <OutboundPack artifact={artifact} />;
  }

  if (!body) return null;

  return (
    <div className="chapter-payoff">
      <p className="payoff-label">
        {beat.when ? <span>{beat.when}</span> : null}
        {beat.label}
      </p>
      {body}
      {value ? <p className="leave-value">{value}</p> : null}
    </div>
  );
}
