import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import React, { FC, useState, useEffect, useContext } from "react";
import { StyleSheet, Animated, useWindowDimensions } from "react-native";
import { COLORS } from "../../styles";
import TabButton from "./TabButton";
import { LinearGradient } from "expo-linear-gradient";
import { ShouldRenderBarContext } from "../../context-providers";

type Props = MaterialTopTabBarProps;

export const TabBar: FC<Props> = ({ navigation, state }) => {
  const { width } = useWindowDimensions();
  const height = 0.035 * width > 35 ? 0.035 * width : 35;
  const [tabBarAnimValue] = useState(new Animated.Value(0));
  const [ShouldRenderBar] = useContext(ShouldRenderBarContext);

  useEffect(() => {
    if (ShouldRenderBar) {
      Animated.timing(tabBarAnimValue, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(tabBarAnimValue, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }).start();
    }
  }, [ShouldRenderBar]);
  const animStyle = {
    transform: [
      {
        translateY: tabBarAnimValue.interpolate({
          inputRange: [0, 1],
          outputRange: [-70, 0],
        }),
      },
    ],
    opacity: tabBarAnimValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };
  return (
    <Animated.View style={[styles.container, { height, ...animStyle }]}>
      <LinearGradient
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
        }}
        colors={[COLORS.WhiteOpaque, COLORS.BlueOpaque, COLORS.Blue]}
        locations={[0.5, 0.75, 1]}
      >
        <TabButton
          label="Home"
          color="White"
          onPress={() => navigation.navigate("Portfolio")}
        />
        <TabButton label="About me" color="White" />

        <TabButton
          label="Contact"
          color="White"
          onPress={() => navigation.navigate("Contact")}
        />
      </LinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    borderBottomColor: COLORS.Maroon,
    alignItems: "center",
    zIndex: 1,
  },
  title: {
    marginBottom: 12,
  },
});
