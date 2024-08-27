import React from "react";

export default function selectfield({id, name, placeholder, defaultValue, onChange, selectData, label, mandatory}) {
  return (
    <div className="w-full">
      <label
        className="flex text-slate-900 text-[13px] font-semibold mb-2" htmlFor={id}
      >
        {label} {mandatory==true?<p className="text-red-600">*</p>:""}
      </label>
      <select
        id={id}
        name={name}
        //className="drop-shadow-md focus:border-green-700 focus:border-[3px] border-[2.5px] border-gray-500 rounded-lg  h-[40px]  text-gray-700  focus:outline-none focus:shadow-outline mt-2"
        
        onChange={onChange}
        defaultValue={defaultValue}
        //id="countries"
        className=" border border-slate-300 focus:border-sky-500 focus:border-[1px] rounded-md w-full py-[7px] px-3 text-gray-400 leading-tight focus:outline-none  text-[12px] focus:text-black"
      >
        <option disabled value={"header"}>{placeholder}</option>
        {selectData.map((item, idx) => {
            return (
                <option  key={idx} value={item.value}>{item.title}</option>
            );
          })}
      </select>
    </div>
  );
}
