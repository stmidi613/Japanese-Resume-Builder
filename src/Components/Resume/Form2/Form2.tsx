import React from "react";
import NextButton from "../../Buttons/NextButton";
import SmallCircleButton from "../../Buttons/SmallCircleButton";
import TextInput from "../ResumeForms/Form1/TextInput";
import InputTitle from "../ResumeForms/InputTitle";
import StartEndDate from "./StartEndDate";

const Form2: React.FC = () => {
  return (
    <>
      <form className="form md:grid-cols-2 md:grid-rows-7">
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <InputTitle fieldName="Educational Background" />
          <div className="input-div">
            <TextInput place="Name of School" change={""} />
            <TextInput place="Type of Degree/Certificate/Diploma" change={""} />
            <div className="flex justify-between">
              <StartEndDate label="Start Date:" />
              <StartEndDate label="End Date:" />
            </div>
          </div>
          <SmallCircleButton />
        </section>
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <InputTitle fieldName="Work History" />
          <div className="input-div">
            <TextInput place="Name of Place of Work" change={""} />
            <TextInput place="Position" change={""} />
            <div className="flex justify-between">
              <StartEndDate label="Start Date:" />
              <StartEndDate label="End Date:" />
            </div>
          </div>
          <SmallCircleButton />
        </section>
        <NextButton />
      </form>
    </>
  );
};

export default Form2;
