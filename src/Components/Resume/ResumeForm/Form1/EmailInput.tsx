import React, {useState} from "react";

interface Props {
    place: string;
    change: any;
}

const EmailInput: React.FC<Props> = ({place, change}) => {
  return (
      <input
        className="input focus:outline-none"
        placeholder={place}
        type="email"
        onChange={change}
        aria-required
      />
  );
};

export default EmailInput;
