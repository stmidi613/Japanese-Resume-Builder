import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faPrint,
  faQuestionCircle,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  subText: string;
  sub1Text: string;
  sub2Text: string;
  sub3Text: string;
  footerText: string;
}

const HomeSubSection: React.FC<Props> = ({subText, sub1Text, sub2Text, sub3Text, footerText}) => {
  return (
    <>
      <div className="fixed bottom-0 w-full flex justify-around bg-white pt-6 pb-12">
        <div className="w-fit">
          <FontAwesomeIcon
            icon={faQuestionCircle}
            className="grid place-content-center text-purple w-full h-12 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl mt-1">{subText}</p>
        </div>
        <div className="w-fit">
          <FontAwesomeIcon
            icon={faFileCirclePlus}
            className="grid place-content-center w-full text-purple h-12 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl mt-1">{sub1Text}</p>
        </div>
        <div className="w-fit">
          <FontAwesomeIcon
            icon={faSearch}
            className="grid place-content-center w-full text-purple h-12 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl mt-1">{sub2Text}</p>
        </div>
        <div className="w-fit">
          <FontAwesomeIcon
            icon={faPrint}
            className="grid place-content-center w-full text-purple h-12 md:h-16"
          />
          <p className="text-purple text-center md:text-2xl mt-1">{sub3Text}</p>
        </div>
        <footer className="absolute bottom-0 py-2 w-full">
          <p className="text-purple text-center text-xs md:text-lg">{footerText}</p>
        </footer>
      </div>
    </>
  );
};

export default HomeSubSection;
