import React, { useContext } from "react";

import InputTitle from "../InputTitle";

import NextButton from "../../../Buttons/NextButton";
import BackButton from "../../../Buttons/BackButton";

import { Form4To5Context } from "../../ResumeState/Form4To5State";


const Form5: React.FC = () => {
  const {setAdditionalInfo} = useContext(Form4To5Context);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="w-full xl:w-1/2" onSubmit={onSubmitHandler}>
        <section className="section">
          <div className="input-div grid place-content-center">
            <InputTitle fieldName="Additional Information" />
            <textarea
              className="text-area"
              name="information"
              maxLength={1000}
              placeholder="Tell the reader about any other details you want them to know such as desired salary, type of work, travel distance, work location, and any other requests etc..."
              onChange={(e) => setAdditionalInfo(e.target.value)}
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
