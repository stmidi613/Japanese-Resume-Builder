import React from 'react';

interface Props {
    text: string;
    year: string;
    month: string;
}

const CertLicTitle: React.FC<Props> = ({text, year, month}) => {
  return (
    <>
      <div className="resume-history-div">
        <div className="resume-history-year-div">{year}</div>
        <div className="resume-history-month-div">{month}</div>
        <div className="resume-history-title-div">{text}</div>
      </div>
    </>
  )
}

export default CertLicTitle