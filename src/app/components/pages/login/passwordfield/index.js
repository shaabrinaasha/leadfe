'use client'
import React, { useState } from "react";
import { IoEye, IoEyeOff  } from "react-icons/io5";

export default function passwordfield({
  id,
  placeholder,
  label,
  onChange,
  value,
  icon,
  disabled,
  mandatory,
}) {
  const [visible, setVisible] = useState("password");
  
  return (
    <div className="mb-4 mx-1 w-full ">
      <label
        className="flex text-slate-900 text-[13px] font-semibold mb-2"
        htmlFor={id}
      >
        {label} {mandatory == true ? <p className="text-red-600">*</p> : ""}
      </label>
      <div className="w-full flex justify-end items-center relative">
        <input
          className=" border border-slate-300 focus:border-sky-500 focus:border-[1px] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] "
          id={id}
          type={visible}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        <div className="absolute bg-white mr-1 px-2 text-sky-600 hover:text-sky-400 items-center ">
          <button className="text-[20px] mt-1" onClick={visible=="password"?()=> setVisible("text"): ()=> setVisible("password") }>{visible=="password"? <IoEye/> :<IoEyeOff /> }</button>
        </div>
      </div>
    </div>
  );
}
