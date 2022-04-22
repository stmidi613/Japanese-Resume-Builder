import React from "react";
import '../../Buttons/button.css'
import TipBox from "../ResumeForm/TipBox";

const TipsHeader: React.FC = () => {
  return (
    <>
      <div className="grid grid-flow-col place-content-center w-fit">
        <div className="button-animation rounded-full p-1.5 w-12">
          <p className="text-white text-3xl font-extrabold grid place-content-center">
            ?
          </p>
        </div>
        <p className="grid place-content-center ml-1 text-orange text-2xl">Tips</p>
      </div>
      <TipBox mt={false} content="Get tips for each section when you click on the Tips icon." />
    </>
  );
};

export default TipsHeader;
