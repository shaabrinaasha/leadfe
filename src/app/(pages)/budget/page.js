import React from "react";
import PageLayout from "@/app/components/global/layout-components/page-layout";
import CreateButton from "@/app/components/global/blue-button";
import AddBudgetModal from "@/app/components/pages/budget/add-modal";
import EditBudgetModal from "@/app/components/pages/budget/edit-modal";
import { MdAdd } from "react-icons/md";
import OverallBudgetTable from "@/app/components/pages/budget/overall-table";
import EmployeeBudgetTable from "@/app/components/pages/budget/employee-table";
import CurrencyTable from "@/app/components/pages/budget/currency-table";

import dynamic from "next/dynamic";
import Link from "next/link";

// const MdAdd = dynamic(
//   () => import("react-icons/md"),
// );


// const OverallBudgetTable = dynamic(
//   () => import("@/app/components/pages/budget/overall-table"),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   }
// );

// const EmployeeBudgetTable = dynamic(
//   () => import("@/app/components/pages/budget/employee-table"),
//   {
//     ssr: false,
//     loading: () => <p>Loading...</p>,
//   }
// );

export default function budget(props) {
  const showAdd = props.searchParams?.showAdd;
  const showEditBudget = props.searchParams?.showEditBudget;
  const budgetYear = props.searchParams?.budgetYear;
  return (
    <PageLayout title={"Budget"}>
      <div>
        <Link href="/budget/?showAdd=true">
          <CreateButton width={"w-[140px] "} type={"button"}>
            <div className="flex items-center justify-between">
              <MdAdd className="text-[15px]" />
              <p>Add New Budget</p>
            </div>
          </CreateButton>
        </Link>
      </div>

      <div className="bg-white drop-shadow-lg rounded-lg my-5">
        <div className="p-5">
          <h1 className="text-[18px] font-bold text-sky-950">Overall Budget</h1>
          <OverallBudgetTable />
        </div>
      </div>

      <div className="bg-white drop-shadow-lg rounded-lg my-5">
        <div className="p-5">
          <h1 className="text-[18px] font-bold text-sky-950">Employee Benefit Personal Budget</h1>
          <EmployeeBudgetTable />
        </div>
      </div>
      <div className="bg-white drop-shadow-lg rounded-lg my-5">
        <div className="p-5">
          <h1 className="text-[18px] font-bold text-sky-950">Exchange Rates</h1>
          <CurrencyTable />
        </div>
      </div>
      {showAdd && <AddBudgetModal/>}
      {showEditBudget && <EditBudgetModal year={budgetYear}/>}
    </PageLayout>
  );
}
