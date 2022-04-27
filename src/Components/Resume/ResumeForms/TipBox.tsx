import React, { useContext } from "react";
import { AppContext } from "../../../AppState/AppState";
import TipsCloseButton from "../../Buttons/TipsCloseButton";

interface Props {
  content: string;
}

const TipBox: React.FC<Props> = ({ content }) => {
  const { showPopup } = useContext(AppContext);

  return (
    // Do the next map here using the key and id
    <>
      <section className="hidden w-1/2 bg-gray bg-opacity-30 xl:block">
        <div className="page-div drop-shadow-lg tipbox">
          <TipsCloseButton />
          <p>{content}</p>
        </div>
      </section>
    </>
  );
};

export default TipBox;
