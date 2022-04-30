import React from 'react';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomeButton: React.FC = () => {
  return (
    <FontAwesomeIcon className="w-12 h-12 text-orange hover:text-purple" icon={faHome} />
  )
}

export default HomeButton