import React, { useContext } from "react";

import JobSummary from "./JobSummary";
import Project from "./Project";
import PR from "./PR";

import { ProjectsContext } from "../SkillSheetState/SSForm2State";

import "../../SkillSheet/skillsheet.css";

const SkillSheetPage: React.FC = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const date = d.getDate();

  const { Projects } = useContext(ProjectsContext);

  return (
    <>
      <section
        id="skillsheet-page-1-bg"
        className={`hidden md:block xl:w-2/3 w-full h-full pb-3 bg-gray bg-opacity-30`}
      >
        <p
          id="warning-text"
          className="grid place-content-center py-3 text-purple"
        >
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
            {Projects.map((item) => (
              <Project
                key={item.id}
                workPlace={item.workPlace}
                projName={item.projName}
                projStart={item.projStart}
                projEnd={item.projEnd}
                overview={item.overview}
                points={item.points}
                language={item.language}
                position={item.position}
                scale={item.scale}
                requirements={item.requirements}
                basicDesign={item.basicDesign}
                detailedDesign={item.detailedDesign}
                implementation={item.implementation}
                simpleTest={item.simpleTest}
                conclusionTest={item.conclusionTest}
                maintenance={item.maintenance}
              />
            ))}
            {Projects.length === 0 ? (
              <Project
                workPlace=""
                projName=""
                projStart=""
                projEnd=""
                overview=""
                points=""
                language=""
                position=""
                scale=""
                requirements={false}
                basicDesign={false}
                detailedDesign={false}
                implementation={false}
                simpleTest={false}
                conclusionTest={false}
                maintenance={false}
              />
            ) : (
              ""
            )}
            {Projects.length < 2 ? (
              <Project
                workPlace=""
                projName=""
                projStart=""
                projEnd=""
                overview=""
                points=""
                language=""
                position=""
                scale=""
                requirements={false}
                basicDesign={false}
                detailedDesign={false}
                implementation={false}
                simpleTest={false}
                conclusionTest={false}
                maintenance={false}
              />
            ) : (
              ""
            )}
            <PR />
          </section>
        </div>
      </section>
    </>
  );
};

export default SkillSheetPage;
