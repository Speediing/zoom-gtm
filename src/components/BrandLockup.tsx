const ZOOM_WORDMARK =
  "https://media.zoom.com/images/assets/logo-zoom@2x.png/Zz00MjQ0MDQzNmM2YWUxMWYwYjFmYzBlNzMxY2I1ZWM4YQ==";

export function BrandLockup({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) {
  return (
    <div className={`brand-lockup brand-lockup-${size}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={ZOOM_WORDMARK}
        alt="Zoom"
        className="brand-zoom"
        width="80"
        height="18"
      />
      <span className="brand-times" aria-hidden>
        ×
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/spacexai.svg" alt="SpaceXAI" className="brand-sxai" />
    </div>
  );
}
