import React, { createContext, useReducer } from "react";
import Projects from "../SkillSheetPage.tsx/Projects";

interface Projects {
  // Form2
  id: number;
  workPlace: string;
  projName: string;
  projStart: string;
  projEnd: string;
  overview: string;
  points: string;
  language: string;
  position: string;
  scale: string;
  requirements: boolean;
  basicDesign: boolean;
  detailedDesign: boolean;
  implementation: boolean;
  simpleTest: boolean;
  conclusionTest: boolean;
  maintenance: boolean;
}

const projectValues = {
  id: Date.now(),
  workPlace: "",
  projName: "",
  projStart: "",
  projEnd: "",
  overview: "",
  points: "",
  language: "",
  position: "",
  scale: "",
  requirements: false,
  basicDesign: false,
  detailedDesign: false,
  implementation: false,
  simpleTest: false,
  conclusionTest: false,
  maintenance: false,
  Projects: [
    {
      id: Date.now(),
      workPlace: "",
      projName: "",
      projStart: "",
      projEnd: "",
      overview: "",
      points: "",
      language: "",
      position: "",
      scale: "",
      requirements: false,
      basicDesign: false,
      detailedDesign: false,
      implementation: false,
      simpleTest: false,
      conclusionTest: false,
      maintenance: false,
    },
  ],
  setProjects: (e: React.Dispatch<React.SetStateAction<Projects[]>>) => {},
  setWorkPlace: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setProjName: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setProjStart: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setProjEnd: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setOverview: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
  setPoints: (e: React.ChangeEvent<HTMLTextAreaElement>) => {},
  setScale: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setLanguage: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setPosition: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setRequirements: () => {},
  setNoRequirements: () => {},
  setBasicDesign: () => {},
  setNoBasicDesign: () => {},
  setDetailedDesign: () => {},
  setNoDetailedDesign: () => {},
  setImplementation: () => {},
  setNoImplementation: () => {},
  setSimpleTest: () => {},
  setNoSimpleTest: () => {},
  setConclusionTest: () => {},
  setNoConclusionTest: () => {},
  setMaintenance: () => {},
  setNoMaintenance: () => {},
};

export const ProjectsContext = createContext(projectValues);

type ActionType =
  | { type: "setProjects"; payload: Projects[] }
  | { type: "setWorkPlace"; payload: string }
  | { type: "setProjName"; payload: string }
  | { type: "setProjStart"; payload: string }
  | { type: "setProjEnd"; payload: string }
  | { type: "setOverview"; payload: string }
  | { type: "setPoints"; payload: string }
  | { type: "setLanguage"; payload: string }
  | { type: "setPosition"; payload: string }
  | { type: "setScale"; payload: string }
  | { type: "setRequirements"; payload: boolean }
  // | { type: "setNoRequirements"; payload: boolean }
  | { type: "setBasicDesign"; payload: boolean }
  // | { type: "setNoBasicDesign"; payload: boolean }
  | { type: "setDetailedDesign"; payload: boolean }
  // | { type: "setNoDetailedDesign"; payload: boolean }
  | { type: "setImplementation"; payload: boolean }
  // | { type: "setNoImplementation"; payload: boolean }
  | { type: "setSimpleTest"; payload: boolean }
  // | { type: "setNoSimpleTest"; payload: boolean }
  | { type: "setConclusionTest"; payload: boolean }
  // | { type: "setNoConclusionTest"; payload: boolean }
  | { type: "setMaintenance"; payload: boolean };
// | { type: "setNoMaintenance"; payload: boolean };

function reducer(currentState: Projects, action: ActionType): any {
  if (action.type === "setProjects") {
    return { ...currentState, Projects: action.payload };
  }
  if (action.type === "setWorkPlace") {
    return { ...currentState, workPlace: action.payload };
  }
  if (action.type === "setProjName") {
    return { ...currentState, projName: action.payload };
  }
  if (action.type === "setProjStart") {
    return { ...currentState, projStart: action.payload };
  }
  if (action.type === "setProjEnd") {
    return { ...currentState, projEnd: action.payload };
  }
  if (action.type === "setOverview") {
    return { ...currentState, overview: action.payload };
  }
  if (action.type === "setPoints") {
    return { ...currentState, points: action.payload };
  }
  if (action.type === "setScale") {
    return { ...currentState, scale: action.payload };
  }
  if (action.type === "setLanguage") {
    return { ...currentState, language: action.payload };
  }
  if (action.type === "setPosition") {
    return { ...currentState, position: action.payload };
  }
  if (action.type === "setRequirements") {
    return { ...currentState, requirements: action.payload };
  }
  // if (action.type === "setNoRequirements") {
  //   return { ...currentState, requirements: action.payload };
  // }
  if (action.type === "setBasicDesign") {
    return { ...currentState, basicDesign: action.payload };
  }
  // if (action.type === "setNoBasicDesign") {
  //   return { ...currentState, basicDesign: action.payload };
  // }
  if (action.type === "setDetailedDesign") {
    return { ...currentState, detailedDesign: action.payload };
  }
  // if (action.type === "setNoDetailedDesign") {
  //   return { ...currentState, detailedDesign: action.payload };
  // }
  if (action.type === "setImplementation") {
    return { ...currentState, implementation: action.payload };
  }
  // if (action.type === "setNoImplementation") {
  //   return { ...currentState, implementation: action.payload };
  // }
  if (action.type === "setSimpleTest") {
    return { ...currentState, simpleTest: action.payload };
  }
  // if (action.type === "setNoSimpleTest") {
  //   return { ...currentState, simpleTest: action.payload };
  // }
  if (action.type === "setConclusionTest") {
    return { ...currentState, conclusionTest: action.payload };
  }
  // if (action.type === "setNoConclusionTest") {
  //   return { ...currentState, conclusionTest: action.payload };
  // }
  if (action.type === "setMaintenance") {
    return { ...currentState, maintenance: action.payload };
  }
  // if (action.type === "setNoMaintenance") {
  //   return { ...currentState, maintenance: action.payload };
  // }
}

