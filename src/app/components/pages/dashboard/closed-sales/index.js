"use client"
import React, { useEffect, useState } from "react";

export default function closedSales({data}) {
  const [percent, setPercent] = useState("0%");

  const calcClosedSales = (win,lost) => {
    const total = parseInt(win)+parseInt(lost)
    const calc = (win / total) * 100;
    const string = calc.toString() + "%";
    // console.log(string);
    
    setPercent(string)
  };

  useEffect(() => {
    calcClosedSales(data.win,data.lost)
  }, []);

  return (
    <div className="bg-white col-span-4  drop-shadow-xl rounded-lg p-5">
      <h2 className="text-[18px] font-bold text-sky-950">
        Closed Sales Pipeline
      </h2>
      <h3 className="text-[15px]">
        total amount of closed sales pipeline this year
      </h3>
      {/* graph */}
      <div className="flex overflow-hidden mt-5  bg-gradient-to-b from-rose-500 to-rose-600 w-full h-7 rounded-3xl drop-shadow-md ">
        <div className={`bg-gradient-to-b from-emerald-500 to-emerald-600  `} style={{ width: percent }}></div>
      </div>
      <div className="flex justify-between">
        <div>
          <p className="text-[15px] font-semibold">{data.win}</p>
          <p className="text-[15px] font-regular">Win</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[15px] font-semibold">{data.lost}</p>
          <p className="text-[15px] font-regular">Lost</p>
        </div>
      </div>
    </div>
  );
}
