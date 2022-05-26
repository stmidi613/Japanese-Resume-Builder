import React from "react";

const Form3Tips: React.FC = () => {
  return (
    <>
      <h1 className="h1">Tips</h1>
      <div className="mx-4">
        <h2 className="tips-h2">Certifications and Licenses:</h2>
        <p className="text-left">
          List all of your licenses and certificates starting from the newest to
          the oldest. Some common licenses and certificates are drivers license
          (of any type), TOEIC/TOEFL, JLPT (Japanese Langauge Proficiency Test),
          etc... You can use the drop down list for examples.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Appeal Points:</h2>
        <p className="text-left">
          This is the section in which you can tell the reader about your good
          points. You can describe your special skills, interests, hopes, goals,
          etc... It is your chance to get the employers attention with something
          about yourself they would want to know.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Travel Time:</h2>
        <p className="text-left">
          How much time are you willing to travel one way to commute to work.
          List the hours and minutes.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Family:</h2>
        <p className="text-left">
          <strong className="pr-2">Dependents (Not including Spouse):</strong>
          List all dependents not including your spouse.
          <br />
          <strong className="pr-2">Spouse:</strong>
          Are you married?
          <br />
          <strong className="pr-2">Spouse's Dependents:</strong>
          How many dependents does your spouse have?
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Additional Information:</h2>
        <p className="text-left">
          Tell the reader about any other details you want them to know such as
          desired salary, type of work, travel distance, work location, and any
          other requests etc...
        </p>
      </div>
    </>
  );
};

export default Form3Tips;
