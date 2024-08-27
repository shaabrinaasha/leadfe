import React from "react";
import PageLayout from "@/app/components/global/layout-components/page-layout";
import CreateButton from "@/app/components/global/blue-button";
import CreateUserModal from "@/app/components/pages/staff-access/create-modal";
import ChangeRoleModal from "@/app/components/pages/staff-access/role-modal";
import DeleteUserModal from "@/app/components/pages/staff-access/delete-modal";
import AddBudgetModal from "@/app/components/pages/budget/add-modal";
import EditBudgetModal from "@/app/components/pages/budget/edit-modal";
import { MdAdd } from "react-icons/md";

import dynamic from "next/dynamic";
import Link from "next/link";

const OverallBudgetTable = dynamic(
  () => import("@/app/components/pages/budget/overall-table"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

const EmployeeBudgetTable = dynamic(
  () => import("@/app/components/pages/budget/employee-table"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

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
      {showAdd && <AddBudgetModal/>}
      {showEditBudget && <EditBudgetModal year={budgetYear}/>}
    </PageLayout>
  );
}
