import React from "react";
import { View, Image, StyleSheet, StyleProp, ViewStyle } from "react-native";
import type { ContentfulAsset } from "../types";

type ContentfulImageProps = {
  contentfulAsset: ContentfulAsset;
  layoutStyle?: StyleProp<ViewStyle>;
};

const ContentfulImage: React.FC<ContentfulImageProps> = ({
  contentfulAsset,
  layoutStyle,
}) => {
  const { url, details } = contentfulAsset;
  const { height, width } = details ? details.image : { height: 1, width: 1 };
  const source = { uri: url };

  return (
    <View style={[styles.container, layoutStyle]}>
      <Image
        source={source}
        style={[styles.image, { aspectRatio: height / width }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
    borderRadius: 10,
  },
});

export default ContentfulImage;
