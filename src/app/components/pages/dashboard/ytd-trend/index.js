"use client";
import React, { useEffect, useState } from "react";
import {  formatCount } from "@/app/utils/functions";

import dynamic from "next/dynamic";

// const formatCount = dynamic(
//   () => import("@/app/utils/functions").then(
//     (mod) => mod.formatCount)
// );


const BarChart = dynamic(
  () => import("@mui/x-charts/BarChart").then(
    (mod) => mod.BarChart)
);

const ChartsReferenceLine = dynamic(
  () => import("@mui/x-charts/ChartsReferenceLine").then(
    (mod) => mod.ChartsReferenceLine),
);


// import "@/app/utils/style/style.css";

export default function yearToDateTrend({ data, budget }) {
  
  const [brokerage, setBrokerage] = useState([0]);
  const [consultation, setConsultation] = useState([0]);
  const [endorsement, setEndorsement] = useState([0]);
  const [xLabels, setXLabels] = useState([""]);

  useEffect(() => {
    const brokArr = [];
    const consArr = [];
    const endArr = []
    const labelArr = [];
    data.map((itr) => {
      brokArr.push(parseInt(itr.brokerage));
      consArr.push(parseInt(itr.consultation));
      endArr.push(parseInt(itr.endorsement));
      labelArr.push(itr.title);
    });
    setBrokerage(brokArr);
    setConsultation(consArr);
    setEndorsement(endArr)
    setXLabels(labelArr);
  }, []);
  // const test = data.total
  console.log(brokerage)
  return (
    <div className="bg-white lg:col-span-4  drop-shadow-xl rounded-lg p-5">
      <h2 className="text-[18px] font-bold text-sky-950">
        Year-to-Date Result
      </h2>
      <h3 className="text-[15px] ">
        year to date income result based on sales with win status
      </h3>

      <div className="w-full">
        <div className="">
          {/* <p className="text-nowrap mt-2 p-0 font-semibold text-[12px]">{"Total Income (IDR)"}</p> */}
          <BarChart
            padding={0}
            slotProps={{
              legend: {
                // position: { vertical: "bottom", horizontal: "middle" },
                // padding: 4,
                // itemMarkHeight: 7,
                // borderRadius:5
                hidden: true,
              },
            }}
            borderRadius={5}
            height={300}
            series={[
              {
                data: brokerage,
                label: "Brokerage Fee",
                id: "brokerageId",
                stack: "total",
                color: "rgb(14 165 233)",
                valueFormatter: (value) => `IDR ${formatCount(value)}`,
              },
              {
                data: consultation,
                label: "Consultation Fee",
                id: "consultationId",
                stack: "total",
                color: "rgb(20 184 166)",
                valueFormatter: (value) => `IDR ${formatCount(value)}`,
              },
              {
                data: endorsement,
                label: "Endorsement Fee",
                id: "endorsementId",
                stack: "total",
                color: "rgb(245 158 11)",
                valueFormatter: (value) => `IDR ${formatCount(value)}`,
              },
            ]}
            xAxis={[
              {
                data: xLabels,
                scaleType: "band",
                tickPlacement: "middle",
                tickLabelPlacement: "middle",
                categoryGapRatio: 0.5,
              },
            ]}
            yAxis={[
              {
                valueFormatter: (value) => `${formatCount(value)}`,
              },
            ]}
          >
            <ChartsReferenceLine
              y={parseInt(budget)}
              label={ `Budget IDR ${formatCount(budget)}`}
              labelAlign="end"
              lineStyle={{ strokeDasharray: "5 5", strokeWidth: "2", strokeOpacity: "50%" }}
            />
          </BarChart>

          <div className="grid md:grid-cols-3">
            <div className="flex items-center justify-center ">
              <div className="w-[15px] h-[15px] bg-sky-500 rounded-full "></div>
              <p className="text-[15px]  ml-2 font-medium  ">Brokerage Fee</p>
            </div>
            <div className="flex items-center justify-center ">
              <div className="w-[15px] h-[15px] bg-teal-500 rounded-full "></div>
              <p className="text-[15px]  ml-2 font-medium  ">
                Consultation Fee
              </p>
            </div>
            <div className="flex items-center justify-center ">
              <div className="w-[15px] h-[15px] bg-amber-500 rounded-full "></div>
              <p className="text-[15px]  ml-2 font-medium  ">
                Endorsement Fee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
