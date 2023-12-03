import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Portfolio, Contact, AboutMe, Project } from "../screens";
import { TabBar } from "../components";
import { RootStackParamList, RootTabsParamList } from "./types";
import { useParams } from "react-router-dom";
import { ShouldRenderBarProvider } from "../context-providers";
import { useAppDispatch, useBlogPostSelector, fetchBlogPosts } from "../state";
import { COLORS } from "../styles";
import { ContentfulBlogPost } from "../types";

const Tabs = createMaterialTopTabNavigator<RootTabsParamList>();
const Stack = createStackNavigator<RootStackParamList>();

function TabsRouter() {
  return (
    <ShouldRenderBarProvider>
      <Tabs.Navigator tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen name="Portfolio" component={Portfolio} />
        <Tabs.Screen name="AboutMe" component={AboutMe} />
        <Tabs.Screen name="Contact" component={Contact} />
      </Tabs.Navigator>
    </ShouldRenderBarProvider>
  );
}

function HomeRouter() {
  const { projectID } = useParams();
  const { isLoading, blogPosts, error } = useBlogPostSelector();
  const dispatch = useAppDispatch();
  const [projectParams, setProjectParams] = useState<
    undefined | ContentfulBlogPost
  >(undefined);

  useEffect(() => {
    if (!Boolean(blogPosts)) dispatch(fetchBlogPosts());
    else if (Boolean(projectID) && Boolean(blogPosts)) {
      const post = blogPosts![parseInt(projectID!, 10)];
      setProjectParams(post);
    } else if (!Boolean(projectID)) setProjectParams(undefined);
    console.log("project ", !Boolean(projectID));
  }, [blogPosts, projectID]);

  if (
    isLoading ||
    Boolean(error) ||
    !Boolean(blogPosts) ||
    (Boolean(projectID) && !Boolean(projectParams))
  )
    return <View style={{ flex: 1, backgroundColor: COLORS.Black }} />;
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={projectID ? "Project" : "Home"}>
        <Stack.Screen
          name="Home"
          component={TabsRouter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Project"
          component={Project}
          initialParams={projectParams}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeRouter;
