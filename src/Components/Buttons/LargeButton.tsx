import React, { useContext } from "react";
import { AppContext } from "../../AppState/AppState";

interface Props {
  largeButtonText: string,
}

const LargeButton: React.FC<Props> = ({
  largeButtonText,
}) => {
  const {setShowPopup} = useContext(AppContext);
  return (
    <>
      <div>
        <button
          className="button button-animation text-5xl p-7"
          onClick={setShowPopup}
        >
          {largeButtonText}
        </button>
      </div>
    </>
  );
};

export default LargeButton;
