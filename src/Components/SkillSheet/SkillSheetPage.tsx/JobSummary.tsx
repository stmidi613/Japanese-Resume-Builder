import React, { useContext } from "react";

import { SkillSheetContext } from "../SkillSheetState/SkillSheetState";

const JobSummary: React.FC = () => {
  const { nameFurigana, name, workSummary, KandE, technology, otherInfo } =
    useContext(SkillSheetContext);

  return (
    <table className="w-full">
      <tbody className="table">
        <tr className="info-table-row">
          <td className="short-cell">ふりがな</td>
          <td className="short-cell">氏名</td>
          <td className="medium-cell h-12">事務要約</td>
          <td className="medium-cell h-16">
            活かせる経験<span className="break-before text-center">・知識</span>
          </td>
        </tr>
        <tr className="grid col-span-6">
          <td className="short-cell text-sm">{nameFurigana}</td>
          <td className="short-cell text-sm">{name}</td>
          <td className="medium-cell h-12 text-sm">{workSummary}</td>
          <td className="medium-cell h-16">{KandE}</td>
        </tr>
        <tr className="bg-skillsheetgray mid-cell">
          <td className="medium-cell h-[5.5rem]">
            保有<span className="break-before">技術</span>
          </td>
          <td className="medium-cell h-[5.5rem]">
            その他
          </td>
        </tr>
        <tr className="grid col-span-3">
          <td className="medium-cell h-[5.5rem] text-sm">{technology}</td>
          <td className="medium-cell h-[5.5rem] text-sm">{otherInfo}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default JobSummary;
