import React from 'react';

import { faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrintButton: React.FC = () => {
    return (
        <div className="flex justify-center min-w-[200px]">
          <button onClick={() => window.print()} className="min-w-[9rem] md:w-64 m-10 p-2 text-lg button-animation button">
            <span><FontAwesomeIcon
            icon={faPrint}
            className="mr-2"
          /></span>Print / Save
          </button>
        </div>
      );
}

export default PrintButton