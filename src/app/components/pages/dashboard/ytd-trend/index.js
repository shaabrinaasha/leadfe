"use client";
import React, { useEffect, useState } from "react";
import {  abbrNum } from "@/app/utils/functions";
import { ChartsReferenceLine } from "@mui/x-charts/ChartsReferenceLine";

import { BarChart } from "@mui/x-charts/BarChart";
// import "@/app/utils/style/style.css";

export default function yearToDateTotal({ data, budget }) {
  const [brokerage, setBrokerage] = useState([0]);
  const [consultation, setConsultation] = useState([0]);
  const [xLabels, setXLabels] = useState([""]);

  useEffect(() => {
    const brokArr = [];
    const consArr = [];
    const labelArr = [];
    data.map((itr) => {
      brokArr.push(parseInt(itr.brokerage));
      consArr.push(parseInt(itr.consultation));
      labelArr.push(itr.title);
    });
    setBrokerage(brokArr);
    setConsultation(consArr);
    setXLabels(labelArr);
  }, []);
  // const test = data.total

  return (
    <div className="bg-white lg:col-span-4  drop-shadow-xl rounded-lg p-5">
      <h2 className="text-[18px] font-bold text-sky-950">
        Year-to-Date Estimation
      </h2>
      <h3 className="text-[15px] ">
        year to date budget income based on active sales
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
                color: "rgb(192 38 211)",
                valueFormatter: (value) => `IDR ${abbrNum(value, 2)}`,
              },
              {
                data: consultation,
                label: "Consultation Fee",
                id: "consultationId",
                stack: "total",
                color: "rgb(245 158 11)",
                valueFormatter: (value) => `IDR ${abbrNum(value, 2)}`,
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
                valueFormatter: (value) => `${abbrNum(value, 2)}`,
              },
            ]}
          >
            <ChartsReferenceLine
              y={parseInt(budget)}
              label={ `Budget IDR ${abbrNum(budget, 2)}`}
              labelAlign="end"
              lineStyle={{ strokeDasharray: "5 5", strokeWidth: "2", strokeOpacity: "50%" }}
            />
          </BarChart>

          <div className="grid grid-cols-2">
            <div className="flex items-center justify-center ">
              <div className="w-[15px] h-[15px] bg-fuchsia-600 rounded-full "></div>
              <p className="text-[15px]  ml-2 font-medium  ">Brokerage Fee</p>
            </div>
            <div className="flex items-center justify-center ">
              <div className="w-[15px] h-[15px] bg-amber-500 rounded-full "></div>
              <p className="text-[15px]  ml-2 font-medium  ">
                Consultation Fee
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
