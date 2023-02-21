import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../styles";
import { ShouldRenderBarContext } from "../context-providers";
import { useFocusEffect } from "@react-navigation/native";
import { useAboutMeSelector, fetchAboutMe, useAppDispatch } from "../state";
import AboutMeSection from "../components/AboutMeSection";
import ScrollableContainer from "../components/ScrollableContainer";

export default function AboutMe() {
  const [isTabBarVisible, setShouldRenderBar] = useContext(
    ShouldRenderBarContext
  );

  const { isLoading, aboutMe, error } = useAboutMeSelector();

  const dispatch = useAppDispatch();

  useFocusEffect(() => {
    if (!isTabBarVisible) setShouldRenderBar?.(true);
  });

  useEffect(() => {
    dispatch(fetchAboutMe());
  }, []);

  useEffect(() => {
    if (Boolean(error))
      alert(
        "Something went wrong fetching the about me page content. Please notify Omri Ram via the contact details page"
      );
  }, [error]);

  if (isLoading || Boolean(error) || !Boolean(aboutMe)) return <></>;
  return (
    <ScrollableContainer contentContainerStyle={styles.container}>
      <View style={styles.contentContainer}>
        <Text fontType="LargeTitle">{aboutMe?.title}</Text>
        <AboutMeSection
          image={aboutMe?.profileImage}
          text={aboutMe?.introduction}
        />
        <AboutMeSection
          image={aboutMe?.stockImage1}
          text={aboutMe?.careerGoals}
        />
        <AboutMeSection
          image={aboutMe?.stockImage2}
          text={aboutMe?.personalQualities}
        />
        <AboutMeSection
          image={aboutMe?.stockImage3}
          text={aboutMe?.callToAction}
          isTextFirst
        />
      </View>
    </ScrollableContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "5%",
    paddingHorizontal: "10%",
    alignItems: "center",
  },
  contentContainer: {
    alignItems: "flex-start",
  },
});
