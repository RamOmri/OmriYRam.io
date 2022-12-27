import React, { Suspense, lazy } from "react";
import { StyleSheet, View } from "react-native";
import { HomeTabs } from "./src/router";
import { COLORS } from "./src/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

const Home = lazy(() => import("./src/router/HomeRouter"));
const Welcome = lazy(() => import("./src/screens/Welcome"));

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Welcome />
            </Suspense>
          }
        />
        <Route
          path="/Home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Black,
  },
});
