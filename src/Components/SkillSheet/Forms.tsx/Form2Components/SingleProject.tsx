import React, { useContext } from 'react';

import DeleteButton from '../../../Buttons/DeleteButton';

import { Projects, ProjectsContext } from '../../SkillSheetState/SSForm2State';

interface Props {
    item: Projects;
}

const SingleProject: React.FC<Props> = ({item}) => {
    const {setProjectDelete} = useContext(ProjectsContext);

  return (
    <>
      <div className="input-div p-4">
        <span>{item.workPlace}</span>
        <span>{item.projName}</span>
        <span>{item.projStart}</span>
        <span>{item.projEnd}</span>
        <span>{item.overview}</span>
        <span>{item.points}</span>
        <span>{item.language}</span>
        <span>{item.position}</span>
        <span>{item.scale}</span>
        <span>Requirements:  {item.requirements ? "Yes" : "No"}</span>
        <span>Basic Design:  {item.basicDesign ? "Yes" : "No"}</span>
        <span>Detailed Design:  {item.detailedDesign ? "Yes" : "No"}</span>
        <span>Implementation:  {item.implementation ? "Yes" : "No"}</span>
        <span>Simple Test:  {item.simpleTest ? "Yes" : "No"}</span>
        <span>Conclusion Test:  {item.conclusionTest ? "Yes" : "No"}</span>
        <span>Maintenance:  {item.maintenance ? "Yes" : "No"}</span>
        <DeleteButton item={item.id} change={setProjectDelete} />
      </div>
    </>
  )
}

export default SingleProject