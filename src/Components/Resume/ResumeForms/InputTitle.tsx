import React from "react";
import TipsIcon from "../TipsIcon";

interface Props {
    fieldName: string;
}

const InputTitle: React.FC<Props> = ({ fieldName }) => {

  return (
    <div className="section-div">
      <label htmlFor={fieldName} className="h2">{fieldName}</label>
     </div>
  );
};

export default InputTitle;
