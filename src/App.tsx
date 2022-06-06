import React from "react";

import HomePage from "./Components/HomePage/HomePage";
import Resume from "./Components/Resume/Resume";
import SkillSheet from "./Components/SkillSheet/SkillSheet";

import AppState from "./AppState/AppState";

import "./tailwind.css";

const App: React.FC = () => {
  return (
    <>
      <AppState>
        <SkillSheet />
      </AppState>
    </>
  );
};

export default App;
