import React from 'react';

import SingleProject from './SingleProject';

import { Projects } from '../../SkillSheetState/SSForm2State';

interface Props {
    Projects: Projects[];
}

const ProjectList: React.FC<Props> = ({Projects}) => {
    
  return (
    <>
    <span className="text-xl text-purple">Projects List</span>
    <div className="mt-4 flex justify-around flex-wrap">
    {
      Projects.map((item) => 
      (<SingleProject
        key={item.id}
        item={item}
        />))
    }
      </div>
    </>
  )
}

export default ProjectList