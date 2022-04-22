import React, { useState } from "react";

interface Props {
  place: string;
  change: any;
}

const TextInput: React.FC<Props> = ({ place, change }) => {
  return (
    <input
      className="input focus:outline-none"
      placeholder={place}
      type="text"
      onChange={change}
      aria-required
    />
  );
};

export default TextInput;
