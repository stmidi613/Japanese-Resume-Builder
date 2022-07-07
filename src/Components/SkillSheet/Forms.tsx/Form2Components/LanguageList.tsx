import React from 'react';

import { Languages } from '../../SkillSheetState/SSForm2State';
import SingleLanguage from './SingleLanguage';

interface Props {
    Languages: Languages[];
}

const LanguageList: React.FC<Props> = ({Languages}) => {
    return (
        <>
        <div className="mt-4">
        <span className="text-lg text-purple">Language List</span>
        {
          Languages.map((item) => 
          (<SingleLanguage
            key={item.languageId}
            item={item}
            />))
        }
          </div>
        </>
      )
}

export default LanguageList