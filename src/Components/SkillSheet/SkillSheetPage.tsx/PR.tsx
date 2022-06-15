import React, { useContext } from "react";
import { SkillSheetContext } from "../SkillSheetState/SkillSheetState";

const PR: React.FC = () => {
  
  const {PR} = useContext(SkillSheetContext);

  return (
    <table className="mt-5 w-full grid border-2 border-b-0">
      <tr className="w-full border-b-2">
        <td className="bg-skillsheetgray w-full grid text-center">自己PR</td>
      </tr>
      <tr className="p-2 border-b-2 h-40">
        <td>{PR}</td>
      </tr>
    </table>
  );
};

export default PR;
