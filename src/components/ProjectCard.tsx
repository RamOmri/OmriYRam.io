import React, { FC, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS, Text } from "../styles";
import { useGetDimensions } from "../utils";
import AnimatedText from "./AnimatedText";

type ProjectCardProps = {
  title: string;
  description: string;
  image: React.ComponentProps<typeof Image>["source"];
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image }) => {
  const [hasTitle, setHasTitle] = useState(false);
  const { height, width } = useGetDimensions();
  const imageHeight = width > 700 ? height / 4 : undefined;
  return (
    <View style={[styles.container, { height: imageHeight }]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.infoContainer}>
        <AnimatedText
          content={title}
          fontType="BodyHeader"
          style={styles.title}
          onCompleted={() => setHasTitle(true)}
          writeSpeed={70}
        />
        {hasTitle && (
          <AnimatedText writeSpeed={30} fontType="Body" content={description} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "90%",
    marginBottom: 20,
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
    marginRight: 20,
  },
  title: {
    marginBottom: 8,
  },
});

export default ProjectCard;
