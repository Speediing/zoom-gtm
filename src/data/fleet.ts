import type { JobId } from "./types";

export type FleetBot = {
  id: string;
  name: string;
  blurb: string;
  color: string;
  jobId?: JobId;
  mark?: string;
  seat?: boolean;
};

export const FLEET: FleetBot[] = [
  {
    id: "rep",
    name: "Every Zoom seller",
    blurb: "The seller stays in control. Their agents keep the work around each customer moving.",
    color: "#E8E8ED",
    mark: "AE",
    seat: true,
  },
  {
    id: "guide",
    name: "Guide",
    blurb: "Follows approved meeting notes and turns them into a working deck.",
    jobId: "meeting-brief",
    color: "#2D8CFF",
  },
  {
    id: "relay",
    name: "Relay",
    blurb: "Finds approved product answers and marks the questions that need an owner.",
    jobId: "answer-desk",
    color: "#00A7B5",
  },
  {
    id: "scout",
    name: "Scout",
    blurb: "Reviews public account sources and prepares drafts for the rep to check.",
    jobId: "account-scout",
    color: "#7B61FF",
  },
];
