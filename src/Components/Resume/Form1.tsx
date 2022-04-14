import React from "react";
import photo from "../../images/photo.png";
import UploadButton from "../Buttons/UploadButton";
import TipsIcon from "./TipsIcon";
import "./resume.css"

const Form1: React.FC = () => {
  return (
    <>
      <form className="form">
        {/* Photo Section */}
        <section className="section">
          <div className="mb-1 flex justify-center">
            <TipsIcon />
            <h2 className="h2">
              Photo
            </h2>
          </div>
          <div className="flex w-48 flex-col justify-center">
            <img src={photo} alt="photo" />
            <UploadButton />
          </div>
        </section>
        {/* Name Section */}
        <section className="section">
          <div className="section-div">
            <TipsIcon />
            <h2 className="h2">
              Name
            </h2>
          </div>
          <div className="input-div">
            <input className="input focus:outline-none" placeholder="Name Furigana" type="text" name="fname" aria-required />
            <input className="input focus:outline-none mt-2" placeholder="Full Name" type="text" name="fname" aria-required />
          </div>
        </section>
      </form>
    </>
  );
};

export default Form1;
