import React, { useContext } from "react";

import CertLicTitle from "./CertLicTitle";
import CertHistInput from "./CertHistInput";

import { Form3Context } from "../../ResumeState/Form3State";

const ResumePage2: React.FC = () => {
  const { certHist } = useContext(Form3Context);

  return (
    <>
      <section className="hidden w-1/2 bg-gray bg-opacity-30 xl:block h-full">
        <div className="page-div drop-shadow-lg pt-5">
          <section className="mx-[5%] border-t-[.5px] border-2">
            <CertLicTitle year="年（西暦）" month="月" text="資格・免許" />
            {certHist.map((item) => (
              <>
                <CertHistInput
                  key={item.certId}
                  text={item.certName}
                  year={item.certStartDate.slice(0, 4)}
                  month={item.certStartDate.slice(5, 7)}
                />
              </>
            ))}
            {certHist.length < 1 ? <CertHistInput text="" year="" month="" /> : ""}
            {certHist.length < 2 ? <CertHistInput text="" year="" month="" /> : ""}
            {certHist.length < 3 ? <CertHistInput text="" year="" month="" /> : ""}
            {certHist.length < 4 ? <CertHistInput text="" year="" month="" /> : ""}
            {certHist.length < 5 ? <CertHistInput text="" year="" month="" /> : ""}
            {certHist.length < 6 ? <CertHistInput text="" year="" month="" /> : ""}
          </section>
        </div>
      </section>
    </>
  );
};

export default ResumePage2;
