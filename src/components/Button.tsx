import React, { useState } from "react";
import {
  Animated,
  Easing,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, COLORS } from "../styles";

type Props = {
  label: string;
} & Pick<React.ComponentProps<typeof TouchableOpacity>, "onPress" | "style"> &
  Pick<React.ComponentProps<typeof Text>, "fontType">;

export default function Button({ label, onPress, style, fontType }: Props) {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={[styles.container, { borderRadius: width / 100 }, style]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text fontType={fontType}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Maroon,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});
