import React, { useContext } from "react";

import { Languages, ProjectsContext } from "../../SkillSheetState/SSForm2State";

interface Props {
  item: Languages;
}

const SingleLanguage: React.FC<Props> = ({ item }) => {
  //   const { setProjectDelete } = useContext(ProjectsContext);
  return (
    <>
      <div className="input-div p-4">
        {item.language ? (
          <>
            <span>{item.language}</span>
            <span>{item.languageId}</span>
          </>
        ) : (
          ""
        )}
        ;
      </div>
    </>
  );
};

export default SingleLanguage;
