import React, { useState } from "react";
import { Animated, Easing, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, COLORS } from "../styles";
import { useGetDimensions } from "../utils";

type Props = {
  label: string;
} & Pick<React.ComponentProps<typeof TouchableOpacity>, "onPress">;

export default function Button({ label, onPress }: Props) {
  const { width } = useGetDimensions();
  return (
    <TouchableOpacity
      style={[styles.container, { borderRadius: width / 100 }]}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text fontType="BodyHeader">{label}</Text>
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
