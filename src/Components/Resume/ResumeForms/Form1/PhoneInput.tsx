import React from "react";

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
        maxLength={15}
        onChange={change}
      />
    </div>
  );
};

export default PhoneInput;
