import React, { useContext } from "react";

import InputTitle from "../InputTitle";
import F2TextInput from "../Form2/F2TextInput";
import StartEndDate from "../Form2/StartEndDate";
import CertList from "./CertList";

import BackButton from "../../../Buttons/BackButton";
import NextButton from "../../../Buttons/NextButton";
import SmallCircleButton from "../../../Buttons/SmallCircleButton";

import { Form3Context } from "../../ResumeState/Form3State";

const Form3: React.FC = () => {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    handleCertAdd(e);
  };

  const {
    certName,
    setCertName,
    setCertStartDate,
    setCertEndDate,
    certHist,
    setCertHist,
  } = useContext(Form3Context);

  const handleCertAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (certName) {
      setCertHist(() => {});
      setCertName("");
      setCertStartDate("");
      setCertEndDate("");
    }
  };


  return (
    <>
      <form className="w-1/2" onSubmit={onSubmitHandler}>
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <InputTitle fieldName="Certifications and Licenses" />
          <div className="input-div">
            <F2TextInput
              place="Certification or License Name"
              value={certName}
              change={setCertName}
            />
            <F2TextInput
              place="List of Suggestions"
              value={certName}
              change={setCertName}
            />
            <div className="flex justify-between">
              <StartEndDate
                label="Validation Date:"
                change={setCertStartDate}
              />
              <StartEndDate label="Expiration Date:" change={setCertEndDate} />
            </div>
          </div>
          <SmallCircleButton />
          <CertList certHist={certHist} />
        </section>
        <NextButton />
        <BackButton />
      </form>
    </>
  );
};

export default Form3;
