"use client";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";


export default function datePickerMUI({
  id,
  bigLabel,
  label,
  onChange,
  dateValue,
  mandatory
}) {

  return (
    <div className="w-full">
      <label
        className="flex text-slate-900 text-[13px] font-semibold mb-2"
        htmlFor={id}
      >
        {bigLabel} {mandatory==true?<p className="text-red-600">*</p>:""}
      </label>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="bg-white w-full">
          <DatePicker
            id={id}
            className="bg-white w-full"
            format="DD/MM/YYYY"
            label={label}
            slotProps={{
              openPickerIcon: { fontSize: "small", color: "primary" },
              textField: {
                size: "small",
                color: "primary",
                border: "1px solid secondary",
              },

            }}
            sx={{
              "& .MuiInputBase-input": {
                height: "15px",
                fontSize: "small",
                color: "secondary"
              },
              "& .MuiFormLabel-root": {
                fontSize: "small",
                color: "secondary"
              },
              "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                border: "1px solid secondary",
                borderRadius: "6px",
              }, // page load style
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  border: "1px solid secondary",
                }, //hover style
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                { border: "1px solid primary" }, //focus style
            }}
            value={dateValue}
            onChange={onChange}
          />
        </div>
      </LocalizationProvider>
    </div>
  );
}
