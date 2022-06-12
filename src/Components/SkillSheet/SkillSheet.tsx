import React, { useContext } from "react";

import ResumeHeader from "../Resume/ResumeHeader/ResumeHeader";
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
  return (
    <>
      <ResumeState>
        <ResumeHeader />
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
