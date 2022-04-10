import React from 'react';
import { ReactNode } from 'react';

interface Props {
  largeButtonText: string;
}

const LargeButton: React.FC<Props> = ({largeButtonText}) => {
  return (
    <>
      <div className='flex justify-center'>
        <button className='large-button button-animation absolute bottom-48 md:bottom-48'>
            {largeButtonText}
        </button>
      </div>
    </>
  )
}

export default LargeButton