import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { COLORS, Text } from "../styles";
import { useGetDimensions } from "../utils";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "../components";
import { useNavigation, Link } from "@react-navigation/native";

export default function Welcome() {
  const { height, width } = useGetDimensions();
  const navigation = useNavigation();
  return (
    <>
      <View style={{ flex: 1, backgroundColor: COLORS.Black }}>
        <ImageBackground
          source={require("../../assets/welcome.jpeg")}
          style={[styles.container, { height }]}
        >
          <View style={{ height, width }}>
            <LinearGradient
              // Button Linear Gradient
              colors={[COLORS.Maroon, COLORS.MaroonOpaque]}
              locations={[0, 0.2, 1]}
              style={styles.container}
              start={{ x: 0, y: 0 }}
            >
              <Text fontType="Title" style={styles.title}>
                Hi, I am Omri
              </Text>
              <Link to={"/Home"}>
                <Button label="Enter" />
              </Link>
            </LinearGradient>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    marginBottom: 24,
    marginTop: 60,
  },
});
