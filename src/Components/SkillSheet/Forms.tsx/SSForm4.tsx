import React from "react";

import BackButton from "../../Buttons/BackButton";
import PrintButton from "../../Buttons/PrintButton";

const SSForm4: React.FC = () => {
  return (
    <>
      <div
        id="skillsheet-button-group"
        className="flex flex-wrap flex-col justify-start md:flex-row md:justify-evenly md:w-full xl:w-1/3"
      >
        <BackButton />
        <p className="flex items-center justify-center text-red-500 text-xl">
          Use A4 Page Size to Print
        </p>
        <PrintButton />
      </div>
    </>
  );
};

export default SSForm4;
