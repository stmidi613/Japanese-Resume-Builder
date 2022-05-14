import React from "react";
import { Form2Education } from "../../ResumeState/Form2State";

export interface Props {
  item: Form2Education;
}

const SingleEducationItem: React.FC<Props> = ({
  item,
}) => {
  return (
    <>
      <div className="input-div">
        <span>{item.schoolName}</span>
        <span>{item.department}</span>
        <span>{item.major}</span>
        <span>{item.result}</span>
        <span>{item.educStartDate}</span>
        <span>{item.educEndDate}</span>
      </div>
    </>
  );
};

export default SingleEducationItem;
