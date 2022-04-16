import React from "react";
import Form1 from "./Form1";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumePage1 from "./ResumePage1";
import '../Resume/resume.css';

const Resume: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
      <Form1 />
      <ResumePage1 />
      </div>
    </>
  );
};

export default Resume;
