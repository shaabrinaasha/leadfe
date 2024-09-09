"use client";
import React, { useEffect, useState } from "react";
import { salesList } from "@/app/utils/dummy";
import dynamic from "next/dynamic";
//import  SalesListTable  from "@/app/components/pages/sales-pipeline/sales-list/filtered-table";
import SalesListHeader from "@/app/components/pages/sales-pipeline/sales-list/list-header";

const SalesListTable = dynamic(
  () =>
    import("@/app/components/pages/sales-pipeline/sales-list/filtered-table"),
  {
    loading: () => <p>Loading...</p>,
  }
);

export default function salesListContent() {
  const [filteredList, setFilteredList] = useState(salesList);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const invList = await fetchInvoiceList();
  //     // setSpinner(false);
  //     // setInvoiceList(invList);
  //     setFilteredList(salesList);
  //     // console.log(invList)
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="w-full">
      <div>
        {/* <SalesListSearch /> */}

        <SalesListHeader
          setFilteredList={setFilteredList}
          data={salesList}
        />
      </div>

      <div className="bg-white drop-shadow-lg rounded-lg my-5">
        <div className="p-5">
          <h1 className="text-[18px] font-bold text-sky-950">
            Sales Pipeline List
          </h1>
          {/* <SalesListTable data={salesList} /> */}
          <SalesListTable data={filteredList} />
        </div>
      </div>
    </div>
  );
}
