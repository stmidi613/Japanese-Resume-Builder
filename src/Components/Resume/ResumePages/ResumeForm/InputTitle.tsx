import React from "react";
import TipsIcon from "../../TipsIcon";

interface Props {
    fieldName: string;
}

const InputTitle: React.FC<Props> = ({fieldName}) => {
  return (
    <div className="section-div">
      <TipsIcon />
      <h2 className="h2">{fieldName}</h2>
    </div>
  );
};

export default InputTitle;
