import React from 'react';

const JobSummary: React.FC = () => {
  return (
    <table className="table">
      <tr className="info-table-row">
        <td className="short-cell">
          ふりがな
        </td>
        <td className="short-cell">
          氏名
        </td>
        <td className="medium-cell h-12">
          事務要約
        </td>
        <td className="medium-cell h-16">
          活かせる経験<span className='break-before text-center'>・知識</span>
        </td>
      </tr>
      <tr className="grid col-span-6">
        <td className="short-cell"></td>
        <td className="short-cell"></td>
        <td className="medium-cell h-12"></td>
        <td className="medium-cell h-16"></td>
      </tr>
      <tr className="bg-skillsheetgray mid-cell">
        <td className="medium-cell">
          保有<span className='break-before'>技術</span>
        </td>
        <td className="medium-cell">
          その他<span className='break-before opacity-0'>T</span>
        </td>
      </tr>
      <tr className="grid col-span-3">
        <td className="medium-cell"></td>
        <td className="medium-cell"></td>
      </tr>
    </table>
  )
}

export default JobSummary