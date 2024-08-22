import React from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function titleBar({ title }) {
  return (
    <div className="p-3 justify-between flex items-center">
      <div className="font-bold text-sky-950 text-[32px]">{title}</div>
      <div className="flex bg-sky-950 text-white rounded-lg p-3 items-center">
        <FaCircleUser className="text-[40px] mr-2" />
        <div className="flex flex-col">
          <p className="text-[15px] font-medium">Username</p>
          <p className="text-[12px] font-light">Role</p>
        </div>
        <RiArrowDropDownLine className="text-[30px] ml-1" />
      </div>
    </div>
  );
}
