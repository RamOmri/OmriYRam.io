import React, { FC, useEffect, useRef } from "react";
import { View, Animated, Easing, ViewStyle } from "react-native";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { COLORS } from "../styles";
import { LinearGradient } from "expo-linear-gradient";

type AnimatedGraphProps = {
  style?: React.ComponentProps<typeof View>["style"];
};

const AnimatedGraph: FC<AnimatedGraphProps> = ({ style }) => {
  const graphOpacity = useRef(new Animated.Value(0)).current;
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    Animated.timing(graphOpacity, {
      toValue: 0.5,
      useNativeDriver: true,
      easing: Easing.exp,
      duration: 2500,
    }).start();
  }, []);

  const options = {
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          area: 1000,
        },
      },
      color: {
        value: [COLORS.White, COLORS.Blue, COLORS.LightBlue, COLORS.Gray],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 16, max: 24 },
      },
      links: {
        enable: true,
        distance: 100,
        color: COLORS.White,
        opacity: 0.7,
        width: 2,
      },
      move: {
        enable: true,
        speed: 2,
        random: true,
        straight: false,
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 70,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 2,
        },
      },
    },
  };

  return (
    <View style={style}>
      <Animated.View style={{ opacity: graphOpacity }}>
        <Particles
          options={options}
          init={particlesInit}
          style={{ height: 500 }}
        />
      </Animated.View>
    </View>
  );
};

export default AnimatedGraph;
