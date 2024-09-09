"use client";
import React from "react";
import { IoInformationCircle } from "react-icons/io5";

import { Tooltip } from "@mui/material";

import dynamic from "next/dynamic";

// const Tooltip = dynamic(() => import("@mui/material/Tooltip"));

export default function textfield({
  id,
  placeholder,
  label,
  onChange,
  value,
  icon,
  disabled,
  mandatory = false,
  type = "text",
  useTooltip = false,
  tootltipText,
}) {
  const tooltipIcon = () => {
    return (
      <div className="ml-1">
        <Tooltip
          title={
            <React.Fragment>
              <p>{tootltipText}</p>
            </React.Fragment>
          }
        >
          <div>
            <IoInformationCircle className="text-[17px]  text-sky-800 hover:text-sky-600" />
          </div>
        </Tooltip>
      </div>
    );
  };
  return (
    <div className="mb-4 mx-1 w-full ">
      <label
        className="flex text-slate-900 text-[13px] font-semibold mb-2 items-center"
        htmlFor={id}
      >
        {label} {mandatory == true ? <p className="text-red-600">*</p> : ""}{" "}
        {useTooltip == true ? tooltipIcon() : ""}
      </label>
      <div className="w-full flex justify-end items-center relative">
        <input
          className=" border border-slate-300 h-[38px] focus:border-sky-500 focus:border-[1px] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] "
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        <div className="absolute bg-white mr-1 px-2">{icon}</div>
      </div>
    </div>
  );
}
