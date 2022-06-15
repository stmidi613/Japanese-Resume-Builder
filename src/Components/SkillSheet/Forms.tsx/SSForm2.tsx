import React, { useContext } from "react";

import TextInput from "../../Resume/ResumeForms/Form1/TextInput";
import InputTitle from "../../Resume/ResumeForms/InputTitle";
import StartEndDate from "../../Resume/ResumeForms/Form2/StartEndDate";

import NextButton from "../../Buttons/NextButton";
import BackButton from "../../Buttons/BackButton";

import { ProjectsContext } from "../SkillSheetState/SSForm2State";

const SSForm2: React.FC = () => {
  const {
    workPlace,
    projName,
    projStart,
    projEnd,
    language,
    position,
    scale,
    setWorkPlace,
    setProjName,
    setProjStart,
    setProjEnd,
    setOverview,
    setPoints,
    setLanguage,
    setPosition,
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
  } = useContext(ProjectsContext);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="w-full mb-7 xl:w-1/3 h-fit">
        <div className="xl:grid md:flex md:justify-evenly grid">
          <section className="section">
            <InputTitle fieldName="Work Place" />
            <div className="input-div">
              <TextInput
                value={workPlace}
                place="Work Place"
                change={setWorkPlace}
              />
            </div>
            <InputTitle fieldName="Project Name" />
            <div className="input-div">
              <TextInput value={projName} place="Project Name" change={setProjName} />
            </div>
            <div className="flex justify-between">
              <StartEndDate label="Start Date:" change={setProjStart} />
              <StartEndDate label="End Date:" change={setProjEnd} />
            </div>
            <InputTitle fieldName="Overview" />
            <div className="input-div">
              <textarea
                className="bg-lightgray mb-4"
                cols={5}
                rows={5}
                name="Overview"
                maxLength={300}
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
                maxLength={300}
                placeholder=""
                onChange={setPoints}
              />
            </div>
          </section>
          <section className="section">
            <InputTitle fieldName="Language/Environment" />
            <div className="input-div">
              <TextInput
                value={language}
                place="Language/Environment"
                change={setLanguage}
              />
            </div>
            <InputTitle fieldName="Role/Position" />
            <div className="input-div">
              <TextInput value={position} place="Role/Position" change={setPosition} />
            </div>
            <InputTitle fieldName="Scale/Number of Workers" />
            <div className="input-div">
              <TextInput
                value={scale}
                place="Scale/Number of Workers"
                change={setScale}
              />
            </div>
            <InputTitle fieldName="Processes Followed" />
            {/* First drop downs */}
            <div className="flex w-full">
              <div className="family-drop-down-div w-1/2">
                <label htmlFor="requirements">Requirements</label>
                <select
                  className="drop-down flex shadow-lg"
                  name="requirements"
                >
                  <option value=""></option>
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
                <select className="drop-down flex shadow-lg" name="basicDesign">
                  <option value=""></option>
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
                <label htmlFor="detailedDesign">Detailed Design</label>
                <select
                  className="drop-down flex shadow-lg"
                  name="detailedDesign"
                >
                  <option value=""></option>
                  <option onClick={setNoDetailedDesign} value="no">
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
                  className="drop-down flex shadow-lg"
                  name="implementation"
                >
                  <option value=""></option>
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
                <select className="drop-down flex shadow-lg" name="simpleTest">
                  <option value=""></option>
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
                  className="drop-down flex shadow-lg w-1/2"
                  name="conclusionTest"
                >
                  <option value=""></option>
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
                  className="drop-down flex shadow-lg"
                  name="maintenanceOperation"
                >
                  <option value=""></option>
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
        <NextButton />
        <BackButton />
      </form>
    </>
  );
};

export default SSForm2;
