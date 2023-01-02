import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const HomeRouter = lazy(() => import("./HomeRouter"));
const Project = lazy(() => import("../screens/Project"));

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
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <HomeRouter />
            </Suspense>
          }
        />
        <Route
          path="/Project"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Project />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
