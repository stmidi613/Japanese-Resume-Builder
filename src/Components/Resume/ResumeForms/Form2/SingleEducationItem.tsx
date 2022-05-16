import React, { useContext } from "react";
import { Form2Context, Form2Education } from "../../ResumeState/Form2State";

export interface Props {
  item: Form2Education;
}

const SingleEducationItem: React.FC<Props> = ({
  item,
}) => {
  const {setEducDelete} = useContext(Form2Context);
  
  return (
    <>
      <div className="input-div p-4">
        <span>{item.schoolName}</span>
        <span>{item.department}</span>
        <span>{item.major}</span>
        <span>{item.result}</span>
        <span>{item.educStartDate}</span>
        <span>{item.educEndDate}</span>
      </div>
        <button onClick={() => setEducDelete(item.educId)}>Delete</button>
    </>
  );
};

export default SingleEducationItem;
