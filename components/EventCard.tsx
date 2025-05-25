import { IEvent } from "@/types/event";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

interface IProps {
  event: IEvent;
}

const BLUR_HASH =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const EventCard: React.FC<IProps> = ({ event }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "/event-detail",
          params: {
            eventId: event.id,
          },
        });
      }}
    >
      <ThemedView style={styles.container}>
        <Image
          alt={event.name}
          contentFit="cover"
          source={event.image}
          style={styles.image}
          placeholder={{ blurhash: BLUR_HASH }}
        />
        <ThemedView style={styles.innerContainer}>
          <ThemedText numberOfLines={2} type="subtitle">
            {event.name}
          </ThemedText>
          <ThemedText>{event.location}</ThemedText>
        </ThemedView>
      </ThemedView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: { flexDirection: "row", columnGap: moderateScale(12) },
  image: {
    borderRadius: moderateScale(12),
    height: moderateScale(64),
    width: moderateScale(64),
  },
  innerContainer: {
    flex: 1,
    justifyContent: "space-around",
    rowGap: moderateScale(8),
  },
});

export default EventCard;
