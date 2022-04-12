import React from 'react';

interface Props {
    skillSheetButtonText: string;
}

const SkillSheetButton: React.FC<Props> = ({skillSheetButtonText}) => {
    return (
        <>
          <div className='flex justify-center'>
            <button className='button button-animation text-4xl py-4 px-10'>
                {skillSheetButtonText}
            </button>
          </div>
        </>
      )
    }
export default SkillSheetButton