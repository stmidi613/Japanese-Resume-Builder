import React, { createContext, useState } from "react";

export interface Form2Model {
  educId: number;
  schoolName: string;
  department: string;
  major: string;
  result: string;
  educStartDate: string;
  educEndDate: string;
  // compId: number;
  // companyName: string;
  // explanation: string;
  // workStartDate: string;
  // workEndDate: string;
}

const Form2Values = {
  educId: Date.now(),
  schoolName: "",
  department: "",
  major: "",
  result: "",
  educStartDate: "",
  educEndDate: "",
  educHist: [
    {
      educId: Date.now(),
      schoolName: "",
      department: "",
      major: "",
      result: "",
      educStartDate: "",
      educEndDate: "",
    },
  ],
  setSchoolName: (e: React.SetStateAction<string>) => {},
  setDepartment: (e: React.SetStateAction<string>) => {},
  setMajor: (e: React.SetStateAction<string>) => {},
  setResult: (e: React.SetStateAction<string>) => {},
  setEducStartDate: (e: React.SetStateAction<string>) => {},
  setEducEndDate: (e: React.SetStateAction<string>) => {},
  setEducHist: (e: React.Dispatch<React.SetStateAction<Form2Model[]>>) => {},
};

export const Form2Context = createContext(Form2Values);

const Form2State: React.FC = ({ children }) => {
  const [schoolName, setSchoolName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [educStartDate, setEducStartDate] = useState<string>("");
  const [educEndDate, setEducEndDate] = useState<string>("");
  const [educHist, setEducHist] = useState<Form2Model[]>([]);
  return (
    <Form2Context.Provider
      value={{
        educId: Date.now(),
        schoolName,
        department,
        major,
        result,
        educStartDate,
        educEndDate,
        setSchoolName,
        setDepartment,
        setMajor,
        setResult,
        setEducStartDate,
        setEducEndDate,
        educHist,
        setEducHist: () => {
          setEducHist([
            ...educHist,
            {
              educId: Date.now(),
              schoolName,
              department,
              major,
              result,
              educStartDate,
              educEndDate,
            },
          ]);
        },
      }}
    >
      {children}
    </Form2Context.Provider>
  );
};

export default Form2State;
