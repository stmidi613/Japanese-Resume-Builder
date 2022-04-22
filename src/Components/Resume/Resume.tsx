import React from "react";
import Form1 from "./ResumeForms/Form1/Form1";

import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumePage1 from "./ResumePages/Page1/ResumePage1";
import ResumeState from "./ResumeState/ResumeState";

import "../Resume/resume.css";

const Resume: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
        <ResumeState>
          <Form1 />
          <ResumePage1 />
        </ResumeState>
      </div>
    </>
  );
};

export default Resume;
