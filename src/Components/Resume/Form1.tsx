import React from "react";
import photo from "../../images/photo.png";
import UploadButton from "../Buttons/UploadButton";
import TipsIcon from "./TipsIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import NextButton from "../Buttons/NextButton";
import "./resume.css";

const Form1: React.FC = () => {
  return (
    <>
      <form className="form md:grid-cols-2 md:grid-rows-7">
        {/* Photo Section */}
        <section className="section md:order-2 md:row-span-4">
          <div className="mb-1 flex justify-center">
            <TipsIcon />
            <h2 className="h2">Photo</h2>
          </div>
          <div className="flex w-48 flex-col justify-center">
            <img src={photo} alt="photo" />
            <UploadButton />
          </div>
        </section>
        {/* Name Section */}
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <div className="section-div">
            <TipsIcon />
            <h2 className="h2">Name</h2>
          </div>
          <div className="input-div">
            <input
              className="input focus:outline-none"
              placeholder="Name Furigana"
              type="text"
              aria-required
            />
            <input
              className="input input-lower focus:outline-none"
              placeholder="Full Name"
              type="text"
              aria-required
            />
          </div>
        </section>
        {/* Date of Birth Section */}
        <section className="section md:order-3 md:row-span-1">
          <div className="section-div">
            <TipsIcon />
            <h2 className="h2">Date of Birth</h2>
          </div>
          <div className="input-div">
            <input
              className="input focus:outline-none"
              type="date"
              aria-required
            />
            <FontAwesomeIcon
              id="date"
              className="relative bottom-6 left-2 text-purple"
              icon={faCalendarDays}
            />
          </div>
        </section>
        {/* Address Section */}
        <section className="section md:order-4 md:row-span-2">
          <div className="section-div">
            <TipsIcon />
            <h2 className="h2">Address</h2>
          </div>
          <div className="input-div">
            <input
              className="input focus:outline-none"
              placeholder="Address Furigana"
              type="text"
              aria-required
            />
            <input
              className="input input-lower focus:outline-none"
              placeholder="Address"
              type="text"
              aria-required
            />
          </div>
        </section>
        {/* Email Section */}
        <section className="section md:order-6">
          <div className="section-div">
            <TipsIcon />
            <h2 className="h2">Email</h2>
          </div>
          <div className="input-div">
            <input
              className="input focus:outline-none"
              placeholder="Address Furigana"
              type="email"
              aria-required
            />
          </div>
        </section>
        {/* Gender Section */}
        <section className="section grid-flow-col gap-8 md:order-5 md:row-span-1">
          <div className="section-div">
            <TipsIcon />
            <h2 className="h2">Gender</h2>
          </div>
          <div className="grid place-content-center relative top-4">
            <div>
              <input
                className="input mr-2"
                type="radio"
                name="gender"
                value="Male"
              />
              <label className="text-purple" htmlFor="male">
                Male
              </label>
            </div>
            <div>
              <input
                className="input mr-2"
                type="radio"
                name="gender"
                value="Female"
              />
              <label className="text-purple" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </section>
        {/* Phone Section */}
        <section className="section md:order-7 md:row-span-3">
          <div className="section-div">
            <TipsIcon />
            <h2 className="h2">Phone</h2>
          </div>
          <div className="input-div">
            <input
              className="input focus:outline-none"
              placeholder="Home Phone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              aria-required
            />
            <input
              className="input input-lower focus:outline-none"
              placeholder="Cell Phone"
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              aria-required
            />
          </div>
        </section>
        {/* Contact's Information Section */}
        <section className="section md:row-span-3 md:order-8">
          <div className="section-div">
            <TipsIcon />
            <h2 className="h2">Contact's Information</h2>
          </div>
          <div className="input-div">
            <input
              className="input focus:outline-none"
              placeholder="Contact's Address Furigana"
              type="text"
              aria-required
            />
            <input
              className="input input-lower focus:outline-none"
              placeholder="Contact's Address"
              type="text"
              aria-required
            />
          <input
            className="input input-lower focus:outline-none"
            placeholder="Contact's Phone Number"
            type="tel"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            aria-required
            />
            </div>
        </section>
        <NextButton />
      </form>
    </>
  );
};

export default Form1;
