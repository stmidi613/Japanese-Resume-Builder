import React from "react";
import TipsIcon from "../TipsIcon";
import TipBox from "./TipBox";

interface Props {
  fieldName: string;
}

const InputTitle: React.FC<Props> = ({ fieldName }) => {
  return (
    <>
      <div className="section-div">
        <TipsIcon />
        <h2 className="h2">{fieldName}</h2>
      <TipBox mt={true} content="Hello World!" />
      </div>
    </>
  );
};

export default InputTitle;
