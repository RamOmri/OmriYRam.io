import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Animated,
  Easing,
} from "react-native";
import { COLORS, Text } from "../styles";
import { useGetDimensions } from "../utils";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components";
import { useNavigation } from "@react-navigation/native";
import { Link } from "react-router-dom";
import { AnimatedText } from "../components";

export default function Welcome() {
  const { height, width } = useGetDimensions();
  const [startSecondLine, setStartSecondLine] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [buttonOpacityAnimValue] = useState(new Animated.Value(0));

  const buttonAnimation = () => {
    Animated.timing(buttonOpacityAnimValue, {
      toValue: 1,
      duration: 1200,
      easing: Easing.exp,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    opacity: buttonOpacityAnimValue,
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: COLORS.Black }}>
        <ImageBackground
          source={require("../../assets/welcome.jpeg")}
          style={[styles.container, { height }]}
        >
          <View style={{ height, width }}>
            <LinearGradient
              colors={[COLORS.White, COLORS.Maroon, COLORS.WhiteOpaque]}
              locations={[0, 0.01, 0.6]}
              style={styles.container}
              start={{ x: 0, y: 0 }}
            >
              <View style={{ marginBottom: 100, alignItems: "center" }}>
                <AnimatedText
                  fontType="LargeTitle"
                  content="Hi,"
                  onComplete={() => setStartSecondLine(true)}
                  writeSpeed={2}
                />
                {startSecondLine && (
                  <AnimatedText
                    neverEndingCursors
                    fontType="LargeTitle"
                    content="I am Omri"
                    onComplete={buttonAnimation}
                    writeSpeed={0}
                  />
                )}
              </View>
              <Animated.View style={animatedStyle}>
                <Link to={"/Home"} style={{ color: COLORS.Maroon }}>
                  <Button label="Enter" fontType="Title" />
                </Link>
              </Animated.View>
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    marginBottom: 24,
    marginTop: 60,
  },
});
