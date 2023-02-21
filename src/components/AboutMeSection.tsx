import React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import ContentfulImage from "./ContentfulImage";
import { ContentfulAsset } from "../types";
import { Text } from "../styles";

type Props = {
  image?: ContentfulAsset;
  text?: string;
  isTextFirst?: boolean;
};

const AboutMeSection: React.FC<Props> = ({
  image,
  text,
  isTextFirst = false,
}) => {
  const { width, height } = useWindowDimensions();
  const isMobile = width < 500;

  return (
    <View
      style={[
        {
          flexDirection: isMobile ? "column" : "row",
        },
        styles.container,
      ]}
    >
      {isTextFirst && !isMobile && <Text fontType="Body">{text}</Text>}
      {image && (
        <ContentfulImage
          contentfulAsset={image}
          layoutStyle={[
            {
              width: isMobile ? "100%" : "35%",
              height: isMobile ? undefined : 0.4 * height,
            },
            styles.image,
          ]}
        />
      )}
      {(!isTextFirst || isMobile) && <Text fontType="Body">{text}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  image: {
    marginRight: 16,
    marginBottom: 16,
  },
});

export default AboutMeSection;
