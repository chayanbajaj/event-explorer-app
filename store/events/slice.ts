import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialEventsState } from "./state";
import { fetchEventsData } from "./thunks";

const eventsSlice = createSlice({
  initialState: initialEventsState,
  name: "events",
  reducers: {
    markEventAsInterested(state, action: PayloadAction<string>) {
      state.events = state.events.map((event) =>
        event.id === action.payload ? { ...event, interested: true } : event,
      );
    },
    markEventAsUninterested(state, action: PayloadAction<string>) {
      state.events = state.events.map((event) =>
        event.id === action.payload ? { ...event, interested: false } : event,
      );
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchEventsData.pending, (state) => {
      state.isLoadingEvents = true;
    });
    builder.addCase(fetchEventsData.fulfilled, (state, action) => {
      state.events = action.payload;
      state.isLoadingEvents = false;
    });
    builder.addCase(fetchEventsData.rejected, (state) => {
      state.isLoadingEvents = false;
    });
  },
});

export const { markEventAsInterested, markEventAsUninterested } =
  eventsSlice.actions;

export default eventsSlice.reducer;
