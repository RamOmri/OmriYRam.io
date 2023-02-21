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
import ScrollableContainer from "../components/ScrollableContainer";

export default function Portfolio() {
  const { height, width } = useWindowDimensions();
  const [renderSecondLine, setRenderSecondLine] = useState(false);

  const data = getProjectData();

  return (
    <ScrollableContainer>
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
            <>
              <ProjectCard
                {...restProps}
                image={require(`../../assets/${image}`)}
                key={id}
              />
              <View style={styles.portfolioSpacer} />
            </>
          );
        })}
      </View>
    </ScrollableContainer>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  portfolioContainer: {
    paddingTop: 24,
    paddingHorizontal: "10%",
  },
  portfolioSpacer: {
    height: 24,
  },
});
