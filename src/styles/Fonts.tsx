import React, { FC } from "react";
import { Text as RawText, StyleSheet, useWindowDimensions } from "react-native";
import { COLORS } from "./Colors";

type TextProps = Pick<
  React.ComponentProps<typeof RawText>,
  "style" | "children"
> & {
  fontType: "Title" | "Body" | "BodyHeader" | "LargeTitle";
};

function getStyle(fontType: TextProps["fontType"], screenWidth: number) {
  const largeTitleSize = screenWidth * 0.08 > 50 ? screenWidth * 0.08 : 50;
  const titleSize = screenWidth * 0.04 > 26 ? screenWidth * 0.04 : 26;
  const bodySize = screenWidth * 0.012 > 16 ? screenWidth * 0.012 : 16;
  const headerSize = screenWidth * 0.017 > 20 ? screenWidth * 0.017 : 20;
  switch (fontType) {
    case "LargeTitle":
      return [styles.title, { fontSize: largeTitleSize }];
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
  const { width } = useWindowDimensions();

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
