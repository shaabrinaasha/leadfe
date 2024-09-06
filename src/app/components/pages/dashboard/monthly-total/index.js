"use client";
import React, { useEffect, useState } from "react";
import { calcPercentage, abbrNum } from "@/app/utils/functions";

export default function monthlyTotal({ data }) {
  const [monthly, setMonthly] = useState({
    budget: "0",
    brokerage: "0",
    consultation: "0",
    total: "0",
    brokeragePercent: "0%",
    totalPercent: "0%",
  });

  useEffect(() => {
    const totalPercent = calcPercentage(data.total, data.budget);
    const brokeragePercent = calcPercentage(data.brokerage, data.total);
    setMonthly({
      ...monthly,
      budget: data.budget,
      brokerage: data.brokerage,
      consultation: data.consultation,
      total: data.total,
      totalPercent: totalPercent,
      brokeragePercent: brokeragePercent,
    });
  }, []);
  // const test = data.total

  return (
    <div className="bg-white col-span-3  drop-shadow-xl rounded-lg p-5">
      <h2 className="text-[18px] font-bold text-sky-950">Monthly Estimation</h2>
      <h3 className="text-[15px] ">monthly budget income based on active sales</h3>

      <div className="grid grid-cols-2 gap-2 divide-x my-3">
        {/* Brokerage fee */}
        <div>
          <div className="flex items-center justify-center ">
            <div className="w-[15px] h-[15px] bg-purple-500 rounded-full "></div>
            <p className="text-[15px]  ml-2 font-medium  ">Brokerage Fee</p>
          </div>

          <p className="text-[15px] font-bold items-center text-center">
            IDR {abbrNum(parseInt(monthly.brokerage), 2)}
          </p>
        </div>
        {/* consultation fee */}
        <div>
          <div className="flex items-center justify-center ml-1">
            <div className="w-[15px] h-[15px] bg-amber-500 rounded-full "></div>
            <p className="text-[15px]  ml-2 font-medium">Consultation Fee</p>
          </div>

          <p className="text-[15px] font-bold items-center text-center">
            IDR {abbrNum(parseInt(monthly.consultation), 2)}
          </p>
        </div>
      </div>
      {/* graph */}
      <div className="flex overflow-hidden mt-5  bg-slate-300 w-full h-7 rounded-lg drop-shadow-md">
        <div
          className={
            "bg-gradient-to-b from-amber-400 to-amber-500  rounded-r-3xl  "
          }
          style={{ width: monthly.totalPercent }}
        >
          <div
            className={
              "bg-gradient-to-b from-purple-500 to-purple-600 h-full rounded-r-3xl"
            }
            style={{ width: monthly.brokeragePercent }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between">
        <div>
          <p className="text-[18px] font-semibold">
            IDR {abbrNum(parseInt(monthly.total), 3)}
          </p>
          <p className="text-[15px] font-regular">Total Estimated Income</p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[18px] font-semibold">
            IDR {abbrNum(parseInt(monthly.budget), 3)}
          </p>
          <p className="text-[15px] font-regular">Budget</p>
        </div>
      </div>
    </div>
  );
}
