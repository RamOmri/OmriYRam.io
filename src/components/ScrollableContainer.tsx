import React, { useContext } from "react";
import {
  View,
  ScrollView,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { COLORS } from "../styles";
import { ShouldRenderBarContext } from "../context-providers";

type Props = {
  children?: React.ReactNode;
};

const ScrollableContainer: React.FC<Props> = ({ children }) => {
  const [isTabBarVisible, setIsTabBarVisible] = useContext(
    ShouldRenderBarContext
  );
  const { height } = useWindowDimensions();
  const handleScroll = (e: any) => {
    const { y } = e.nativeEvent.contentOffset;
    if (y >= 0.05 * height && !isTabBarVisible) {
      setIsTabBarVisible?.(true);
    } else if (y < 0.05 * height && isTabBarVisible) {
      setIsTabBarVisible?.(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        onScroll={handleScroll}
        style={styles.scroll}
        scrollEventThrottle={100}
      >
        {children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
    alignItems: "center",
  },
  scroll: {
    width: "100%",
  },
});

export default ScrollableContainer;
