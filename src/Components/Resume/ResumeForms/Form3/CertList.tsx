import React from "react";
import SingleCertItem from "./SingleCertItem";

import { Form3Cert } from "../../ResumeState/Form3State";

interface Props {
  certHist: Form3Cert[];
}

const CertList: React.FC<Props> = ({certHist}) => {
  return (
    <>
    <div className="mt-4">
    <span className="text-purple text-xl">Certification and License List</span>
    {
      certHist.map((item) => 
      (<SingleCertItem
        key={item.certId}
        item={item}
        />))
    }
      </div>
    </>
  );
};

export default CertList;
