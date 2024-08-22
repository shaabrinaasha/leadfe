import React from "react";

export default function selectfield({id, name, placeholder, header, onChange, selectData, label}) {
  return (
    <div className="w-full">
      <label
        className="block text-slate-900 text-[13px] font-semibold mb-2" htmlFor={id}
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        //className="drop-shadow-md focus:border-green-700 focus:border-[3px] border-[2.5px] border-gray-500 rounded-lg  h-[40px]  text-gray-700  focus:outline-none focus:shadow-outline mt-2"
        placeholder={placeholder}
        onChange={onChange}
        defaultValue="header"
        //id="countries"
        className=" border border-slate-300 focus:border-sky-500 focus:border-[1px] rounded-md w-full py-[7px] px-3 text-gray-400 leading-tight focus:outline-none  text-[12px] focus:text-black"
      >
        <option disabled value={"header"}>{header}</option>
        {selectData.map((item, idx) => {
            return (
                <option  key={idx} value={item.value}>{item.title}</option>
            );
          })}
      </select>
    </div>
  );
}
