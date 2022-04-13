import { useState } from "react";
import LanguageButton from "../../Buttons/LanguageButton";
import USF from "../../../images/USflag.png";
import TipsHeader from "./TipsHeader";
import HomeButton from "../../Buttons/HomeButton";

const ResumeHeader: React.FC = () => {
  const [language, setLanguage] = useState<string>(USF);
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
    </>
  );
};

export default ResumeHeader;
