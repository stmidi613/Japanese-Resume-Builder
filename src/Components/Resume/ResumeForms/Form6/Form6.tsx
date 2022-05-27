import React from "react";

import ResumePage1 from "../../ResumePages/Page1/ResumePage1";
import ResumePage2 from "../../ResumePages/Page2/ResumePage2";

import BackButton from "../../../Buttons/BackButton";
import PrintButton from "../../../Buttons/PrintButton";
import SaveButton from "../../../Buttons/SaveButton";

const Form6: React.FC = () => {
  return (
    <>
      <div className="grid w-full">
        <div className="flex flex-wrap justify-evenly w-full">
          <BackButton />
          <PrintButton />
          <SaveButton />
        </div>
        <div className="xl:flex grid w-full">
          <ResumePage1 />
          <ResumePage2 />
        </div>
      </div>
    </>
  );
};

export default Form6;
