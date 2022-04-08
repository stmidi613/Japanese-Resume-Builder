import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobilePhone, fas } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import './button.css';

library.add(fas, faMobilePhone)

const MobileButton = () => {
  return (
    <>
        <button className="inline-flex button-animation text-white text-left font-bold drop-shadow-md hover:drop-shadow-none text-xs w-20 rounded-md py-2">
            <FontAwesomeIcon icon={faMobilePhone} className="text-white float-left px-1 w-8 h-8" />
            Mobile Site
        </button>
    </>
  )
}

export default MobileButton;