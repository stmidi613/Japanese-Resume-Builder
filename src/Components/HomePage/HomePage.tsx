import React, { ReactNode } from "react";
import LanguageButton from "../Buttons/LanguageButton";
import LargeButton from "../Buttons/LargeButton";
import MobileButton from "../Buttons/MobileButton";
import HomeSubSection from "../HomeSubSection/HomeSubSection";
import "./HomePage.css";


const HomePage: React.FC = () => {
  const largeButtonText: string = "Try For Free";
  return (
    <>
      <main className="background bg-cover bg-center w-full h-screen">
        <LanguageButton />
        <MobileButton />
          <h1 className="text-purple w-fit text-xl sm:text-3xl md:text-5xl relative bottom-3 lg:bottom-8 left-1/4">
            Japanese Resume Builder
          </h1>
          <h2 className="text-purple w-fit text-xl md:text-3xl relative bottom-3 lg:bottom-7 left-1/3">
            And Skill Sheet!
          </h2>
          <h3 className="text-purple w-56 sm:text-xl md:text-2xl absolute bottom-80 md:bottom-88 left-1/3 md:left-1/2">
            It's Simple, Fast, and Completely Free!
          </h3>
          <LargeButton largeButtonText={largeButtonText} />
      </main>
      <HomeSubSection />      
    </>
  );
};

export default HomePage;