const SSForm2State: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, projectValues);

  return (
    <>
      <ProjectsContext.Provider
        value={{
          id: Date.now(),
          workPlace: state.workPlace,
          projName: state.projName,
          projStart: state.projStart,
          projEnd: state.projEnd,
          overview: state.overview,
          points: state.points,
          language: state.language,
          position: state.position,
          scale: state.scale,
          requirements: state.requirements,
          basicDesign: state.basicDesign,
          detailedDesign: state.detailedDesign,
          implementation: state.implementation,
          simpleTest: state.simpleTest,
          conclusionTest: state.conclusionTest,
          maintenance: state.maintenance,
          setWorkPlace: (e) => {
            dispatch({ type: "setWorkPlace", payload: e.target.value });
          },
          setProjName: (e) => {
            dispatch({ type: "setProjName", payload: e.target.value });
          },
          setProjStart: (e) => {
            dispatch({ type: "setProjStart", payload: e.target.value });
          },
          setProjEnd: (e) => {
            dispatch({ type: "setProjEnd", payload: e.target.value });
          },
          setOverview: (e) => {
            dispatch({ type: "setOverview", payload: e.target.value });
          },
          setPoints: (e) => {
            dispatch({ type: "setPoints", payload: e.target.value });
          },
          setLanguage: (e) => {
            dispatch({ type: "setLanguage", payload: e.target.value });
          },
          setPosition: (e) => {
            dispatch({ type: "setPosition", payload: e.target.value });
          },
          setScale: (e) => {
            dispatch({ type: "setScale", payload: e.target.value });
          },
          setRequirements: () => {
            dispatch({ type: "setRequirements", payload: true });
          },
          setNoRequirements: () => {
            dispatch({ type: "setRequirements", payload: false });
          },
          setBasicDesign: () => {
            dispatch({ type: "setBasicDesign", payload: true });
          },
          setNoBasicDesign: () => {
            dispatch({ type: "setBasicDesign", payload: false });
          },
          setDetailedDesign: () => {
            dispatch({ type: "setDetailedDesign", payload: true });
          },
          setNoDetailedDesign: () => {
            dispatch({ type: "setDetailedDesign", payload: false });
          },
          setImplementation: () => {
            dispatch({ type: "setImplementation", payload: true });
          },
          setNoImplementation: () => {
            dispatch({ type: "setImplementation", payload: false });
          },
          setSimpleTest: () => {
            dispatch({ type: "setSimpleTest", payload: true });
          },
          setNoSimpleTest: () => {
            dispatch({ type: "setSimpleTest", payload: false });
          },
          setConclusionTest: () => {
            dispatch({ type: "setConclusionTest", payload: true });
          },
          setNoConclusionTest: () => {
            dispatch({ type: "setConclusionTest", payload: false });
          },
          setMaintenance: () => {
            dispatch({ type: "setMaintenance", payload: true });
          },
          setNoMaintenance: () => {
            dispatch({ type: "setMaintenance", payload: false });
          },
          Projects: state.Projects,
          setProjects: () => {
            dispatch({
              type: "setProjects",
              payload: state.setProjects([
                ...state.Projects,
                {
                  id: Date.now(),
                  workPlace: state.workPlace,
                  projName: state.projName,
                  projStart: state.projStart,
                  projEnd: state.projEnd,
                  overview: state.overview,
                  points: state.points,
                  language: state.language,
                  position: state.position,
                  scale: state.scale,
                  requirements: state.requirements,
                  basicDesign: state.basicDesign,
                  detailedDesign: state.detailedDesign,
                  implementation: state.implementation,
                  simpleTest: state.simpleTest,
                  conclusionTest: state.conclusionTest,
                  maintenance: state.maintenance,
                },
              ]),
            });
          },
        }}
      >
        {children}
      </ProjectsContext.Provider>
    </>
  );
};

export default SSForm2State;
