import React from "react";
import photo from "../../images/photo.png";
import post from "../../images/postnumber.svg";

const ResumePage1: React.FC = () => {
  return (
    <>
      <section className="hidden bg-gray bg-opacity-30 xl:block w-1/2">
        <div className="m-10 bg-white drop-shadow-lg h-[90%]">
          {/* This is the Title and date */}
          <section className="flex gap-8 ml-[5%] pt-5">
            <p className="pr-14">履歴書</p>
            <p>令和　4年　10月　24日 現在</p>
          </section>
          {/* Start of Name to Gender Section */}
          <section className="mx-[5%] grid grid-cols-4">
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
          <section className="mx-[5%] grid grid-cols-4">
            <div className="col-span-3">
              <div className="col-span-3 border-2">
                <p className="w-full px-3 border-b-[1px] border-dashed text-xs">
                  ふりがな
                </p>
                <div className="flex pt-1 pb-4 px-3 h-20">
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
                  <p className="px-2 text-xs pb-[2.125rem]">
                    電子メール・E-mail
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End of Address Section */}
          {/* Start of Contact Address Section */}
          <section className="mx-[5%] grid grid-cols-4">
            <div className="col-span-3">
              <div className="col-span-3 border-2">
                <p className="w-full px-3 border-b-[1px] border-dashed text-xs">
                  ふりがな
                </p>
                <div className="flex pt-1 pb-4 px-3 h-20">
                  <p className="text-xs">
                    現在住所
                    <img
                      className="float-right w-2 mt-0.5"
                      src={post}
                      alt="postnumber symbol"
                    />
                  </p>
                  <p className="text-xs pl-16">（現住所以外に連絡を希望する場合のみ記入）</p>
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
                  <p className="px-2 text-xs pb-[2.125rem]">
                    電子メール・E-mail
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End of Contact Address Section */}
        </div>
      </section>
    </>
  );
};

export default ResumePage1;
