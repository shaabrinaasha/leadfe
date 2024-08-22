"use client";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
// import { PickersDay } from "@mui/x-date-pickers/PickersDay";

// import { styled } from "@mui/material/styles";
// import IconButton from "@mui/material/IconButton";
// import dayjs from "dayjs";



export default function datePickerMUI({
  id,
  bigLabel,
  label,
  onChange,
  dateValue,
}) {

  return (
    <div className="w-full">
      <label
        className="block text-slate-900 text-[13px] font-semibold mb-2"
        htmlFor={id}
      >
        {bigLabel}
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
