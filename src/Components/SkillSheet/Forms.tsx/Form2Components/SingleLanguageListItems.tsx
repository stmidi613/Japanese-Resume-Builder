import React from 'react';

interface Props {
    language: string;
}

const SingleLanguageListItems: React.FC<Props> = ({language}) => {
  return (
    <p>{language}</p>
  )
}

export default SingleLanguageListItems