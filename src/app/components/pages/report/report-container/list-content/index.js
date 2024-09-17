"use client";
import React, { useEffect, useState } from "react";
import { reportDummy } from "@/app/utils/dummy";
import dynamic from "next/dynamic";
//import  SalesListTable  from "@/app/components/pages/sales-pipeline/sales-list/filtered-table";
import ReportHeader from "../list-header";

const ReportTable = dynamic(
  () =>
    import("../filtered-table"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function reportContent() {
  const [filteredList, setFilteredList] = useState(reportDummy);
  
  return (
    <div className="w-full">
      <div>
        {/* <SalesListSearch /> */}

        <ReportHeader
          setFilteredList={setFilteredList}
          data={reportDummy}
        />
      </div>

      <div className="bg-white drop-shadow-lg rounded-lg my-5">
        <div className="p-5">
          <h1 className="text-[18px] font-bold text-sky-950">
            Sales Pipeline List
          </h1>
          {/* <SalesListTable data={salesList} /> */}
          <ReportTable data={reportDummy} />
        </div>
      </div>
    </div>
  );
}
