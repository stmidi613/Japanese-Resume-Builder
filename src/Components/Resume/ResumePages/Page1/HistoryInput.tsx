import React from "react";
import "../../../Resume/resume.css";

interface Props {
  startYear: string;
  startMonth: string;
  startText: string;
  endYear: string;
  endMonth: string;
  endText: string;
}

const HistoryInput: React.FC<Props> = ({ startYear, startMonth, startText, endYear, endMonth, endText }) => {
  return (
    <>
      <div className="resume-history-div">
        <div className={"resume-history-year-div"}>
          <p>{startYear}</p>
        </div>
        <div className="resume-history-month-div">
          <p>{startMonth}</p>
        </div>
        <div
          className={"resume-history-text-div"}>
          <p>
          {startText} 
          </p>
        </div>
      </div>
      <div className="resume-history-div">
        <div className={"resume-history-year-div"}>
          <p>{endYear}</p>
        </div>
        <div className="resume-history-month-div">
          <p>{endMonth}</p>
        </div>
        <div
          className={"resume-history-text-div"}>
          <p>
          {endText} 
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoryInput;
