import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";
import ModalBase from "@/app/components/global/modal";
import Textfield from "@/app/components/global/textfield";
import Emailfield from "@/app/components/global/emailfield";
import Selectfield from "@/app/components/global/selectfield";
import SubmitButton from "@/app/components/global/blue-button";
import { positionData } from "@/app/utils/dummy";


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


export default function createUserModal() {
  return (
    <ModalBase
      title={"Create New User"}
      closePath={"/staff-access"}
      subtitle={
        "Username and password would be automatically generated for new user"
      }
    >
      <form>
        <Textfield
          label={"Name"}
          id={"name"}
          mandatory={true}
          placeholder={"input name here..."}
          onChange={""}
        />
        <Emailfield
          label={"Email"}
          id={"email"}
          mandatory={true}
          placeholder={"input email here..."}
          onChange={""}
        />
        <Textfield
          label={"Mobile"}
          id={"mobile"}
          mandatory={true}
          placeholder={"input mobile number here..."}
          onChange={""}
        />
        <Selectfield
          label={"Role"}
          id={"role"}
          mandatory={true}
          placeholder={"Select user role"}
          defaultValue={"header"}
          onChange={""}
          selectData={roleData}
        />
        <div className="my-4">
          <Selectfield
            label={"Position"}
            id={"position"}
            mandatory={true}
            placeholder={"Select user position"}
            defaultValue={"header"}
            onChange={""}
            selectData={positionData}
          />
        </div>

        <SubmitButton width={"w-full mt-5"} type={"submit"}>
          Submit
        </SubmitButton>
      </form>
    </ModalBase>
  );
}
