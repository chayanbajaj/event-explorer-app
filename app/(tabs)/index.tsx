import EventListView from "@/components/EventListView";
import { sGetAllEvents, sGetIsLoadingEvents } from "@/store/events/selectors";
import { fetchEventsData } from "@/store/events/thunks";
import { UnknownAction } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const EventExplorer = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(sGetAllEvents);
  const isLoadingEvents = useSelector(sGetIsLoadingEvents);

  useEffect(() => {
    if (allEvents.length === 0)
      dispatch(fetchEventsData() as unknown as UnknownAction);
  }, [allEvents, dispatch]);



  return <EventListView data={allEvents} isLoadingEvents={isLoadingEvents} noDataText="No Events" />
};


export default EventExplorer;
