import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

interface Props {
  workPlace: string;
  projName: string;
  projStart: string;
  projEnd: string;
  overview: string;
  points: string;
  language: string;
  position: string;
  scale: string;
  requirements: boolean;
  basicDesign: boolean;
  detailedDesign: boolean;
  implementation: boolean;
  simpleTest: boolean;
  conclusionTest: boolean;
  maintenance: boolean;
}

const Project: React.FC<Props> = ({
  workPlace,
  projName,
  projStart,
  projEnd,
  overview,
  points,
  language,
  position,
  scale,
  requirements,
  basicDesign,
  detailedDesign,
  implementation,
  simpleTest,
  conclusionTest,
  maintenance,
}) => {

  return (
    <>
      <table className="w-full">
        <tbody className="mt-5 table">
          <tr className="info-table-row">
            <td className="grid place-content-center p-1 h-8">勤務先</td>
          </tr>
          <tr className="grid col-span-2">
            <td className="grid p-1">{workPlace}</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full">
        <tbody className="table">
          <tr className="grid col-span-2 text-sm border-r-2">
            <td className="bg-skillsheetgray short-cell">案件名</td>
            <td className="medium-cell h-56">
              {projStart}~<span className="break-words">
                {projEnd}
                </span>
            </td>
          </tr>
          <tr className="grid col-span-6">
            <td className="short-cell">{projName}</td>
            <td className="grid grid-rows-2 medium-cell h-56">
              <span className="row-span-1 grid m-4 w-[30rem]">
                【概要】<p>{overview}</p>
              </span>
              <span className="row-span-1 grid m-4 w-[30rem]">
                【ポイント】<p>{points}</p>
              </span>
            </td>
          </tr>
          <tr className="mid-cell">
            <td className="bg-skillsheetgray text-xs short-cell">
              環境・<span className="break-before">言語</span>
            </td>
            <td className="medium-cell">{language}</td>
          </tr>
          <tr className="grid col-span-3 h-56">
            <td className="bg-skillsheetgray short-cell">役割・役職</td>
            <td className="medium-cell h-12">{position}</td>
            <td className="bg-skillsheetgray short-cell">規模・人数</td>
            <td className="medium-cell h-12">{scale}</td>
            <td className="bg-skillsheetgray short-cell">担当工程</td>
            <td className="bg-skillsheetgray mini-table-container">
              <table className="w-full">
                <tbody className="mini-table">
                  <tr className="mini-table-row">
                    <td className="mini-table-td">要件定義</td>
                  </tr>
                  <tr className="mini-table-row">
                    <td className="mini-table-td">基本設計</td>
                  </tr>
                  <tr className="mini-table-row">
                    <td className="mini-table-td">詳細設計</td>
                  </tr>
                  <tr className="mini-table-row">
                    <td className="mini-table-td">実装</td>
                  </tr>
                  <tr className="mini-table-row">
                    <td className="mini-table-td">単テスト</td>
                  </tr>
                  <tr className="mini-table-row">
                    <td className="mini-table-td">結テスト</td>
                  </tr>
                  <tr className="last-cell">
                    <td className="mini-table-td">保守運用</td>
                  </tr>
                </tbody>
              </table>
            </td>
            <td className="mini-table-container">
              <table className="w-full">
                <tbody className="mini-table">
                  <tr className="mini-table-row">
                    <td>
                      {requirements ? <FontAwesomeIcon icon={faCircle} /> : ""}
                    </td>
                  </tr>
                  <tr className="mini-table-row">
                    <td>
                      {basicDesign ? <FontAwesomeIcon icon={faCircle} /> : ""}
                    </td>
                  </tr>
                  <tr className="mini-table-row">
                    <td>
                      {detailedDesign ? (
                        <FontAwesomeIcon icon={faCircle} />
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                  <tr className="mini-table-row">
                    <td>
                      {implementation ? (
                        <FontAwesomeIcon icon={faCircle} />
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                  <tr className="mini-table-row">
                    <td>
                      {simpleTest ? <FontAwesomeIcon icon={faCircle} /> : ""}
                    </td>
                  </tr>
                  <tr className="mini-table-row">
                    <td>
                      {conclusionTest ? (
                        <FontAwesomeIcon icon={faCircle} />
                      ) : (
                        ""
                      )}
                    </td>
                  </tr>
                  <tr className="last-cell">
                    <td>
                      {maintenance ? <FontAwesomeIcon icon={faCircle} /> : ""}
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Project;
