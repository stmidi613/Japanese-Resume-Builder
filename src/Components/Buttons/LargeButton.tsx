import React, { useRef } from "react";

interface Props {
  largeButtonText: string;
  showPopup: boolean;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: (e: React.FormEvent) => void;
}

const LargeButton: React.FC<Props> = ({
  showPopup,
  setShowPopup,
  largeButtonText,
  handleClick,
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
