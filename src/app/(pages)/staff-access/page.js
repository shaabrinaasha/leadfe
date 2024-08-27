import React from "react";
import PageLayout from "@/app/components/global/layout-components/page-layout";
import CreateButton from "@/app/components/global/blue-button";
import CreateUserModal from "@/app/components/pages/staff-access/create-modal";
import ChangeRoleModal from "@/app/components/pages/staff-access/role-modal";
import DeleteUserModal from "@/app/components/pages/staff-access/delete-modal";
// import Table from "@/app/components/pages/staff-access/table"
import { MdAdd } from "react-icons/md";

import dynamic from "next/dynamic";
import Link from "next/link";

const Table = dynamic(
  () => import("@/app/components/pages/staff-access/table"),
  {
    ssr: false,
    loading: () => <p>Loading...</p>,
  }
);

export default function page(props) {
  const showCreate = props.searchParams?.showCreate;
  const showChangeRole = props.searchParams?.showChangeRole;
  const showDeleteUser = props.searchParams?.showDeleteUser;
  const userID = props.searchParams?.userID;
  const userRole = props.searchParams?.userRole;
  return (
    <PageLayout title="Staff Access">
      
      <div>
        <Link href="/staff-access/?showCreate=true">
          <CreateButton width={"w-[140px] "} type={"button"}>
            <div className="flex items-center justify-between">
              <MdAdd className="text-[15px]" />
              <p>Create New User</p>
            </div>
          </CreateButton>
        </Link>

        <div className="bg-white drop-shadow-lg rounded-lg my-5">
          <div className="p-5">
            <h1 className="text-[18px] font-bold text-sky-950">User List</h1>
            <Table/>
          </div>
        </div>
      </div>
      {showCreate && <CreateUserModal/>}
      {showChangeRole && <ChangeRoleModal userID={userID} userRole={userRole}/>}
      {showDeleteUser && <DeleteUserModal userID={userID} />}
    </PageLayout>
    
  );
}
