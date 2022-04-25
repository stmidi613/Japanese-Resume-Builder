import React, {useContext} from "react";
import { AppContext } from "../../AppState/AppState";

interface Props {
    idnum: number;
    // setHidePopup: React.Dispatch<React.SetStateAction<boolean>>;
  }

const CloseButton: React.FC<Props> = ({idnum}) => {
  const {setHidePopup} = useContext(AppContext)
    
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
