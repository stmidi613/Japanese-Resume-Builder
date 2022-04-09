import React from 'react';
import LanguageButton from '../Buttons/LanguageButton';
import LargeButton from '../Buttons/LargeButton';
import MobileButton from '../Buttons/MobileButton';
import HomeSubSection from '../HomeSubSection/HomeSubSection';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <>
        <main className='background bg-cover bg-center'>
            <LanguageButton />
            <MobileButton />
            <div>
            <h1>Japanese Resume Builder</h1>
            <h2 className='pb-32'>And Skill Sheet!</h2>
            <h3 className='pb-48'>It's Simple, Fast, and Completely Free!</h3>
            </div>
            <LargeButton />
        </main>
        <HomeSubSection />
    </>
  )
}

export default HomePage;