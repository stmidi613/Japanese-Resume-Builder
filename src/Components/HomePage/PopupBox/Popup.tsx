import { useContext, useEffect } from "react";
import { AppContext } from "../../../AppState/AppState";
import resume from "../../../images/resume.png";
import skillsheet from "../../../images/skillsheet.png";
import CloseButton from "../../Buttons/CloseButton";
import ResumeButton from "../../Buttons/ResumeButton";
import SkillSheetButton from "../../Buttons/SkillSheetButton";

interface Props {
  resumeButtonText: string;
  skillSheetButtonText: string;
  idnum: number;
}

const Popup: React.FC<Props> = ({
  resumeButtonText,
  skillSheetButtonText,
  idnum,
}) => {
  const {showPopup, setHidePopup} = useContext(AppContext)

  useEffect(() => {
    let popup = document.getElementById(`popup${idnum}`);
    if (popup) popup.style.boxShadow = "0 0 10px 1000px rgba(0, 0, 0, 0.6)";
  }, [showPopup]);


  return (
    <>
      <div
        id={`popup${0}`}
        className="focus:outline-none z-30 p-3 absolute top-24 left-[5%] w-[90%] bg-white border-2 border-purple rounded-md"
      >
        <CloseButton idnum={0} />
        <div className="flex justify-evenly flex-col md:flex-row items-center">
          <div className="p-2 h-1/3">
            <img className="w-7/8 pb-2" src={resume} alt="resume" />
            <ResumeButton resumeButtonText={resumeButtonText} />
          </div>
          <div className="h-1/3 px-5">
            <img className="w-7/8 pb-2" src={skillsheet} alt="skillsheet" />
            <SkillSheetButton skillSheetButtonText={skillSheetButtonText} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
