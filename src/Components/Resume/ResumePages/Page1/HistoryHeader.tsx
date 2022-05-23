import React from "react";

interface Props {
    text: string;
    year: string;
    month: string;
}

const HistoryHeader: React.FC<Props> = ({year, month, text}) => {
  return (
    <>
      <div className="resume-history-header-div border-t-[.5px]">
        <div className="resume-history-year-div">{year}</div>
        <div className="resume-history-month-div">{month}</div>
        <div className="resume-history-title-div">{text}</div>
      </div>
    </>
  );
};

export default HistoryHeader;
