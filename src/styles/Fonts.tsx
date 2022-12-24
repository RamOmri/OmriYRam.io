import React, { FC } from "react";
import { Text, StyleSheet } from "react-native";
import { COLORS } from "./Colors";

type TextProps = Pick<React.ComponentProps<typeof Text>, "style" | "children">;

export const TitleText: FC<TextProps> = ({ style, children }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export const BodyText: FC<TextProps> = ({ style, children }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: COLORS.White,
    size: 26,
    fontWeight: "bold",
  },
  body: {
    color: COLORS.White,
    size: 16,
  },
});
