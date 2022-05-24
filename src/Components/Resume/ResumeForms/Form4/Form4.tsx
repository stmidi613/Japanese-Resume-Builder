import React from "react";
import InputTitle from "../InputTitle";

import NextButton from "../../../Buttons/NextButton";
import BackButton from "../../../Buttons/BackButton";

const Form4: React.FC = () => {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="lg:w-1/2" onSubmit={onSubmitHandler}>
        <section className="section">
          <div className="input-div grid place-content-center">
          <InputTitle fieldName="Appeal Points" />
            <textarea
              className="text-area"
              name="appeal"
              placeholder="Tell the reader about your hopes, special skills, interests, etc..."
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
              />
              <label className="grid place-content-center" htmlFor="hours">Hours</label>
            </div>
            <div className="time-div">
              <input
                className="drop-down shadow-lg"
                name="minutes"
                type="number"
                min="1"
                max="59"
              />
              <label className="grid place-content-center" htmlFor="minutes">Minute</label>
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
              min="1"
              max="10"
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
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
            <div className="family-drop-down-div">
              <label htmlFor="spouseDep">Spouse's Dependents</label>
              <select
                className="drop-down flex md:float-left shadow-lg"
                name="spouseDep"
              >
                <option value=""></option>
                <option value="no">No</option>
                <option value="yes">Yes</option>
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
