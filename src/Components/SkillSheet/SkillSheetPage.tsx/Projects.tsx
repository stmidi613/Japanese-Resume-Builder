import React from "react";

const Projects: React.FC = () => {
  return (
    <>
      <table className="mt-5 table">
        <tr className="info-table-row">
          <td className="grid place-content-center p-1 h-8">勤務先</td>
        </tr>
        <tr className="grid col-span-2">
          <td className="grid p-1"></td>
        </tr>
      </table>
      <table className="table">
        <tr className="grid col-span-2 text-sm border-r-[1px]">
          <td className="bg-skillsheetgray short-cell">案件名</td>
          <td className="medium-cell h-56"></td>
        </tr>
        <tr className="grid col-span-6">
          <td className="short-cell"></td>
          <td className="medium-cell h-56">
            <span>概要</span>
            <span>ポイント</span>
          </td>
        </tr>
        <tr className="mid-cell">
          <td className="bg-skillsheetgray text-sm short-cell">環境・言語</td>
          <td className="medium-cell"></td>
        </tr>
        <tr className="grid col-span-3 h-56">
          <td className="bg-skillsheetgray short-cell">役割・役職</td>
          <td className="medium-cell h-12"></td>
          <td className="bg-skillsheetgray short-cell">規模・人数</td>
          <td className="medium-cell h-12"></td>
          <td className="bg-skillsheetgray short-cell">担当工程</td>
          <td className="bg-skillsheetgray mini-table-container">
            <table className="mini-table">
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
            </table>
          </td>
          <td className="mini-table-container">
            <table className="mini-table">
              <tr className="mini-table-row">
                <td className="circle"></td>
              </tr>
              <tr className="mini-table-row">
                <td className="circle"></td>
              </tr>
              <tr className="mini-table-row">
                <td className="circle"></td>
              </tr>
              <tr className="mini-table-row">
                <td className="circle"></td>
              </tr>
              <tr className="mini-table-row">
                <td className="circle"></td>
              </tr>
              <tr className="mini-table-row">
                <td className="circle"></td>
              </tr>
              <tr className="last-cell">
                <td className="circle"></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </>
  );
};

export default Projects;
