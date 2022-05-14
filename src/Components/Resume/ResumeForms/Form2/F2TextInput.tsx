import React from "react";

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
    </>
  );
};

export default F2TextInput;
