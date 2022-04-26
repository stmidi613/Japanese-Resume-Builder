import React, { useContext } from "react";
import TipBox from "../ResumeForms/TipBox";

import '../../Buttons/button.css'
import { AppContext } from "../../../AppState/AppState";

interface Props {
  id: number;
}

const TipsHeader: React.FC<Props> = ({id}) => {
  const {showPopup, setShowPopup} = useContext(AppContext)
  //put a variable here to set the right popup box
  const Pid = document.getElementById(`${id}`)?.id;

  return (
    <>
      <div className="grid grid-flow-col place-content-center w-fit">
      <button
        onClick={setShowPopup}
        className="button-animation mr-1 rounded-full h-12 w-12 text-white text-3xl font-extrabold grid place-content-center"
      >
          ?
      </button>
        <p className="grid place-content-center ml-1 text-orange text-2xl">Tips</p>
      </div>
      {/* Use this function to make sure the right popup box comes up */}
      {showPopup && <TipBox id={id} index={1} mt={false} content="Get tips for each section when you click on the Tips icon." />}
    </>
  );
};

export default TipsHeader;
