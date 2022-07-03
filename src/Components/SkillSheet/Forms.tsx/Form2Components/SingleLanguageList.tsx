import React from "react";
import { Languages, ProjLanguages } from "../../SkillSheetState/SSForm2State";
import SingleLanguageListItems from "./SingleLanguageListItems";

interface Props {
  language: Languages[];
}

const SingleLanguageList: React.FC<Props> = ({ language }) => {
  return (
    <>
      {language.map(item => <SingleLanguageListItems key={item.languageId} language={item.language} />)}
    </>
  );
};

export default SingleLanguageList;
