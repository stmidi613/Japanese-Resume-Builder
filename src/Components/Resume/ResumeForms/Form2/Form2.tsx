import React, { useContext, useState } from "react";
import TextInput from "../Form1/TextInput";
import InputTitle from "../InputTitle";
import StartEndDate from "./StartEndDate";
import NextButton from "../../../Buttons/NextButton";
import BackButton from "../../../Buttons/BackButton";
import SmallCircleButton from "../../../Buttons/SmallCircleButton";
import { ReducerContext } from "../../ResumeState/ResumeState";

import { EducHistory } from "./Form2Models";
import EducationList from "./EducationList";
import SingleEducationItem from "./SingleEducationItem";

const Form2: React.FC = () => {
  const [education, setEducation] = useState<EducHistory[]>([]);

  const onSubmitHandler = (e: any) => {
    e.preventDefault();
  };

  const {
    schoolName,
    department,
    major,
    educStartDate,
    educEndDate,
    companyName,
    startWork,
    explanation,
    workEndDate,
    workStartDate,
    setSchoolName,
    setDepartment,
    setMajor,
    setEducStartDate,
    setEducEndDate,
    setCompanyName,
    setStartWork,
    setExplanation,
    setWorkStartDate,
    setWorkEndDate,
  } = useContext(ReducerContext);

  const educHandleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (schoolName) {
      setEducation([...education, { educId: String(Date.now()), schoolName, department, major, educStartDate, educEndDate }]);
      setEducation([]);
    }
  }

  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className="form md:grid-cols-2 md:grid-rows-7"
      >
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <InputTitle fieldName="Educational Background" />
          <div className="input-div">
            <TextInput place="Name of School" value={schoolName} change={setSchoolName} />
            <TextInput place="Department" value={department} change={setDepartment} />
            <TextInput place="Major" value={major} change={setMajor} />
            <div className="flex justify-between">
              <StartEndDate label="Start Date:" value={educStartDate} change={setEducStartDate} />
              <StartEndDate label="End Date:" value={educEndDate} change={setEducEndDate} />
            </div>
          </div>
          {/* <SmallCircleButton handleAdd={educHandleAdd} /> */}
          <EducationList handleAdd={educHandleAdd} />
        </section>
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <InputTitle fieldName="Work History" />
          <div className="input-div">
            <TextInput value={companyName} place="Name of Place of Work" change={setCompanyName} />
            <TextInput value={startWork} place="Explanation for Starting" change={setStartWork} />
            <TextInput value={explanation}
              place="Explanation for Leaving"
              change={setExplanation}
            />
            <div className="flex justify-between">
              <StartEndDate value={workStartDate} label="Start Date:" change={setWorkStartDate} />
              <StartEndDate value={workEndDate} label="End Date:" change={setWorkEndDate} />
            </div>
          </div>
          <SmallCircleButton handleAdd={educHandleAdd} />
        </section>
        <NextButton />
        <BackButton />
      </form>
    </>
  );
};

export default Form2;
