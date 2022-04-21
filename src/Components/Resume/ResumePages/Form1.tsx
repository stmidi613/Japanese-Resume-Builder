import React, { useContext, useReducer } from "react";
import photo from "../../../images/photo.png";
import UploadButton from "../../Buttons/UploadButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import NextButton from "../../Buttons/NextButton";
import InputTitle from "../InputTitle";
import TextInput from "../TextInput";
import EmailInput from "../EmailInput";
import PhoneInput from "../PhoneInput";
import "../resume.css";
import {ResumeContext} from "../Resume";

//This is the setState boolean not the Reducer
interface Props {
  // setGender: React.Dispatch<React.SetStateAction<boolean>>;
}
//Reducer types:  First list all the stateType with a type
export type stateType = {
  furiName: string;
  name: string;
  dob: string;
  furiAddress: string;
  address: string;
  email: string;
  homePhone: string;
  cellPhone: string;
  furiContactAddress: string;
  contactAddress: string;
  contactPhone: string;
  contactCellPhone: string;
  contactEmail: string;
};
//Second Define all the initial States with a const
export const initialState: stateType = {
  furiName: "",
  name: "",
  dob: "",
  furiAddress: "",
  address: "",
  email: "",
  homePhone: "",
  cellPhone: "",
  furiContactAddress: "",
  contactAddress: "",
  contactPhone: "",
  contactCellPhone: "",
  contactEmail: "",
};
//Third define all the action types with a type with the payload
type actionType = {
  type:
    | "setFuriName"
    | "setName"
    | "setDob"
    | "setFuriAddress"
    | "setAddress"
    | "setEmail"
    | "setHomePhone"
    | "setCellPhone"
    | "setFuriContactAddress"
    | "setContactAddress"
    | "setContactPhone"
    | "setContactCellPhone"
    | "setContactEmail";
  payload: string;
};
//Fourth write the reducer function to take a stateType and Action Type then Payload
export function reducer(currentState: stateType, action: actionType) {
  if (action.type === "setFuriName") {
    return { ...currentState, furiName: action.payload };
  }
  if (action.type === "setName") {
    return { ...currentState, name: action.payload };
  }
  if (action.type === "setDob") {
    return { ...currentState, dob: action.payload };
  }
  if (action.type === "setFuriAddress") {
    return { ...currentState, furiAddress: action.payload };
  }
  if (action.type === "setAddress") {
    return { ...currentState, address: action.payload };
  }
  if (action.type === "setEmail") {
    return { ...currentState, email: action.payload };
  }
  if (action.type === "setHomePhone") {
    return { ...currentState, homePhone: action.payload };
  }
  if (action.type === "setCellPhone") {
    return { ...currentState, cellPhone: action.payload };
  }
  if (action.type === "setFuriContactAddress") {
    return { ...currentState, furiContactAddress: action.payload };
  }
  if (action.type === "setContactAddress") {
    return { ...currentState, contactAddress: action.payload };
  }
  if (action.type === "setContactPhone") {
    return { ...currentState, contactPhone: action.payload };
  }
  if (action.type === "setContactCellPhone") {
    return { ...currentState, contactCellPhone: action.payload };
  }
  if (action.type === "setContactEmail") {
    return { ...currentState, contactEmail: action.payload };
  }
  return currentState;
}

const Form1: React.FC = ({
  // setGender,
}) => {
  //Fifth add this reducer hook to take the reducer function and initial state
  const [state, dispatch] = useReducer(reducer, initialState);
  function onSubmitForm(event: React.FormEvent) {
    event.preventDefault();
  }
  const {gender, setGender} = useContext(ResumeContext)
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
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setFuriName", payload: e.target.value })
              }
            />
            <TextInput
              place="Name"
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setName", payload: e.target.value })
              }
            />
          </div>
        </section>
        {/* Date of Birth Section */}
        <section className="section md:order-3 md:row-span-1">
          <InputTitle fieldName="Date of Birth" />
          <div className="input-div">
            <input
              className="input focus:outline-none"
              // value={dob}
              onChange={(e) =>
                dispatch({ type: "setDob", payload: e.target.value })
              }
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
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setFuriAddress", payload: e.target.value })
              }
            />
            <TextInput
              place="Address"
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setAddress", payload: e.target.value })
              }
            />
          </div>
        </section>
        {/* Email Section */}
        <section className="section md:order-6">
          <InputTitle fieldName="Email" />
          <EmailInput
            place="Email"
            change={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch({ type: "setEmail", payload: e.target.value })
            }
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
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setHomePhone", payload: e.target.value })
              }
            />
            <PhoneInput
              place="Cell Phone"
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setCellPhone", payload: e.target.value })
              }
            />
          </div>
        </section>
        {/* Contact's Information Section */}
        <section className="section md:row-span-3 md:order-7">
          <InputTitle fieldName="Contact Information" />
          <div className="input-div">
            <TextInput
              place="Contact's Address Furigana"
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({type: "setFuriContactAddress", payload: e.target.value,
                })
              }
            />
            <TextInput
              place="Contact's Address"
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setContactAddress", payload: e.target.value })
              }
            />
            <PhoneInput
              place="Contact's Phone Number"
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setContactPhone", payload: e.target.value })
              }
            />
            <PhoneInput
              place="Contact's Cell Phone Number"
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setContactCellPhone", payload: e.target.value })
              }
            />
            <EmailInput
              place="Contact's Email"
              change={(e: React.ChangeEvent<HTMLInputElement>) =>
                dispatch({ type: "setContactEmail", payload: e.target.value })
              }
            />
          </div>
        </section>
        <NextButton />
      </form>
    </>
  );
};

export default Form1;
