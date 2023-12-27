import React, { useEffect } from "react";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { COLORS, Text } from "../styles";
import TicTacToeRouter from "../../portfolio/tictactoe";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../router/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { ContentBlock, Block } from "../components";
import { ScrollView } from "react-native-gesture-handler";

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
  const { metaInfo, content, title } = params;
  const navigation = useNavigation<ProjectScreenNavigationProp>();
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const handleBackPress = (event: PopStateEvent) => {
      event.preventDefault();
      navigation.navigate("Home");
    };
    window.addEventListener("popstate", handleBackPress);

    return () => {
      window.removeEventListener("popstate", handleBackPress);
    };
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text fontType="Title" style={{ marginBottom: 20 }}>
        {title}
      </Text>
      <View style={{ width: "100%", paddingHorizontal: 40 }}>
        {content.map((block: Block, index: number) => {
          console.log("here", block);
          return (
            <ContentBlock
              blockType={block[0].nodeType}
              text={block[0].value}
              key={index}
            />
          );
        })}
      </View>
      <View
        style={{
          alignItems: "center",
          width,
          backgroundColor: COLORS.Black,
        }}
      >
        {metaInfo?.implementation === "tictactoe" && (
          <View
            style={[
              styles.ticTacToeContainer,
              { width: width > 900 ? "30%" : "70%" },
            ]}
          >
            <TicTacToeRouter />
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Black,
    padding: 30,
  },
  ticTacToeContainer: {
    marginTop: 20,
    aspectRatio: 3 / 5,
  },
});
