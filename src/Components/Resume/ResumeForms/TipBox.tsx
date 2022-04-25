import React, { useContext, useEffect } from "react";
import { AppContext } from "../../../AppState/AppState";
import CloseButton from "../../Buttons/CloseButton";

interface Props {
  content: any;
  mt: boolean;
  idnum: number;
}

const TipBox: React.FC<Props> = ({idnum, mt, content }) => {
  const {showPopup} = useContext(AppContext);
  
  useEffect(() => {
    let popup = document.getElementById(`popup${idnum}`);
    if (popup) popup.style.boxShadow = "0 0 10px 1000px rgba(0, 0, 0, 0.6)";
  }, [showPopup]);

  return (
    <>
      <div
        id={`popup${idnum}`}
        className={
          mt
            ? `tipbox w-64 drop-shadow-md mt-10`
            : `tipbox drop-shadow-md mt-[4.5rem]`
        }
      >
        <CloseButton idnum={1} />
        <p>{content}</p>
      </div>
    </>
  );
};

export default TipBox;
