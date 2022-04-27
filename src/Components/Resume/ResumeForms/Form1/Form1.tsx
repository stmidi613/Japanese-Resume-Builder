import React, { useContext } from "react";
import { ReducerContext } from "../../ResumeState/ResumeState";

import UploadButton from "../../../Buttons/UploadButton";
import NextButton from "../../../Buttons/NextButton";

import InputTitle from "../InputTitle";
import TextInput from "./TextInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

import photo from "../../../../images/photo.png";
import "../../../Resume/resume.css";

const Form1: React.FC = () => {
  //Fifth add this reducer hook to take the reducer function and initial state
  function onSubmitForm(event: React.FormEvent) {
    event.preventDefault();
  }
  
  const {
    setFuriName,
    setName,
    setDob,
    setFuriAddress,
    setAddress,
    setEmail,
    setHomePhone,
    setCellPhone,
    setFuriContactAddress,
    setContactAddress,
    setContactPhone,
    setContactCellPhone,
    setContactEmail,
    setMale,
    setFemale
  } = useContext(ReducerContext)
  
  return (
    <>
      <form className="form md:grid-cols-2 md:grid-rows-7">
        {/* Photo Section */}
        <section className="section md:order-2 md:row-span-4">
          <InputTitle fieldName="Photo" />
          <div className="flex w-48 mb-5 flex-col justify-center">
            <img src={photo} alt="photo" />
            <UploadButton />
          </div>
        </section>
        {/* Name Section */}
        <section className="section md:order-1 md:row-span-2 md:row-start-1">
          <InputTitle fieldName="Name" />
          <div className="input-div">
            {/* Sixth add all the onchange functions like this here we passed it as a props called change */}
            <TextInput
              place="Name Furigana"
              change={setFuriName}
            />
            <TextInput
              place="Name"
              change={setName}
            />
          </div>
        </section>
        {/* Date of Birth Section */}
        <section className="section md:order-3 md:row-span-1">
          <InputTitle fieldName="Date of Birth" />
          <div className="input-div">
            <input
              className="input focus:outline-none"
              onChange={setDob}
              type="date"
              aria-required
            />
            <FontAwesomeIcon
              id="date"
              className="relative bottom-10 left-2 text-purple"
              icon={faCalendarDays}
            />
          </div>
        </section>
        {/* Address Section */}
        <section className="section md:order-4 md:row-span-2">
          <InputTitle fieldName="Address" />
          <div className="input-div">
            <TextInput
              place="Address Furigana"
              change={setFuriAddress}
            />
            <TextInput
              place="Address"
              change={setAddress}
            />
          </div>
        </section>
        {/* Email Section */}
        <section className="section md:order-6">
          <InputTitle fieldName="Email" />
          <EmailInput
            place="Email"
            change={setEmail}
          />
        </section>
        {/* Gender Section */}
        <section className="section grid-flow-col gap-8 md:order-5 md:row-span-1">
          <InputTitle fieldName="Gender" />

          <div className="grid place-content-center relative top-4">
            <div>
             <input
                className="input mr-2"
                type="radio"
                name="gender"
                value="Male"
                onChange={setMale}
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
                onChange={setFemale}
              />
              <label className="text-purple" htmlFor="female">
                Female
              </label>
            </div>
          </div>
        </section>
        {/* Phone Section */}
        <section className="section md:order-8 md:row-span-2">
          <InputTitle fieldName="Phone" />

          <div className="input-div">
            <PhoneInput
              place="Home Phone"
              change={setHomePhone}
            />
            <PhoneInput
              place="Cell Phone"
              change={setCellPhone}
            />
          </div>
        </section>
        {/* Contact's Information Section */}
        <section className="section md:row-span-3 md:order-7">
          <InputTitle fieldName="Contact Information" />
          <div className="input-div">
            <TextInput
              place="Contact's Address Furigana"
              change={setFuriContactAddress}
            />
            <TextInput
              place="Contact's Address"
              change={setContactAddress}
            />
            <PhoneInput
              place="Contact's Phone Number"
              change={setContactPhone}
            />
            <PhoneInput
              place="Contact's Cell Phone Number"
              change={setContactCellPhone}
            />
            <EmailInput
              place="Contact's Email"
              change={setContactEmail}
            />
          </div>
        </section>
        <NextButton />
      </form>
    </>
  );
};

export default Form1;
