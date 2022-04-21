import React from "react";

interface Props {
    text: string;
}

const HistoryTitle: React.FC<Props> = ({text}) => {
  return (
    <>
      <div className="resume-history-div">
        <div className="resume-history-year-div"></div>
        <div className="resume-history-month-div"></div>
        <div className="resume-history-title-div">{text}</div>
      </div>
    </>
  );
};

export default HistoryTitle;
