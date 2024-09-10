"use client";
import React, { useEffect, useState } from "react";
import Section from "@/app/components/global/section";
import ProgressDonut from "./progress-donut";
import { salesDetailProgress } from "@/app/utils/dummy";
import { formatCount } from "@/app/utils/functions";
export default function salesProgressInfo({ progress, incomeEst }) {
  const [current, setCurrent] = useState({
    progress: "",
    label: "Loading...",
    requirements: "",
  });

  const matchProgress = (arr) => {
    const findResult = arr.find((x) => x.progress == progress);
    setCurrent(findResult);
  };
  useEffect(() => {
    matchProgress(salesDetailProgress);
  }, []);
  return (
    <div>
      <Section title={"Progress Information"}>
        <div className=" flex items-center  ">
          <ProgressDonut progress={progress}></ProgressDonut>
          <div className="ml-5">
            <h2 className="text-[15px] font-semibold">{current.label}</h2>
            <p className="text-[12px] font-semibold text-gray-500">
              Requirements
            </p>
            <p className="text-[12px] ">{current.requirements}</p>

            <div className="mt-5">
              <p className="text-[12px] font-semibold text-gray-500">
                Income Estimation
              </p>
              <p className="text-[13px] font-semibold ">IDR {formatCount(incomeEst)}</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
