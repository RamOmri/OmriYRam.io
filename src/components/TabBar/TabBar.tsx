import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import React from "react";
import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, Text } from "../../styles";
import { useGetDimensions } from "../../utils";
import TabButton from "./TabButton";

export const TabBar: FC<MaterialTopTabBarProps> = ({ state, navigation }) => {
  const { width } = useGetDimensions();
  return (
    <View style={styles.container}>
      <Text fontType="Title" style={styles.title}>
        Omri Y Ram
      </Text>
      <View
        style={[
          styles.tabContainer,
          { height: 0.035 * width, borderRadius: width / 100 },
        ]}
      >
        <TabButton
          label="Home"
          color="Black"
          onPress={() => navigation.navigate("Home")}
        />
        <TabButton label="About me" color="Black" />

        <TabButton
          label="Contact"
          color="Black"
          onPress={() => navigation.navigate("Contact")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: "75%",
    borderBottomWidth: 6,
    borderBottomColor: COLORS.Maroon,
    backgroundColor: COLORS.White,
    paddingLeft: 24,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  container: {
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: COLORS.Black,
  },
  title: {
    marginBottom: 12,
  },
});
