import React, { useContext } from "react";
import { AppContext } from "../../../AppState/AppState";
import TipsIcon from "../TipsIcon";
import TipBox from "./TipBox";

interface Props {
    idnum: number;
    fieldName: string;
}

const InputTitle: React.FC<Props> = ({idnum, fieldName}) => {
  const {showPopup} = useContext(AppContext);

  return (
    <div id={`popup${idnum}`} className="section-div">
      <TipsIcon idnum={idnum} />
      <h2 className="h2">{fieldName}</h2>
     {showPopup && <TipBox idnum={idnum} mt={true} content="Get tips for each section when you click on the Tips icon." /> }
    </div>
  );
};

export default InputTitle;
