import React from "react";
import SmallCircleButton from "../../../Buttons/SmallCircleButton";

interface Props {
  value: string;
  place: string;
  change: React.Dispatch<React.SetStateAction<string>>;
}

const F2TextInput: React.FC<Props> = ({ value, place, change }) => {
  return (
    <>
      <input
        placeholder={place}
        value={value}
        onChange={(e) => change(e.target.value)}
        type="input"
        className="input focus:outline-none"
      />
      {/* <SmallCircleButton /> */}
        {/* <button type="submit" className="circle-button button-animation">+</button> */}
    </>
  );
};

export default F2TextInput;
