import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import React, { useEffect } from "react";
import { FC } from "react";
import { View, StyleSheet } from "react-native";
import { COLORS } from "../../styles";
import Hoverable from "../Hoverable/Hoverable";

export const TabBar: FC<MaterialTopTabBarProps> = ({ state, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <Hoverable
          onHoverIn={() => console.log("hover in")}
          onHoverOut={() => console.log("hover out")}
        >
          <View style={{ height: 20, width: 20, backgroundColor: "purple" }} />
        </Hoverable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    width: "80%",
    justifyContent: "center",
    backgroundColor: COLORS.White,
    borderBottomWidth: 4,
    borderBottomColor: COLORS.Blue,
    flex: 1,
    borderRadius: 200,
  },
  container: {
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: COLORS.Black,
  },
});
