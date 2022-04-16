import { useState } from "react";
import LanguageButton from "../../Buttons/LanguageButton";
import USF from "../../../images/USflag.png";
import TipsHeader from "./TipsHeader";
import HomeButton from "../../Buttons/HomeButton";

const ResumeHeader: React.FC = () => {
  const [language, setLanguage] = useState<string>(USF);
  const [step, setStep] = useState<number>(1);
  const headerTitle = "Personal Information";

  return (
    <>
      <header className="grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center my-4 w-full">
        <div className="hidden lg:grid place-content-center border-r-2 border-purple text-center my-2 text-sm md:text-lg text-purple justify-around">
         <h1>Japanese Resume Builder</h1>
        </div>
        <div className="hidden md:grid place-content-center border-r-2 border-purple text-center my-2 text-sm md:text-lg text-purple justify-around">
          <h2>{headerTitle}:</h2>
          <h3>Step {step} of 7</h3>
        </div>
        <div className="flex justify-evenly">
          <div className="grid place-content-center">
            <LanguageButton
              USF={USF}
              language={language}
              setLanguage={setLanguage}
            />
          </div>
          <div className="grid place-content-center">
            <TipsHeader />
          </div>
          <div className="grid place-content-center">
            <HomeButton />
          </div>
        </div>
      </header>
      <div className="h-3 w-full bg-gray">
        <div className="h-3 rounded-r-lg w-[14.3%] bg-purple"></div>
      </div>
      <div className="md:hidden my-2 text-sm md:text-lg text-purple flex justify-around">
        <h2>{headerTitle}:</h2>
        <h3>Step {step} of 7</h3>
      </div>
    </>
  );
};

export default ResumeHeader;
