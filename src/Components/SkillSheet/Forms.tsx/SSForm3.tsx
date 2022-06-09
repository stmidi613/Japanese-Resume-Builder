import React from "react";
import InputTitle from "../../Resume/ResumeForms/InputTitle";

import NextButton from "../../Buttons/NextButton";
import BackButton from "../../Buttons/BackButton";

const SSForm3: React.FC = () => {
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="w-full mb-5 xl:w-1/3 h-fit" onSubmit={onSubmitHandler}>
        <section className="section">
          <div className="input-div">
            <InputTitle fieldName="PR" />
            <textarea
              className="bg-lightgray mb-2"
              name="PR"
              rows={15}
              maxLength={1000}
              placeholder="Tell the reader about any other details you want them to know."
              onChange={() => {}}
            />
          </div>
        </section>
        <NextButton />
        <BackButton />
      </form>
    </>
  );
};

export default SSForm3;
