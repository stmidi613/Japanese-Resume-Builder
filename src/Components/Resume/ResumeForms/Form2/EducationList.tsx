import React, { useContext, useState } from "react";
import { Form2Model } from "../../ResumeState/Form2State";

import { ReducerContext } from "../../ResumeState/ResumeState";
// import { EducHistory } from "./Form2Models";
import SingleEducationItem from "./SingleEducationItem";

interface Props {
  educHist: Form2Model[];
}

const EducationList: React.FC<Props> = ({educHist}) => {
  
  return (
    <>
    <div className="">
    <span>Education Background List</span>
    {
      educHist.map((item) => 
      (<SingleEducationItem
        // educHist={educHist}
        key={item.educId}
        item={item}
        />))
    }
      </div>
    </>
  );
};

export default EducationList;
