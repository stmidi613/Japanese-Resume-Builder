import React, { useContext } from "react";

import Form1 from "./ResumeForms/Form1/Form1";
import Form2 from "./ResumeForms/Form2/Form2";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumePage1 from "./ResumePages/Page1/ResumePage1";
import ResumeState from "./ResumeState/ResumeState";
import TipBox from "./ResumeForms/TipBox";

import { AppContext } from "../../AppState/AppState";
import "../Resume/resume.css";
import Form1Tips from "./ResumeForms/Form1/Form1Tips";
import Form2State from "./ResumeState/Form2State";

const Resume: React.FC = () => {
  const {showPopup} = useContext(AppContext);
  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
        <ResumeState>
          <Form2State>
          <Form2 />
          </Form2State>
          {!showPopup ? 
          <ResumePage1 /> : <TipBox content={<Form1Tips />} />}
        </ResumeState>
      </div>
    </>
  );
};

export default Resume;
