import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";
import "../Buttons/button.css";

interface Props {
  idnum: number;
  
}

const TipsIcon: React.FC<Props> = ({ idnum }) => {
  const {setShowPopup} = useContext(AppContext)

  return (
    <>
      <button
        id={`popup${idnum}`}
        onClick={setShowPopup}
        className="button-animation mr-1 rounded-full p-0.5 w-8 text-white text-xl font-extrabold grid place-content-center"
      >
          ?
      </button>
    </>
  );
};

export default TipsIcon;
