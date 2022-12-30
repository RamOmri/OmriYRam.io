import React, { FC, useRef, useState } from "react";
import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import AnimatedText from "./AnimatedText";
import VisibilitySensor from "react-visibility-sensor";

type ProjectCardProps = {
  title: string;
  description: string;
  image: React.ComponentProps<typeof Image>["source"];
};

const ProjectCard: FC<ProjectCardProps> = ({ title, description, image }) => {
  const [hasTitle, setHasTitle] = useState(false);
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);
  const { height, width } = useWindowDimensions();
  const imageHeight = width > 700 ? height / 4 : undefined;

  return (
    <View style={[styles.container, { height: imageHeight }]}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} resizeMode="contain" />
      </View>
      <VisibilitySensor
        partialVisibility
        onChange={(isVisible: boolean) => {
          if (!shouldStartAnimation) setShouldStartAnimation(isVisible);
        }}
      >
        <View style={styles.infoContainer}>
          {shouldStartAnimation && (
            <AnimatedText
              content={title}
              fontType="BodyHeader"
              style={styles.title}
              onCompleted={() => setHasTitle(true)}
              writeSpeed={15}
            />
          )}
          {hasTitle && (
            <AnimatedText
              writeSpeed={5}
              fontType="Body"
              content={description}
            />
          )}
        </View>
      </VisibilitySensor>
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
