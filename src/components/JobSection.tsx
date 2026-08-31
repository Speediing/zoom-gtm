import type { GtmJob } from "@/data/types";
import { Storyboard } from "./Storyboard";
import { ChapterPayoff } from "./ChapterPayoff";
import { JobMore } from "./JobMore";

function AgentArt() {
  return (
    <svg viewBox="0 0 360 240" aria-hidden>
      <path d="M28 170c45-100 118-142 220-118 51 12 82 48 90 108" />
      <rect x="102" y="72" width="142" height="94" rx="16" />
      <circle cx="148" cy="118" r="12" />
      <circle cx="200" cy="118" r="12" />
      <path d="M150 150h48M174 166v28M132 195h84" />
      <path d="M68 52c24 14 40 30 52 49M280 64c-24 14-40 30-52 49" />
    </svg>
  );
}

export function JobSection({ job }: { job: GtmJob }) {
  const lastBeat = job.storyboard[job.storyboard.length - 1];
  const payoff =
    lastBeat?.artifact || lastBeat?.slides?.length ? lastBeat : undefined;
  const lead = payoff ? job.storyboard.slice(0, -1) : job.storyboard;

  return (
    <section id={job.id} className="narrative report-section job">
      <p className="section-number">
        {String(job.number).padStart(2, "0")}
      </p>
      <div>
        <div className="job-art" aria-hidden>
          <AgentArt />
        </div>
        <div className="background-agent">
          <span className="background-agent-pulse" aria-hidden />
          <p>
            <strong>Background agent active</strong>
            <small>
              {job.trigger} → {job.backgroundAction}
            </small>
          </p>
        </div>
        <h2 className="job-title">{job.title}</h2>
        <p className="job-value">{job.outcome}</p>
        <Storyboard beats={lead} />
        {payoff ? (
          <ChapterPayoff beat={payoff} />
        ) : null}
        <JobMore job={job} />
      </div>
    </section>
  );
}
