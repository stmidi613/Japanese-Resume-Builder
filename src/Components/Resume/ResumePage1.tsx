import React from "react";
import photo from "../../images/photo.png";
import post from "../../images/postnumber.svg";

const ResumePage1: React.FC = () => {
  const d = new Date();
  const year = d.getFullYear() - 2018;
  const month = d.getMonth() + 1;
  const date = d.getDate();
  return (
    <>
      <section className="hidden w-1/2 bg-gray bg-opacity-30 xl:block">
        <div className="page-div drop-shadow-lg">
          {/* This is the Title and date */}
          <section className="flex gap-8 ml-[5%] pt-5">
            <p className="pr-14">履歴書</p>
            <p>令和　{year}年　{month}月　{date}日 現在</p>
          </section>
          {/* Start of Name to Gender Section */}
          <section className="resume-section">
            <div className="col-span-3">
              <div className="col-span-3 border-2">
                <p className="w-full border-b-[1px] pl-2 text-xs">ふりがな</p>
                <p className="text-3xl py-7 px-3">氏名</p>
                <div className="grid grid-flow-col text-xs border-t-2">
                  <div className="flex flex-col">
                    <p className="px-2 pt-2 pb-1">生年月日</p>
                    <p className="px-2 pb-2 text-right">
                      昭和・平成　０年００月００日
                    </p>
                  </div>
                  <p className="grid border-l-[1px] place-content-center">
                    男・女
                  </p>
                </div>
              </div>
            </div>
            {/* Photo div */}
            <div className="col-span-1">
              <img className="p-2 h-full" src={photo} alt="photo" />
            </div>
          </section>
          {/* End of Name to Gender Section */}
          {/* Start of Address Section */}
          <section className="resume-section">
            <div className="col-span-3">
              <div className="col-span-3 border-2">
                <p className="w-full px-3 border-b-[1px] border-dashed text-xs">
                  ふりがな
                </p>
                <div className="flex pt-1 pb-3 px-3 h-16">
                  <p className="text-xs">
                    現在住所
                    <img className="float-right w-2 mt-0.5" src={post} alt="" />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="col-span-1 border-2">
                <p className="w-full border-b-[1px] border-dashed pl-2 text-xs">
                  電話
                </p>
                <p className="px-2 py-2 text-[.5rem]">携帯電話</p>
                <div className="grid grid-flow-col text-xs border-t-2">
                  <p className="px-2 text-[.5rem] pb-[1.125rem]">
                    電子メール・E-mail
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End of Address Section */}
          {/* Start of Contact Address Section */}
          <section className="resume-section mb-2">
            <div className="col-span-3">
              <div className="col-span-3 border-2">
                <p className="w-full px-3 border-b-[1px] border-dashed text-xs">
                  ふりがな
                </p>
                <div className="flex pt-1 pb-3 px-3 h-16">
                  <p className="text-xs">
                    現在住所
                    <img
                      className="float-right w-2 mt-0.5"
                      src={post}
                      alt="post number symbol"
                    />
                  </p>
                  <p className="text-xs pl-10">
                    （現住所以外に連絡を希望する場合のみ記入）
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="col-span-1 border-2">
                <p className="w-full border-b-[1px] border-dashed pl-2 text-xs">
                  電話
                </p>
                <p className="px-2 py-2 text-[.5rem]">携帯電話</p>
                <div className="text-xs border-t-2">
                  <p className="px-2 text-[.5rem] pb-[1.125rem]">
                    電子メール・E-mail
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End of Contact Address Section */}
          {/* Start of Education and Work History */}
          <section className="mx-[5%] border-2">
            <div className="grid grid-cols-12">
              <div className="resume-history-year-div">
                年（西暦）
              </div>
              <div className="resume-history-month-div">
                月
              </div>
              <div className="resume-history-title-div">
                学歴・職歴
              </div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-title-div">学歴</div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-text-div">First</div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-text-div">Second</div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-text-div">Third</div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-text-div">Fourth</div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-title-div">職歴</div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-text-div">First</div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-text-div">Second</div>
            </div>
            <div className="resume-history-div">
              <div className="resume-history-year-div"></div>
              <div className="resume-history-month-div"></div>
              <div className="resume-history-text-div">Third</div>
            </div>
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
