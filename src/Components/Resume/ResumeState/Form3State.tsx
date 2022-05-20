import React, { createContext, useState } from "react";

export interface Form3Cert {
  //Certifications
  certId: number;
  certName: string;
  certStartDate: string;
}

const Form3Values = {
  //Certifications
  certId: Date.now(),
  certName: "",
  certStartDate: "",
  certHist: [
    {
      certId: Date.now(),
      certName: "",
      certStartDate: "",
    },
  ],
  setCertName: (e: React.SetStateAction<string>) => {},
  setCertStartDate: (e: React.SetStateAction<string>) => {},
  setCertHist: (e: React.Dispatch<React.SetStateAction<Form3Cert[]>>) => {},
  setCertDelete: (e: number) => {},
};

export const Form3Context = createContext(Form3Values);

const Form3State: React.FC = ({ children }) => {
  //Work
  const [certName, setCertName] = useState<string>("");
  const [certStartDate, setCertStartDate] = useState<string>("");
  const [certHist, setCertHist] = useState<Form3Cert[]>([]);

  return (
    <Form3Context.Provider
      value={{
        //Work
        certId: Date.now(),
        certName,
        certStartDate,
        setCertName,
        setCertStartDate,
        certHist,
        setCertHist: () => {
          setCertHist([
            ...certHist,
            {
              certId: Date.now(),
              certName,
              certStartDate,
            },
          ]);
        },
        setCertDelete: (certId: number) => setCertHist(certHist.filter((each) => each.certId !== certId)),
      }}
    >
      {children}
    </Form3Context.Provider>
  );
};

export default Form3State;