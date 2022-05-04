import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

import { faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextButton: React.FC = () => {
  const {setBackStep} = useContext(AppContext)
  
  return (
    <div className="flex justify-center md:order-9 md:col-start-2 md:row-span-1">
      <button onClick={setBackStep} className="w-80 m-10 p-2 text-lg button-animation button">
        <FontAwesomeIcon className="px-3" icon={faAnglesLeft} />
        Back
      </button>
    </div>
  );
};

export default NextButton;
