import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text, COLORS } from "../styles";
import { ShouldRenderBarContext } from "../context-providers";
import { useFocusEffect } from "@react-navigation/native";
import { useAboutMeSelector, fetchAboutMe, useAppDispatch } from "../state";

export default function AboutMe() {
  const [isTabBarVisible, setShouldRenderBar] = useContext(
    ShouldRenderBarContext
  );
  const content = useAboutMeSelector();
  const dispatch = useAppDispatch();

  useFocusEffect(() => {
    if (!isTabBarVisible) setShouldRenderBar?.(true);
  });

  useEffect(() => {
    dispatch(fetchAboutMe());
  }, []);

  return (
    <View style={styles.container}>
      <Text fontType="Body">About Me</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.Black,
  },
});
