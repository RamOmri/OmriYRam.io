import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS, Text } from "../../styles";
import { useGetDimensions } from "../../utils";
import TabButton from "./TabButton";

export const TabBar: FC<MaterialTopTabBarProps> = ({ state, navigation }) => {
  const { width } = useGetDimensions();
  const height = 0.035 * width > 35 ? 0.035 * width : 35;
  return (
    <View style={styles.container}>
      <View
        style={[styles.tabContainer, { height, borderRadius: width / 100 }]}
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
