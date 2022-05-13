import React from "react";
import { ReducerContext } from "../../ResumeState/ResumeState";
import TextInput from "../Form1/TextInput";
import StartEndDate from "./StartEndDate";
import { Form2Model } from "../../ResumeState/Form2State";
// import { Form2Model } from "./Form2Model";

export interface Props {
  item: Form2Model;
}

const SingleEducationItem: React.FC<Props> = ({
  item,
}) => {
  return (
    <>
      <div className="input-div">
        <span>{item.schoolName}</span>
        <span>{item.department}</span>
      </div>
    </>
  );
};

export default SingleEducationItem;
