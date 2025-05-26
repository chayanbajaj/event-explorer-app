import { IconSymbol } from "@/components/common/IconSymbol.ios";
import ThemedButton from "@/components/common/ThemedButton";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { Colors } from "@/constants/colors";
import { DEFAULT_BOX_SHADOW } from "@/constants/common";
import { sGetEventById } from "@/store/events/selectors";
import {
  markEventAsInterested,
  markEventAsUninterested,
} from "@/store/events/slice";
import { IRootState } from "@/store/rootState";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useCallback } from "react";
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { moderateScale } from "react-native-size-matters";
import { useDispatch, useSelector } from "react-redux";

const EventDetail = () => {
  const { eventId } = useLocalSearchParams<{ eventId: string }>();
  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const router = useRouter();

  const eventDetail = useSelector((state: IRootState) =>
    sGetEventById(state, eventId),
  );

  const handlePress = useCallback(() => {
    if (!eventDetail?.id) return;
    if (eventDetail?.interested)
      dispatch(markEventAsUninterested(eventDetail.id));
    else dispatch(markEventAsInterested(eventDetail?.id));
    router.back();
  }, [dispatch, eventDetail, router]);

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <TouchableOpacity onPress={router.back}>
          <IconSymbol
            size={moderateScale(20)}
            name="chevron.backward"
            color={
              colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint
            }
          />
        </TouchableOpacity>
        <ThemedText type="defaultSemiBold">{eventDetail?.name}</ThemedText>
        <ThemedView style={styles.invisible} />
      </ThemedView>
      <ThemedView style={styles.flex1}>
        <Image
          alt={eventDetail?.name}
          contentFit="cover"
          source={eventDetail?.image}
          style={styles.image}
        />
        <ThemedView style={styles.innerContainer}>
          <ThemedText>{eventDetail?.date}</ThemedText>
          <ThemedText>{eventDetail?.description}</ThemedText>
          <ThemedText>{eventDetail?.organizer}</ThemedText>
          <ThemedText>{eventDetail?.location}</ThemedText>
        </ThemedView>
      </ThemedView>
      <ThemedView style={styles.footer}>
        <ThemedButton
          onPress={handlePress}
          title={
            eventDetail?.interested
              ? "Mark as Uninterested"
              : "Mark as Interested"
          }
        />
      </ThemedView>
    </ThemedView>
  );
};

const { width: SCREEN_WIDTH } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    ...DEFAULT_BOX_SHADOW,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: moderateScale(16),
  },
  flex1: {
    flex: 1,
  },
  invisible: {
    width: moderateScale(16),
  },
  image: {
    aspectRatio: "16/9",
    width: SCREEN_WIDTH,
  },
  innerContainer: {
    padding: moderateScale(16),
    rowGap: moderateScale(12),
  },
  footer: {
    padding: moderateScale(16),
  },
});

export default EventDetail;
