import React from "react";

interface Props {
  content: any;
  mt: boolean;
}

const TipBox: React.FC<Props> = ({ mt, content }) => {
  return (
    <>
      <div className={mt ? `tipbox drop-shadow-md mt-10` : `tipbox drop-shadow-md mt-[4.5rem]`}>
        <p>{content}</p>
      </div>
    </>
  );
};

export default TipBox;
