import { fetchEvents } from "@/services/eventService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEventsData = createAsyncThunk("events/fetchEventsData", async () => {
  const response = await fetchEvents();
  return response;
});
