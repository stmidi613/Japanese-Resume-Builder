import React, { useState } from "react";

// import { ReducerContext } from "../../ResumeState/ResumeState";
import { EducHistory } from "./Form2Models";
import SingleEducationItem from "./SingleEducationItem";

const EducationList: React.FC = () => {
  const [educationItems, setEducationItems] = useState<EducHistory[]>([]);
//   const {
//     schoolName,
//     department,
//     major,
//     educStartDate,
//     educEndDate,
//     setSchoolName,
//     setDepartment,
//     setMajor,
//     setEducStartDate,
//     setEducEndDate,
//   } = useContext(ReducerContext);
  return (
    <>
      {educationItems.map((item, index) => (
        <SingleEducationItem
          index={index}
          item={item}
          key={item.educId}
          educationItems={educationItems}
          setEducationItems={setEducationItems}
        />
      ))}
    </>
  );
};

export default EducationList;
