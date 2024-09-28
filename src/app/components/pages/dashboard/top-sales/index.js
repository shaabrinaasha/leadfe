"use client";
import React, { useEffect, useState } from "react";
import { formatCount } from "@/app/utils/functions";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";
import Link from "next/link";

export default function topSales({ dataOngoing, dataWon }) {
  const [tab, setTab] = useState(0);
  const [ongoing, setOngoing] = useState([
    {
      sales_id: "0",
      insured_name: "0",
      account_owner: "0",
      estimated_income: "0",
    },
  ]);

  const [won, setWon] = useState([
    {
      sales_id: "0",
      insured_name: "0",
      account_owner: "0",
      estimated_income: "0",
    },
  ]);

  useEffect(() => {
    setOngoing(dataOngoing);
    setWon(dataWon);
  }, []);
  // const test = dataOngoing.total

  return (
    <div className="bg-white col-span-3  drop-shadow-xl rounded-lg p-5">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-[18px] font-bold text-sky-950">
            Top Prospects {`(${tab == 0 ? "Ongoing" : "Won"} Sales)`}
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" className={`text-[40px] hover:text-sky-500 disabled:text-gray-400`} disabled={tab==0?true:false} onClick={()=>setTab(0)} >
              <MdArrowLeft />
            </button>
            <button type="button" className={`text-[40px] hover:text-sky-500 disabled:text-gray-400`} disabled={tab==1?true:false} onClick={()=>setTab(1)} >
              <MdArrowRight />
            </button>
          </div>
        </div>

        <h3 className="text-[15px] ">
          top sales based on estimated income this year
        </h3>
      </div>

      {tab == 0 && (
        <div className="flex flex-col">
          {ongoing.map((data, idx) => (
            <Link href={"/sales-pipeline/"+data.sales_id} key={idx}>
              <div className="flex justify-between items-center border-2 py-2 px-4 my-1 hover:bg-gradient-to-b from-sky-500 to-sky-600 border-sky-500 drop-shadow-md rounded-xl hover:text-white">
                <div>
                  <p className="font-semibold text-[15px]">
                    {data.insured_name}
                  </p>
                  <p className="text-gray-400 text-[12px]">
                    {data.account_owner}
                  </p>
                </div>
                <p className="font-bold text-[15px]">
                  IDR {formatCount(parseInt(data.estimated_income))}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {tab == 1 && (
        <div className="flex flex-col">
          {won.map((data, idx) => (
            <Link href={"/sales-pipeline/"+data.sales_id} key={idx}>
              <div className="flex justify-between items-center border-2 py-2 px-4 my-1 hover:bg-gradient-to-b from-teal-500 to-teal-600 border-teal-500 drop-shadow-md rounded-xl hover:text-white">
                <div>
                  <p className="font-semibold text-[15px]">
                    {data.insured_name}
                  </p>
                  <p className="text-gray-400 text-[12px]">
                    {data.account_owner}
                  </p>
                </div>
                <p className="font-bold text-[15px]">
                  IDR {formatCount(parseInt(data.estimated_income))}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
