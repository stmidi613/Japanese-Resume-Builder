import React from 'react';

const PrintButton: React.FC = () => {
    return (
        <div className="flex justify-center min-w-[200px]">
          <button onClick={() => window.print()} className="min-w-[9rem] md:w-64 m-10 p-2 text-lg button-animation button">
            Print / Save
          </button>
        </div>
      );
}

export default PrintButton