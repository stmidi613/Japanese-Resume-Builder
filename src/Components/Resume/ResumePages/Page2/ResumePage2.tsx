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
          {/* Certifications and Licenses */}
          <section className="mx-[5%] border-2">
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
              <div className="col-span-2 border-2 border-t-[0px] h-60">
                <p className="w-full px-3 border-b-2 border-double text-sm text-center">
                  希望の動機・特技・興味・アピールポイントなど
                </p>
                <p className="m-2 text-xs">"Hello World"</p>
              </div>
            </div>
            <div className="col-span-1">
              <div className="col-span-1 border-2 border-t-[0px] border-l-[0px] h-60">
                {/* Travel Time */}
                <div className="h-1/3">
                  <p className="w-full px-3 border-b-2 border-double text-sm text-center">
                    通勤時間
                  </p>
                  <p className="grid items-center pr-4 text-xs text-right h-2/3">
                    約　　時間　　分
                  </p>
                </div>
                {/* Family Section */}
                <div className="h-1/3 border-t-2">
                  <p className="w-full px-3 border-b-2 border-double text-sm text-center">
                    扶養家族数（配偶を除く）
                  </p>
                  <p className="grid items-center pr-4 text-xs text-right h-2/3">
                    0 人
                  </p>
                </div>
                <div className="h-1/3 grid grid-cols-2 grid-rows-2 text-center text-xs border-t-2">
                  <div className="border-b-2 h-full">
                    <p className="grid place-content-center h-full border-r-2">
                      配偶者
                    </p>
                    <p className="grid place-content-center border-r-2 h-[112%]">
                      有・無
                    </p>
                  </div>
                  <div className="border-b-2">
                    <p className="grid place-content-center h-full">
                      配偶者の扶養義務
                    </p>
                    <p className="grid place-content-center h-[112%]">有・無</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mx-[5%] mt-6 border-2">
            <div className="h-60">
              <p className="w-full px-1 border-b-2 border-double text-sm text-center">
              本人希望記入欄（特に給料・職種・勤務時間・勤務地・その他についての希望などがあれば記入）
              </p>
              <p className="m-2 text-xs">"Hello World"</p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ResumePage2;
