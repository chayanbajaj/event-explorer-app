import { createSelector } from "@reduxjs/toolkit";
import { IRootState } from "../rootState";

export const sGetIsLoadingEvents = (state: IRootState) => state.event.isLoadingEvents;

export const sGetAllEvents = (state: IRootState) => state.event.events;

export const sGetInterestedEvents = createSelector(
  [sGetAllEvents],
  (allEvents) => allEvents.filter((event) => Boolean(event.interested)),
);

export const sGetEventById = createSelector(
  [sGetAllEvents, (_: IRootState, id: string) => id],
  (allEvents, id) => allEvents.find((event) => event.id === id),
);
