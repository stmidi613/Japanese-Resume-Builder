import React from "react";

const Form1Tips: React.FC = () => {
  return (
    <>
      <h1 className="h1">Tips</h1>
      <div className="mx-4">
        <h2 className="tips-h2">Photo:</h2>
        <p className="text-left">
          The photo should be 3cm X 4cm which the app does for you. You should
          look professional in a black suit, white shirt, and tie. To size your
          photo you can use software like Photoshop, Figma, or web apps.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Name:</h2>
        <p className="text-left">
          In Japan the format for the name is "Last Name ・ First Name Middle
          Name". Notice that a comma is not used but a dot is. For the name in
          Furigana you can use Katakana and Google Translate. For the large name
          section you can use English characters for western names or Kanji.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Date of Birth:</h2>
        <p className="text-left">
          Please fill out each section of the date. The date of birth is
          converted into the Japanese year and stating your age on the resume is
          normal in Japanese society. Japanese people will ask you how old you
          are and it is not impolite in their culture.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Address:</h2>
        <p className="text-left">
          Please fill out the Furigana address the best you can. Google
          Translate helps. It is also better to use as much Japanese as
          possible.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Email:</h2>
        <p className="text-left">Enter your normal Email address.</p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Phone:</h2>
        <p className="text-left">
          Please enter your phone number. If needed include country code. If it
          is a Japanese phone number you do not need the country code.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Gender:</h2>
        <p className="text-left">
          Select your gender. Japanese society does not recognize genders
          outside male and female. They are not going to call you zih or zir.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Contact Information:</h2>
        <p className="text-left">
          You should only fill in the contact information if the information you
          want to be contacted at is different from your current information.
        </p>
      </div>
    </>
  );
};

export default Form1Tips;
