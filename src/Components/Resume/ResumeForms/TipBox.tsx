import React, { useContext } from "react";
import { AppContext } from "../../../AppState/AppState";
import TipsCloseButton from "../../Buttons/TipsCloseButton";

interface Props {
  content: string;
  mt: boolean;
  id: number;
  index: number;
}

const TipBox: React.FC<Props> = ({id, index, mt, content }) => {
  const {showPopup} = useContext(AppContext);
  const string = String(id);
  return (
    // Do the next map here using the key and id
    <>
      <div id={`${string}`}
        className={
          mt
            ? `tipbox w-64 drop-shadow-md mt-10`
            : `tipbox drop-shadow-md mt-[4.5rem]`
        }
      >
        <TipsCloseButton />
        <p>{content}</p>
      </div>
    </>
  );
};

export default TipBox;
