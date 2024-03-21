import React from "react";
import { Routes, Route } from "react-router-dom";
import ChapterOne from "../modules/ChapterOne";

export default function BaseRoute() {
  return (
    <React.Suspense>
      <Routes>
        <Route path="" index element={<ChapterOne />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
}

const Home = () => {
  return (
    <div className="py-5 text-center">
      {" "}
      <h3>Ini home looo…</h3> <h3>..........</h3>
      {""}
    </div>
  );
};
