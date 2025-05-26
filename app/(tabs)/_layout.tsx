import { IconSymbol } from "@/components/common/IconSymbol.ios";
import { ThemedText } from "@/components/common/ThemedText";
import { ThemedView } from "@/components/common/ThemedView";
import { DEFAULT_BOX_SHADOW } from "@/constants/common";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Colors } from "react-native/Libraries/NewAppScreen";

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        header: (props) => {
          return (
            <ThemedView style={styles.header}>
              <ThemedText type="title">{props.options.title}</ThemedText>
            </ThemedView>
          );
        },
        tabBarLabelStyle: {
          fontSize: moderateScale(12),
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Event Explorer",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={moderateScale(26)}
              name="calendar.and.person"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="interested-events"
        options={{
          title: "Interested Events",
          tabBarIcon: ({ color }) => (
            <IconSymbol
              size={moderateScale(26)}
              name="heart.circle.fill"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

const styles = StyleSheet.create({
  header: {
    ...DEFAULT_BOX_SHADOW,
    padding: moderateScale(16),
  },
});

export default TabLayout;
