// import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Portfolio, Contact, AboutMe } from "../screens";
import { TabBar } from "../components";
import { RootTabsParamList } from "./types";
import { ShouldRenderBarProvider } from "../context-providers";

const Tabs = createMaterialTopTabNavigator<RootTabsParamList>();

function HomeRouter() {
  return (
    <NavigationContainer>
      <ShouldRenderBarProvider>
        <Tabs.Navigator tabBar={(props) => <TabBar {...props} />}>
          <Tabs.Screen name="Portfolio" component={Portfolio} />
          <Tabs.Screen name="AboutMe" component={AboutMe} />
          <Tabs.Screen name="Contact" component={Contact} />
        </Tabs.Navigator>
      </ShouldRenderBarProvider>
    </NavigationContainer>
  );
}

export default HomeRouter;
