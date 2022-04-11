import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faPrint,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  sub1Text: string;
  sub2Text: string;
  sub3Text: string;
  footerText: string;
}

const HomeSubSection: React.FC<Props> = ({sub1Text, sub2Text, sub3Text, footerText}) => {
  return (
    <>
      <div className="fixed bottom-0 w-full grid place-content-center grid-col-3 grid-flow-col gap-16 md:gap-48 bg-white pt-6 pb-12">
        <div>
          <FontAwesomeIcon
            icon={faFileCirclePlus}
            className="text-purple w-12 h-12 md:w-16 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl">{sub1Text}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faSearch}
            className="text-purple w-12 h-12 md:w-16 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl">{sub2Text}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faPrint}
            className="text-purple w-12 h-12 md:w-16 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl">{sub3Text}</p>
        </div>
        <footer className="absolute bottom-0 py-2 w-full">
          <p className="text-purple text-center text-xs md:text-lg">{footerText}</p>
        </footer>
      </div>
    </>
  );
};

export default HomeSubSection;
