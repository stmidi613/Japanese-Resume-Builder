import React, { useContext } from "react";

import InputTitle from "../InputTitle";

import NextButton from "../../../Buttons/NextButton";
import BackButton from "../../../Buttons/BackButton";

import { Form4To5Context } from "../../ResumeState/Form4To5State";

const Form4: React.FC = () => {
  const {
    setAppealPoints,
    setTravelHours,
    setTravelMinutes,
    setDependents,
    setSpouseTrue,
    setSpouseFalse,
    setSpouseDependentsTrue,
    setSpouseDependentsFalse,
  } = useContext(Form4To5Context);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="w-full xl:w-1/2" onSubmit={onSubmitHandler}>
        <section className="section w-full">
          <div className="input-div grid place-content-center">
            <InputTitle fieldName="Appeal Points" />
            <textarea
              className="text-area"
              name="appeal"
              maxLength={450}
              placeholder="Tell the reader about your hopes, special skills, interests, etc..."
              onChange={(e) => setAppealPoints(e.target.value)}
            />
          </div>
        </section>
        <section className="section">
          <InputTitle fieldName="Travel Time" />
          <div className="select-drop-down-div">
            <div className="time-div">
              <input
                className="drop-down shadow-lg"
                name="hours"
                type="number"
                min="1"
                max="10"
                onChange={(e) => setTravelHours(e.target.value)}
              />
              <label className="grid place-content-center" htmlFor="hours">
                Hours
              </label>
            </div>
            <div className="time-div">
              <input
                className="drop-down shadow-lg"
                name="minutes"
                type="number"
                min="0"
                max="59"
                onChange={(e) => setTravelMinutes(e.target.value.length < 2 ? "0" + e.target.value : e.target.value)}
              />
              <label className="grid place-content-center" htmlFor="minutes">
                Minute
              </label>
            </div>
          </div>
        </section>
        <section className="section">
          <InputTitle fieldName="Family" />
          <div className="family-drop-down-div">
            <label htmlFor="hours">Dependents (Not including Spouse)</label>
            <input
              className="drop-down flex md:float-left shadow-lg"
              name="hours"
              type="number"
              min="0"
              max="10"
              onChange={(e) => setDependents(e.target.value)}
            />
          </div>
          <div className="md:flex gap-10 w-full">
            <div className="family-drop-down-div">
              <label htmlFor="spouse">Spouse</label>
              <select
                className="drop-down flex md:float-left shadow-lg"
                name="spouse"
              >
                <option value=""></option>
                <option onClick={setSpouseFalse} value="no">No</option>
                <option onClick={setSpouseTrue} value="yes">Yes</option>
              </select>
            </div>
            <div className="family-drop-down-div">
              <label htmlFor="spouseDep">Spouse's Dependents</label>
              <select
                className="drop-down flex md:float-left shadow-lg"
                name="spouseDep"
              >
                <option value=""></option>
                <option onClick={setSpouseDependentsFalse} value="no">No</option>
                <option onClick={setSpouseDependentsTrue} value="yes">Yes</option>
              </select>
            </div>
          </div>
        </section>
        <NextButton />
        <BackButton />
      </form>
    </>
  );
};

export default Form4;
