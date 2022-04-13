import React from "react";

interface Props {
  largeButtonText: string,
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>,
}

const LargeButton: React.FC<Props> = ({
  setShowPopup,
  largeButtonText,
}) => {

  return (
    <>
      <div>
        <button
          className="button button-animation text-5xl p-7"
          onClick={() => setShowPopup(true)}
        >
          {largeButtonText}
        </button>
      </div>
    </>
  );
};

export default LargeButton;
