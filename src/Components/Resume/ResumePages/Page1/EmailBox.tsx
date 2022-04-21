import React from "react";

interface Props {
  email: string;
  homePhone: string;
  cellPhone: string;
}

const EmailBox: React.FC<Props> = ({ email, homePhone, cellPhone }) => {
  return (
    <div className="col-span-1">
      <div className="col-span-1 border-[1px] h-28">
        <p className="w-full border-b-[1px] border-dashed pl-1 text-xs">
          電話<span className="pl-1">{homePhone}</span>
        </p>
        <p className="px-1 py-2 text-xs">
          携帯 <span className="pl-1">{cellPhone}</span>
        </p>
        <div className="text-xs border-t-2">
          <p className="px-2 text-[.5rem]">電子メール・E-mail</p>
          <p className="pb-[.125rem] px-2 text-[.75em] break-words">{email}</p>
        </div>
      </div>
    </div>
  );
};

export default EmailBox;
