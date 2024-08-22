"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import {
  MdAutoAwesomeMosaic,
  MdPriceChange,
  MdFeed,
  MdHolidayVillage,
  MdShield,
  MdSavings,
  MdContacts,
  MdGroup,
} from "react-icons/md";
import { usePathname } from "next/navigation";

const menulist = [
  {
    title: "Dashboard",
    id: "dashboard",
    path: "/dashboard",
    icon: <MdAutoAwesomeMosaic />,
    role: "all",
  },
  {
    title: "Sales Pipeline",
    id: "sales-pipeline",
    path: "/",
    icon: <MdPriceChange />,
    role: "all",
  },
  {
    title: "Report",
    id: "report",
    path: "/",
    icon: <MdFeed />,
    role: "all",
  },
  {
    title: "Companies",
    id: "companies",
    path: "/",
    icon: <MdHolidayVillage />,
    role: "all",
  },
  {
    title: "Insured",
    id: "insured",
    path: "/",
    icon: <MdShield />,
    role: "all",
  },
  {
    title: "Source",
    id: "source",
    path: "/",
    icon: <MdContacts />,
    role: "all",
  },
  {
    title: "Budget",
    id: "budget",
    path: "/",
    icon: <MdSavings />,
    role: "superadmin",
  },
  {
    title: "Staff Access",
    id: "staff-access",
    path: "/",
    icon: <MdGroup />,
    role: "superadmin",
  },
];
export default function sidebar() {
  const pathname = usePathname();

  return (
    <div className="md:w-60  h-screen flex-1 fixed hidden md:flex text-white">
      <div>
        <div className="py-10">
          <Link
            href="/"
            className="flex flex-row items-center justify-center p-5   h-12 w-full"
          >
            <Image src="/logo-lead.png" width={500} height={500} alt="Logo" />
          </Link>
        </div>

        <div className="flex flex-col">
          {menulist.map((item, idx) => {
            return (
              <Link
                key={idx}
                href={item.path}
                // onClick={()=>setSelected(item.title)}
                className={
                  "w-52 p-3 pl-8 my-2 rounded-r-lg flex items-center justify-start " +
                  (pathname.includes(item.id) ? "bg-sky-600" : " ")
                }
              >
                <div className="mr-3">{item.icon}</div> {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
