import React, { useContext } from "react";

import DeleteButton from "../../../Buttons/DeleteButton";

import { Form3Cert, Form3Context } from "../../ResumeState/Form3State";

interface Props {
  item: Form3Cert;
}

const SingleCertItem: React.FC<Props> = ({ item }) => {
      const { setCertDelete } = useContext(Form3Context);
  return (
    <>
      <div className="input-div p-4">
        <span>{item.certName}</span>
        <span>{item.certStartDate}</span>
        <DeleteButton item={item.certId} change={setCertDelete} />
      </div>
    </>
  );
};

export default SingleCertItem;
