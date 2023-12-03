import React, { useContext, useEffect, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Text, COLORS } from "../styles";
import * as Contentful from "contentful";
import { ShouldRenderBarContext } from "../context-providers";
import { useFocusEffect } from "@react-navigation/native";

export default function Contact() {
  const [isTabBarVisible, setShouldRenderBar] = useContext(
    ShouldRenderBarContext
  );
  const client = Contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_TOKEN!,
  });
  async function retrieveContent() {
    try {
      const response = await client.getEntries({
        content_type: "contact",
      });
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    retrieveContent();
  }, []);

  useFocusEffect(() => {
    if (!isTabBarVisible) setShouldRenderBar?.(true);
  });

  return (
    <View style={styles.container}>
      <Text fontType="Body">Contact</Text>
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
