import React, { useContext } from 'react';
import { AppContext } from '../../AppState/AppState';

interface Props {
    skillSheetButtonText: string;
}

const SkillSheetButton: React.FC<Props> = ({skillSheetButtonText}) => {
  
  const {setResetStep} = useContext(AppContext);

    return (
        <>
          <div className='flex justify-center'>
            <button onClick={setResetStep} className='button button-animation text-4xl py-4 px-10'>
                {skillSheetButtonText}
            </button>
          </div>
        </>
      )
    }
export default SkillSheetButton