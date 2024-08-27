'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function profileDropdown() {

    const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex-col'>
        <div>
          <div className="flex bg-sky-950 text-white rounded-lg p-3 items-center">
            <FaCircleUser className="text-[40px] mr-2" />
            <div className="flex flex-col">
              <p className="text-[15px] font-medium">Username</p>
              <p className="text-[12px] font-light">Role</p>
            </div>
            <button
              className="hover:bg-sky-800 ml-1 rounded-full justify-center flex"
              onClick={() => toggleDropdown()}
            >
              <RiArrowDropDownLine className="text-[30px]  p-1" />
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end">
        <div
          className={
            "grid grid-cols-1 divide-y bg-white mt-1 rounded-lg absolute  z-30 w-[200px] border-2 drop-shadow-lg text-sm " +
            (isOpen == false ? "hidden" : "")
          }
        >
          <Link
            href={"/"}
            className="px-5 py-1 hover:bg-slate-100 overflow-hidden"
          >
            Profile
          </Link>
          <Link
            href={"/"}
            className=" px-5 py-1 text-red-600 hover:bg-slate-100 overflow-hidden"
          >
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  )
}
