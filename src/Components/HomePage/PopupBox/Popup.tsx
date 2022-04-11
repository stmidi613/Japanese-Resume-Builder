import LargeButton from "../../Buttons/LargeButton";
import resume from "../../../images/resume.png";
import skillsheet from "../../../images/skillsheet.png";

const Popup = () => {
  return (
    <>
      <div className="z-30 absolute top-10 left-[5%] w-[90%] h-[80%] bg-white border-2 border-purple rounded-md">
        <div className="grid grid-flow-row grid-cols-2">
          <img className="w-full h-full" src={resume} alt="resume" />
          <img className="w-full h-full" src={skillsheet} alt="" />
          <LargeButton largeButtonText="Resume" />
          <LargeButton largeButtonText="Skill Sheet" />
        </div>
      </div>
    </>
  );
};

export default Popup;
