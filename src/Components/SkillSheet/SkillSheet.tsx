import React, { useContext } from "react";

import Header from "../Header/Header";
import SkillSheetPage from "./SkillSheetPage.tsx/SkillSheetPage";
import SSForm1 from "./Forms.tsx/SSForm1";
import SSForm2 from "./Forms.tsx/SSForm2";
import SSForm3 from "./Forms.tsx/SSForm3";
import SSForm4 from "./Forms.tsx/SSForm4";

import ResumeState from "../Resume/ResumeState/ResumeState";
import { AppContext } from "../../AppState/AppState";

import "../Resume/resume.css";
import "../SkillSheet/skillsheet.css";

const SkillSheet: React.FC = () => {
  const {step} = useContext(AppContext);

  const headerTitle = ["Company/Skills", "Projects", "PR/Appeal Points", "Preview, Save, and Print"];
  const width = ["w-1/4", "w-1/2", "w-3/4", "w-full"]

  return (
    <>
      <ResumeState>
        <Header headerTitle={headerTitle} width={width} />
        <div className="grid place-content-center xl:flex">
          {step === 1 ? <SSForm1 /> : ""}
          {step === 2 ? <SSForm2 /> : ""}
          {step === 3 ? <SSForm3 /> : ""}
          {step === 4 ? <SSForm4 /> : ""}
          <SkillSheetPage />
        </div>
      </ResumeState>
    </>
  );
};

export default SkillSheet;
