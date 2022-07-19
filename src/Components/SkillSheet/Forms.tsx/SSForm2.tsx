import React, { useContext } from "react";

import NameInput from "../../Resume/ResumeForms/Form1/NameInput";
import TextInput from "../../Resume/ResumeForms/Form1/TextInput";
import InputTitle from "../../Resume/ResumeForms/InputTitle";
import ProjStartEndDate from "./Form2Components/ProjStartEndDate";

import NextButton from "../../Buttons/NextButton";
import BackButton from "../../Buttons/BackButton";
import SmallCircleButton from "../../Buttons/SmallCircleButton";

import ProjectList from "./Form2Components/ProjectList";
import LanguageList from "./Form2Components/LanguageList";

import { ProjectsContext } from "../SkillSheetState/SSForm2State";
import SingleLanguageList from "./Form2Components/SingleLanguageList";

const SSForm2: React.FC = () => {
  const {
    workPlace,
    projName,
    language,
    languages,
    position,
    numberOfPers,
    scale,
    overview,
    points,
    requirements,
    basicDesign,
    detailedDesign,
    implementation,
    simpleTest,
    conclusionTest,
    maintenance,
    Projects,
    ProjLanguages,
    setWorkPlace,
    setProjName,
    setProjStart,
    setProjEnd,
    setOverview,
    setPoints,
    setLanguage,
    setLanguages,
    setPosition,
    setNumberOfPers,
    setScale,
    setRequirements,
    setNoRequirements,
    setBasicDesign,
    setNoBasicDesign,
    setDetailedDesign,
    setNoDetailedDesign,
    setImplementation,
    setNoImplementation,
    setSimpleTest,
    setNoSimpleTest,
    setConclusionTest,
    setNoConclusionTest,
    setMaintenance,
    setNoMaintenance,
    setProjects,
    setProjLanguages,
    setProjLanguagesClear,
    setProjectsClear,
    setLanguagesClear,
  } = useContext(ProjectsContext);

  const onProjectAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (projName) {
      setProjects(() => {});
      setProjectsClear();
      setProjLanguagesClear(() => {});
    }
  };

  const onProjLanguagesClear = (e: React.FormEvent) => {
    e.preventDefault();
    if (languages) {
      setProjLanguagesClear(() => {});
    }
  };

  const onLanguageListAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setProjLanguages(() => {});
  };

  const onLanguageAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (language) {
      setLanguages(() => {});
      setLanguagesClear();
    }
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onProjectAdd(e);
  };

  return (
    <>
      <form id="form" onSubmit={onSubmitHandler} className="w-full mb-7 h-fit">
        <div className="w-full md:flex flex-wrap justify-around grid">
          <section className="section mx-5">
            <InputTitle fieldName="Work Place" />
            <div className="input-div">
              <TextInput
                max={40}
                value={workPlace}
                place="Work Place"
                change={setWorkPlace}
              />
            </div>
            <InputTitle fieldName="Project Name (Required)" />
            <div className="input-div">
              <NameInput
                max={25}
                value={projName}
                place="Project Name"
                change={setProjName}
              />
            </div>
            <div className="flex justify-between">
              <ProjStartEndDate label="Start Date:" change={setProjStart} />
              <ProjStartEndDate label="End Date:" change={setProjEnd} />
            </div>
            <InputTitle fieldName="Overview" />
            <div className="input-div">
              <textarea
                className="bg-lightgray mb-4"
                cols={5}
                rows={5}
                name="Overview"
                value={overview}
                maxLength={100}
                placeholder="Overview of the Project"
                onChange={setOverview}
              />
            </div>
            <InputTitle fieldName="Points" />
            <div className="input-div">
              <textarea
                className="bg-lightgray mb-4"
                cols={5}
                rows={5}
                name="Points you wanted to make"
                value={points}
                maxLength={100}
                placeholder="Points you wanted to make"
                onChange={setPoints}
              />
            </div>
          </section>
          <section className="section mx-5">
            <InputTitle fieldName="Language/Environment" />
            <div className="input-div">
              <TextInput
                max={1000}
                value={language}
                place="Language/Environment"
                change={setLanguage}
              />
              <p className="text-red-500 pb-3">
                Must click the "Create List" button after all items are added!
              </p>
            </div>
            <div className="flex justify-between">
              <button
                className="p-1 button button-animation"
                onClick={onLanguageListAdd}
              >
                Create List
              </button>
              <button
                className="p-1 button button-animation"
                onClick={onProjLanguagesClear}
              >
                Reset List
              </button>
              <button
                className="circle-button button-animation"
                onClick={onLanguageAdd}
              >
                +
              </button>
            </div>
            <span className="text-purple text-xl mt-8">
              Languages to be listed in Project:
              {ProjLanguages.map((language) => (
                <SingleLanguageList
                  key={language.PLid}
                  language={language.languages}
                />
              ))}
            </span>
            <LanguageList Languages={languages} />
          </section>
          <section className="section mx-5">
            <InputTitle fieldName="Role/Position" />
            <div className="input-div">
              <TextInput
                max={23}
                value={position}
                place="Role/Position"
                change={setPosition}
              />
            </div>
            <InputTitle fieldName="Scale/Number of Personnel" />
            <div className="family-drop-down-div">
              <label htmlFor="Number of Personnel">Number of Personnel</label>
              <input
                className="drop-down flex md:float-left shadow-lg"
                name="Number of Personnel"
                type="number"
                min="0"
                max="1000"
                value={numberOfPers}
                onChange={setNumberOfPers}
              />
            </div>
            <div className="family-drop-down-div">
              <label htmlFor="scale">Scale</label>
              <input
                className="drop-down flex md:float-left shadow-lg"
                name="scale"
                type="number"
                min="0"
                max="1000"
                value={scale}
                onChange={setScale}
              />
            </div>
            <InputTitle fieldName="Processes Followed" />
            {/* First drop downs */}
            <div className="flex w-full">
              <div className="family-drop-down-div w-1/2">
                <label htmlFor="requirements">Requirements</label>
                <select
                  onChange={!requirements ? setRequirements : setNoRequirements}
                  className="drop-down flex shadow-lg"
                  name="requirements"
                >
                  <option onClick={setNoRequirements} value="no">
                    No
                  </option>
                  <option onClick={setRequirements} value="yes">
                    Yes
                  </option>
                </select>
              </div>
              <div className="family-drop-down-div w-1/2">
                <label htmlFor="basicDesign">Basic Design</label>
                <select
                  onChange={!basicDesign ? setBasicDesign : setNoBasicDesign}
                  className="drop-down flex shadow-lg"
                  name="basicDesign"
                >
                  <option onClick={setNoBasicDesign} value="no">
                    No
                  </option>
                  <option onClick={setBasicDesign} value="yes">
                    Yes
                  </option>
                </select>
              </div>
            </div>
            {/* First drop downs */}
            {/* Second drop downs */}
            <div className="flex w-full">
              <div className="family-drop-down-div w-1/2">
                <label
                  onChange={
                    !detailedDesign ? setDetailedDesign : setNoDetailedDesign
                  }
                  htmlFor="detailedDesign"
                >
                  Detailed Design
                </label>
                <select
                  onChange={
                    !detailedDesign ? setDetailedDesign : setNoDetailedDesign
                  }
                  className="drop-down flex shadow-lg"
                  name="detailedDesign"
                >
                  <option
                    onClick={setNoDetailedDesign}
                    value="no"
                    defaultChecked
                  >
                    No
                  </option>
                  <option onClick={setDetailedDesign} value="yes">
                    Yes
                  </option>
                </select>
              </div>
              <div className="family-drop-down-div w-1/2">
                <label htmlFor="implementation">Implementation</label>
                <select
                  onChange={
                    !implementation ? setImplementation : setNoImplementation
                  }
                  className="drop-down flex shadow-lg"
                  name="implementation"
                >
                  <option onClick={setNoImplementation} value="no">
                    No
                  </option>
                  <option onClick={setImplementation} value="yes">
                    Yes
                  </option>
                </select>
              </div>
            </div>
            {/* Second drop downs */}
            {/* Third drop downs */}
            <div className="flex w-full">
              <div className="family-drop-down-div w-1/2">
                <label htmlFor="simpleTest">Simple Test</label>
                <select
                  onChange={!simpleTest ? setSimpleTest : setNoSimpleTest}
                  className="drop-down flex shadow-lg"
                  name="simpleTest"
                >
                  <option onClick={setNoSimpleTest} value="no">
                    No
                  </option>
                  <option onClick={setSimpleTest} value="yes">
                    Yes
                  </option>
                </select>
              </div>
              <div className="family-drop-down-div">
                <label htmlFor="conclusionTest">Conclusion Test</label>
                <select
                  onChange={
                    !conclusionTest ? setConclusionTest : setNoConclusionTest
                  }
                  className="drop-down flex shadow-lg w-1/2"
                  name="conclusionTest"
                >
                  <option onClick={setNoConclusionTest} value="no">
                    No
                  </option>
                  <option onClick={setConclusionTest} value="yes">
                    Yes
                  </option>
                </select>
              </div>
            </div>
            {/* Third drop downs */}
            {/* Last drop down */}
            <div className="flex w-full">
              <div className="family-drop-down-div">
                <label htmlFor="maintenanceOperation">
                  Maintenance Operation
                </label>
                <select
                  onChange={!maintenance ? setMaintenance : setNoMaintenance}
                  className="drop-down flex shadow-lg"
                  name="maintenanceOperation"
                >
                  <option onClick={setNoMaintenance} value="no">
                    No
                  </option>
                  <option onClick={setMaintenance} value="yes">
                    Yes
                  </option>
                </select>
              </div>
            </div>
            {/* Last drop down */}
          </section>
        </div>
          <section className="section mx-5">
            <ProjectList Projects={Projects} />
            <SmallCircleButton />
          </section>
        <NextButton />
        <BackButton />
      </form>
    </>
  );
};

export default SSForm2;
