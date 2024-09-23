import React from "react";
import PageLayout from "@/app/components/global/layout-components/page-layout";
import CreateButton from "@/app/components/global/blue-button";
import AddBudgetModal from "@/app/components/pages/budget/add-modal";
import EditBudgetModal from "@/app/components/pages/budget/edit-modal";
import { MdAdd } from "react-icons/md";
import OverallBudgetTable from "@/app/components/pages/budget/overall-table";
import EmployeeBudgetTable from "@/app/components/pages/budget/employee-table";
import CurrencyTable from "@/app/components/pages/budget/currency-table";
import AddRateModal from "@/app/components/pages/budget/add-rate-modal";
import EditRateModal from "@/app/components/pages/budget/edit-rate-modal";
import Link from "next/link";



export default function budget(props) {
  const showAdd = props.searchParams?.showAdd;
  const showEditBudget = props.searchParams?.showEditBudget;
  const budgetYear = props.searchParams?.budgetYear;
  const showAddRate = props.searchParams?.showAddRate;
  const showEditRate = props.searchParams?.showEditRate;
  const rateYear = props.searchParams?.rateYear;
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
          <h1 className="text-[18px] font-bold text-sky-950">
            Employee Benefit Personal Budget
          </h1>
          <EmployeeBudgetTable />
        </div>
      </div>
      <div className="bg-white drop-shadow-lg rounded-lg my-5">
        <div className="p-5">
          <div className="flex justify-between">
            <h1 className="text-[18px] font-bold text-sky-950">
              Exchange Rates
            </h1>
            <div >
              <Link href="/budget/?showAddRate=true">
                <CreateButton width={"w-[130px] "} type={"button"}>
                  <div className="flex items-center justify-between">
                    <MdAdd className="text-[15px]" />
                    <p>Add New Rate</p>
                  </div>
                </CreateButton>
              </Link>
            </div>
          </div>

          <CurrencyTable />
        </div>
      </div>
      {showEditRate && <EditRateModal year={rateYear} /> }
      {showAddRate && <AddRateModal />}
      {showAdd && <AddBudgetModal />}
      {showEditBudget && <EditBudgetModal year={budgetYear} />}
    </PageLayout>
  );
}
