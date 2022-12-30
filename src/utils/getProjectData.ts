import { ViewToken } from "react-native"

type returnData = {
    title: string,
    description: string,
    image: string,
    id: string,
}[]

export default function getProjectData() {
    return [
        {
            title: "Minimax tic tac toe",
            description: "A react native app for playing tic tac toe against an agent utilizing the minimax algorithm",
            image: "minimax.jpeg",
            id: "1"
        },
        {
            title: "Explainable Random forest",
            description: "As machine learning algorithms make progressively more consequential decisions over our lives, the explainability of the models decision making process becomes more pertinent. Thus in this project I attempt to implement an explainable yet complex random forest model",
            image: "explainable_randomforest.jpeg",
            id: "2"
        }
    ] as returnData
}
