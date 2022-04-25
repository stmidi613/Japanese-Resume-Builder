import React, { useContext } from "react";
import { AppContext } from "../../../AppState/AppState";
import TipsIcon from "../TipsIcon";

interface Props {
    fieldName: string;
}

const InputTitle: React.FC<Props> = ({fieldName}) => {
  const {showPopup, setShowPopup} = useContext(AppContext);

  return (
    <div className="section-div">
      <TipsIcon idnum={2} />
      <h2 className="h2">{fieldName}</h2>
      {/* <TipBox mt={true} content="Get tips for each section when you click on the Tips icon." /> */}
    </div>
  );
};

export default InputTitle;
