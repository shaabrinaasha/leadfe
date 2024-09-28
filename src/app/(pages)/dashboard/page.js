import React from "react";
import PageLayout from "@/app/components/global/layout-components/page-layout";
// import {
//   // DashboardFilter,
//   // ClosedSales,
//   ActiveSales,
//   // MonthlyTotal,
//   // YearToDateTotal,
//   // YearToDateTrend,
//   // TopSales
// } from "@/app/components/pages/dashboard/component-imports";
import DashboardFilter from "@/app/components/pages/dashboard/filter-dropdown";
import ClosedSales from "@/app/components/pages/dashboard/closed-sales";
import ActiveSales from "@/app/components/pages/dashboard/active-sales";
import MonthlyTotal from "@/app/components/pages/dashboard/monthly-total";
import YearToDateTotal from "@/app/components/pages/dashboard/ytd-total";
import YearToDateTrend from "@/app/components/pages/dashboard/ytd-trend";
import TopSales from "@/app/components/pages/dashboard/top-sales";

const sampleData = {
  closedSales: {
    win: "20",
    lost: "10",
  },
  activeSales: "25",
  monthlyTotal: {
    budget: "1000000000",
    brokerage: "800000000",
    consultation: "500000000",
    total: "1300000000",
    max: "2000000000",
  },
  yearToDateTotal: {
    budget: "2000000000",
    brokerage: "2000000000",
    consultation: "650000000",
    total: "2650000000",
    max: "4000000000",
  },
  yearToDateTrend: {
    monthlyBudget: "1000000000",
    value: [
      {
        title: "jan",
        brokerage: "500000000",
        consultation: "300000000",
        endorsement: "200000000",
      },
      {
        title: "feb",
        brokerage: "500000000",
        consultation: "50000000",
        endorsement: "100000000",
      },
      {
        title: "apr",
        brokerage: "800000000",
        consultation: "40000000",
        endorsement: "10000000",
      },
      {
        title: "may",
        brokerage: "600000000",
        consultation: "500000000",
        endorsement: "30000000",
      },
      {
        title: "jun",
        brokerage: "700000000",
        consultation: "100000000",
        endorsement: "0",
      },
    ],
  },
  topSales: {
    ongoing: [
      {
        sales_id: "SP001",
        insured_name: "PT. Whitesky Aviation",
        estimated_income: "50000000",
        account_owner: "Jane Doe",
      },
      {
        sales_id: "SP002",
        insured_name: "PT. Whitesky Aviation",
        estimated_income: "50000000",
        account_owner: "Jane Doe",
      },
      {
        sales_id: "SP003",
        insured_name: "PT. Whitesky Aviation",
        estimated_income: "50000000",
        account_owner: "Jane Doe",
      },
      {
        sales_id: "SP004",
        insured_name: "PT. Whitesky Aviation",
        estimated_income: "50000000",
        account_owner: "Jane Doe",
      },
      {
        sales_id: "SP005",
        insured_name: "PT. Whitesky Aviation",
        estimated_income: "50000000",
        account_owner: "Jane Doe",
      },
    ],
    won: [
      {
        sales_id: "SP006",
        insured_name: "PT. Blacksky Aviation",
        estimated_income: "80000000",
        account_owner: "Richard Doe",
      },
      {
        sales_id: "SP007",
        insured_name: "PT. Blacksky Aviation",
        estimated_income: "80000000",
        account_owner: "Richard Doe",
      },
      {
        sales_id: "SP008",
        insured_name: "PT. Blacksky Aviation",
        estimated_income: "80000000",
        account_owner: "Richard Doe",
      },
      {
        sales_id: "SP009",
        insured_name: "PT. Blacksky Aviation",
        estimated_income: "80000000",
        account_owner: "Richard Doe",
      },
      {
        sales_id: "SP010",
        insured_name: "PT. Blacksky Aviation",
        estimated_income: "80000000",
        account_owner: "Richard Doe",
      },
    ],
  },
};

export default function dashboard() {
  return (
    <PageLayout title={"Dashboard"}>
      <div>
        <div className="w-60">
          <DashboardFilter />
        </div>
        {/* first row */}
        <div className="grid md:grid-cols-6 gap-4 my-3 h-full ">
          <ClosedSales data={sampleData.closedSales} />
          <ActiveSales active={sampleData.activeSales} />
        </div>
        <div className="grid md:grid-cols-6 gap-4 my-3 h-full">
          <MonthlyTotal data={sampleData.monthlyTotal} />
          <YearToDateTotal data={sampleData.yearToDateTotal} />
        </div>
        <div className="grid lg:grid-cols-7 gap-4 my-3 h-full">
          <YearToDateTrend
            data={sampleData.yearToDateTrend.value}
            budget={sampleData.yearToDateTrend.monthlyBudget}
          />
          <TopSales
            dataOngoing={sampleData.topSales.ongoing}
            dataWon={sampleData.topSales.won}
          />
        </div>
      </div>
    </PageLayout>
  );
}
