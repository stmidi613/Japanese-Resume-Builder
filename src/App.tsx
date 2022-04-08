import React from 'react';
import './tailwind.css';
import LanguageButton from './Buttons/LanguageButton';
import MobileButton from './Buttons/MobileButton';


const App: React.FC = () => {
  return (
    <>
    <LanguageButton />
    <MobileButton />
    </>
  )
}

export default App
