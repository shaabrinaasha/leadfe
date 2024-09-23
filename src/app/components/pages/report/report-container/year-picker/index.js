import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MdArrowDropDown } from "react-icons/md";
import "@/app/utils/style/report-style.css";

export default function yearPicker({ handleYear }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          //   label="Basic date picker"
          onChange={handleYear}
          views={["year"]}
          slotProps={{ textField: { variant: "standard" } }}
          slots={{
            openPickerIcon: MdArrowDropDown,
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
