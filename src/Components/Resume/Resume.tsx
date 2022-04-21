import React, { useState } from "react";
import Form1 from "./ResumePages/Form1";
import ResumeHeader from "./ResumeHeader/ResumeHeader";
import ResumePage1 from "./ResumePages/ResumePage1";
import "../Resume/resume.css";


const Resume: React.FC = () => {
  const [gender, setGender] = useState<boolean>(true);

  // const info = {
  // furiName: "",
  // name: "",
  // dob: "",
  // furiAddress: "",
  // address: "",
  // email: "",
  // homePhone: "",
  // cellPhone: "",
  // furiContactAddress: "",
  // contactAddress: "",
  // contactPhone: "",
  // contactCellPhone: "",
  // contactEmail: "",
  // }
  return (
    <>
      <ResumeHeader />
      <div className="flex justify-center">
        <Form1
          setGender={setGender}
        />
        <ResumePage1
          // info={info}
          gender={gender}
        />
      </div>
    </>
  );
};

export default Resume;
