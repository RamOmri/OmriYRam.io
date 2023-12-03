import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "../styles";
import TicTacToeRouter from "../../portfolio/tictactoe";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../router/types";
import { StackNavigationProp } from "@react-navigation/stack";

type ProjectScreenRouteProp = RouteProp<RootStackParamList, "Project">;
type ProjectScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Project"
>;

type Props = {
  route: ProjectScreenRouteProp;
  navigation: ProjectScreenNavigationProp;
};

export default function Project({ route }: Props) {
  const params = route.params;
  const { metaInfo } = params;
  const navigation = useNavigation<ProjectScreenNavigationProp>();

  useEffect(() => {
    console.log(params);
  }, []);

  useEffect(() => {
    const handleBackPress = (event: PopStateEvent) => {
      console.log("here");
      event.preventDefault();
      navigation.navigate("Home");
    };
    window.addEventListener("popstate", handleBackPress);

    return () => {
      window.removeEventListener("popstate", handleBackPress);
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      {metaInfo.implementation == "tictactoe" && (
        <View style={styles.ticTacToeContainer}>
          <TicTacToeRouter />
        </View>
      )}
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
    marginTop: 20,
    flex: 1,
    aspectRatio: 3 / 5,
  },
});
