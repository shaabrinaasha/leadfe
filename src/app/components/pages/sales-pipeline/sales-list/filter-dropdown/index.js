"use client";

import React, { useState } from "react";

import { FaFilter } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

const roleData = [
  {
    title: "All",
    value: "all",
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



export default function salesListFilter({handleFilter,query, setQuery}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEB, setIsEB] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (value) => {
    setQuery(value) 
    toggleDropdown()
  }

  return (
    <div className="relative"  >
      <div>
        <button
          onClick={() => toggleDropdown()}
          className="flex h-[35px] w-full bg-white hover:bg-slate-100 border-2 justify-between text-[12px] border-sky-600 py-1 px-2  rounded-lg  items-center"
        >
          <p className=" font-medium text-gray-500 ">{query==""?"Filter":query}</p>
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
                onClick={()=>handleClick(item.value)}
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
