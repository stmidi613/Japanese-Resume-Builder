import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NextButton: React.FC = () => {
  return (
    <div className="flex justify-center">
      <button className="w-80 m-10 p-2 text-lg button-animation button">
        Next
        <FontAwesomeIcon className="px-3" icon={faAnglesRight} />
      </button>
    </div>
  );
};

export default NextButton;
