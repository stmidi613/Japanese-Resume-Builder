import React from "react";

import JobSummary from "./JobSummary";
import Projects from "./Projects";
import PR from "./PR";

import "../../SkillSheet/skillsheet.css";

const SkillSheetPage: React.FC = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();

  return (
    <>
      <section id="skillsheet-page-1-bg"
        className={`hidden md:block xl:w-2/3 w-full h-full pb-3 bg-gray bg-opacity-30`}
      >
        <p id="warning-text" className="grid place-content-center py-3 text-purple">
          Skill Sheet Will Appear Differently When Printed
        </p>
        {/* This is the page containter div */}
        <div id="skillsheet-page-1" className="page-section drop-shadow-lg">
          {/* Start Title Section */}
          <section className="grid w-full pt-5 px-5">
            <p className="flex justify-end w-full">
              作成日 令和　{year - 2018}年{month}月{date}日
            </p>
            <p className="flex justify-center w-full">スキルツート</p>
          </section>
          {/* End of Title Section */}
          <section className="page-section">
           <JobSummary />
            <Projects />
            <Projects />
            <PR />
          </section>
        </div>
      </section>
    </>
  );
};

export default SkillSheetPage;
