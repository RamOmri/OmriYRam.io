import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { NavigationContainer } from "@react-navigation/native";

const HomeRouter = lazy(() => import("./HomeRouter"));
const AboutMe = lazy(() => import("../screens/AboutMe"));
const Contact = lazy(() => import("../screens/Contact"));

export default function WebRouter() {
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
          path="/:projectID?"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomeRouter />
            </Suspense>
          }
        />
        <Route
          path="/AboutMe"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NavigationContainer>
                <AboutMe />
              </NavigationContainer>
            </Suspense>
          }
        />
        <Route
          path="/Contact"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <NavigationContainer>
                <Contact />
              </NavigationContainer>
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
