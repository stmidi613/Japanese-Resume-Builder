import { useContext, useEffect } from "react";

import CloseButton from "../../Buttons/CloseButton";
import ResumeButton from "../../Buttons/ResumeButton";
import SkillSheetButton from "../../Buttons/SkillSheetButton";

import resumepage1 from "../../../images/resumepage1.png";
import resumepage2 from "../../../images/resumepage2.png";
import skillsheetpage from "../../../images/skillsheetpage.png";

import { AppContext } from "../../../AppState/AppState";
import { Link } from "react-router-dom";

interface Props {
  resumeButtonText: string;
  skillSheetButtonText: string;
}

const Popup: React.FC<Props> = ({ resumeButtonText, skillSheetButtonText }) => {
  const { showPopup } = useContext(AppContext);

  useEffect(() => {
    let popup = document.getElementById(`popup`);
    if (popup) popup.style.boxShadow = "0 0 10px 1000px rgba(0, 0, 0, 0.6)";
  }, [showPopup]);

  return (
    <>
      <div
        id={`popup`}
        className="focus:outline-none z-30 p-3 absolute top-24 left-[5%] w-[90%] bg-white border-2 border-purple rounded-md"
      >
        <CloseButton />
        <div className="flex justify-around flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 p-2 h-1/3">
            <div className="flex border-black border-2 mb-2">
              <img className="w-1/2 pb-2" src={resumepage1} alt="resume" />
              <img className="w-1/2 pb-2" src={resumepage2} alt="resume" />
            </div>
            <Link to="Resume">
              <ResumeButton resumeButtonText={resumeButtonText} />
            </Link>
          </div>
          <div className="w-full md:w-1/2 h-1/3 px-5 my-1">
            <div className="flex justify-center mb-2">
              <img
                className="border-black border-2 w-1/2 pb-2"
                src={skillsheetpage}
                alt="skillsheet"
              />
            </div>
            <Link to="SkillSheet">
              <SkillSheetButton skillSheetButtonText={skillSheetButtonText} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
