import React, { ReactFragment } from "react";
import CloseButton from "../../Buttons/CloseButton";

interface Props {
  content: ReactFragment;
}

const TipBox: React.FC<Props> = ({ content }) => {

  return (
    <>
      <section className="hidden w-1/2 bg-gray bg-opacity-30 xl:block">
        <div className="page-div drop-shadow-lg tipbox">
          <CloseButton />
          <p>{content}</p>
        </div>
      </section>
    </>
  );
};

export default TipBox;
