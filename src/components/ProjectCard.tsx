import React, { FC } from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS, Text } from "../styles";
import { useGetDimensions } from "../utils";

type ProjectCardProps = {
  title: string;
  description: string;
  image: React.ComponentProps<typeof Image>["source"];
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image }) => {
  const { height, width } = useGetDimensions();
  const imageHeight = width > 700 ? height / 4 : undefined;
  return (
    <View style={[styles.container, { height: imageHeight }]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.infoContainer}>
        <Text fontType="BodyHeader" style={styles.title}>
          {title}
        </Text>
        <Text fontType="Body">{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
  },
  image: {
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  infoContainer: {
    width: "70%",
  },
  imageContainer: {
    width: "25%",
    alignContent: "center",
  },
  title: {
    marginBottom: 8,
  },
});

export default ProjectCard;
