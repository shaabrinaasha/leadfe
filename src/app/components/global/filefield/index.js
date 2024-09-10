import React from "react";

export default function fileInput({
  id,
  placeholder,
  label,
  onChange,
  disabled,
  mandatory = false,
  maxHidden = true
}) {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-6 items-start my-2 ">
      <label
        className="flex text-slate-900 text-[13px] font-semibold mb-5 mt-2 items-center md:text-nowrap"
        htmlFor={id}
      >
        {label} {mandatory == true ? <p className="text-red-600">*</p> : ""}
        {/* {useTooltip == true ? tooltipIcon() : ""} */}
      </label>
      <div className="ml-5 col-span-2 lg:col-span-5">
        {/* <label htmlFor="file-input" className="sr-only">
          Browse File
        </label> */}
        <input
          type="file"
          name={id}
          id={id}
          onChange={onChange}
          disabled={disabled}
          className="block w-full border border-gray-200 shadow-sm rounded-xl text-[12px] file:text-white focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 hover:file:bg-sky-600 disabled:pointer-events-none           
            file:bg-sky-950 file:border-0
            file:me-4
            file:py-3 file:px-4 file:rounded-r-xl
             "
        />
        <div className="text-[12px] text-sky-700" hidden={maxHidden} >
            <p>*maximum file size is 3MB</p>
            <p>*only .pdf, .jpg, .jpeg or .png are accepted</p>
        </div>
      </div>
    </div>
  );
}
