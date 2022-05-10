import React, { useContext, useState } from "react";
import { Form2Model } from "./Form2Model";

import { ReducerContext } from "../../ResumeState/ResumeState";
import { EducHistory } from "./Form2Models";
import SingleEducationItem from "./SingleEducationItem";

interface Props {
  educHist: Form2Model[];
  setEducHist: React.Dispatch<React.SetStateAction<Form2Model[]>>
}

const EducationList: React.FC<Props> = ({educHist, setEducHist}) => {
  
  return (
    <>
    <div className="">
    <span>Education Background List</span>
    {
      educHist.map((item) => 
      (<SingleEducationItem
        key={item.educId}
        item={item}
        />))
    }
      </div>
    </>
  );
};

export default EducationList;
