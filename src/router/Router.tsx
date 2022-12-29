// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Portfolio, Contact } from "../screens";
import { TabBar } from "../components";
import { RootTabsParamList } from "./types";

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator<RootTabsParamList>();

const HomeTabs = () => {
  return (
    <Tabs.Navigator tabBar={(props) => <></>}>
      <Tabs.Screen name="Portfolio" component={Portfolio} />
      <Tabs.Screen name="Contact" component={Contact} />
    </Tabs.Navigator>
  );
};

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
