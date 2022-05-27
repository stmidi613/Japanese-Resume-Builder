import React, { useContext } from "react";

import ResumeHeader from "./ResumeHeader/ResumeHeader";

import Form1 from "./ResumeForms/Form1/Form1";
import Form2 from "./ResumeForms/Form2/Form2";
import Form3 from "./ResumeForms/Form3/Form3";
import Form4 from "./ResumeForms/Form4/Form4";
import Form5 from "./ResumeForms/Form5/Form5";
import Form6 from "./ResumeForms/Form6/Form6";

import ResumePage1 from "./ResumePages/Page1/ResumePage1";
import ResumePage2 from "./ResumePages/Page2/ResumePage2";

import TipBox from "./ResumeForms/TipBox";
import Form1Tips from "./ResumeForms/Form1/Form1Tips";
import Form2Tips from "./ResumeForms/Form2/Form2Tips";
import Form3Tips from "./ResumeForms/Form3/Form3Tips";

import ResumeState from "./ResumeState/ResumeState";
import Form2State from "./ResumeState/Form2State";
import Form3State from "./ResumeState/Form3State";
import Form4To5State from "./ResumeState/Form4To5State";

import { AppContext } from "../../AppState/AppState";

import "../Resume/resume.css";

const Resume: React.FC = () => {
  const { showPopup, step } = useContext(AppContext);
  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
        {/* Forms */}
        <ResumeState>
          {step === 1 ? <Form1 /> : ""}
          <Form2State>
            {step === 2 ? <Form2 /> : ""}
            <Form3State>
              {step === 3 ? <Form3 /> : ""}
              <Form4To5State>
                {step === 4 ? <Form4 /> : ""}
                {step === 5 ? <Form5 /> : ""}
                {step === 6 ? <Form6 /> : ""}                  
                {/* Resume Pages and Tip Boxes */}
                  {(!showPopup && step < 3) ? (
                    <ResumePage1 />
                  ) : step < 3 ? (
                    <TipBox
                      content={step < 2 ? <Form1Tips /> : <Form2Tips />}
                    />
                  ) : (
                    ""
                  )}
                  {(!showPopup && step >= 3) && (step !== 6) ? (
                    <ResumePage2 />
                  ) : step >= 3 && step < 6 ? (
                    <TipBox content={<Form3Tips />} />
                  ) : (
                    ""
                  )}
              </Form4To5State>
            </Form3State>
          </Form2State>
        </ResumeState>
      </div>
    </>
  );
};

export default Resume;
