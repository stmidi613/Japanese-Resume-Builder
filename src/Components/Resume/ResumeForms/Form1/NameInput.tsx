import React from "react";

interface Props {
  place: string;
  change: any;
  value: string;
  max: number;
}

const NameInput: React.FC<Props> = ({ value, place, change, max }) => {
  return (
    <input
      className="input focus:outline-none"
      placeholder={place}
      value={value}
      type="text"
      maxLength={max}
      onChange={change}
      aria-required
    />
  );
};

export default NameInput;
