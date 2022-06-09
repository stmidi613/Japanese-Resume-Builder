import React from "react";

import InputTitle from "../../Resume/ResumeForms/InputTitle";
import NameInput from "../../Resume/ResumeForms/Form1/NameInput";
import TextInput from "../../Resume/ResumeForms/Form1/TextInput";
import NextButton from "../../Buttons/NextButton";

const SSForm1: React.FC = () => {
  return (
    <>
      <form className="w-full mb-5 xl:w-1/3 h-fit">
        <section className="section">
          <InputTitle fieldName="Company Name (Furigana)" />
          <div className="input-div">
            <NameInput
              value=""
              place="Company Name Furigana"
              change={() => {}}
            />
            <TextInput value="" place="Name" change={() => {}} />
          </div>
          <InputTitle fieldName="Work Summary" />
          <div className="input-div">
            <textarea
              className="bg-lightgray mb-2"
              cols={5}
              rows={5}
              name="Work Summary"
              maxLength={300}
              placeholder=""
              onChange={() => {}}
            />
          </div>
          <InputTitle fieldName="Knowledge and Experience" />
          <div className="input-div">
            <textarea
              className="bg-lightgray mb-2"
              cols={5}
              rows={5}
              name="KandE"
              maxLength={300}
              placeholder=""
              onChange={() => {}}
            />
          </div>
          <InputTitle fieldName="Technology" />
          <div className="input-div">
            <TextInput value="" place="Technology" change={() => {}} />
          </div>
          <InputTitle fieldName="Other Information" />
          <div className="input-div">
            <TextInput value="" place="Other Information" change={() => {}} />
          </div>
        </section>
        <NextButton />
      </form>
    </>
  );
};

export default SSForm1;
