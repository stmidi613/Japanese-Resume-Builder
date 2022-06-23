import React, { createContext, useReducer } from "react";

export interface initialState {
  // Form1
  nameFurigana: string;
  name: string;
  workSummary: string;
  KandE: string;
  technology: string;
  otherInfo: string;
  //   Form3
  PR: string;
}

export const initialValue = {
  // Form1
  nameFurigana: "",
  name: "",
  workSummary: "",
  KandE: "",
  technology: "",
  otherInfo: "",
  setNameFurigana: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setName: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setWorkSummary: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
  setKandE: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
  setTechnology: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
  setOtherInfo: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
  //Form3
  PR: "",
  setPR: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
};

export const SkillSheetContext = createContext(initialValue);

type actionType =
  //Form1
  | { type: "setNameFurigana"; payload: string }
  | { type: "setName"; payload: string }
  | { type: "setWorkSummary"; payload: string }
  | { type: "setKandE"; payload: string }
  | { type: "setTechnology"; payload: string }
  | { type: "setOtherInfo"; payload: string }
  //Form3
  | { type: "setPR"; payload: string };

export function reducer(currentState: initialState, action: actionType) : any {
  //Form1
  if (action.type === "setNameFurigana") {
    return { ...currentState, nameFurigana: action.payload };
  }
  if (action.type === "setName") {
    return { ...currentState, name: action.payload };
  }
  if (action.type === "setWorkSummary") {
    return { ...currentState, workSummary: action.payload };
  }
  if (action.type === "setKandE") {
    return { ...currentState, KandE: action.payload };
  }
  if (action.type === "setTechnology") {
    return { ...currentState, technology: action.payload };
  }
  if (action.type === "setOtherInfo") {
    return { ...currentState, otherInfo: action.payload };
  }
  //Form3
  if (action.type === "setPR") {
    return { ...currentState, PR: action.payload };
  }
}

const SkillSheetState: React.FC = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
      <SkillSheetContext.Provider
      value={{
        nameFurigana: state.nameFurigana,
        name: state.name,
        workSummary: state.workSummary,
        KandE: state.KandE,
        technology: state.technology,
        otherInfo: state.otherInfo,
        PR: state.PR,
        setNameFurigana: (e) => {
            dispatch({ type: "setNameFurigana", payload: e.target.value });
          },
        setName: (e) => {
            dispatch({ type: "setName", payload: e.target.value });
          },
        setWorkSummary: (e) => {
            dispatch({ type: "setWorkSummary", payload: e.target.value });
          },
        setKandE: (e) => {
            dispatch({ type: "setKandE", payload: e.target.value });
          },
        setTechnology: (e) => {
            dispatch({ type: "setTechnology", payload: e.target.value });
          },
        setOtherInfo: (e) => {
            dispatch({ type: "setOtherInfo", payload: e.target.value });
          },
        setPR: (e) => {
            dispatch({ type: "setPR", payload: e.target.value });
          },
      }}
      >
          {children}
      </SkillSheetContext.Provider>
  )
};

export default SkillSheetState;
