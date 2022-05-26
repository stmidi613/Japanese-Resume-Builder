import React, { useContext } from "react";

import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { AppContext } from "../../AppState/AppState";

const NextButton: React.FC = () => {
  const {setStep} = useContext(AppContext)
  
  return (
    <div className="flex justify-center min-w-[200px] md:w-full md:order-9 md:col-start-2 md:row-span-1">
      <button onClick={setStep} className="min-w-[9rem] md:w-64 m-10 p-2 text-lg button-animation button">
        Next Step
        <FontAwesomeIcon className="px-3" icon={faAnglesRight} />
      </button>
    </div>
  );
};

export default NextButton;
