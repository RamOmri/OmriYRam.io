import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { BodyText, COLORS } from "../styles";

export default function Home() {
  return (
    <View style={styles.container}>
      <BodyText>this is a test</BodyText>
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
