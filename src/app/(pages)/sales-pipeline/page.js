import React from "react";
import PageLayout from "@/app/components/global/layout-components/page-layout";
import { DashboardFilter } from "@/app/components/pages/dashboard/component-imports";
import { salesList } from "@/app/utils/dummy";
import dynamic from "next/dynamic";
import Link from "next/link";
import SalesListContent from "@/app/components/pages/sales-pipeline/sales-list/list-content";

// const SalesListTable = dynamic(
//   () =>
//     import("@/app/components/pages/sales-pipeline/filtered-table").then(
//       (mod) => mod.salesListTable
//     ),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   }
// );

// const SalesListSearch = dynamic(
//   () =>
//     import("@/app/components/pages/sales-pipeline/sales-list/filtered-table").then(
//       (mod) => mod.salesListSearch
//     ),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   }
// );

export default function salesPipeline() {
  return (
    <PageLayout title={"Sales Pipeline"}>
      <div>
        {/* <SalesListTable data={salesList} /> */}
        <SalesListContent />
      </div>
    </PageLayout>
  );
}
