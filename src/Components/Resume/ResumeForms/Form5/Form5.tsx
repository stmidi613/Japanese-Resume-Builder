import React from "react";
import InputTitle from "../InputTitle";

import NextButton from "../../../Buttons/NextButton";
import BackButton from "../../../Buttons/BackButton";


const Form5: React.FC = () => {
  
    const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="lg:w-1/2" onSubmit={onSubmitHandler}>
        <section className="section">
          <div className="input-div grid place-content-center">
            <InputTitle fieldName="Additional Information" />
            <textarea
              className="text-area"
              name="appeal"
              placeholder="Tell the reader about any other details you want them to know such as desired salary, type of work, travel distance, work location, and any other requests etc..."
            />
          </div>
        </section>
        <NextButton />
        <BackButton />
      </form>
    </>
  );
};

export default Form5;
