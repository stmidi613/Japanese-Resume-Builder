import React, { useContext } from "react";

import AddressBox from "./AddressBox";
import EmailBox from "./EmailBox";
import HistoryInput from "./HistoryInput";
import HistoryTitle from "./HistoryTitle";

import { ReducerContext } from "../../ResumeState/ResumeState";
import { Form2Context } from "../../ResumeState/Form2State";

// import { Form2Model } from "../../ResumeState/Form2State";

const ResumePage1: React.FC = () => {
  const { educHist } =
    useContext(Form2Context);

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
    //Form 2
    // schoolName,
    department,
    major,
    startWork,
    educStartDate,
    educEndDate,
    companyName,
    explanation,
    workStartDate,
    workEndDate,
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
    (birthyear == 1989 && birthmonth == 1 && birthdate <= 7);
  const heisei =
    birthyear > 1989 ||
    (birthyear == 1989 && birthmonth >= 1 && birthdate >= 8);
  const showayear = birthyear - 1925;
  const heiseiyear = birthyear - 1988;

  const age = () => {
    return +month >= +birthmonth && +date >= +birthdate
      ? year - birthyear
      : year - birthyear - 1;
  };

  //Form 2
  const educStartYear = educStartDate.slice(0, 4);
  const educEndYear = educEndDate.slice(0, 4);
  const educStartMonth = educStartDate.slice(5, 7);
  const educEndMonth = educEndDate.slice(5, 7);
  const workStartYear = workStartDate.slice(0, 4);
  const workEndYear = workEndDate.slice(0, 4);
  const workStartMonth = workStartDate.slice(5, 7);
  const workEndMonth = workEndDate.slice(5, 7);

  return (
    <>
      <section className="hidden w-1/2 bg-gray bg-opacity-30 xl:block">
        <div className="page-div drop-shadow-lg">
          {/* This is the Title and date */}
          <section className="flex justify-between w-2/3 ml-[5%] pt-5">
            <p className="justify-start pr-14">履歴書</p>
            <p className="justify-end">
              令和　{year - 2018}年{month}月{date}日 現在
            </p>
          </section>
          {/* Start of Name to Gender Section */}
          <section className="resume-section">
            <div className="col-span-3">
              <div className="col-span-3 border-2">
                <p className="w-full border-b-[1px] pl-2 text-xs">
                  ふりがな<span className="pl-3">{furiName}</span>
                </p>
                <p className="text-2xl py-7 px-3">
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
              <img className="photo" src={pic} alt="photo" />
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
          <section className="mx-[5%] mt-5 border-t-[1px] border-2">
            <div className="text-center">
              <HistoryInput year="年（西暦）" month="月" text="学歴・職歴" />
            </div>
            <HistoryTitle text="学歴" />
            {educHist.map((item) => (
              <HistoryInput year="01" month="01" key={item.educId} text={item.schoolName} />
            ))}
            <HistoryInput
              year={educStartYear}
              month={educStartMonth}
              text={`${department} ${major}`}
            />
            <HistoryInput
              year={educEndYear}
              month={educEndMonth}
              text={`${department} ${major}`}
            />
            <HistoryInput
              year={educStartYear}
              month={educStartMonth}
              text={`${department} ${major}`}
            />
            <HistoryInput
              year={educEndYear}
              month={educEndMonth}
              text={`${department} ${major}`}
            />
            <HistoryTitle text="職歴" />
            <HistoryInput
              year={workStartYear}
              month={workStartMonth}
              text={`${companyName} ${startWork}`}
            />
            <HistoryInput
              year={workEndYear}
              month={workEndMonth}
              text={`${companyName} ${explanation}`}
            />
            <HistoryInput
              year={workStartYear}
              month={workStartMonth}
              text={companyName}
            />
            <HistoryInput
              year={workEndYear}
              month={workEndMonth}
              text={`${companyName} ${explanation}`}
            />
            <div className="text-right">
              <HistoryInput year="" month="" text="以上" />
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ResumePage1;
