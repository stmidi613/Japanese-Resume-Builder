import React from 'react';

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
    scale: number;
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
  scale: 0,
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
      scale: 0,
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
  setOverview: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setPoints: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setScale: (e: React.ChangeEvent<HTMLInputElement>) => {},
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
  }

  type ActionType = 
  | { type: "setProjects"; payload: Projects[] }
  | { type: "setWorkPlace"; payload: string }
  | { type: "setProjName"; payload: string }
  | { type: "setProjStart"; payload: string }
  | { type: "setProjEnd"; payload: string }
  | { type: "setOverview"; payload: string }
  | { type: "setPoints"; payload: string }
  | { type: "setScale"; payload: number }
  | { type: "setRequirements"; payload: boolean }
  | { type: "setNoRequirements"; payload: boolean }
  | { type: "setBasicDesign"; payload: boolean }
  | { type: "setNoBasicDesign"; payload: boolean }
  | { type: "setDetailedDesign"; payload: boolean }
  | { type: "setNoDetailedDesign"; payload: boolean }
  | { type: "setImplementation"; payload: boolean }
  | { type: "setNoImplementation"; payload: boolean }
  | { type: "setSimpleTest"; payload: boolean }
  | { type: "setNoSimpleTest"; payload: boolean }
  | { type: "setConclusionTest"; payload: boolean }
  | { type: "setNoConclusionTest"; payload: boolean }
  | { type: "setMaintenance"; payload: boolean }
  | { type: "setNoMaintenance"; payload: boolean }
  

const SSForm2: React.FC = () => {
  return (
    <div>SSForm2</div>
  )
}

export default SSForm2