import React from "react";

import HomePage from "./Components/HomePage/HomePage";
import Resume from "./Components/Resume/Resume";
import SkillSheetPage from "./Components/SkillSheet/SkillSheetPage.tsx/SkillSheetPage";

import AppState from "./AppState/AppState";

import "./tailwind.css";

const App: React.FC = () => {
  return (
    <>
      <AppState>
        <SkillSheetPage />
      </AppState>
    </>
  );
};

export default App;
