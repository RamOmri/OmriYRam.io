import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS, Text } from "../styles";

type Props = {
  content: string;
  onComplete?: () => void;
  neverEndingCursors?: boolean;
  writeSpeed?: number;
} & React.ComponentProps<typeof Text>;

export default function AnimatedText({
  content,
  onComplete,
  neverEndingCursors = false,
  writeSpeed = 50,
  ...TextProps
}: Props) {
  let [text, setText] = useState("");
  let [cursorColor, setCursorColor] = useState("transparent");
  let [messageIndex, setMessageIndex] = useState(0);
  let [textIndex, setTextIndex] = useState(0);
  let [timeouts, setTimeouts] = useState<{
    cursorTimeout: any;
    typingTimeout: any;
  }>({
    cursorTimeout: undefined,
    typingTimeout: undefined,
  });

  const textRef = useRef(text);
  textRef.current = text;

  const cursorColorRef = useRef(cursorColor);
  cursorColorRef.current = cursorColor;

  const messageIndexRef = useRef(messageIndex);
  messageIndexRef.current = messageIndex;

  const textIndexRef = useRef(textIndex);
  textIndexRef.current = textIndex;

  let timeoutsRef = useRef(timeouts);
  timeoutsRef.current = timeouts;

  let typingAnimation = () => {
    if (textIndexRef.current < content[messageIndexRef.current].length) {
      setText(
        textRef.current +
          content[messageIndexRef.current].charAt(textIndexRef.current)
      );
      setTextIndex(textIndexRef.current + 1);

      let updatedTimeouts = { ...timeoutsRef.current };
      updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 0);
      setTimeouts(updatedTimeouts);
    } else if (messageIndexRef.current + 1 < content.length) {
      setMessageIndex(messageIndexRef.current + 1);
      setTextIndex(0);

      let updatedTimeouts = { ...timeoutsRef.current };
      updatedTimeouts.typingTimeout = setTimeout(
        typingAnimation,
        100 - writeSpeed
      );
      setTimeouts(updatedTimeouts);
    } else {
      if (!neverEndingCursors) {
        clearInterval(timeoutsRef.current.cursorTimeout);
        setCursorColor("transparent");
      }

      onComplete?.();
    }
  };

  let cursorAnimation = () => {
    if (cursorColorRef.current === "transparent") {
      setCursorColor(COLORS.White);
    } else {
      setCursorColor("transparent");
    }
  };

  useEffect(() => {
    let updatedTimeouts = { ...timeoutsRef.current };
    updatedTimeouts.typingTimeout = setTimeout(typingAnimation, 200);
    updatedTimeouts.cursorTimeout = setInterval(cursorAnimation, 200);
    setTimeouts(updatedTimeouts);

    return () => {
      clearTimeout(timeoutsRef.current.typingTimeout);
      clearInterval(timeoutsRef.current.cursorTimeout);
    };
  }, []);

  return (
    <View style={{ flexDirection: "row" }}>
      <Text {...TextProps} style={styles.text}>
        {text}
        <Text {...TextProps} style={{ color: cursorColor }}>
          |
        </Text>
      </Text>
    </View>
  );
}

let styles = StyleSheet.create({
  text: {
    alignSelf: "stretch",
  },
});
