"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaFilter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const roleData = [
  {
    title: "Management",
    value: "management",
  },
  {
    title: "Aviation",
    value: "aviation",
  },
  {
    title: "Construction",
    value: "construction",
  },
  {
    title: "Employee Benefit",
    value: "EB",
  },
  {
    title: "Others",
    value: "others",
  },
];

const ebUserData = [
  {
    title: "John Doe",
    value: "US001",
  },
  {
    title: "Jane Doe",
    value: "US002",
  },
  {
    title: "Richard Smith",
    value: "US003",
  },

];

export default function dashboardFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEB, setIsEB] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    setIsEB(false);
  };

  const toggleEB = () => {
    setIsEB(!isEB);
  };

  return (
    <div className="relative"  >
      <div>
        <button
          onClick={() => toggleDropdown()}
          className="flex w-full bg-white hover:bg-slate-100 border-2 justify-between text-[12px] border-sky-600 py-1 px-2  rounded-lg  items-center"
        >
          <p className=" font-medium text-gray-500 ">Filter</p>
          <FaFilter className="text-sky-600" />
        </button>
      </div>
      <div className="w-full flex justify-start">
        <ul
          className={
            "grid grid-cols-1 divide-y bg-white mt-1 rounded-lg absolute z-30 w-[200px] border-2 drop-shadow-lg text-sm " +
            (isOpen == false ? "hidden" : "")
          }
        >
          {roleData.map((item, idx) => {
            return (
              <li
                key={idx}
                value={item.value}
                className="px-5 py-1 hover:bg-slate-100 overflow-hidden flex items-center  justify-between"
                onClick={item.value=="EB"?()=>toggleEB():null}
                
              >
                {item.title}{item.value=="EB"?<FaAngleRight/>:null}
              </li>
            );
          })}
        </ul>

      </div>
      <div className="w-[170%]  flex justify-end">
        <ul
          className={
            "grid grid-cols-1 mt-[90px] divide-y bg-white rounded-lg absolute  z-30 w-[200px] border-2 drop-shadow-lg text-sm " +
            (isEB == false ? "hidden" : "")
          }
        >
          {ebUserData.map((item, idx) => {
            return (
              <li
                key={idx}
                value={item.value}
                className="px-5 py-1 hover:bg-slate-100 overflow-hidden"
              >
                {item.title} 
              </li>
            );
          })}
        </ul>

      </div>
    </div>
  );
}
