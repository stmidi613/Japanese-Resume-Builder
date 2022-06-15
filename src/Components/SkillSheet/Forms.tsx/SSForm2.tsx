import React from "react";

import TextInput from "../../Resume/ResumeForms/Form1/TextInput";
import InputTitle from "../../Resume/ResumeForms/InputTitle";
import StartEndDate from "../../Resume/ResumeForms/Form2/StartEndDate";

import NextButton from "../../Buttons/NextButton";
import BackButton from "../../Buttons/BackButton";

const SSForm2: React.FC = () => {
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
              <TextInput value="" place="Work Place" change={() => {}} />
            </div>
            <InputTitle fieldName="Project Name" />
            <div className="input-div">
              <TextInput value="" place="Project Name" change={() => {}} />
            </div>
            <div className="flex justify-between">
              <StartEndDate label="Start Date:" change={() => {}} />
              <StartEndDate label="End Date:" change={() => {}} />
            </div>
            <InputTitle fieldName="Overview" />
            <div className="input-div">
              <textarea
                className="bg-lightgray mb-4"
                cols={5}
                rows={5}
                name="Overview"
                maxLength={300}
                placeholder=""
                onChange={() => {}}
              />
            </div>
            <InputTitle fieldName="Points" />
            <div className="input-div">
              <textarea
                className="bg-lightgray mb-4"
                cols={5}
                rows={5}
                name="Points"
                maxLength={300}
                placeholder=""
                onChange={() => {}}
              />
            </div>
          </section>
          <section className="section">
            <InputTitle fieldName="Language/Environment" />
            <div className="input-div">
              <TextInput
                value=""
                place="Language/Environment"
                change={() => {}}
              />
            </div>
            <InputTitle fieldName="Role/Position" />
            <div className="input-div">
              <TextInput value="" place="Role/Position" change={() => {}} />
            </div>
            <InputTitle fieldName="Scale/Number of Workers" />
            <div className="input-div">
              <TextInput
                value=""
                place="Scale/Number of Workers"
                change={() => {}}
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
                  <option onClick={() => {}} value="no">
                    No
                  </option>
                  <option onClick={() => {}} value="yes">
                    Yes
                  </option>
                </select>
              </div>
              <div className="family-drop-down-div w-1/2">
                <label htmlFor="basicDesign">Basic Design</label>
                <select className="drop-down flex shadow-lg" name="basicDesign">
                  <option value=""></option>
                  <option onClick={() => {}} value="no">
                    No
                  </option>
                  <option onClick={() => {}} value="yes">
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
                  <option onClick={() => {}} value="no">
                    No
                  </option>
                  <option onClick={() => {}} value="yes">
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
                  <option onClick={() => {}} value="no">
                    No
                  </option>
                  <option onClick={() => {}} value="yes">
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
                  <option onClick={() => {}} value="no">
                    No
                  </option>
                  <option onClick={() => {}} value="yes">
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
                  <option onClick={() => {}} value="no">
                    No
                  </option>
                  <option onClick={() => {}} value="yes">
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
                  <option onClick={() => {}} value="no">
                    No
                  </option>
                  <option onClick={() => {}} value="yes">
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
