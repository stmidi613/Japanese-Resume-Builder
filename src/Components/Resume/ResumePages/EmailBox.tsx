import React from "react";

interface Props {
  email: string;
  homePhone: string;
  cellPhone: string;
}

const EmailBox: React.FC<Props> = ({email, homePhone, cellPhone}) => {
  return (
    <div className="col-span-1">
      <div className="col-span-1 border-2">
        <p className="w-full border-b-[1px] border-dashed pl-2 text-xs">電話<span>{homePhone}</span></p>
        <p className="px-2 py-2 text-[.5rem]">携帯電話 <span>{cellPhone}</span></p>
        <div className="text-xs border-t-2">
          <p className="px-2 text-[.5rem] pb-[1.125rem]">電子メール・E-mail <span>{email}</span></p>
        </div>
      </div>
    </div>
  );
};

export default EmailBox;
