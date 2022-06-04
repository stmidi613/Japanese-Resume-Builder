import React, { useContext } from "react";
import { Form2Context } from "../../ResumeState/Form2State";
import HistoryInput from "../Page1/HistoryInput";

const Page2History: React.FC = () => {
  const { workHist, educHist } = useContext(Form2Context);
  return (
    <>
      <section className="mx-[5%] my-5 border-t-[1px] border-x-2">
        {workHist.map((item, index) =>
          index > 4 ||
          (index > 1 && educHist.length > 4) ||
          (index > 2 && educHist.length > 3) ? (
            <>
              <HistoryInput
                key={item.workId}
                startText={`${item.companyName} ${item.startExpl}`}
                startYear={item.workStartDate.slice(0, 4)}
                startMonth={item.workStartDate.slice(5, 7)}
                endText={`${item.companyName} ${item.endExpl}`}
                endYear={item.workEndDate.slice(0, 4)}
                endMonth={item.workEndDate.slice(5, 7)}
              />
            </>
          ) : (
            ""
          )
        )}
        {(workHist.length > 3) || (workHist.length + educHist.length > 6) ? 
        (<div className="text-right">
          <HistoryInput
            startYear=""
            startMonth=""
            startText=""
            endYear=""
            endMonth=""
            endText="以上"
          />
        </div>) : (<div>
          <HistoryInput
            startYear=""
            startMonth=""
            startText=""
            endYear=""
            endMonth=""
            endText=""
          />
        </div>) }
      </section>
    </>
  );
};

export default Page2History;
