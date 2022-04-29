import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";
import "../Buttons/button.css";

const TipsIcon: React.FC = () => {
  const {setShowPopup} = useContext(AppContext);
  
  return (
    <>
      <button
        onClick={setShowPopup}
        className="button-animation circle-button mr-1"
      >
          ?
      </button>
    </>
  );
};

export default TipsIcon;
