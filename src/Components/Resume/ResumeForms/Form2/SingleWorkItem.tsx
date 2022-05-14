import React from "react";
import { Form2Work } from "../../ResumeState/Form2State";

export interface Props {
  item: Form2Work;
}

const SingleWorkItem: React.FC<Props> = ({
  item,
}) => {
  return (
    <>
      <div className="input-div">
        <span>{item.companyName}</span>
        <span>{item.startExpl}</span>
        <span>{item.endExpl}</span>
        <span>{item.workStartDate}</span>
        <span>{item.workEndDate}</span>
      </div>
    </>
  );
};

export default SingleWorkItem;
