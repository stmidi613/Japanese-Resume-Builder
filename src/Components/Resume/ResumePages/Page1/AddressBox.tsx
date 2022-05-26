import React from "react";
import post from '../../../../images/postnumber.svg'

interface Props {
    furival: string;
    val: string;
    text: string;
}

const AddressBox: React.FC<Props> = ({furival, val, text}) => {
  return (
    <div className="col-span-3">
      <div className="col-span-3 border-b-[1px] border-l-2 border-r-[1px] border-t-[1px] h-28">
        <p className="w-full px-3 border-b-[1px] border-dashed text-xs">
          ふりがな <span>{furival}</span>
        </p>
        <div className="flex pt-1 px-3 h-4">
          <p className="text-xs">
            現在住所
            <img
              className="float-right w-2 mt-0.5"
              src={post}
              alt="post number symbol"
            />
          </p>
          <p className="text-xs pl-10">
            {text}
          </p>
        </div>
        <p className="px-3 py-3 text-sm">{val}</p>
      </div>
    </div>
  );
};

export default AddressBox;
