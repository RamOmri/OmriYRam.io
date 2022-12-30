// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Portfolio, Contact } from "../screens";
import { TabBar } from "../components";
import { RootTabsParamList } from "./types";
import { ShouldRenderBarProvider } from "../context-providers";

const Stack = createStackNavigator();
const Tabs = createMaterialTopTabNavigator<RootTabsParamList>();

const HomeTabs = () => {
  return (
    <ShouldRenderBarProvider>
      <Tabs.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen name="Portfolio" component={Portfolio} />
        <Tabs.Screen name="Contact" component={Contact} />
      </Tabs.Navigator>
    </ShouldRenderBarProvider>
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
