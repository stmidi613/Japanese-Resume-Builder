import React, { createContext, useState } from 'react';

export interface Form4To5Model {
  appealPoints: string;
  travelHours:string;
  travelMinutes: string;
  dependents: string;
  spouse: boolean;
  spouseDependents: boolean;
  additionalInfo: string;
}

const Form4To5Values = {
  appealPoints: "",
  travelHours: "",
  travelMinutes: "",
  dependents: "",
  spouse: false,
  spouseDependents: false,
  additionalInfo: "",
  setAppealPoints: (e: React.SetStateAction<string>) => {},
  setTravelHours: (e: React.SetStateAction<string>) => {},
  setTravelMinutes: (e: React.SetStateAction<string>) => {},
  setDependents: (e: React.SetStateAction<string>) => {},
  setSpouseTrue: () => {},
  setSpouseFalse: () => {},
  setSpouseDependentsTrue: () => {},
  setSpouseDependentsFalse: () => {},
  setAdditionalInfo: (e: React.SetStateAction<string>) => {},
}

export const Form4To5Context = createContext(Form4To5Values);

const Form4To5State: React.FC = ({children}) => {
  const [appealPoints, setAppealPoints] = useState<string>("");
  const [travelHours, setTravelHours] = useState<string>("");
  const [travelMinutes, setTravelMinutes] = useState<string>("");
  const [dependents, setDependents] = useState<string>("");
  const [spouse, setSpouse] = useState<boolean>(false);
  const [spouseDependents, setSpouseDependents] = useState<boolean>(false);
  const [additionalInfo, setAdditionalInfo] = useState<string>("");

  return (
    <>
      <Form4To5Context.Provider value={{
        appealPoints,
        travelHours,
        travelMinutes,
        dependents,
        spouse,
        spouseDependents,
        additionalInfo,
        setAppealPoints,
        setTravelHours,
        setTravelMinutes,
        setDependents,
        setSpouseTrue: () => setSpouse(true),
        setSpouseFalse: () => setSpouse(false),
        setSpouseDependentsTrue: () => setSpouseDependents(true),
        setSpouseDependentsFalse: () => setSpouseDependents(false),
        setAdditionalInfo,
      }
      }>
        {children}
      </Form4To5Context.Provider>
    </>
  )
}

export default Form4To5State