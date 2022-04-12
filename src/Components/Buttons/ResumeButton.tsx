import React from 'react';

interface Props {
  resumeButtonText: string;
}

const ResumeButton:React.FC<Props> = ({resumeButtonText}) => {
    return (
        <>
          <div className='flex justify-center'>
            <button className='button button-animation text-4xl py-4 px-10'>
                {resumeButtonText}
            </button>
          </div>
        </>
      )
    }

export default ResumeButton