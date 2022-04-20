import React from "react";

interface Props {
  place: string;
  val: string;
  change: React.Dispatch<React.SetStateAction<string>>;
}

const PhoneInput: React.FC<Props> = ({ place, val, change }) => {
  return (
    <div className="input-div">
      <input
        className="input focus:outline-none"
        placeholder={place}
        type="tel"
        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        value={val}
        onChange={(e) => change(e.target.value)}
        aria-required
      />
    </div>
  );
};

export default PhoneInput;
