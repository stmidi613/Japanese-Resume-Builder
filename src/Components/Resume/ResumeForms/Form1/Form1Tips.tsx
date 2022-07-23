import React from "react";

const Form1Tips: React.FC = () => {
  return (
    <>
      <h1 className="h1">Tips</h1>
      <div className="mx-4">
      <h2 className="tips-h2">References:</h2>
        <p className="text-left">
          <a
            href="https://blog.gaijinpot.com/write-japanese-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://blog.gaijinpot.com/write-japanese-resume
          </a>
        </p>
        <p className="text-left">
          <a
            href="https://jobs.bfftokyo.com/ultimate-guide-to-writing-a-japanese-resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://jobs.bfftokyo.com/ultimate-guide-to-writing-a-japanese-resume
          </a>
        </p>
        <h2 className="tips-h2">Photo:</h2>
        <p className="text-left">
          The photo should be 3cm X 4cm which the app does for you. Men should
          look professional in a black suit, white shirt, and tie. Women should
          also look professional and not wear excessive makeup. Do not wear a
          hat or cover your face with your hair or wear glasses. To size your
          photo you can use software like Photoshop, Figma, or web apps. There
          are websites where you pay for a resume photo but this is not
          recommended by this site.
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
          This is your current addresss.  Please fill out the Furigana address the best you can. Google
          Translate helps. It is also better to use as much Japanese as
          possible. Please be careful about the order of the address because it
          is different in Japan.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Email:</h2>
        <p className="text-left">
          Enter your normal Email address. It should sound professional.
        </p>
      </div>
      <div className="mx-4">
        <h2 className="tips-h2">Phone:</h2>
        <p className="text-left">
          Please enter your phone number. If needed include country code. If it
          is a Japanese phone number you do not need the country code. You can
          also use a Skype phone number if needed.
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
          Fill in this section if you want to include additional contact
          information. If it is the same as above you can just write 同上 or
          どうじょう.
        </p>
      </div>
    </>
  );
};

export default Form1Tips;
