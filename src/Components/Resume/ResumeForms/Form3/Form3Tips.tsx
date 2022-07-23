import React from "react";

const Form3Tips: React.FC = () => {
  return (
    <>
      <h1 className="h1">Tips</h1>
      <div className="mx-4">
      <h2 className="tips-h2">References:</h2>
        <p className="text-left">
          <a
            href="https://japanbased.com/write-japanese-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://japanbased.com/write-japanese-resume
          </a>
        </p>
        <p className="text-left">
          <a
            href="https://blog.gaijinpot.com/write-japanese-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://blog.gaijinpot.com/write-japanese-resume
          </a>
        </p>
        <p className="text-left">
          <a
            href="https://jobs.bfftokyo.com/ultimate-guide-to-writing-a-japanese-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://jobs.bfftokyo.com/ultimate-guide-to-writing-a-japanese-resume
          </a>
        </p>
        <h2 className="tips-h2">Certifications and Licenses:</h2>
        <p className="text-left">
          List only your licenses and certificates related to the position you
          are applying for starting from the newest to the oldest. Some common
          licenses and certificates are drivers license (of any type),
          TOEIC/TOEFL, JLPT (Japanese Langauge Proficiency Test), Kanji Kanken
          Level, etc... You can use the drop down list for examples.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Appeal Points:</h2>
        <p className="text-left">
          This is the section in which you can sell yourself. points. You can
          describe your special skills and interests. This section is important.
          It is your chance to get the employers attention with something about
          yourself they would want to know. Why are you a good choice for this
          position? A common phrase if you want to use the same resume for
          multiple companies or do not know what to write is
          "営業経験を活かして、 [field of work] の仕事にて活躍したい".
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Travel Time:</h2>
        <p className="text-left">
          How much time will it take to travel one way to commute to work. List
          the hours and minutes. Japanese companies usually pay travel expenses
          and prefer people who live closer to the place of work.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Family:</h2>
        <p className="text-left">
          <strong className="pr-2">Dependents (Not including Spouse):</strong>
          List all dependents not including your spouse.
          <br />
          <strong className="pr-2">Spouse:</strong>
          Are you married? 有る (Yes) or 無い (No).
          <br />
          <strong className="pr-2">Spouse's Obligation to support:</strong>
          If your spouse is working and receiving social insurance click (有る),
          if not (無い).
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Additional Information:</h2>
        <p className="text-left">
          Tell the reader about any other details you want them to know such as
          desired salary, type of work, travel distance, work location, and any
          other requests etc... You can write 特に無し (nothing in particular),
          but most people write 貴社規定に従います (I will comply with your
          company regulations).
        </p>
      </div>
    </>
  );
};

export default Form3Tips;
