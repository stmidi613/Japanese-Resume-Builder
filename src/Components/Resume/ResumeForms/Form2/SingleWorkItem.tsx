import React, { useContext } from "react";

import DeleteButton from "../../../Buttons/DeleteButton";

import { Form2Context, Form2Work } from "../../ResumeState/Form2State";

export interface Props {
  item: Form2Work;
}

const SingleWorkItem: React.FC<Props> = ({
  item,
}) => {
  const {setWorkDelete} = useContext(Form2Context);
  return (
    <>
      <div className="input-div p-4">
        <span>{item.companyName}</span>
        <span>{item.startExpl}</span>
        <span>{item.endExpl}</span>
        <span>{item.workStartDate}</span>
        <span>{item.workEndDate}</span>
        <DeleteButton item={item.workId} change={setWorkDelete} />
      </div>
    </>
  );
};

export default SingleWorkItem;
