import EventListView from "@/components/EventListView";
import useEnsureEventsLoaded from "@/hooks/useEnsureEventsLoaded";
import { sGetAllEvents, sGetIsLoadingEvents } from "@/store/events/selectors";
import React from "react";
import { useSelector } from "react-redux";

const EventExplorer = () => {
  const allEvents = useSelector(sGetAllEvents);
  const isLoadingEvents = useSelector(sGetIsLoadingEvents);

  useEnsureEventsLoaded();

  return (
    <EventListView
      data={allEvents}
      isLoadingEvents={isLoadingEvents}
      noDataText="No Events"
    />
  );
};

export default EventExplorer;
