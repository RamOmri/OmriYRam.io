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
  console.log(screenWidth);
  switch (fontType) {
    case "Title":
      return [styles.title, { fontSize: screenWidth * 0.008 }];
    case "Body":
      return [styles.body, { fontSize: screenWidth * 0.012 }];
    case "BodyHeader":
      return [styles.bodyHeader, { fontSize: screenWidth * 0.017 }];
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
