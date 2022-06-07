import React from "react";

import ResumeHeader from "../Resume/ResumeHeader/ResumeHeader";

import "../Resume/resume.css";

const SkillSheet: React.FC = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();

  return (
    <>
      <ResumeHeader />
      <section
        className={`pb-3 hidden xl:w-2/3 w-full bg-gray bg-opacity-30 md:block h-full`}
      >
        <p className="text-purple grid pt-3 place-content-center">
          Skill Sheet Will Appear Differently When Printed
        </p>
        {/* This is the page containter div */}
        <div className="page-div drop-shadow-lg">
          {/* This is the Title Section */}
          <section className="grid w-full pt-10 px-5">
            <p className="flex justify-end w-full">
              作成日 令和　{year - 2018}年{month}月{date}日
            </p>
            <p className="flex justify-center w-full">スキルツート</p>
          </section>
          {/* Job Summary Section */}
          <section className="page-div">
            <table className="grid grid-flow-col grid-cols-12 w-full border-[1px] border-b-[0px]">
              <tr className="bg-skillsheetgray grid col-span-2 text-sm border-r-[1px]">
                <td className="grid place-content-center p-1 border-b-[1px]">ふりがな</td>
                <td className="grid place-content-center p-1 border-b-[1px]">氏名</td>
                <td className="grid place-content-center p-1 border-b-[1px]">事務要約</td>
                <td className="grid place-content-center p-1 border-b-[1px]">活かせる経験・知識</td>
              </tr>
              <tr className="grid col-span-6">
                <td className="grid place-content-center p-1 border-b-[1px]"></td>
                <td className="grid place-content-center p-1 border-b-[1px]"></td>
                <td className="grid place-content-center p-1 border-b-[1px]"></td>
                <td className="grid place-content-center p-1 border-b-[1px]"></td>
              </tr>
              <tr className="bg-skillsheetgray grid col-span-2 border-x-[1px]">
                <td className="grid place-content-center p-1 border-b-[1px]">保有技術</td>
                <td className="grid place-content-center p-1 border-b-[1px]">その他</td>
              </tr>
              <tr className="grid col-span-2">
                <td className="grid place-content-center p-1 border-b-[1px]"></td>
                <td className="grid place-content-center p-1 border-b-[1px]"></td>
              </tr>
            </table>
          </section>
        </div>
      </section>
    </>
  );
};

export default SkillSheet;
