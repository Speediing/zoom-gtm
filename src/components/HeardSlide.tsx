import type { SlideCard } from "@/data/types";

export function HeardSlide({
  slides,
  size = "lg",
}: {
  slides: SlideCard[];
  size?: "sm" | "lg";
}) {
  return (
    <div className={`leave leave-heard size-${size}`}>
      <article className="heard-slide">
        <header className="heard-bar">
          <span>Sample account</span>
          <span>Working deck</span>
        </header>
        <div className="heard-main">
          <h3>Plan the next meeting</h3>
          <ol>
            {slides.map((slide) => (
              <li key={slide.n}>
                <p className="heard-tag">{slide.kicker || `Slide ${slide.n}`}</p>
                <p className="heard-quote">{slide.title}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="heard-map">
          <p>Draft notes</p>
          <ul>
            {slides.map((slide) => (
              <li key={slide.n}>
                <strong>{slide.title}.</strong> {slide.body}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
