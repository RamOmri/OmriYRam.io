import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import { COLORS } from "../styles";
import { AnimatedGraph, AnimatedText, ProjectCard } from "../components";
import { ShouldRenderBarContext } from "../context-providers";
import { getProjectData } from "../utils";

export default function Portfolio() {
  const { height } = useWindowDimensions();
  const [renderSecondLine, setRenderSecondLine] = useState(false);
  const [isTabBarVisible, setIsTabBarVisible] = useContext(
    ShouldRenderBarContext
  );

  const data = getProjectData();

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={(e) => {
          const { y } = e.nativeEvent.contentOffset;
          if (y >= 0.05 * height && !isTabBarVisible)
            setIsTabBarVisible?.(true);
          else if (y < 0.05 * height && isTabBarVisible)
            setIsTabBarVisible?.(false);
        }}
        scrollEventThrottle={100}
      >
        <AnimatedGraph style={StyleSheet.absoluteFill} />
        <View style={[styles.heroContainer, { height }]}>
          <AnimatedText
            fontType="LargeTitle"
            content="Hi,"
            onCompleted={() => setRenderSecondLine(true)}
            writeSpeed={400}
          />
          {renderSecondLine && (
            <AnimatedText
              fontType="LargeTitle"
              content="I am Omri"
              writeSpeed={200}
              neverEndingCursor
            />
          )}
        </View>
        <View style={styles.portfolioContainer}>
          {data.map((item) => {
            const { image, id, ...restProps } = item;

            return (
              <ProjectCard
                {...restProps}
                image={require(`../../assets/${image}`)}
                key={id}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
  heroContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  portfolioContainer: {
    paddingHorizontal: 60,
  },
});
