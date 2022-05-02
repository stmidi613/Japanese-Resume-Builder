import React, { useContext } from "react";
import NextButton from "../../../Buttons/NextButton";
import SmallCircleButton from "../../../Buttons/SmallCircleButton";
import { ReducerContext } from "../../ResumeState/ResumeState";
import TextInput from "../Form1/TextInput";
import InputTitle from "../InputTitle";
import StartEndDate from "./StartEndDate";

const Form2: React.FC = () => {
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
  };

  const {
    setSchoolName,
    setDegree,
    setEducStartDate,
    setEducEndDate,
    setCompanyName,
    setPosition,
    setWorkStartDate,
    setWorkEndDate,
  } = useContext(ReducerContext);

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="form md:grid-cols-2 md:grid-rows-7"
      >
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <InputTitle fieldName="Educational Background" />
          <div className="input-div">
            <TextInput place="Name of School" change={setSchoolName} />
            <TextInput place="Type of Degree/Certificate/Diploma" change={setDegree} />
            <div className="flex justify-between">
              <StartEndDate label="Start Date:" change={setEducStartDate} />
              <StartEndDate label="End Date:" change={setEducEndDate} />
            </div>
          </div>
          <SmallCircleButton />
        </section>
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <InputTitle fieldName="Work History" />
          <div className="input-div">
            <TextInput place="Name of Place of Work" change={setCompanyName} />
            <TextInput place="Position" change={setPosition} />
            <div className="flex justify-between">
              <StartEndDate label="Start Date:" change={setWorkStartDate} />
              <StartEndDate label="End Date:" change={setWorkEndDate} />
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
