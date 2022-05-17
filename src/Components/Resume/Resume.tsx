import React, { useContext } from "react";

import Form1 from "./ResumeForms/Form1/Form1";
import Form2 from "./ResumeForms/Form2/Form2";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumePage1 from "./ResumePages/Page1/ResumePage1";
import TipBox from "./ResumeForms/TipBox";
import Form1Tips from "./ResumeForms/Form1/Form1Tips";
import Form2Tips from "./ResumeForms/Form2/Form2Tips";

import ResumeState from "./ResumeState/ResumeState";
import Form2State from "./ResumeState/Form2State";

import { AppContext } from "../../AppState/AppState";
import "../Resume/resume.css";

const Resume: React.FC = () => {
  const {showPopup, step} = useContext(AppContext);
  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
        <ResumeState>
          <Form2State>
          <Form2 />
          {!showPopup ? 
          <ResumePage1 /> : <TipBox content={step < 2 ? <Form1Tips /> : <Form2Tips />} />}
          </Form2State>         
        </ResumeState>
      </div>
    </>
  );
};

export default Resume;
