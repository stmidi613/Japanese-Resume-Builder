import React from "react";
import TipsIcon from "../TipsIcon";

interface Props {
    id: number;
    fieldName: string;
}

const InputTitle: React.FC<Props> = ({id, fieldName }) => {

  return (
    <div className="section-div">
      <TipsIcon id={id} />
      <h2 className="h2">{fieldName}</h2>
     </div>
  );
};

export default InputTitle;
