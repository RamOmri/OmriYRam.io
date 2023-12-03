import React from "react";
import { ProjectCard } from "../components";

type ReturnData = ({
  image: string;
  id: string;
} & Pick<
  React.ComponentProps<typeof ProjectCard>,
  "title" | "description" | "categories" | "hasAnimation"
>)[];

//TODO: remove this as it is currently being provided by contentful
export default function getProjectData() {
  return [
    {
      title: "Minimax Tic Tac Toe",
      description:
        "A react native app for playing tic tac toe against an agent utilizing the minimax algorithm",
      image: "minimax.png",
      id: "1",
      hasAnimation: false,
      categories: [
        "react-native",
        "algorithms",
        "minimax",
        "game theory",
        "AI",
      ],
    },
    {
      title: "Explainable Random forest",
      description:
        "As machine learning algorithms make progressively more consequential decisions over our lives, the explainability of the models decision making process becomes more pertinent. Thus in this project I attempt to implement an explainable yet complex random forest model",
      image: "explainable_randomforest.png",
      id: "2",
      categories: ["Machine learning", "Xai", "random forest"],
    },
    {
      title: "This website",
      description:
        "The motivation behind this website and a technical explanation on how it was implemented",
      image: "self_portrait.png",
      id: "3",
      categories: [
        "react-native",
        "contentful",
        "gcp",
        "express",
        "redux",
        "react context provider",
      ],
    },
  ] as ReturnData;
}
