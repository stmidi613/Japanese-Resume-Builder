import React from "react";

import ResumeHeader from "../Resume/ResumeHeader/ResumeHeader";
import SkillSheetPage from "./SkillSheetPage.tsx/SkillSheetPage";
import SSForm1 from "./Forms.tsx/SSForm1";
import SSForm2 from "./Forms.tsx/SSForm2";
import SSForm3 from "./Forms.tsx/SSForm3";

import "../Resume/resume.css";

const SkillSheet: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <div className="grid place-content-center xl:flex">
      <SSForm2 />
      <SkillSheetPage />
      </div>
    </>
  );
};

export default SkillSheet;
