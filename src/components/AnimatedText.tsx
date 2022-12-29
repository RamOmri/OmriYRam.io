import React, { useState, useEffect } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { Text } from "../styles";

type AnimatedTextProps = {
  content: string;
  onCompleted?: () => void;
  neverEndingCursor?: boolean;
  writeSpeed?: number;
} & React.ComponentProps<typeof Text>;

const AnimatedText: React.FC<AnimatedTextProps> = ({
  content,
  fontType = "Body",
  neverEndingCursor = false,
  onCompleted,
  writeSpeed = 100,
  ...TextProps
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [hasCursor, setHasCursor] = useState(true);
  const [cursorOpacity] = useState(new Animated.Value(0));

  const animateCursor = () => {
    Animated.timing(cursorOpacity, {
      toValue: 1,
      duration: writeSpeed * 2,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(cursorOpacity, {
        toValue: 0,
        duration: writeSpeed * 2,
        useNativeDriver: true,
      }).start(() => {
        animateCursor();
      });
    });
  };

  const animateText = (index: number) => {
    setTimeout(() => {
      setTextIndex(index);
      if (index < content.length) {
        animateText(index + 1);
      } else {
        onCompleted?.();
        setHasCursor(neverEndingCursor);
      }
    }, writeSpeed);
  };

  useEffect(() => {
    animateCursor();
    animateText(textIndex);
  }, []);

  return (
    <View style={styles.container}>
      <Text {...TextProps} fontType={fontType}>
        {content.substring(0, textIndex)}
        {hasCursor && (
          <Animated.View style={{ opacity: cursorOpacity, ...styles.cursor }}>
            <Text {...TextProps} fontType={fontType}>
              |
            </Text>
          </Animated.View>
        )}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  cursor: {
    width: 10,
    height: 20,
  },
});

export default AnimatedText;
