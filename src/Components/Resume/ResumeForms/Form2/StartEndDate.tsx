import React from "react";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    label: string;
    change: any;
}

const StartEndDate: React.FC<Props> = ({change, label}) => {
  return (
    <div className="date-input-div">
      <label className="text-purple" htmlFor="start-date">
        {label}
      </label>
      <input
        className="input focus:outline-none"
        onChange={change}
        type="date"
        aria-required
      />
      <FontAwesomeIcon
        id="date"
        className="relative bottom-10 left-2 text-purple"
        icon={faCalendarDays}
      />
    </div>
  );
};

export default StartEndDate;
