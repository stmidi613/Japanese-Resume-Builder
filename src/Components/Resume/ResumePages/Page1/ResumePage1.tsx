import React, { useContext } from "react";

import HistoryHeader from "./HistoryHeader";
import AddressBox from "./AddressBox";
import EmailBox from "./EmailBox";
import HistoryInput from "./HistoryInput";
import HistoryTitle from "./HistoryTitle";

import { AppContext } from "../../../../AppState/AppState";
import { ReducerContext } from "../../ResumeState/ResumeState";
import { Form2Context } from "../../ResumeState/Form2State";
import Page2History from "../Page2/Page2History";

const ResumePage1: React.FC = () => {
  const { step } = useContext(AppContext);
  const { educHist, workHist } = useContext(Form2Context);

  const {
    //Form 1
    pic,
    gender,
    furiName,
    name,
    dob,
    furiAddress,
    address,
    email,
    homePhone,
    cellPhone,
    furiContactAddress,
    contactAddress,
    contactPhone,
    contactCellPhone,
    contactEmail,
  } = useContext(ReducerContext);

  //Form 1
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();

  const birthyear = +dob.slice(0, 4);
  const birthmonth = +dob.slice(5, 7);
  const birthdate = +dob.slice(8);

  const showa =
    birthyear < 1989 ||
    (birthyear === 1989 && birthmonth === 1 && birthdate <= 7);
  const heisei =
    birthyear > 1989 ||
    (birthyear === 1989 && birthmonth >= 1 && birthdate >= 8);
  const showayear = birthyear - 1925;
  const heiseiyear = birthyear - 1988;

  const age = () => {
    return +month >= +birthmonth && +date >= +birthdate
      ? year - birthyear
      : year - birthyear - 1;
  };

  return (
    <>
      <section id="resume-page-1-bg"
        className={
          step < 6
          ? `hidden xl:w-1/2 w-full bg-gray bg-opacity-30 md:block h-full pb-3`
          : `block xl:w-1/2 md:min-w-0 h-full bg-gray bg-opacity-30`
        }
      >
        {step < 6 ? <h2 className="text-purple grid my-3 place-content-center">Resume Will Appear Differently When Printed</h2> : ""}
        {step === 2 ? <h2 className="text-purple grid my-3 place-content-center">Resume Page 1</h2> : ""}
        <div id="resume-page-1" className={`page-div ${step < 6 ? `drop-shadow-lg` : ""}`}>
          {/* This is the Title and date */}
          <section className="flex justify-between w-2/3 ml-[5%] pt-10">
            <p className="justify-start pr-14">履歴書</p>
            <p className="justify-end">
              令和　{year - 2018}年{month}月{date}日 現在
            </p>
          </section>
          {/* Start of Name to Gender Section */}
          <section className="resume-section">
            <div className="col-span-3">
              <div className="col-span-3 border-2 border-b-[1px]">
                <p className="w-full border-b-[1px] pl-2 text-xs">
                  ふりがな<span className="pl-5">{furiName}</span>
                </p>
                <p className="text-2xl py-6 px-3">
                  氏名 <span className="pl-2">{name}</span>
                </p>
                <div className="grid grid-flow-col col-span-2 text-xs border-t-2">
                  <div className="flex">
                    <p className="w-1/2 px-2 pt-2">生年月日</p>
                    <div className="flex flex-col w-full pr-2 py-2">
                      <p className="flex justify-end">
                        ({dob ? age() : "00"}歳)
                      </p>
                      <div className="flex py-1 text-right justify-end">
                        <p
                          className={
                            showa
                              ? `border-[1px] rounded-full relative bottom-1 p-1`
                              : ""
                          }
                        >
                          昭和
                        </p>
                        <p>・</p>
                        <p
                          className={
                            heisei
                              ? `border-[1px] rounded-full relative bottom-1 p-1`
                              : ""
                          }
                        >
                          平成
                        </p>
                        <p className="pl-2">
                          {birthyear > 0 && birthyear < year && heisei
                            ? heiseiyear
                            : birthyear <= 0
                            ? "00"
                            : showayear}
                          年{birthmonth ? birthmonth : "00"}月
                          {birthdate ? birthdate : "00"}日
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-flow-col col-span-1 border-l-[1px] place-content-center">
                    <span
                      className={`${
                        gender ? "border-[1px] rounded-full p-1" : "p-1"
                      }`}
                    >
                      男
                    </span>
                    <span className="px-2 py-1">・</span>
                    <span
                      className={`${
                        !gender ? "border-[1px] rounded-full p-1" : "p-1"
                      }`}
                    >
                      女
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Photo div */}
            <div className="col-span-1 grid place-content-center">
              <img className="photo" src={pic} alt="" />
            </div>
          </section>
          {/* End of Name to Gender Section */}
          {/* Start of Address Section */}
          <section className="resume-section">
            <AddressBox text="" val={address} furival={furiAddress} />
            <EmailBox
              email={email}
              homePhone={homePhone}
              cellPhone={cellPhone}
            />
          </section>
          {/* End of Address Section */}
          {/* Start of Contact Address Section */}
          <section className="resume-section mb-2">
            <AddressBox
              text="（現住所以外に連絡を希望する場合のみ記入）"
              val={contactAddress}
              furival={furiContactAddress}
            />
            <EmailBox
              email={contactEmail}
              homePhone={contactPhone}
              cellPhone={contactCellPhone}
            />
          </section>
          {/* End of Contact Address Section */}

          {/* Start of Education and Work History */}
          <section className="mx-[5%] mt-5 border-t-[1px] border-x-2">
            <HistoryHeader year="年（西暦）" month="月" text="学歴・職歴" />
            <HistoryTitle year="" month="" text="学歴" />
            {educHist.map((item) => (
              <>
                <HistoryInput
                  key={item.educId}
                  startText={`${item.schoolName} ${item.department} ${item.major}`}
                  startYear={item.educStartDate.slice(0, 4)}
                  startMonth={item.educStartDate.slice(5, 7)}
                  endText={`${item.schoolName} ${item.result}`}
                  endYear={item.educEndDate.slice(0, 4)}
                  endMonth={item.educEndDate.slice(5, 7)}
                />
              </>
            ))}
            {educHist.length < 1 ? (
              <HistoryInput
                startYear=""
                startMonth=""
                startText=""
                endYear=""
                endMonth=""
                endText=""
              />
            ) : (
              ""
            )}
            {educHist.length < 2 ? (
              <HistoryInput
                startYear=""
                startMonth=""
                startText=""
                endYear=""
                endMonth=""
                endText=""
              />
            ) : (
              ""
            )}
            {educHist.length < 3 ? (
              <HistoryInput
                startYear=""
                startMonth=""
                startText=""
                endYear=""
                endMonth=""
                endText=""
              />
            ) : (
              ""
            )}
            <HistoryTitle year="" month="" text="" />
            <HistoryTitle year="" month="" text="職歴" />
            {workHist.map((item, index) => ((index < 2 && educHist.length < 6) || (index < 3 && educHist.length < 5) ?
              <>
                <HistoryInput
                  key={item.workId}
                  startText={`${item.companyName} ${item.startExpl}`}
                  startYear={item.workStartDate.slice(0, 4)}
                  startMonth={item.workStartDate.slice(5, 7)}
                  endText={`${item.companyName} ${item.endExpl}`}
                  endYear={item.workEndDate.slice(0, 4)}
                  endMonth={item.workEndDate.slice(5, 7)}
                />
              </> : ""
            ))}
            {(workHist.length < 1) && (educHist.length < 4) ? (
              <HistoryInput
                startYear=""
                startMonth=""
                startText=""
                endYear=""
                endMonth=""
                endText=""
              />
            ) : (
              ""
            )}
            {(workHist.length < 2) && (educHist.length < 5) ? (
              <HistoryInput
                startYear=""
                startMonth=""
                startText=""
                endYear=""
                endMonth=""
                endText=""
              />
            ) : (
              ""
            )}
            {(workHist.length + educHist.length < 8) && (workHist.length < 4) ? (
              <div className="text-right">
                <HistoryInput
                  startYear=""
                  startMonth=""
                  startText=""
                  endYear=""
                  endMonth=""
                  endText="以上"
                />
              </div>
            ) : (
              ""
            )}
          </section>
          </div>
         {(workHist.length > 2  && step < 6) || (workHist.length + educHist.length > 5 && step < 6) ? 
         (<>
         <h2 className="text-purple grid my-3 place-content-center">
         Resume Page 2
       </h2>
       <div className="page-div drop-shadow-lg pt-3"><Page2History /></div></>):("")}
      </section>
    </>
  );
};

export default ResumePage1;
