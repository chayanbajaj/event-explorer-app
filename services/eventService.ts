import events from "@/assets/data/events.json";
import { IEvent } from "@/types/event";

export const fetchEvents = (): Promise<IEvent[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(events);
    }, 1000); // simulate 1 second delay
  });
};
