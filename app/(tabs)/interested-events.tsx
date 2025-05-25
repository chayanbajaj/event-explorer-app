import EventCard from "@/components/EventCard";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  sGetInterestedEvents,
  sGetIsLoadingEvents,
} from "@/store/events/selectors";
import { IEvent } from "@/types/event";
import React, { useCallback } from "react";
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  StyleSheet,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useSelector } from "react-redux";

const InterestedEvents = () => {
  const interestedEvents = useSelector(sGetInterestedEvents);
  const isLoadingEvents = useSelector(sGetIsLoadingEvents);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IEvent>) => <EventCard event={item} />,
    [],
  );

  if (isLoadingEvents ) {
    return (
      <ThemedView style={[styles.container, styles.loader]}>
        <ActivityIndicator size="large" />
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={interestedEvents}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ThemedView style={styles.listEmptyComponent}>
            <ThemedText type="defaultSemiBold">No Interested Events</ThemedText>
          </ThemedView>
        )}
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: moderateScale(16) },
  contentContainerStyle: {
    rowGap: moderateScale(20),
  },
  listEmptyComponent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  loader: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default InterestedEvents;
