import React, { useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { AnimatedGraph, AnimatedText, ProjectCard } from "../components";
import ScrollableContainer from "../components/ScrollableContainer";
import { useBlogPostSelector } from "../state";
import { useNavigate } from "react-router-dom";

export default function Portfolio() {
  const { height } = useWindowDimensions();
  const [renderSecondLine, setRenderSecondLine] = useState(false);

  const navigate = useNavigate();

  const { blogPosts } = useBlogPostSelector();

  return (
    <ScrollableContainer>
      <AnimatedGraph style={StyleSheet.absoluteFill} />
      <View style={[styles.heroContainer, { height }]}>
        <AnimatedText
          fontType="LargeTitle"
          content="Hi,"
          onCompleted={() => setRenderSecondLine(true)}
          writeSpeed={400}
        />
        {renderSecondLine && (
          <AnimatedText
            fontType="LargeTitle"
            content="I am Omri"
            writeSpeed={200}
            neverEndingCursor
          />
        )}
      </View>
      <View style={styles.portfolioContainer}>
        {blogPosts!.map((item, index) => {
          const {
            title,
            description,
            cardImage,
            categories,
            content,
            metaInfo,
          } = item;
          const image = {
            uri: `https:${cardImage!.fields.file.url}?q=50&fm=webp`,
          };
          const post = { content, metaInfo };
          console.log(post);
          return (
            <>
              <ProjectCard
                title={title!}
                description={description!}
                categories={categories}
                image={image}
                content={{ content, metaInfo }}
                key={index}
                onPress={() => {
                  console;
                  navigate(`/${index}`);
                }}
              />
              <View style={styles.portfolioSpacer} />
            </>
          );
        })}
      </View>
    </ScrollableContainer>
  );
}

const styles = StyleSheet.create({
  heroContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  portfolioContainer: {
    paddingTop: 24,
    paddingHorizontal: "10%",
  },
  portfolioSpacer: {
    height: 24,
  },
});
