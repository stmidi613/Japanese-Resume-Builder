import React, { useContext } from "react";

import DeleteButton from "../../../Buttons/DeleteButton";

import { Projects, ProjectsContext } from "../../SkillSheetState/SSForm2State";

interface Props {
  item: Projects;
}

const SingleProject: React.FC<Props> = ({ item }) => {
  const { setProjectDelete } = useContext(ProjectsContext);

  const languageList = item.languages
    .map((language) => language.language)
    .join(" ");

  return (
    <>
      <div className="input-div p-4">
        <span>Work Place: {item.workPlace}</span>
        <span>Project Name: {item.projName}</span>
        <span>Start: {item.projStart}</span>
        <span>End: {item.projEnd}</span>
        <span>Overview: {item.overview}</span>
        <span>Points: {item.points}</span>
        <span>
          Languages:{" "}
          <span className="grid">
            {languageList.split(" ").map((language) => (
              <p>{language}</p>
            ))}
          </span>
        </span>
        <span>Position: {item.position}</span>
        <span>Scale: {item.scale}</span>
        {item.projName ? (
          <>
            <span>Requirements: {item.requirements ? "Yes" : "No"}</span>
            <span>Basic Design: {item.basicDesign ? "Yes" : "No"}</span>
            <span>Detailed Design: {item.detailedDesign ? "Yes" : "No"}</span>
            <span>Implementation: {item.implementation ? "Yes" : "No"}</span>
            <span>Simple Test: {item.simpleTest ? "Yes" : "No"}</span>
            <span>Conclusion Test: {item.conclusionTest ? "Yes" : "No"}</span>
            <span>Maintenance: {item.maintenance ? "Yes" : "No"}</span>
            <DeleteButton item={item.id} change={setProjectDelete} />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SingleProject;
