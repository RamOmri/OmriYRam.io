import React, { useState } from "react";
import { Animated, Easing } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, COLORS } from "../../styles";
import Hoverable from "../Hoverable";

type Props = {
  label: string;
  color: keyof typeof COLORS;
} & Pick<React.ComponentProps<typeof TouchableOpacity>, "onPress">;

export default function TabButton({ label, color, onPress }: Props) {
  const [scaleValue] = useState(new Animated.Value(1));

  const onHoverIn = () => {
    Animated.timing(scaleValue, {
      toValue: 1.1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const onHoverOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleValue }],
  };
  return (
    <TouchableOpacity
      style={{ height: "100%" }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Hoverable onHoverIn={onHoverIn} onHoverOut={onHoverOut}>
        <Animated.View collapsable={true} style={animatedStyle}>
          <Text fontType="BodyHeader" style={{ color: COLORS[color] }}>
            {label}
          </Text>
        </Animated.View>
      </Hoverable>
    </TouchableOpacity>
  );
}
