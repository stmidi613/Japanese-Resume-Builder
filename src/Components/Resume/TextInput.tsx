import React, { useState } from "react";

interface Props {
  place: string;
  val: string;
  change: React.Dispatch<React.SetStateAction<string>>;
}

const TextInput: React.FC<Props> = ({ place, val, change }) => {
  return (
    <input
      className="input focus:outline-none"
      placeholder={place}
      type="text"
      value={val}
      onChange={(e) => change(e.target.value)}
      aria-required
    />
  );
};

export default TextInput;
