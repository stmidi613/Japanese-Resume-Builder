import React, { useContext } from 'react';
import { AppContext } from '../../AppState/AppState';

interface Props {
  resumeButtonText: string;
}

const ResumeButton:React.FC<Props> = ({resumeButtonText}) => {

  const {setResetStep} = useContext(AppContext);

    return (
        <>
          <div className='flex justify-center'>
            <button onClick={setResetStep} className='button button-animation text-4xl py-4 px-10'>
                {resumeButtonText}
            </button>
          </div>
        </>
      )
    }

export default ResumeButton