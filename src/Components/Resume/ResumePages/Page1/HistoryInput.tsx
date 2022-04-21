import React from "react";
import '../../../Resume/resume.css';

const HistoryInput: React.FC = () => {
  return (
    <>
      <div className="resume-history-div">
        <div className="resume-history-year-div"></div>
        <div className="resume-history-month-div"></div>
        <div className="resume-history-text-div">First</div>
      </div>
    </>
  );
};

export default HistoryInput;
