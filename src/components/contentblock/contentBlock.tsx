import React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import ContentfulImage from "../ContentfulImage";
import { ContentfulAsset } from "../../types";
import { Text } from "../../styles";

type Block = {
  value?: string;
  nodeType: "text";
}[];

type TextProps = {
  text: string;
};

const TextBlock: React.FC<TextProps> = ({ text }) => {
  return <Text fontType="Body">{text}</Text>;
};

type Props = {
  blockType: "text" | "Code";
  text?: string;
};
const ContentBlock: React.FC<Props> = ({ blockType, text }) => {
  const returnBlock = () => {
    switch (blockType) {
      case "text":
        return <TextBlock text={text ?? ""} />;
      default:
        return <View />;
    }
  };
  return <View style={styles.container}>{returnBlock()}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    width: "100%",
  },
  image: {
    marginRight: 16,
    marginBottom: 16,
  },
});

export { ContentBlock, Block };
