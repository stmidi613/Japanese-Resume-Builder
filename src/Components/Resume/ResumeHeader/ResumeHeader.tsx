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
      <header className="grid grid-flow-col grid-cols-3 place-content-center py-4">
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
      </header>
      <div className="h-3 w-full bg-gray">
        <div className="h-3 rounded-r-lg w-[14.3%] bg-purple"></div>
      </div>
      <div className="md:hidden my-2 text-purple flex justify-around">
        <p>{headerTitle}:</p>
        <p>Step {step} of 7</p>
      </div>
    </>
  );
};

export default ResumeHeader;
