import React from "react";
import photo from "../../../images/photo.png";
import UploadButton from "../../Buttons/UploadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import NextButton from "../../Buttons/NextButton";
import InputTitle from "./InputTitle";
import "../resume.css";
import TextInput from "../TextInput";
import EmailInput from "./EmailInput";
import PhoneInput from "./PhoneInput";

interface Props {
  furiName: string;
  name: string;
  dob: string;
  furiAddress: string;
  address: string;
  email: string;
  gender: boolean;
  homePhone: string;
  cellPhone: string;
  furiContactAddress: string;
  contactAddress: string;
  contactPhone: string;
  contactCellPhone: string;
  contactEmail: string;
  setFuriName: React.Dispatch<React.SetStateAction<string>>;
  setName: React.Dispatch<React.SetStateAction<string>>;
  setDob: React.Dispatch<React.SetStateAction<string>>;
  setFuriAddress: React.Dispatch<React.SetStateAction<string>>;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setGender: React.Dispatch<React.SetStateAction<boolean>>;
  setHomePhone: React.Dispatch<React.SetStateAction<string>>;
  setCellPhone: React.Dispatch<React.SetStateAction<string>>;
  setFuriContactAddress: React.Dispatch<React.SetStateAction<string>>;
  setContactAddress: React.Dispatch<React.SetStateAction<string>>;
  setContactPhone: React.Dispatch<React.SetStateAction<string>>;
  setContactCellPhone: React.Dispatch<React.SetStateAction<string>>;
  setContactEmail: React.Dispatch<React.SetStateAction<string>>;
}

const Form1: React.FC<Props> = ({
  furiName,
  name,
  dob,
  furiAddress,
  address,
  email,
  gender,
  homePhone,
  cellPhone,
  furiContactAddress,
  contactAddress,
  contactPhone,
  contactCellPhone,
  contactEmail,
  setFuriName,
  setName,
  setDob,
  setFuriAddress,
  setAddress,
  setEmail,
  setGender,
  setHomePhone,
  setCellPhone,
  setFuriContactAddress,
  setContactAddress,
  setContactPhone,
  setContactCellPhone,
  setContactEmail,
}) => {
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
            <TextInput
              place="Name Furigana"
              val={furiName}
              change={setFuriName}
            />
            <TextInput place="Name" val={name} change={setName} />
          </div>
        </section>
        {/* Date of Birth Section */}
        <section className="section md:order-3 md:row-span-1">
          <InputTitle fieldName="Date of Birth" />
          <div className="input-div">
            <input
              className="input focus:outline-none"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
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
              val={furiAddress}
              change={setFuriAddress}
            />
            <TextInput place="Address" val={address} change={setAddress} />
          </div>
        </section>
        {/* Email Section */}
        <section className="section md:order-6">
          <InputTitle fieldName="Email" />
          <EmailInput place="Email" val={email} change={setEmail} />
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
                onChange={() => setGender(true)}
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
                onChange={() => setGender(false)}
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
              val={homePhone}
              change={setHomePhone}
            />
            <PhoneInput
              place="Cell Phone"
              val={cellPhone}
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
              val={furiContactAddress}
              change={setFuriContactAddress}
            />
            <TextInput
              place="Contact's Address"
              val={contactAddress}
              change={setContactAddress}
            />
            <PhoneInput
              place="Contact's Phone Number"
              val={contactPhone}
              change={setContactPhone}
            />
            <PhoneInput
              place="Contact's Cell Phone Number"
              val={contactCellPhone}
              change={setContactCellPhone}
            />
            <EmailInput
              place="Contact's Email"
              val={contactEmail}
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
