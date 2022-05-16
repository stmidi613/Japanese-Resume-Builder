import React, { useContext } from "react";

import InputTitle from "../InputTitle";
import F2TextInput from "./F2TextInput";
import StartEndDate from "./StartEndDate";
import EducationList from "./EducationList";
import WorkList from "./WorkList";

import SmallCircleButton from "../../../Buttons/SmallCircleButton";
import NextButton from "../../../Buttons/NextButton";
import BackButton from "../../../Buttons/BackButton";

import { Form2Context } from "../../ResumeState/Form2State";

const Form2: React.FC = () => {
  const {
    //Education
    setEducStartDate,
    setEducEndDate,
    major,
    setMajor,
    result,
    setResult,
    department,
    setDepartment,
    schoolName,
    setSchoolName,
    educHist,
    setEducHist,
    //Work
    companyName,
    setCompanyName,
    startExpl,
    setStartExpl,
    endExpl,
    setEndExpl,
    setWorkStartDate,
    setWorkEndDate,
    workHist,
    setWorkHist,
  } = useContext(Form2Context);

  const handleEducAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (schoolName) {
      setEducHist(() => {});
      setSchoolName("");
      setDepartment("");
      setMajor("");
      setResult("");
      setEducStartDate("");
      setEducEndDate("");
    }
  };

  const handleWorkAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (companyName) {
      setWorkHist(() => {});
      setCompanyName("");
      setStartExpl("");
      setEndExpl("");
      setWorkStartDate("");
      setWorkEndDate("");
    }
  };

  const onEducSubmitHandler = (e: any) => {
    e.preventDefault();
    handleEducAdd(e);
  };

  const onWorkSubmitHandler = (e: any) => {
    e.preventDefault();
    handleWorkAdd(e);
  };

  return (
    <>
      <div className="w-1/2 grid place-content-center">
        <form onSubmit={onEducSubmitHandler}>
          <section className="section md:order-1 md:row-span-2 md:row-start-1">
            <InputTitle fieldName="Educational Background" />
            <div className="input-div">
              <F2TextInput
                place="Name of School"
                value={schoolName}
                change={setSchoolName}
              />
              <F2TextInput
                place="Department"
                value={department}
                change={setDepartment}
              />
              <F2TextInput place="Major" value={major} change={setMajor} />
              <F2TextInput place="Result" value={result} change={setResult} />
              <div className="flex justify-between">
                <StartEndDate label="Start Date:" change={setEducStartDate} />
                <StartEndDate label="End Date:" change={setEducEndDate} />
              </div>
            </div>
            <SmallCircleButton />
            <EducationList educHist={educHist} />
          </section>
        </form>

        <form onSubmit={onWorkSubmitHandler}>
          <section className="section md:order-1 md:row-span-2 md:row-start-1">
            <InputTitle fieldName="Work History" />
            <div className="input-div">
              <F2TextInput
                place="Name of Company"
                value={companyName}
                change={setCompanyName}
              />
              <F2TextInput
                place="Explanation for Starting Work"
                value={startExpl}
                change={setStartExpl}
              />
              <F2TextInput
                place="Explanation for Leaving"
                value={endExpl}
                change={setEndExpl}
              />
              <div className="flex justify-between">
                <StartEndDate label="Start Date:" change={setWorkStartDate} />
                <StartEndDate label="End Date:" change={setWorkEndDate} />
              </div>
            </div>
            <SmallCircleButton />
            <WorkList workHist={workHist} />
          </section>
        <NextButton />
        <BackButton />
        </form>
      </div>
    </>
  );
};

export default Form2;
