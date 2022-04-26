import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";
import "../Buttons/button.css";


const TipsIcon: React.FC = () => {
  const {setShowPopup} = useContext(AppContext)

  return (
    <>
      <button
        onClick={setShowPopup}
        className="button-animation mr-1 rounded-full p-0.5 w-8 text-white text-xl font-extrabold grid place-content-center"
      >
          ?
      </button>
    </>
  );
};

export default TipsIcon;
