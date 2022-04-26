import React, {useContext, useEffect} from "react";
import { AppContext } from "../../AppState/AppState";


const CloseButton: React.FC = () => {
  const {showPopup, setHidePopup} = useContext(AppContext)
  useEffect(() => {
    let popup = document.getElementById(`popup`);
    if (popup) popup.style.boxShadow = "0 0 10px 1000px rgba(0, 0, 0, 0.6)";
  }, [showPopup]);

  return (
    <>
      <div className="flex justify-end">
        <button
          className="text-orange border-2 border-orange bg-gray rounded-md py-1 px-2"
          onClick={setHidePopup}
        >
          X
        </button>
      </div>
    </>
  );
};

export default CloseButton;
