import React, {useEffect} from "react";

interface Props {
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  }

const CloseButton: React.FC<Props> = ({showPopup, setShowPopup}) => {
    useEffect(() => {
        let popup = document.getElementById("popup");
        if (popup) popup.style.boxShadow = "0 0 10px 1000px rgba(0, 0, 0, 0.6)";
      }, [showPopup]);
  return (
    <>
      <div className="flex justify-end">
        <button
          className="text-orange border-2 border-orange bg-gray rounded-md py-1 px-2"
          onClick={() => setShowPopup(false)}
        >
          X
        </button>
      </div>
    </>
  );
};

export default CloseButton;
