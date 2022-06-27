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
  languages: string;
  position: string;
  numberOfPers: string;
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
  languages,
  position,
  scale,
  numberOfPers,
  requirements,
  basicDesign,
  detailedDesign,
  implementation,
  simpleTest,
  conclusionTest,
  maintenance,
}) => {

  const months =
    (+projEnd.slice(0, 4) - +projStart.slice(0, 4)) * 12 +
    (+projEnd.slice(5, 7) - +projStart.slice(5, 7));

  return (
    <>
      <table className="w-full">
        <tbody className="mt-5 table">
          <tr className="info-table-row">
            <td className="grid place-content-center p-1 h-8">勤務先</td>
          </tr>
          <tr className="grid col-span-10">
            <td className="p-1 text-sm">{workPlace}</td>
          </tr>
        </tbody>
      </table>
      <table className="w-full">
        <tbody className="table">
          <tr className="grid col-span-2 text-sm border-r-2">
            <td className="bg-skillsheetgray short-cell">案件名</td>
            <td className="medium-cell h-56">
              {projStart}~<span className="break-words">{projEnd}</span>
              <br />
              <span>（{months}カ月）</span>
            </td>
          </tr>
          <tr className="grid col-span-6">
            <td className="project-name-cell text-sm">{projName}</td>
            <td className="grid grid-rows-2 overview-point-cell h-56">
              <span className="row-span-1 grid m-1">
                【概要】<p className="text-sm">{overview}</p>
              </span>
              <span className="row-span-1 grid m-1">
                【ポイント】<p className="text-sm">{points}</p>
              </span>
            </td>
          </tr>
          <tr className="mid-cell">
            <td className="bg-skillsheetgray text-xs short-cell">
              環境・<span className="break-before">言語</span>
            </td>
            <td className="medium-cell text-sm">{languages}</td>
          </tr>
          <tr className="grid col-span-3 h-56">
            <td className="bg-skillsheetgray short-cell">役割・役職</td>
            <td className="medium-cell h-12 text-sm">{position}</td>
            <td className="bg-skillsheetgray short-cell">規模・人数</td>
            <td className="medium-cell h-12"><p className="text-center">要員数：{numberOfPers}名</p><p className="text-center">（PJ 全体：{scale}名）</p></td>
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
