import EventListView from "@/components/EventListView";
import {
  sGetInterestedEvents,
  sGetIsLoadingEvents,
} from "@/store/events/selectors";
import React from "react";
import { useSelector } from "react-redux";

const InterestedEvents = () => {
  const interestedEvents = useSelector(sGetInterestedEvents);
  const isLoadingEvents = useSelector(sGetIsLoadingEvents);

  return (
    <EventListView
      data={interestedEvents}
      isLoadingEvents={isLoadingEvents}
      noDataText="No Interested Events"
    />
  );
};

export default InterestedEvents;
