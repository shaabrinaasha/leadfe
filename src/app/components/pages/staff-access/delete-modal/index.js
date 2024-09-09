import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import ModalBase from "@/app/components/global/modal";
import Textfield from "@/app/components/global/textfield";
import Emailfield from "@/app/components/global/emailfield";
import Selectfield from "@/app/components/global/selectfield";
import SubmitButton from "@/app/components/global/blue-button";
import DeleteButton from "@/app/components/global/red-button";

const roleData = [
  {
    label: "Management",
    value: "management",
  },
  {
    label: "Aviation",
    value: "aviation",
  },
  {
    label: "Construction",
    value: "construction",
  },
  {
    label: "Employee Benefit",
    value: "EB",
  },
  {
    label: "Others",
    value: "others",
  },
];

export default function deleteUserModal({ userID }) {
  return (
    <ModalBase
      title={"Are you sure you want to delete this user? "}
      closePath={"/staff-access"}
      subtitle={"This user would not be able to access the system anymore"}
    >
      <div className=" ">
        <div className="grid grid-cols-3  my-2 ">
          <p className="font-bold text-[12px] ">Username</p>
          <p className="text-[12px] col-span-2">: {userID}</p>
        </div>
        <div className="grid grid-cols-3  my-2 ">
          <p className="font-bold text-[12px] ">Email</p>
          <p className="text-[12px] col-span-2">
            : {"john.doe@leadbrokers-id"}
          </p>
        </div>
        <div className="grid grid-cols-3  my-2 ">
          <p className="font-bold text-[12px] ">Name</p>
          <p className="text-[12px] col-span-2">: {"John Doe"}</p>
        </div>
        <div className="grid grid-cols-3  my-2 ">
          <p className="font-bold text-[12px] ">Mobile</p>
          <p className="text-[12px]">: {"+628589768908"}</p>
        </div>
        <div className="grid grid-cols-3  my-2 ">
          <p className="font-bold text-[12px] ">Role</p>
          <p className="text-[12px] col-span-2">: {"Aviation"}</p>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <DeleteButton width={"w-20 mt-5"} type={"submit"} onClick={""}>
          Delete
        </DeleteButton>
      </div>
    </ModalBase>
  );
}
