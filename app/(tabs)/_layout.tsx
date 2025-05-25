import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol.ios";
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
    padding: 16,
  },
});

export default TabLayout;
