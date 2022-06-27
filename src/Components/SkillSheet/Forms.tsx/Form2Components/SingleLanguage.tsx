import React, { useContext } from "react";
import DeleteButton from "../../../Buttons/DeleteButton";
import LanguageDelete from "../../../Buttons/LanguageDelete";

import { Languages, ProjectsContext } from "../../SkillSheetState/SSForm2State";

interface Props {
  item: Languages;
}

const SingleLanguage: React.FC<Props> = ({ item }) => {
    const { setLanguageDelete } = useContext(ProjectsContext);
  return (
    <>
      <div className="input-div p-4">
        {item ? (
          <>
            <span>{item.language}</span>
            <DeleteButton item={item.languageId} change={setLanguageDelete} />
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default SingleLanguage;
