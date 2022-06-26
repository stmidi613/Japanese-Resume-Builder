import React, { useContext } from "react";

import InputTitle from "../../Resume/ResumeForms/InputTitle";
import NameInput from "../../Resume/ResumeForms/Form1/NameInput";
import NextButton from "../../Buttons/NextButton";

import { SkillSheetContext } from "../SkillSheetState/SkillSheetState";

const SSForm1: React.FC = () => {
  const {
    nameFurigana,
    name,
    setNameFurigana,
    setName,
    setWorkSummary,
    setKandE,
    setTechnology,
    setOtherInfo,
  } = useContext(SkillSheetContext);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmitHandler} className="w-full mb-5 xl:w-1/2 h-fit">
        <section className="section">
          <InputTitle fieldName="Company Name (Furigana)" />
          <div className="input-div">
            <NameInput
              value={nameFurigana}
              place="Company Name Furigana"
              change={setNameFurigana}
              max={26}
            />
            <NameInput value={name} place="Name" change={setName} max={45} />
          </div>
          <InputTitle fieldName="Work Summary" />
          <div className="input-div">
            <textarea
              className="bg-lightgray mb-2"
              cols={5}
              rows={5}
              name="Work Summary"
              maxLength={26}
              placeholder="Type a Short Job Description"
              onChange={setWorkSummary}
            />
          </div>
          <InputTitle fieldName="Knowledge and Experience" />
          <div className="input-div">
            <textarea
              className="bg-lightgray mb-2"
              cols={5}
              rows={5}
              name="KandE"
              maxLength={75}
              placeholder="Knowledge and experience gained from working"
              onChange={setKandE}
            />
          </div>
          <InputTitle fieldName="Technology" />
          <div className="input-div">
          <textarea
              className="bg-lightgray mb-2"
              cols={5}
              rows={5}
              name="Technology"
              maxLength={50}
              placeholder="Technology"
              onChange={setTechnology}
            />
          </div>
          <InputTitle fieldName="Other Information" />
          <div className="input-div">
          <textarea
              className="bg-lightgray mb-2"
              cols={5}
              rows={5}
              name="Other Information"
              maxLength={50}
              placeholder="Other Information"
              onChange={setOtherInfo}
            />
          </div>
        </section>
        <NextButton />
      </form>
    </>
  );
};

export default SSForm1;
