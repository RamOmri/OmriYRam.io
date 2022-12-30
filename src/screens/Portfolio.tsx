import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ImageBackground,
  ScrollView,
} from "react-native";
import { COLORS } from "../styles";
import { AnimatedText, ProjectCard } from "../components";
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
          if (y > 0.1 * height && !isTabBarVisible) setIsTabBarVisible?.(true);
          else if (y < 0.1 * height && isTabBarVisible)
            setIsTabBarVisible?.(false);
        }}
        scrollEventThrottle={100}
      >
        <View style={[styles.heroContainer, { height: height * 0.9 }]}>
          <ImageBackground
            source={require("../../assets/welcome.jpeg")}
            style={[
              {
                height: height * 0.8,
              },
              styles.hero,
            ]}
          >
            <AnimatedText
              fontType="LargeTitle"
              content="Hi,"
              onCompleted={() => setRenderSecondLine(true)}
              writeSpeed={100}
            />
            {renderSecondLine && (
              <AnimatedText
                fontType="LargeTitle"
                content="I am Omri"
                writeSpeed={200}
                neverEndingCursor
              />
            )}
          </ImageBackground>
        </View>
        {data.map((item, index) => {
          const { image, id, ...restProps } = item;

          return (
            <ProjectCard
              {...restProps}
              image={require(`../../assets/${image}`)}
              key={id}
            />
          );
        })}
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
  hero: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
