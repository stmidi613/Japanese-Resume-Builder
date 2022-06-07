import React, { useContext } from "react";

import CertLicTitle from "./CertLicTitle";
import CertHistInput from "./CertHistInput";
import Page2History from "./Page2History";

import { AppContext } from "../../../../AppState/AppState";
import { Form3Context } from "../../ResumeState/Form3State";
import { Form4To5Context } from "../../ResumeState/Form4To5State";

const ResumePage2: React.FC = () => {
  const {step} = useContext(AppContext);
  const { certHist } = useContext(Form3Context);
  const {
    appealPoints,
    travelHours,
    travelMinutes,
    dependents,
    spouse,
    spouseDependents,
    additionalInfo,
  } = useContext(Form4To5Context);

  return (
    <>
      <section id="resume-page-2-bg" className={step < 6 ? `hidden xl:w-1/2 bg-gray bg-opacity-30 md:block h-full pb-3` : `block xl:w-1/2 md:min-w-0 min-w-[725px] pb-5 h-full bg-gray bg-opacity-30`}>
      {step < 6 ? <h2 className="text-purple grid my-3 place-content-center">Resume Will Appear Differently When Printed</h2> : ""}
        <div id="resume-page-2" className={`page-div ${step < 6 ? `drop-shadow-lg` : ""} pt-5`}>
          {/* Certifications and Licenses */}
          <Page2History />
          <section className="mx-[5%] my-3 border-2 border-b-[0px]">
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
            {certHist.length < 1 ? (
              <CertHistInput text="" year="" month="" />
            ) : (
              ""
            )}
            {certHist.length < 2 ? (
              <CertHistInput text="" year="" month="" />
            ) : (
              ""
            )}
            {certHist.length < 3 ? (
              <CertHistInput text="" year="" month="" />
            ) : (
              ""
            )}
            {certHist.length < 4 ? (
              <CertHistInput text="" year="" month="" />
            ) : (
              ""
            )}
            {certHist.length < 5 ? (
              <CertHistInput text="" year="" month="" />
            ) : (
              ""
            )}
            {certHist.length < 6 ? (
              <CertHistInput text="" year="" month="" />
            ) : (
              ""
            )}
          </section>
          {/* Appeal and Family Section */}
          <section className="mx-[5%] grid grid-cols-3">
            <div className="col-span-2">
              {/* Appeal Points */}
              <div className="col-span-2 border-2 h-60">
                <p className="w-full px-3 border-b-2 border-double text-sm text-center">
                  希望の動機・特技・興味・アピールポイントなど
                </p>
                <p className="m-2 text-xs">{appealPoints}</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="col-span-1 border-2 border-l-[0px] h-60">
                {/* Travel Time */}
                <div className="h-1/3">
                  <p className="w-full px-3 border-b-2 border-double text-sm text-center">
                    通勤時間
                  </p>
                  <p className="grid items-center pr-4 text-xs text-right h-2/3">
                    約  {travelHours}  時間  {travelMinutes}  分
                  </p>
                </div>
                {/* Family Section */}
                <div className="h-1/3 border-t-2">
                  <p className="w-full px-1 border-b-2 border-double text-sm text-center">
                    扶養家族数（配偶を除く）
                  </p>
                  <p className="grid items-center pr-4 text-xs text-right h-2/3">
                    {dependents} 人
                  </p>
                </div>
                <div className="h-1/3 grid grid-cols-2 grid-rows-2 text-center text-xs border-t-2">
                  <div className="border-b-2 h-full">
                    <p className="grid place-content-center h-full border-r-2">
                      配偶者
                    </p>
                    <p className="grid grid-flow-col place-content-center border-r-2 h-[112%]">
                    <span
                      className={`${
                        spouse ? "border-[1px] rounded-full p-1" : "p-1"
                      }`}
                    >
                      有
                    </span>
                    <span className="px-2 py-1">・</span>
                    <span
                      className={`${
                        !spouse ? "border-[1px] rounded-full p-1" : "p-1"
                      }`}
                    >
                      無
                    </span>
                    </p>
                  </div>
                  <div className="border-b-2">
                    <p className="grid place-content-center h-full">
                      配偶者の扶養義務
                    </p>
                    <p className="grid grid-flow-col place-content-center h-[112%]">
                    <span
                      className={`${
                        spouseDependents ? "border-[1px] rounded-full p-1" : "p-1"
                      }`}
                    >
                      有
                    </span>
                    <span className="px-2 py-1">・</span>
                    <span
                      className={`${
                        !spouseDependents ? "border-[1px] rounded-full p-1" : "p-1"
                      }`}
                    >
                      無
                    </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-[5%] mt-3 border-2">
            <div className="h-48">
              <p className="w-full px-1 border-b-2 border-double text-sm text-center">
                本人希望記入欄（特に給料・職種・勤務時間・勤務地・その他についての希望などがあれば記入）
              </p>
              <p className="m-2 text-xs">{additionalInfo}</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ResumePage2;
