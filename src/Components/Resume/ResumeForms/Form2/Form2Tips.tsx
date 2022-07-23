import React from "react";

const Form2Tips: React.FC = () => {
  return (
    <>
      <h1 className="h1">Tips</h1>
      <div className="mx-4">
      <h2 className="tips-h2">References:</h2>
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
        <h2 className="tips-h2">Educational Background:</h2>
        <p className="text-left">
          Please fill in all the fields and the dates for each entry and click
          on the orange add button. Start with the earliest educational history
          entry (highschool) and continue to the most recent. Use the official
          school name, department, and major. If you need help use the
          transcript and a digital translator.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Work History:</h2>
        <p className="text-left">
          Please fill in all the fields and the dates for each entry and click
          on the orange add button. Start with the earlist work history entry
          and continue to the most recent. You do not need your job description
          or details of what you did. If it is your current job you can write
          現在に至る instead of leading it blank. Three other very common
          entries for leaving the company are 一身上の都合により退職 (left for
          personal reasons), 契約期間満了につき退社 (contract ended),
          会社都合により退社 (left for company reasons). If you have no
          experience you can put 無し.
        </p>
      </div>
    </>
  );
};

export default Form2Tips;
