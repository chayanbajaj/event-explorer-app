import { Colors } from "@/constants/colors";
import React from "react";
import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";
import { moderateScale } from "react-native-size-matters";

type IThemedButtonProps = Pick<PressableProps, "onPress"> & {
  size?: "default" | "lg" | "sm" | "xs";
  title: string;
};

const ThemedButton: React.FC<IThemedButtonProps> = ({
  onPress,
  size = "default",
  title,
}) => {
  const colorScheme = useColorScheme();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        buttonSizeStyle[size],
        {
          backgroundColor:
            colorScheme === "dark" ? Colors.dark.tint : Colors.light.tint,
        },
      ]}
    >
      <Text
        style={[
          size === "default" ? textSizeStyle.default : undefined,
          size === "lg" ? textSizeStyle.lg : undefined,
          size === "sm" ? textSizeStyle.sm : undefined,
          size === "xs" ? textSizeStyle.xs : undefined,
          {
            color: colorScheme === "dark" ? "black" : "white",
            fontWeight: "600",
          },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: moderateScale(8),
    alignItems: "center",
    justifyContent: "center",
  },
});

const buttonSizeStyle = StyleSheet.create({
  default: {
    borderRadius: moderateScale(8),
    height: moderateScale(48),
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
  },
  sm: {
    height: moderateScale(36),
    paddingHorizontal: moderateScale(12),
  },
  lg: {
    height: moderateScale(56),
    paddingHorizontal: moderateScale(32),
  },
  xs: {
    height: moderateScale(24),
    paddingHorizontal: moderateScale(8),
  },
});

const textSizeStyle = StyleSheet.create({
  default: {
    fontSize: moderateScale(16),
    lineHeight: moderateScale(24),
  },
  sm: {
    fontSize: moderateScale(12),
    lineHeight: moderateScale(18),
  },
  lg: {
    fontSize: moderateScale(18),
    lineHeight: moderateScale(26),
  },
  xs: {
    fontSize: moderateScale(10),
    lineHeight: moderateScale(16),
  },
});

export default ThemedButton;
