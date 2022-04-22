import React, { useState } from "react";

interface Props {
  place: string;
  change: any;
}

const PhoneInput: React.FC<Props> = ({ place, change }) => {
  return (
    <div className="input-div">
      <input
        className="input focus:outline-none"
        placeholder={place}
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        onChange={change}
      />
    </div>
  );
};

export default PhoneInput;
