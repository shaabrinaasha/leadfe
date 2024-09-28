"use client";
import React, { useEffect, useState } from "react";
import { calcPercentage, formatCount } from "@/app/utils/functions";

export default function monthlyTotal({ data }) {
  const [monthly, setMonthly] = useState({
    budget: "0",
    brokerage: "0",
    consultation: "0",
    total: "0",
    brokeragePercent: "0%",
    totalPercent: "0%",
    budgetPercent: "0%",
    max: "0",
  });

  useEffect(() => {
    const totalPercent = calcPercentage(data.total, data.max);
    const brokeragePercent = calcPercentage(data.brokerage, data.total);
    const budgetPercent = calcPercentage(data.budget, data.max)
    setMonthly({
      ...monthly,
      budget: formatCount(data.budget, true),
      brokerage: formatCount(data.brokerage, true),
      consultation: formatCount(data.consultation, true),
      total: formatCount(data.total, true),
      totalPercent: totalPercent,
      brokeragePercent: brokeragePercent,
      budgetPercent:budgetPercent,
      max: formatCount(data.max,true),
    });
  }, []);
  // const test = data.total

  return (
    <div className="bg-white col-span-3  drop-shadow-xl rounded-lg p-5">
      <h2 className="text-[18px] font-bold text-sky-950">Monthly Estimation</h2>
      <h3 className="text-[15px] ">
        monthly income estimation based on ongoing sales
      </h3>

      <div className="grid md:grid-cols-3  gap-2 divide-x my-3">
        {/* Brokerage fee */}
        <div>
          <div className="flex flex-wrap items-center justify-center ">
            <div className="w-[15px] h-[15px] bg-sky-500 rounded-full "></div>
            <p className="text-[15px]  ml-2 font-medium  ">Brokerage Fee</p>
          </div>

          <p className="text-[15px] font-bold items-center text-center">
            IDR {monthly.brokerage}
          </p>
        </div>
        {/* consultation fee */}
        <div>
          <div className="flex flex-wrap  items-center justify-center ml-1">
            <div className="w-[15px] h-[15px] bg-amber-500 rounded-full "></div>
            <p className="text-[15px]  ml-2 font-medium">Consultation Fee</p>
          </div>

          <p className="text-[15px] font-bold items-center text-center">
            IDR {monthly.consultation}
          </p>
        </div>
        {/* consultation fee */}
        <div>
          <div className="flex flex-wrap items-center justify-center ml-1">
            <div className="w-[15px] h-[15px] bg-red-600 rounded-full "></div>
            <p className="text-[15px]  ml-2 font-medium">Budget</p>
          </div>

          <p className="text-[15px] font-bold items-center text-center">
            IDR {monthly.budget}
          </p>
        </div>
      </div>
      {/* graph */}
      <div className="flex overflow-hidden mt-5 relative bg-slate-300 w-full h-7 rounded-lg drop-shadow-md">
        <div
          className="h-full bg-red-600  z-30  absolute "
          style={{ width: "4px", marginLeft:monthly.budgetPercent}}
        />
        <div
          className={
            "z-0 bg-gradient-to-b from-amber-400 to-amber-500  rounded-r-3xl  "
          }
          style={{ width: monthly.totalPercent }}
        >
          <div
            className={
              "z-10 bg-gradient-to-b from-sky-400 to-sky-600 h-full rounded-r-3xl"
            }
            style={{ width: monthly.brokeragePercent }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[18px] font-semibold">IDR {monthly.total}</p>
          <p className="text-[15px] font-regular">Total Estimated Income</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[18px] font-semibold">IDR {monthly.max}</p>
          <p className="text-[15px] font-regular">Max Prospect</p>
        </div>
      </div>
    </div>
  );
}
