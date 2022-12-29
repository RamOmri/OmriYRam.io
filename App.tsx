import React, { Suspense, lazy } from "react";
import { StyleSheet, View } from "react-native";
import { COLORS } from "./src/styles";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { renderToString } from "react-dom/server";

const Router = lazy(() => import("./src/router/Router"));
const Welcome = lazy(() => import("./src/screens/Welcome"));

export default function App() {
  // fix body having "display: flex", which messes up ScrollView scrollbars
  document.body.style.display = "initial";
  const root = document.getElementById("root");
  if (root) {
    root.style.height = "100%";
    root.style.display = "flex";
  } else {
    console.error("Couldn't get root view to fix web ScrollView.");
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Router />
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
