import { IEvent } from "@/types/event";
import React, { useCallback } from "react";
import {
    ActivityIndicator,
    FlatList,
    ListRenderItemInfo,
    StyleSheet
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { ThemedText } from "./common/ThemedText";
import { ThemedView } from "./common/ThemedView";
import EventCard from "./EventCard";

interface IProps {
  data: IEvent[];
  isLoadingEvents: boolean;
  noDataText: string;
}

const EventListView: React.FC<IProps> = ({
  data,
  isLoadingEvents,
  noDataText,
}) => {
  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<IEvent>) => <EventCard event={item} />,
    [],
  );

  if (isLoadingEvents) {
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
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ThemedView style={styles.listEmptyComponent}>
            <ThemedText type="defaultSemiBold">{noDataText}</ThemedText>
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

export default EventListView;
