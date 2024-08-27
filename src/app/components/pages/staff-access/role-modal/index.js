import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import ModalBase from "@/app/components/global/modal";
import Textfield from "@/app/components/global/textfield";
import Emailfield from "@/app/components/global/emailfield";
import Selectfield from "@/app/components/global/selectfield";
import SubmitButton from "@/app/components/global/blue-button";

const roleData = [
  {
    title: "Management",
    value: "Management",
  },
  {
    title: "Aviation",
    value: "Aviation",
  },
  {
    title: "Construction",
    value: "Construction",
  },
  {
    title: "Employee Benefit",
    value: "Employee Benefit",
  },
  {
    title: "Others",
    value: "Others",
  },
];

export default function changeRoleModal({userID, userRole}) {
  return (
    <ModalBase
      title={"Change user Role"}
      closePath={"/staff-access"}
      subtitle={
        "Change " + userID + "'s Role"
      }
    >
      <form className="md:w-[300px]">
        <Selectfield
          label={"Role"}
          id={"role"}
          mandatory={true}
          placeholder={"Select user role"}
          defaultValue={userRole}
          onChange={""}
          selectData={roleData}
        />

        <SubmitButton width={"w-full mt-5"} type={"submit"}>Submit</SubmitButton>
      </form>
    </ModalBase>
  );
}
