import { CompareTable } from "@/components/CompareTable";
import { HeroDemo } from "@/components/HeroDemo";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/zoom-agent-fleet-watercolor.png"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <HeroDemo />
          </section>

          <RosterChart />

          <section className="usecase-framing">
            <p className="eyebrow">Three scenes from a seller&apos;s day</p>
            <h2>
              Each scene starts with real work and ends with the artifact the
              seller reviews.
            </h2>
            <p>
              The account details stay neutral until a seller adds approved
              customer context.
            </p>
          </section>
        </div>

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden />

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Zoom x SpaceXAI</p>
          <p>Grok Bot for Zoom GTM</p>
        </div>
        <address className="footer-contact">
          <p>Cursor account executive</p>
          <strong>Griffin Hewitt</strong>
          <a href="mailto:griffin.hewitt@cursor.com">
            griffin.hewitt@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
