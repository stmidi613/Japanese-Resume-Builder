import React from "react";

const SSMainTB: React.FC = () => {
  return (
    <>
      <h1 className="h1">Tips</h1>
      <div className="mx-4">
          <h2 className="mt-5 text-xl text-purple">Step 1</h2>
        <h2 className="tips-h2">Company Name:</h2>
        <p className="text-left">
          Company Name Furigana: Use your company's full name. Use a translation
          service like "Google Translate" for the Katakana if needed.
        </p>
        <p className="text-left">
          Name: Use your company's full name in Japanese or English but Japanese
          is best.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Work Summary:</h2>
        <p className="text-left">
          Provide a very brief job summary or description of what you did at
          your last or current company.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Knowledge and Experience:</h2>
        <p className="text-left">
          Briefly describe the knowledge and experience you gained while working
          at this company.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Technology:</h2>
        <p className="text-left">
          Describe the main technology you used at this company.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Other Information:</h2>
        <p className="text-left">
          Enter any additional information that you believe is important for the
          reader to know.
        </p>
      </div>
      <div className="mx-4">
          <h2 className="mt-5 text-purple text-xl">Step 3</h2>
        <h3 className="tips-h2">PR:</h3>
        <p className="text-left">
          Sell Yourself. What PR or important points and strengths about
          yourself do you think will help you get hired.
        </p>
      </div>
    </>
  );
};

export default SSMainTB;
