import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextButton: React.FC = () => {
  const {setStep} = useContext(AppContext)
  
  return (
    <div className="flex justify-center md:order-9 md:col-start-2 md:row-span-1">
      <button onClick={setStep} className="w-80 m-10 p-2 text-lg button-animation button">
        Next Step
        <FontAwesomeIcon className="px-3" icon={faAnglesRight} />
      </button>
    </div>
  );
};

export default NextButton;
