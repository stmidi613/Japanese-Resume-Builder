import React from "react";

import BackButton from "../../Buttons/BackButton";
import PrintButton from "../../Buttons/PrintButton";

const SSForm4: React.FC = () => {
  return (
    <>
      <div
        id="skillsheet-button-group"
        className="grid grid-flow-row md:grid-flow-col xl:grid-flow-row md:justify-evenly md:w-full xl:w-1/2"
      >
        <BackButton />
        <p className="flex items-center justify-center text-red-500 text:lg xl:text-xl">
          Use A4 Page Size to Print
        </p>
        <PrintButton />
      </div>
    </>
  );
};

export default SSForm4;
