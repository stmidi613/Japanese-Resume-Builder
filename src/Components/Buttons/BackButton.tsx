import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

import { faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NextButton: React.FC = () => {
  const {setBackStep} = useContext(AppContext)
  
  return (
    <div className="flex justify-center min-w-[200px]">
      <button onClick={setBackStep} className="min-w-[9rem] md:w-64 m-10 p-2 text-lg button-animation button">
        <FontAwesomeIcon className="px-3" icon={faAnglesLeft} />
        Back
      </button>
    </div>
  );
};

export default NextButton;
