// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home } from "../screens";
import { View } from "react-native";
import { TabBar } from "../components";

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Welcome" }}
      />
    </Stack.Navigator>
  );
};

function HomeTabs() {
  return (
    <NavigationContainer>
      <Tabs.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen name="Home" component={Home} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default HomeTabs;
