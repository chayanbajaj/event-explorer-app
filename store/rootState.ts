import { IEventState, initialEventsState } from "./events/state";

export interface IRootState {
  event: IEventState;
}

export const rootState: IRootState = {
  event: initialEventsState,
};

