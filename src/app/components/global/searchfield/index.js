import React from "react";
import { FaSearch } from "react-icons/fa";

export default function searchfield({
  id,
  placeholder,
  label,
  onChange,
  value,
  icon,
  disabled
}) {
  return (
    <div className="mb-4 mx-1 w-full ">
      <label className="block text-slate-900 text-[13px] font-semibold mb-2" htmlFor={id}>
        {label}
      </label>
      <div className="w-full flex justify-end items-center relative">
        <input
          className=" border border-slate-300 focus:border-sky-500 focus:border-[1px] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] "
          id={id}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          disabled={disabled}
        />
        <div className="absolute bg-white text-sky-600 mr-1 px-2"><FaSearch /></div>
      </div>
    </div>
  );
}