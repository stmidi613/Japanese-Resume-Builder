import React, { ReactFragment } from "react";
import CloseButton from "../../Buttons/CloseButton";

interface Props {
  content: ReactFragment;
}

const TipBox: React.FC<Props> = ({ content }) => {

  return (
    <>
      <section className="hidden xl:w-1/2 bg-gray bg-opacity-30 md:block h-full">
        <div className="page-div drop-shadow-lg tipbox">
          <CloseButton />
          <div className="mb-4">{content}</div>
        </div>
      </section>
    </>
  );
};

export default TipBox;
