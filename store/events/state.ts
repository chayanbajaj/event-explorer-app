import { IEvent } from "@/types/event";

export interface IEventState {
  events: IEvent[];
  isLoadingEvents: boolean;
}

export const initialEventsState: IEventState = {
  events: [],
  isLoadingEvents: false,
};
