import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  Image,
  ImageBackground,
  Animated,
  ScrollView,
} from "react-native";
import { Text, COLORS } from "../styles";
import { AnimatedText, ProjectCard, TabBar } from "../components";
import { render } from "react-dom";

export default function Portfolio() {
  const { height, width } = useWindowDimensions();
  const [renderSecondLine, setRenderSecondLine] = useState(false);
  const [isTabBarVisible, setIsTabBarVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView
        stickyHeaderIndices={[0]}
        contentContainerStyle={{ width: "100%" }}
        onScroll={(e) => {
          const { y } = e.nativeEvent.contentOffset;
          if (y > 0.1 * height && !isTabBarVisible) setIsTabBarVisible(true);
          else if (y < 0.1 * height && isTabBarVisible)
            setIsTabBarVisible(false);
        }}
        scrollEventThrottle={100}
      >
        <TabBar isTabBarVisible={isTabBarVisible} />
        <View
          style={{
            height,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ImageBackground
            source={require("../../assets/welcome.jpeg")}
            style={[
              {
                height: height * 0.8,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              },
            ]}
          >
            <AnimatedText
              fontType="LargeTitle"
              content="Hi,"
              onCompleted={() => setRenderSecondLine(true)}
              writeSpeed={200}
            />
            {renderSecondLine && (
              <AnimatedText
                fontType="LargeTitle"
                content="I am Omri"
                writeSpeed={300}
                neverEndingCursor
              />
            )}
          </ImageBackground>
        </View>
        <ProjectCard
          title="Minimax tic tac toe"
          image={require("../../assets/minimax.jpeg")}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
        />
        <ProjectCard
          title="Nurse triaging"
          image={require("../../assets/triage.jpeg")}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
});
