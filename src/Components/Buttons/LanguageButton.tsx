import React, { Fragment, useState } from "react";
import JPF from "../../images/JPflag.png";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

interface Props {
  USF: string,
  language: string,
  setLanguage: React.Dispatch<string>,
}

const LanguageButton: React.FC<Props> = ({USF, language, setLanguage}: Props) => {
  return (
    <Menu as="div" id="language" className="m-6 relative inline-block text-left z-10">
      <div>
        <Menu.Button id="language-button" className="inline-flex items-center justify-center w-full border-[1px] border-gray hover:border-orange rounded-md shadow-sm pl-2 bg-white text-sm font-medium">
          <img src={language} alt="language" className="h-8 w-12" />
          <ChevronDownIcon className="bg-gray text-orange rounded-r-md ml-2 h-11 w-9" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item onClick={() => setLanguage(USF)}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray" : "text-gray-700",
                    "block px-2 py-2 text-lg"
                  )}
                >
                  <img src={USF} alt="US flag" className="float-left mr-2" />
                  US
                </a>
              )}
            </Menu.Item>
            <Menu.Item onClick={() => setLanguage(JPF)}>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray" : "text-gray-700",
                    "block pl-2 py-2 text-lg"
                  )}
                >
                    <img src={JPF} alt="Japan Flag" className="float-left h-7 w-10 mr-2" />
                日本
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageButton;
