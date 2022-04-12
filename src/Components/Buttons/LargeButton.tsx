import React from 'react';

interface Props {
  largeButtonText: string;
}

const handleClick = () => {
  let popup = document.getElementById("popup");
  if (popup) popup.style.display = "block";
}

const LargeButton: React.FC<Props> = ({largeButtonText}) => {
  return (
    <>
      <div className='flex justify-center'>
        <button className='large-button button-animation' onClick={handleClick}>
            {largeButtonText}
        </button>
      </div>
    </>
  )
}

export default LargeButton