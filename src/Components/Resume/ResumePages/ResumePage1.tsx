import React from "react";
import photo from "../../../images/photo.png";
import AddressBox from "./AddressBox";
import EmailBox from "./EmailBox";
import HistoryInput from "./HistoryInput";
import HistoryTitle from "./HistoryTitle";

interface Props {
  furiName: string;
  name: string;
  dob: string;
  furiAddress: string;
  address: string;
  email: string;
  gender: boolean;
  homePhone: string;
  cellPhone: string;
  furiContactAddress: string;
  contactAddress: string;
  contactPhone: string;
  contactCellPhone: string;
  contactEmail: string;
}

const ResumePage1: React.FC<Props> = ({
  furiName,
  name,
  dob,
  furiAddress,
  address,
  email,
  gender,
  homePhone,
  cellPhone,
  furiContactAddress,
  contactAddress,
  contactPhone,
  contactCellPhone,
  contactEmail,
}) => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();
  
  const birthyear = +dob.slice(0, 4);
  const birthmonth = dob.slice(5, 7);
  const birthdate = dob.slice(8);
  const age = () => {return +month >= +birthmonth && +date >= +birthdate ? year - birthyear : year - birthyear - 1};

  return (
    <>
      <section className="hidden w-1/2 bg-gray bg-opacity-30 xl:block">
        <div className="page-div drop-shadow-lg">
          {/* This is the Title and date */}
          <section className="flex gap-8 ml-[5%] pt-5">
            <p className="pr-14">履歴書</p>
            <p>
              令和　{year - 2018}年　{month}月　{date}日 現在
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
                    <p className="w-1/2 px-2 pt-2 pb-1">生年月日</p>
                    <div className="flex flex-col w-full pr-2 py-2">
                    <p className="flex justify-end">({dob?age():"00"}歳)</p>
                    <p className="pb-2 text-right justify-end">
                      昭和・平成　{birthyear > -1 ? birthyear : "00"}年{birthmonth ? birthmonth : "00"}月{birthdate ? birthdate : "00"}日
                    </p>
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
              <img className="photo" src={photo} alt="photo" />
            </div>
          </section>
          {/* End of Name to Gender Section */}
          {/* Start of Address Section */}
          <section className="resume-section">
            <AddressBox
              text=""
              val={address}
              furival={furiAddress}
            />
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
          <section className="mx-[5%] mt-5 border-2">
            <div className="grid grid-cols-12">
              <div className="resume-history-year-div">年（西暦）</div>
              <div className="resume-history-month-div">月</div>
              <div className="resume-history-title-div">学歴・職歴</div>
            </div>
            <HistoryTitle text="学歴" />
            <HistoryInput />
            <HistoryInput />
            <HistoryInput />
            <HistoryInput />
            <HistoryTitle text="職歴" />
            <HistoryInput />
            <HistoryInput />
            <HistoryInput />
            <HistoryInput />
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-last-div">以上</div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default ResumePage1;
