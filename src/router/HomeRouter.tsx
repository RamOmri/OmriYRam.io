// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home, Contact, Welcome } from "../screens";
import { withLayoutContext } from "expo-router";
import { TabBar } from "../components";

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator();

const HomeStack = () => {
  return (
    <Tabs.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Contact" component={Contact} />
    </Tabs.Navigator>
  );
};

function HomeTabs() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Home"
          component={HomeStack}
          options={{ title: "Welcome" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeTabs;
