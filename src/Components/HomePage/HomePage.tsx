import React, { useState } from "react";
import LanguageButton from "../Buttons/LanguageButton";
import USF from "../../images/USflag.png";
import LargeButton from "../Buttons/LargeButton";
import MobileButton from "../Buttons/MobileButton";
import HomeSubSection from "./HomeSubSection/HomeSubSection";
import "./HomePage.css";
import Popup from "./PopupBox/Popup";

const US = {
  title: "Japanese Resume Builder",
  subtitle: "And Skill Sheet!",
  text: "It's Simple, Fast, and Completely Free!",
  largeButtonText: "Try For Free",
  mobileButtonText: "Mobile App",
  sub1Text: "Create",
  sub2Text: "Preview",
  sub3Text: "Print",
  footerText: "Created By Stephen Dilks",
};

const JP = {
  title: "無料　履歴書　ビルダ",
  subtitle: "スキルシートもあります!",
  text: "簡単で、速くて、無料で作りますよ！",
  largeButtonText: "無料で試す",
  mobileButtonText: "モバイルアプリ",
  sub1Text: "創造する",
  sub2Text: "プレビュー",
  sub3Text: "印刷",
  footerText: "ディルクス・スティーブンによりお作りしました。",
};

let lang = US;

const HomePage: React.FC = () => {
  const [language, setLanguage] = useState<string>(USF);
  {
    language === USF ? (lang = US) : (lang = JP);
  }
  return (
    <>
    <Popup />
      <main className="background bg-cover bg-center w-full h-screen">
        <LanguageButton
          USF={USF}
          language={language}
          setLanguage={setLanguage}
        />
        <MobileButton mobileButtonText={lang.mobileButtonText} />
        <h1 className="text-purple w-fit text-xl sm:text-3xl md:text-5xl relative bottom-3 lg:bottom-8 left-1/4">
          {lang.title}
        </h1>
        <h2 className="text-purple w-fit text-xl md:text-3xl relative bottom-3 lg:bottom-7 left-1/3">
          {lang.subtitle}
        </h2>
        <h3 className="text-purple w-56 sm:text-xl md:text-2xl absolute bottom-80 md:bottom-88 left-1/3 md:left-1/2">
          {lang.text}
        </h3>
        <LargeButton largeButtonText={lang.largeButtonText} />
      </main>
      <HomeSubSection
        sub1Text={lang.sub1Text}
        sub2Text={lang.sub2Text}
        sub3Text={lang.sub3Text}
        footerText={lang.footerText}
      />
    </>
  );
};

export default HomePage;
