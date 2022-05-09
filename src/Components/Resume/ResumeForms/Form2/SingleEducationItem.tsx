import React, { useContext } from "react";
import { ReducerContext } from "../../ResumeState/ResumeState";
import TextInput from "../Form1/TextInput";
import { EducHistory } from "./Form2Models";
import StartEndDate from "./StartEndDate";

interface Props {
  item: EducHistory;
  // key: string;
  // educationItems: EducHistory[];
  // setEducationItems: React.Dispatch<React.SetStateAction<EducHistory[]>>;
}

const SingleEducationItem: React.FC<Props> = ({
  item,
  // key,
  // educationItems,
  // setEducationItems,
}) => {
  const {
    schoolName,
    department,
    major,
    educStartDate,
    educEndDate,
    setSchoolName,
    setDepartment,
    setMajor,
    setEducStartDate,
    setEducEndDate,
    setCompanyName,
    setStartWork,
    setExplanation,
    setWorkStartDate,
    setWorkEndDate,
  } = useContext(ReducerContext);

  return (
    <>
      <div className="input-div">
        <span className="w-10">{schoolName}</span>
        <span>{department}</span>
        <span>{major}</span>
        <div className="flex justify-between">
            <span>{educStartDate}</span>
            <span>{educEndDate}</span>
        </div>
      </div>
    </>
  );
};

export default SingleEducationItem;
