import React from "react";

interface Props {
  place: string;
  change: any;
  value: string;
}

const TextInput: React.FC<Props> = ({ value, place, change }) => {
  return (
    <input
      className="input focus:outline-none"
      placeholder={place}
      value={value}
      type="text"
      onChange={change}
      aria-required
    />
  );
};

export default TextInput;
