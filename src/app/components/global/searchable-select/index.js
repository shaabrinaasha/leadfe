"use client";
import React, { useState } from "react";
import Select from "react-select";
import { IoInformationCircle } from "react-icons/io5";
import { Tooltip } from "@mui/material";
export default function searchableSelect({
  id,
  name,
  placeholder,
  defaultValue,
  onChange,
  selectData,
  label,
  mandatory = false,
  useTooltip = false,
  tootltipText,
  disabled = false,
  options,
}) {
  // const [isClearable, setIsClearable] = useState(true);
  // const [isSearchable, setIsSearchable] = useState(true);
  // const [isDisabled, setIsDisabled] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isRtl, setIsRtl] = useState(false);

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
            <IoInformationCircle className="text-[17px] text-sky-800 hover:text-sky-600" />
          </div>
        </Tooltip>
      </div>
    );
  };
  return (
    <div>
      <label
        className="flex text-slate-900 text-[13px] font-semibold mb-2"
        htmlFor={id}
      >
        {label} {mandatory == true ? <p className="text-red-600">*</p> : ""}
        {useTooltip == true ? tooltipIcon() : ""}
      </label>
      <Select
        id={id}
        name={name}
        classNames={{
          control: () =>
            "border border-slate-300 focus:border-sky-500 focus:border-[1px] rounded-md w-full pl-[15px] px-0 pr-0 h-[10px]  leading-tight focus:outline-none  text-[12px] focus:text-black text-nowrap ",
          dropdownIndicator: () => " w-[15px] focus:opacity-100 opacity-60 ",
          menu: () =>
            " text-[12px] bg-white rounded-md mt-1 overflow-hidden border border-gray-300",
          menuList: () => "  divide-y overflow-y-auto h-32",
          option: () => "  hover:bg-sky-700 hover:text-white p-1",
        }}
        classNamePrefix="select"
        // isDisabled={isDisabled}
        // isLoading={isLoading}
        // isClearable={isClearable}
        placeholder={placeholder}
        onChange={onChange}
        unstyled={true}
        isSearchable={true}
        options={options}
      />
    </div>
  );
}
