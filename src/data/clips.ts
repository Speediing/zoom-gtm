import type { Clip, ClipId } from "./types";

function clip(
  id: ClipId,
  title: string,
  caption: string,
): Clip {
  return {
    id,
    file: `/api/media/krista-clips/${id}.mp4`,
    poster: `/media/krista-clips/${id}.jpg`,
    title,
    caption,
  };
}

export const CLIPS: Record<ClipId, Clip> = {
  "01-morning-inbox": clip(
    "01-morning-inbox",
    "Morning inbox",
    "A weekday scan flags what needs a reply. It stays quiet if the inbox is empty.",
  ),
  "02-prospecting-pg": clip(
    "02-prospecting-pg",
    "Prospecting",
    "Drafted emails stay parked until the seller approves them.",
  ),
  "03-slides-granola": clip(
    "03-slides-granola",
    "Slides from the room",
    "Granola is open. The deck uses only notes the seller approved.",
  ),
};
