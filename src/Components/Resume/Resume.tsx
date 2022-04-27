import React, { useContext } from "react";
import Form1 from "./ResumeForms/Form1/Form1";

import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumePage1 from "./ResumePages/Page1/ResumePage1";
import ResumeState from "./ResumeState/ResumeState";

import "../Resume/resume.css";
import { AppContext } from "../../AppState/AppState";
import TipBox from "./ResumeForms/TipBox";

const Resume: React.FC = () => {
  const {showPopup} = useContext(AppContext);
  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
        <ResumeState>
          <Form1 />
          {!showPopup ? 
          <ResumePage1 /> : <TipBox content="This is content." />}
        </ResumeState>
      </div>
    </>
  );
};

export default Resume;
