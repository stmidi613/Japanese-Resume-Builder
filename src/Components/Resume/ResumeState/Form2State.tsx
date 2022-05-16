import React, { createContext, useState } from "react";

export interface Form2Education {
  //Education
  educId: number;
  schoolName: string;
  department: string;
  major: string;
  result: string;
  educStartDate: string;
  educEndDate: string;
}

export interface Form2Work {
  //Work
  workId: number;
  companyName: string;
  startExpl: string;
  endExpl: string;
  workStartDate: string;
  workEndDate: string;
}

const Form2Values = {
  //Education
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
  setEducHist: (e: React.Dispatch<React.SetStateAction<Form2Education[]>>) => {},
  setEducDelete: (e: number) => {},
  //Work
  workId: Date.now(),
  companyName: "",
  startExpl: "",
  endExpl: "",
  workStartDate: "",
  workEndDate: "",
  workHist: [
    {
      workId: Date.now(),
      companyName: "",
      startExpl: "",
      endExpl: "",
      workStartDate: "",
      workEndDate: "",
    },
  ],
  setCompanyName: (e: React.SetStateAction<string>) => {},
  setStartExpl: (e: React.SetStateAction<string>) => {},
  setEndExpl: (e: React.SetStateAction<string>) => {},
  setWorkStartDate: (e: React.SetStateAction<string>) => {},
  setWorkEndDate: (e: React.SetStateAction<string>) => {},
  setWorkHist: (e: React.Dispatch<React.SetStateAction<Form2Work[]>>) => {},
  setWorkDelete: (e: number) => {},
};

export const Form2Context = createContext(Form2Values);

const Form2State: React.FC = ({ children }) => {
  //Education
  const [schoolName, setSchoolName] = useState<string>("");
  const [department, setDepartment] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [educStartDate, setEducStartDate] = useState<string>("");
  const [educEndDate, setEducEndDate] = useState<string>("");
  const [educHist, setEducHist] = useState<Form2Education[]>([]);
  //Work
  const [companyName, setCompanyName] = useState<string>("");
  const [startExpl, setStartExpl] = useState<string>("");
  const [endExpl, setEndExpl] = useState<string>("");
  const [workStartDate, setWorkStartDate] = useState<string>("");
  const [workEndDate, setWorkEndDate] = useState<string>("");
  const [workHist, setWorkHist] = useState<Form2Work[]>([]);

  return (
    <Form2Context.Provider
      value={{
        //Education
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
        setEducDelete: (educId: number) => setEducHist(educHist.filter((each) => each.educId !== educId)),
        //Work
        workId: Date.now(),
        companyName,
        startExpl,
        endExpl,
        workStartDate,
        workEndDate,
        setCompanyName,
        setStartExpl,
        setEndExpl,
        setWorkStartDate,
        setWorkEndDate,
        workHist,
        setWorkHist: () => {
          setWorkHist([
            ...workHist,
            {
              workId: Date.now(),
              companyName,
              startExpl,
              endExpl,
              workStartDate,
              workEndDate,
            },
          ]);
        },
        setWorkDelete: (workId: number) => setWorkHist(workHist.filter((each) => each.workId !== workId)),
      }}
    >
      {children}
    </Form2Context.Provider>
  );
};

export default Form2State;
