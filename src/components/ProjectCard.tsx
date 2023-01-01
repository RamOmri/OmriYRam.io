import React, { FC, useState } from "react";
import { View, Image, StyleSheet, FlexStyle } from "react-native";
import AnimatedText from "./AnimatedText";
import VisibilitySensor from "react-visibility-sensor";
import { Text } from "../styles";

type ProjectCardProps = {
  title: string;
  description: string;
  image: React.ComponentProps<typeof Image>["source"];
  hasAnimation?: boolean;
  layoutStyle?: FlexStyle;
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  hasAnimation = true,
  layoutStyle,
}) => {
  const [hasTitle, setHasTitle] = useState(false);
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(isVisible: boolean) => {
        if (!shouldStartAnimation && hasAnimation)
          setShouldStartAnimation(isVisible);
      }}
    >
      <View style={[styles.container, layoutStyle]}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </View>

        <View style={styles.infoContainer}>
          {hasAnimation ? (
            <>
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
            </>
          ) : (
            <>
              <Text fontType="BodyHeader" style={styles.title}>
                {title}
              </Text>
              <Text fontType="Body">{description}</Text>
            </>
          )}
        </View>
      </View>
    </VisibilitySensor>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 30,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  infoContainer: {
    flex: 3,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 5,
  },
  title: {
    marginBottom: 8,
  },
});

export default ProjectCard;
