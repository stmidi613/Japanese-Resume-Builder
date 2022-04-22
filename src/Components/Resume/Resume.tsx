
import React, { useState, createContext } from "react";
import Form1 from "../Resume/ResumePages/ResumeForm/Form1/Form1";

import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumePage1 from "./ResumePages/Page1/ResumePage1";
import ResumeState from "./ResumeState/ResumeState";

import "../Resume/resume.css";

export interface IResumeContext {
  gender: boolean;
  setGender: React.Dispatch<React.SetStateAction<boolean>>;
}

export const defaultValue: IResumeContext = {
  gender: true,
  setGender: () => {},
}

export const ResumeContext = createContext<IResumeContext>(defaultValue);



const Resume: React.FC = () => {
  const [gender, setGender] = useState<boolean>(true);

  // const info = {
  // furiName: "",
  // name: "",
  // dob: "",
  // furiAddress: "",
  // address: "",
  // email: "",
  // homePhone: "",
  // cellPhone: "",
  // furiContactAddress: "",
  // contactAddress: "",
  // contactPhone: "",
  // contactCellPhone: "",
  // contactEmail: "",
  // }
  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
        <ResumeContext.Provider
          value={{
            gender,
            setGender,
          }}
        >
          <ResumeState>
          <Form1 />
          <ResumePage1 />
          </ResumeState>
        </ResumeContext.Provider>
      </div>
    </>
  );
};

export default Resume;
