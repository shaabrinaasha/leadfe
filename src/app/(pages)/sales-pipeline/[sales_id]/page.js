import React from "react";
import PageLayout from "@/app/components/global/layout-components/page-layout";
import { DashboardFilter } from "@/app/components/pages/dashboard/component-imports";
import { salesList } from "@/app/utils/dummy";
import dynamic from "next/dynamic";
import Link from "next/link";

import CreateSalesForm from "@/app/components/pages/sales-pipeline/form/create-form";
import SalesDetailInfo from "@/app/components/pages/sales-pipeline/detail/info-container";
import TabContainer from "@/app/components/pages/sales-pipeline/input/tab-container";
export default function salesPipeline() {
  return (
    <PageLayout title={"Sales Pipeline"}>
      <div className="bg-white rounded-xl p-5 drop-shadow-lg">
        <h1 className="font-semibold text-sky-950 text-[18px]">
           Sales Pipeline Detail
        </h1>
        <div>
        <SalesDetailInfo></SalesDetailInfo>
        <TabContainer></TabContainer>
        </div>
      </div>
    </PageLayout>
  );
}
