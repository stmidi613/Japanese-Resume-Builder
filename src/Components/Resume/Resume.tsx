import React, { useState } from "react";
import Form1 from "./ResumeForms/Form1";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumePage1 from "./ResumePages/ResumePage1";
import "../Resume/resume.css";


const Resume: React.FC = () => {
  const [furiName, setFuriName] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [furiAddress, setFuriAddress] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [gender, setGender] = useState<boolean>(true);
  const [homePhone, setHomePhone] = useState<string>("");
  const [cellPhone, setCellPhone] = useState<string>("");
  const [furiContactAddress, setFuriContactAddress] = useState<string>("");
  const [contactAddress, setContactAddress] = useState<string>("");
  const [contactPhone, setContactPhone] = useState<string>("");
  const [contactCellPhone, setContactCellPhone] = useState<string>("");
  const [contactEmail, setContactEmail] = useState<string>("");

  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
        <Form1
          furiName={furiName}
          name={name}
          dob={dob}
          furiAddress={furiAddress}
          address={address}
          email={email}
          gender={gender}
          homePhone={homePhone}
          cellPhone={cellPhone}
          furiContactAddress={furiContactAddress}
          contactAddress={contactAddress}
          contactPhone={contactPhone}
          contactCellPhone={contactCellPhone}
          contactEmail={contactEmail}
          setFuriName={setFuriName}
          setName={setName}
          setDob={setDob}
          setFuriAddress={setFuriAddress}
          setAddress={setAddress}
          setEmail={setEmail}
          setGender={setGender}
          setHomePhone={setHomePhone}
          setCellPhone={setCellPhone}
          setFuriContactAddress={setFuriContactAddress}
          setContactAddress={setContactAddress}
          setContactPhone={setContactPhone}
          setContactCellPhone={setContactCellPhone}
          setContactEmail={setContactEmail}
        />
        <ResumePage1
          furiName={furiName}
          name={name}
          dob={dob}
          furiAddress={furiAddress}
          address={address}
          email={email}
          gender={gender}
          homePhone={homePhone}
          cellPhone={cellPhone}
          furiContactAddress={furiContactAddress}
          contactAddress={contactAddress}
          contactPhone={contactPhone}
          contactCellPhone={contactCellPhone}
          contactEmail={contactEmail}
        />
      </div>
    </>
  );
};

export default Resume;
