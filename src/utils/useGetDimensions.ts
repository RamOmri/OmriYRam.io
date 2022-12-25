import React, { useEffect, useState} from "react";
import { Dimensions } from "react-native";

const useGetDimensions = () => { 
    const [width, setWidth] = useState(Dimensions.get("window").width);
    const [height, setHeight] = useState(Dimensions.get("window").height);

    useEffect(() => {
      const updateDimensions = () => {
        setWidth(Dimensions.get("window").width);
        setHeight(Dimensions.get("window").height);
      };
  
      const dimensionsHandler = Dimensions.addEventListener(
        "change",
        updateDimensions
      );
      return () => {
        dimensionsHandler.remove();
      };
    }, []);

    return { width, height };
}

export default useGetDimensions;
