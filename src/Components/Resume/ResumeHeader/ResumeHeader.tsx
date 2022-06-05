import { useContext, useState } from "react";

import TipsHeader from "./TipsHeader";
import HomeButton from "../../Buttons/HomeButton";
import LanguageButton from "../../Buttons/LanguageButton";

import USF from "../../../images/USflag.png";

import { AppContext } from "../../../AppState/AppState";

const ResumeHeader: React.FC = () => {
  const [language, setLanguage] = useState<string>(USF);
  const headerTitle = ["Personal Information", "Education and Work History", "Certifications and Licenses", "Appeal Points", "Additional Information", "Preview", "Save and Print"];
  const {step} = useContext(AppContext);
  const width = ["w-1/6", "w-1/3", "w-1/2", "w-2/3", "w-5/6", "w-full"]

  return (
    <>
      <header id="resume-header" className="grid grid-flow-col grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center w-full">
        <div className="hidden lg:grid place-content-center border-r-2 border-purple text-center text-sm h-20 md:text-lg text-purple justify-around">
         <h1 className="text-2xl">Japanese Resume Builder</h1>
        </div>
        <div className="hidden md:grid place-content-center border-r-2 border-purple text-center text-sm h-20 md:text-lg text-purple justify-around">
          <h2>{headerTitle[step-1]}:</h2>
          <h3>Step {step} of 6</h3>
        </div>
        <div className="flex justify-evenly h-20">
          <div className="grid place-content-center">
            <LanguageButton
              USF={USF}
              language={language}
              setLanguage={setLanguage}
            />
          </div>
          <div className="grid place-content-center">
            {step < 6 ? <TipsHeader /> : ""}
          </div>
          <div className="grid place-content-center">
            <HomeButton />
          </div>
        </div>
      </header>
      <div id="sub-header" className="h-3 w-full bg-gray">
        <div className={`h-3 ${step < 6 ? `rounded-r-lg`  : ""} ${width[step-1]} bg-purple`}></div>
      </div>
      <div className="md:hidden my-2 text-sm md:text-lg text-purple flex justify-around">
        <h2>{headerTitle[step-1]}:</h2>
        <h3>Step {step} of 6</h3>
      </div>
    </>
  );
};

export default ResumeHeader;
