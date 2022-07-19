import React, { useContext } from "react";

import Header from "../Header/Header";
import SkillSheetPage from "./SkillSheetPage.tsx/SkillSheetPage";
import SSForm1 from "./Forms.tsx/SSForm1";
import SSForm2 from "./Forms.tsx/SSForm2";
import SSForm3 from "./Forms.tsx/SSForm3";
import SSForm4 from "./Forms.tsx/SSForm4";

import SkillSheetState from "./SkillSheetState/SkillSheetState";
import SSForm2State from "./SkillSheetState/SSForm2State";

import TipBox from "../TipBoxes/TipBox";
import SSMainTB from "./TipBox/SSMainTB";
import ProjectTB from "./TipBox/ProjectTB";

import { AppContext } from "../../AppState/AppState";

import "../Resume/resume.css";
import "../SkillSheet/skillsheet.css";

const SkillSheet: React.FC = () => {
  const { step, showPopup } = useContext(AppContext);

  const headerTitle = [
    "Company/Skills",
    "Projects",
    "PR/Appeal Points",
    "Preview, Save, and Print",
  ];
  const width = ["w-1/4", "w-1/2", "w-3/4", "w-full"];

  return (
    <>
      <SkillSheetState>
        <SSForm2State>
          <Header headerTitle={headerTitle} width={width} />
          <div className={step < 4 && step !== 2 ? `grid place-content-center xl:flex` : "grid place-content-center"}>
            {step === 1 ? <SSForm1 /> : ""}
            {step === 2 ? <SSForm2 /> : ""}
            {step === 3 ? <SSForm3 /> : ""}
            {step === 4 ? <SSForm4 /> : ""}
            {!showPopup && step < 4 ? (
              <SkillSheetPage />
            ) : step < 4 ? (
              <TipBox content={step === 2 ? <ProjectTB /> : <SSMainTB />} />
            ) : (
              <div className="grid ml-[20rem] md:ml-0 w-full">
              <SkillSheetPage />
              </div>
            )}
          </div>
        </SSForm2State>
      </SkillSheetState>
    </>
  );
};

export default SkillSheet;
