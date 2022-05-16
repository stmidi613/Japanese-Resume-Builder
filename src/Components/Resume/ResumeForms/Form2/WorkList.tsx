import React from "react";
import SingleWorkItem from "./SingleWorkItem";

import { Form2Work } from "../../ResumeState/Form2State";

interface Props {
  workHist: Form2Work[];
}

const WorkList: React.FC<Props> = ({workHist}) => {
  
  return (
    <>
    <div className="mt-4">
    <span className="text-xl text-purple">Work History List</span>
    {
      workHist.map((item) => 
      (<SingleWorkItem
        key={item.workId}
        item={item}
        />))
    }
      </div>
    </>
  );
};

export default WorkList;
