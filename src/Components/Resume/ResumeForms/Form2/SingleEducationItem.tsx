import React, { useContext } from "react";
import { ReducerContext } from "../../ResumeState/ResumeState";
import TextInput from "../Form1/TextInput";
import { EducHistory } from "./Form2Models";
import StartEndDate from "./StartEndDate";

interface Props {
  index: number;
  item: EducHistory;
  key: string;
  educationItems: EducHistory[];
  setEducationItems: React.Dispatch<React.SetStateAction<EducHistory[]>>;
}

const SingleEducationItem: React.FC<Props> = ({
  index,
  item,
  key,
  educationItems,
  setEducationItems,
}) => {

  return (
    <>
      <div id={key} className="input-div">
        <span>{item.schoolName}</span>
        <span>{item.department}</span>
        <span>{item.major}</span>
        <div className="flex justify-between">
            <span>{item.educStartDate}</span>
            <span>{item.educEndDate}</span>
        </div>
      </div>
    </>
  );
};

export default SingleEducationItem;
