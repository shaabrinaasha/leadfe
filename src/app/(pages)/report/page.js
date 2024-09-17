import React from "react";
import PageLayout from "@/app/components/global/layout-components/page-layout";
import { DashboardFilter } from "@/app/components/pages/dashboard/component-imports";
import { salesList } from "@/app/utils/dummy";
import dynamic from "next/dynamic";
import Link from "next/link";
import SalesListContent from "@/app/components/pages/sales-pipeline/sales-list/list-content";
import ReportContent from "@/app/components/pages/report/report-container/list-content";
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

export default function report() {
  return (
    <PageLayout title={"Report"}>
      <div>
        {/* <SalesListTable data={salesList} /> */}
        <ReportContent />
      </div>
    </PageLayout>
  );
}
