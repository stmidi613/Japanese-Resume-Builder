import React from 'react';

const SaveButton: React.FC = () => {
    return (
        <div className="flex justify-center min-w-[200px]">
          <button className="min-w-[9rem] md:w-64 m-10 p-2 text-lg button-animation button">
            {/* <FontAwesomeIcon className="px-3" icon={faAnglesLeft} /> */}
            Save
          </button>
        </div>
      );
}

export default SaveButton