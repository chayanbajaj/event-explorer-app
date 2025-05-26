import { sGetAllEvents } from "@/store/events/selectors";
import { fetchEventsData } from "@/store/events/thunks";
import { UnknownAction } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useEnsureEventsLoaded = () => {
  const dispatch = useDispatch();
  const allEvents = useSelector(sGetAllEvents);

  useEffect(() => {
    if (allEvents.length === 0) {
      dispatch(fetchEventsData() as unknown as UnknownAction);
    }
  }, [allEvents, dispatch]);
};

export default useEnsureEventsLoaded;
