import React from "react";
import { Pressable } from "react-native";
import { BodyText } from "../../styles";

export default function TabButton() {
  return (
    <Pressable onFocus={() => console.log("focused")}>
      <BodyText>Home</BodyText>
    </Pressable>
  );
}


