import React, { createContext, useReducer, useState } from "react";

import photo from "../../../images/photo.png";

export const initialValues = {
  //Form 1
  pic: photo,
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
  gender: true,
  // Form 1
  setPic: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setFuriName: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setName: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setDob: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setFuriAddress: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setAddress: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setEmail: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setHomePhone: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setCellPhone: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setFuriContactAddress: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setContactAddress: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setContactPhone: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setContactCellPhone: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setContactEmail: (e: React.ChangeEvent<HTMLInputElement>) => {},
  setFemale: () => {},
  setMale: () => {},
};

export const ReducerContext = createContext(initialValues);

export type stateType = {
  //Form 1
  pic: string;
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
  gender: boolean;
  setFemale: React.Dispatch<React.SetStateAction<boolean>>;
  setMale: React.Dispatch<React.SetStateAction<boolean>>;
};

type actionType = {
  type: //Form 1
  | "setPic"
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
    | "setContactEmail"
  payload: string;
};

export function reducer(currentState: stateType, action: actionType) {
  //Form 1
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
  if (action.type === "setPic") {
    return { ...currentState, pic: action.payload };
  }
  return currentState;
}

const ResumeState: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [gender, setGender] = useState<boolean>(true);

  return (
    <ReducerContext.Provider
      value={{
        //Form 1
        pic: state.pic,
        furiName: state.furiName,
        name: state.name,
        dob: state.dob,
        furiAddress: state.furiAddress,
        address: state.address,
        email: state.email,
        homePhone: state.homePhone,
        cellPhone: state.cellPhone,
        furiContactAddress: state.furiContactAddress,
        contactAddress: state.contactAddress,
        contactPhone: state.contactPhone,
        contactCellPhone: state.contactCellPhone,
        contactEmail: state.contactEmail,
        gender,
        //Form 1
        setPic: (e) => {
          dispatch({
            type: "setPic",
            payload: e.target.files
              ? URL.createObjectURL(e.target.files[0])
              : photo,
          });
        },
        setFuriName: (e) => {
          dispatch({ type: "setFuriName", payload: e.target.value });
        },
        setName: (e) => {
          dispatch({ type: "setName", payload: e.target.value });
        },
        setDob: (e) => {
          dispatch({ type: "setDob", payload: e.target.value });
        },
        setFuriAddress: (e) => {
          dispatch({ type: "setFuriAddress", payload: e.target.value });
        },
        setAddress: (e) => {
          dispatch({ type: "setAddress", payload: e.target.value });
        },
        setEmail: (e) => {
          dispatch({ type: "setEmail", payload: e.target.value });
        },
        setHomePhone: (e) => {
          dispatch({ type: "setHomePhone", payload: e.target.value });
        },
        setCellPhone: (e) => {
          dispatch({ type: "setCellPhone", payload: e.target.value });
        },
        setFuriContactAddress: (e) => {
          dispatch({ type: "setFuriContactAddress", payload: e.target.value });
        },
        setContactAddress: (e) => {
          dispatch({ type: "setContactAddress", payload: e.target.value });
        },
        setContactPhone: (e) => {
          dispatch({ type: "setContactPhone", payload: e.target.value });
        },
        setContactCellPhone: (e) => {
          dispatch({ type: "setContactCellPhone", payload: e.target.value });
        },
        setContactEmail: (e) => {
          dispatch({ type: "setContactEmail", payload: e.target.value });
        },
        setMale: () => {
          setGender(true);
        },
        setFemale: () => {
          setGender(false);
        },
      }}
    >
      {children}
    </ReducerContext.Provider>
  );
};

export default ResumeState;
