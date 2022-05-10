import React, { useContext, useState } from "react";
import SmallCircleButton from "../../../Buttons/SmallCircleButton";

import { ReducerContext } from "../../ResumeState/ResumeState";
import { EducHistory } from "./Form2Models";
import SingleEducationItem from "./SingleEducationItem";

const EducationList: React.FC = () => {
  const [educationItems, setEducationItems] = useState<EducHistory[]>([]);
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
  } = useContext(ReducerContext);
  return (
    <>
    <div className="">
    {educationItems.map((item) => (
      <SingleEducationItem
      item={item}
      key={item.schoolName}
      />
      ))}
      </div>
    </>
  );
};

export default EducationList;
