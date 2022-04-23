import React from "react";
import CloseButton from "../../Buttons/CloseButton";

interface Props {
  content: any;
  mt: boolean;
}

const TipBox: React.FC<Props> = ({ mt, content }) => {
  return (
    <>
      <div className={mt ? `tipbox w-64 drop-shadow-md mt-10` : `tipbox drop-shadow-md mt-[4.5rem]`}>
        {/* <CloseButton /> */}
        <p>{content}</p>
      </div>
    </>
  );
};

export default TipBox;
