import React, { createContext, useState } from "react";

export interface Form2Model {
  educId: number;
  schoolName: string;
}

const Form2Values = {
  educId: Date.now(),
  schoolName: "",
  educHist: [{ educId: Date.now(), schoolName: "" }],
  setSchoolName: (e: React.SetStateAction<string>) => {},
  setEducHist: (e: React.Dispatch<React.SetStateAction<Form2Model[]>>) => {},
};

export const Form2Context = createContext(Form2Values);

const Form2State: React.FC = ({ children }) => {
  const [schoolName, setSchoolName] = useState<string>("");
  const [educHist, setEducHist] = useState<Form2Model[]>([]);
  // const educId = Date.now();
  return (
    <Form2Context.Provider
      value={{
        educId: Date.now(),
        schoolName,
        setSchoolName,
        educHist,
        setEducHist: () => {
          setEducHist([...educHist, { educId: Date.now(), schoolName }]);
        },
      }}
    >
      {children}
    </Form2Context.Provider>
  );
};

export default Form2State;
