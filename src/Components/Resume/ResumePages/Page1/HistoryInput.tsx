import React from "react";
import "../../../Resume/resume.css";

interface Props {
  year: string;
  month: string;
  text: string;
}

const HistoryInput: React.FC<Props> = ({ year, month, text }) => {
  return (
    <>
      <div className="resume-history-div">
        <div className={"resume-history-year-div"}>
          <p>{year}</p>
        </div>
        <div className="resume-history-month-div">
          <p>{month}</p>
        </div>
        <div
          className={"resume-history-text-div"}>
          <p>
          {text} 
          </p>
        </div>
      </div>
    </>
  );
};

export default HistoryInput;
