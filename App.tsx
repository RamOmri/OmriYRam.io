import React from "react";
import { StyleSheet, Dimensions, View } from "react-native";
import { HomeTabs } from "./src/router";
import { COLORS } from "./src/styles";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeTabs />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
});
