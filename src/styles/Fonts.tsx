import React, { FC, useEffect, useState } from "react";
import { Text as RawText, StyleSheet, Dimensions } from "react-native";
import { useGetDimensions } from "../utils";
import { COLORS } from "./Colors";

type TextProps = Pick<
  React.ComponentProps<typeof RawText>,
  "style" | "children"
> & {
  fontType: "Title" | "Body" | "BodyHeader";
};

function getStyle(fontType: TextProps["fontType"], screenWidth: number) {
  const titleSize = screenWidth * 0.028 > 26 ? screenWidth * 0.028 : 26;
  const bodySize = screenWidth * 0.012 > 16 ? screenWidth * 0.012 : 16;
  const headerSize = screenWidth * 0.017 > 20 ? screenWidth * 0.017 : 20;
  switch (fontType) {
    case "Title":
      return [styles.title, { fontSize: titleSize }];
    case "Body":
      return [styles.body, { fontSize: bodySize }];
    case "BodyHeader":
      return [styles.bodyHeader, { fontSize: headerSize }];
    default:
      break;
  }
}

const Text: FC<TextProps> = ({ style, children, fontType }) => {
  const { width } = useGetDimensions();

  return (
    <RawText style={[styles.text, style, ...(getStyle(fontType, width) ?? [])]}>
      {children}
    </RawText>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
  },
  body: {},
  bodyHeader: {
    fontWeight: "bold",
  },
  text: {
    color: COLORS.White,
    fontFamily: "Verdana",
    flexDirection: "row",
  },
});

export default Text;
