import React from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../styles";
import TicTacToeRouter from "../../portfolio/tictactoe";

export default function Project() {
  return (
    <View style={styles.container}>
      <View style={styles.ticTacToeContainer}>
        <TicTacToeRouter />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.Black,
    paddingVertical: 20,
  },
  ticTacToeContainer: {
    flex: 1,
    aspectRatio: 3 / 5,
  },
});
