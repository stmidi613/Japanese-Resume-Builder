import resume from "../../../images/resume.png";
import skillsheet from "../../../images/skillsheet.png";
import ResumeButton from "../../Buttons/ResumeButton";
import SkillSheetButton from "../../Buttons/SkillSheetButton";


interface Props {
  resumeButtonText: string;
  skillSheetButtonText: string;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>,
}

const Popup: React.FC<Props> = ({setShowPopup, resumeButtonText, skillSheetButtonText}) => {
  return (
    <>
      <div id="popup" className="z-30 p-3 absolute top-24 left-[5%] w-[90%] bg-white border-2 border-purple rounded-md">
        <div className="flex justify-end">
        <button className="text-orange border-2 border-orange bg-gray rounded-md py-1 px-2" onClick={() => setShowPopup(false)}>X</button>
        </div>
        <div className="flex justify-evenly flex-col md:flex-row items-center">
          <div className="p-2 h-1/3">
            <img className="w-7/8 pb-2" src={resume} alt="resume" />
            <ResumeButton resumeButtonText={resumeButtonText} />
          </div>
          <div className="h-1/3 px-5">
            <img className="w-7/8 pb-2" src={skillsheet} alt="skillsheet" />
            <SkillSheetButton skillSheetButtonText={skillSheetButtonText}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;
