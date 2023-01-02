import React, { FC, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  FlexStyle,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";
import AnimatedText from "./AnimatedText";
import VisibilitySensor from "react-visibility-sensor";
import { COLORS, Text } from "../styles";
import Hoverable from "./Hoverable";
import { Link } from "react-router-dom";

type ProjectCardProps = {
  title: string;
  description: string;
  image: React.ComponentProps<typeof Image>["source"];
  hasAnimation?: boolean;
  layoutStyle?: FlexStyle;
  categories?: string[];
  onPress?: () => void;
};

type NonAnimatedTextProps = Pick<
  ProjectCardProps,
  "title" | "description" | "categories"
>;

const NonAnimatedText: FC<NonAnimatedTextProps> = ({
  description,
  title,
  categories,
}) => {
  return (
    <>
      <Text fontType="BodyHeader" style={styles.textLayout}>
        {title}
      </Text>
      <Text style={styles.textLayout} fontType="Body">
        {description}
      </Text>
      {categories && (
        <>
          <Text style={styles.categories} fontType="Body">
            Categories:{" "}
          </Text>
          <Text style={styles.textLayout} fontType="Body">
            {categories.map((el) => `${el}, `)}
          </Text>
        </>
      )}
    </>
  );
};

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  image,
  hasAnimation = true,
  layoutStyle,
  categories,
  onPress,
}) => {
  const [shouldStartAnimation, setShouldStartAnimation] = useState(false);
  const [hasDescription, setHasDescription] = useState(false);
  const [scaleValue] = useState(new Animated.Value(1));

  const onHoverIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.05,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const onHoverOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };

  return (
    <VisibilitySensor
      partialVisibility
      onChange={(isVisible: boolean) => {
        if (!shouldStartAnimation && hasAnimation)
          setShouldStartAnimation(isVisible);
      }}
    >
      <Link to="/Project" style={styles.link}>
        <Hoverable onHoverIn={onHoverIn} onHoverOut={onHoverOut}>
          <Animated.View style={animatedStyle}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={[styles.container, layoutStyle]}
              onPress={onPress}
            >
              <View style={styles.imageContainer}>
                <Image
                  source={image}
                  style={styles.image}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.infoContainer}>
                {hasAnimation ? (
                  <>
                    {shouldStartAnimation && (
                      <AnimatedText
                        content={title}
                        fontType="BodyHeader"
                        style={styles.textLayout}
                        writeSpeed={15}
                      />
                    )}
                    {shouldStartAnimation && (
                      <AnimatedText
                        writeSpeed={1}
                        fontType="Body"
                        style={styles.textLayout}
                        content={description}
                        onCompleted={() => setHasDescription(true)}
                      />
                    )}
                    {categories && hasDescription && (
                      <>
                        <AnimatedText
                          writeSpeed={0.5}
                          fontType="Body"
                          style={styles.categories}
                          content={`Categories: `}
                          onCompleted={() => setHasDescription(true)}
                        />
                        <AnimatedText
                          neverEndingCursor
                          writeSpeed={1}
                          fontType="Body"
                          content={`${categories[0]}, ${categories
                            .slice(1, categories.length)
                            .map((el) => ` ${el}`)}`}
                          onCompleted={() => setHasDescription(true)}
                        />
                      </>
                    )}
                  </>
                ) : (
                  <NonAnimatedText
                    description={description}
                    title={title}
                    categories={categories}
                  />
                )}
              </View>
            </TouchableOpacity>
          </Animated.View>
        </Hoverable>
      </Link>
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
    borderRadius: 30,
    overflow: "hidden",
  },
  infoContainer: {
    flex: 3,
    paddingHorizontal: 20,
  },
  imageContainer: {
    flex: 1,
    paddingTop: 5,
  },
  textLayout: {
    marginBottom: 8,
  },
  categories: {
    fontWeight: "bold",
  },
  link: {
    color: "transparent",
  },
});

export default ProjectCard;
