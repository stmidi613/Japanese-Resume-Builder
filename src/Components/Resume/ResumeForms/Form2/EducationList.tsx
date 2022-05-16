import React from "react";
import SingleEducationItem from "./SingleEducationItem";

import { Form2Education } from "../../ResumeState/Form2State";

interface Props {
  educHist: Form2Education[];
}

const EducationList: React.FC<Props> = ({educHist}) => {
  return (
    <>
    <div className="mt-4">
    <span className="text-purple text-xl">Education Background List</span>
    {
      educHist.map((item) => 
      (<SingleEducationItem
        educHist={educHist}
        key={item.educId}
        item={item}
        />))
    }
      </div>
    </>
  );
};

export default EducationList;
