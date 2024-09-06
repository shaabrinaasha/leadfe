"use client";
import React, { useEffect, useState } from "react";
import { calcPercentage, abbrNum } from "@/app/utils/functions";
import Link from "next/link";

export default function topSales({ data }) {
  const [sales, setSales] = useState([
    {
      sales_id: "0",
      insured_name: "0",
      account_owner: "0",
      estimated_income: "0",
    },
  ]);

  useEffect(() => {
    setSales(data);
    // const totalPercent = calcPercentage(data.total, data.budget);
    // const brokeragePercent = calcPercentage(data.brokerage, data.total);
    // setYTD({
    //   ...ytd,
    //   budget: data.budget,
    //   brokerage: data.brokerage,
    //   consultation: data.consultation,
    //   total: data.total,
    //   totalPercent: totalPercent,
    //   brokeragePercent: brokeragePercent,
    // });
  }, []);
  // const test = data.total

  return (
    <div className="bg-white col-span-3  drop-shadow-xl rounded-lg p-5">
      <h2 className="text-[18px] font-bold text-sky-950">Top Sales</h2>
      <h3 className="text-[15px] ">
        top active sales based on estimated income
      </h3>

      <div className="flex flex-col">
        
        {sales.map((data, idx) => (
          <Link href={"/dashboard"}>
          <div key={data.sales_id} className="flex justify-between items-center border-2 p-4 my-1 hover:bg-gradient-to-b from-indigo-500 to-indigo-600 border-indigo-500 drop-shadow-md rounded-xl hover:text-white">
          <div>
            <p className="font-semibold text-[15px]">{data.insured_name}</p>
            <p className="text-gray-400 text-[12px]">{data.account_owner}</p>
          </div>
          <p className="font-bold text-[15px]">IDR {abbrNum(parseInt(data.estimated_income),2)}</p>
        </div></Link>
        ))}
      </div>
    </div>
  );
}
