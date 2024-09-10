import React from "react";
import { salesDetailProgress } from "@/app/utils/dummy";

export default function tab({
  current,
  setCurrent,
  progressStatus,
  setProgressStatus,
}) {
  const buttonStyleCondition = (data) => {
    if (parseInt(current) == parseInt(data)) {
      return "bg-sky-600 text-white";
    }
    if (parseInt(current) < parseInt(data) && parseInt(data) >= 40) {
      return "bg-slate-300 ";
    } else {
      return "bg-slate-50 ";
    }
  };

  const statusCondition = (data) => {
    if (parseInt(data) <= parseInt(progressStatus)) {
      return "Complete";
    } else {
      return "Incomplete";
    }
  };

  const statusStyleCondition = (data) => {
    if (parseInt(data) <= parseInt(progressStatus)) {
      return " bg-amber-500";
    } else {
      return " bg-gray-500 ";
    }
  };

  const handleClick = (data) => {
    setCurrent(data);
  };

  return (
    <div className=" p-5 border-2 border-sky-600 rounded-lg flex overflow-x-auto">
      {salesDetailProgress.map((data) => (
        <div className="w-[300px] flex items-center">
          <button
            disabled={
              parseInt(data.progress) >= 40 &&
              parseInt(current) < parseInt(data.progress)
                ? true
                : false
            }
            className={
              "w-[150px] h-[130px] grid grid-rows-2 content-between drop-shadow-md p-3  rounded-xl " +
              buttonStyleCondition(data.progress)
            }
            onClick={() => handleClick(data.progress)}
          >
            <div className="w-full flex justify-between text-[15px]">
              <p className="text-left text-wrap font-semibold ">{data.label}</p>
              <p className="text-right font-semibold ">
                {data.label != "Endorsement" ? data.progress + "%" : ""}
              </p>
            </div>
            <p
              className={
                " items-center text-[12px] rounded-xl text-white drop-shadow-md mt-8 w-24  text-center  h-5" +
                statusStyleCondition(data.progress)
              }
            >
              {statusCondition(data.progress)}
            </p>
          </button>
          <div className="w-10 bg-gray-300 h-1"></div>
        </div>
      ))}
    </div>
  );
}
