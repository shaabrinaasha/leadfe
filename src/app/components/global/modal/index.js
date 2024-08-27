import Link from "next/link";
import React from "react";
import { IoMdClose } from "react-icons/io";

export default function modalBase({ children, title, subtitle, closePath }) {
  return (
    <div className="fixed inset-0 bg-slate-800 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
      <div className="p-8 border w-96 shadow-lg rounded-md bg-white">
        <Link
          href={closePath}
          className="w-full flex justify-end hover:text-red-600"
        >
          <IoMdClose />
        </Link>

        <div className="text-center">
          <h3 className="text-[18px] font-bold text-sky-950">{title}</h3>
          <p className="text-[12px] font-semibold text-black">{subtitle}</p>
        </div>

        {/* modal content */}
        <div>{children}</div>
      </div>
    </div>
  );
}
