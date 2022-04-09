import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faPrint,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

const HomeSubSection: React.FC = () => {
  return (
    <>
      <div className="grid place-content-center grid-col-3 grid-flow-col gap-16 md:gap-48 bg-white py-8 md:py-5">
        <div>
          <FontAwesomeIcon
            icon={faFileCirclePlus}
            className="text-purple w-12 h-12 md:w-16 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl">Create</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faSearch}
            className="text-purple w-12 h-12 md:w-16 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl">Preview</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPrint}
            className="text-purple w-12 h-12 md:w-16 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl">Print</p>
        </div>
      </div>
    </>
  );
};

export default HomeSubSection;
