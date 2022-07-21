import React from "react";

const ProjectTB: React.FC = () => {
  return (
    <>
      <h1 className="h1">Tips</h1>
      <div className="mx-4">
        <h2 className="tips-h2">Work Place:</h2>
        <p className="text-left">
          What company did you work for when doing this project? You can use
          Freelance is there was no company.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Project Name:</h2>
        <p className="text-left">What was the project's name?</p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Start Date & End Date:</h2>
        <p className="text-left">
          Please fill out the start and end date. You must fill in each section
          including the day. If you do not know the exact day please guess.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Overview:</h2>
        <p className="text-left">
          Provide a brief summary of the project and the end goal.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Points:</h2>
        <p className="text-left">
          What were the main objectives of the project?
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Language/Environment:</h2>
        <p className="text-left">
          List every computer language you used for the project and the
          environment such as the software or tech stack used. Type a language
          and click the Add Language Button. Remember to Click the "Create List"
          Button when finished! The langauges will not appear in the project
          unless you click this button and see the langauges appear in the
          "Languages to be listed in Project" section.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Role/Position:</h2>
        <p className="text-left">
          What was your job title? Member, Lead, Senior Developer, Junior
          Developer, etc.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Scale/Number of Personnel:</h2>
        <p className="text-left">
          Number of Personnel: How many people worked with you during the
          project?
        </p>
        <p className="text-left">
          Scale: How many people worked on the project including people not in
          your team or from other companies?
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Processes Followed:</h2>
        <p className="text-left">
          Requirements: Requirements
        </p>
        <p className="text-left">
          Basic Design: Basic Design
        </p>
        <p className="text-left">
          Detailed Design: Detailed Design
        </p>
        <p className="text-left">
          Implementation: Implementation
        </p>
        <p className="text-left">
          Simple Test: Simple Test
        </p>
        <p className="text-left">
          Conclusion Test: Conclusion Test
        </p>
        <p className="text-left">
          Maintenance Operation: Maitenance Operatoin
        </p>
      </div>
    </>
  );
};

export default ProjectTB;
