import React from "react";

interface Props {
  place: string;
  change: any;
  value: string;
}

const NameInput: React.FC<Props> = ({ value, place, change }) => {
  return (
    <input
      className="input focus:outline-none"
      placeholder={place}
      value={value}
      type="text"
      maxLength={60}
      onChange={change}
      aria-required
    />
  );
};

export default NameInput;
