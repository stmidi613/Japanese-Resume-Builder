import React from "react";

import HomePage from "./Components/HomePage/HomePage";
import Resume from "./Components/Resume/Resume";
import SkillSheet from "./Components/SkillSheet/SkillSheet";
import NoPage from "./Components/NoPage/NoPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AppState from "./AppState/AppState";

import "./tailwind.css";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <AppState>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="Resume" element={<Resume />} />
            <Route path="SkillSheet" element={<SkillSheet />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </AppState>
      </Router>
    </>
  );
};

export default App;
