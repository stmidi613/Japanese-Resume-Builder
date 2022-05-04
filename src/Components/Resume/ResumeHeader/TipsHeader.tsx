import React, { useContext } from "react";

import '../../Buttons/button.css'
import { AppContext } from "../../../AppState/AppState";

const TipsHeader: React.FC = () => {
  const {setShowPopup} = useContext(AppContext)

  return (
    <>
      <div className="grid grid-flow-col place-content-center w-fit">
      <button
        onClick={setShowPopup}
        className="button-animation mr-1 rounded-full h-12 w-12 text-white text-3xl font-extrabold grid place-content-center"
      >
          ?
      </button>
        <p className="grid place-content-center ml-1 text-orange text-2xl">Tips</p>
      </div>
    </>
  );
};

export default TipsHeader;
