import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Text, COLORS } from "../styles";
import { ProjectCard } from "../components";

export default function Home() {
  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
    paddingHorizontal: 32,
    paddingTop: 20,
  },
});
