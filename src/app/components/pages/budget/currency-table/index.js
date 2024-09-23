"use client";
import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
import { MdBorderColor } from "react-icons/md";
// import TableRow from "@mui/material/TableRow";
import { rateDummy } from "@/app/utils/dummy";

const Table = dynamic(() => import("@mui/material/Table"));

const TableBody = dynamic(() => import("@mui/material/TableBody"));

const TableCell = dynamic(() => import("@mui/material/TableCell"));
const TableContainer = dynamic(() => import("@mui/material/TableContainer"));
const TableHead = dynamic(() => import("@mui/material/TableHead"));
const TableRow = dynamic(() => import("@mui/material/TableRow"));
import Link from "next/link";
import dynamic from "next/dynamic";

function createData(year, USD, EUR) {
  return { year, USD, EUR };
}

const rows = [
  createData("2024", "15.000", "14.000"),
  createData("2025", "16.000", "15.000"),
];

const tableHeader = [
  { title: "Year", id: "year" },
  // { title: "USD to IDR", id: "USD" },
  // { title: "EUR to IDR", id: "EUR" },
];

const monthHeader = [
  { title: "Jan", id: "jan" },
  { title: "Feb", id: "feb" },
  { title: "Mar", id: "mar" },
  { title: "Apr", id: "apr" },
  { title: "May", id: "may" },
  { title: "Jun", id: "jun" },
  { title: "Jul", id: "jul" },
  { title: "Aug", id: "aug" },
  { title: "Sep", id: "Sep" },
  { title: "Oct", id: "oct" },
  { title: "Nov", id: "nov" },
  { title: "Dec", id: "dec" },
];

export default function currencyTable() {
  const [sortQuery, setSortQuery] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortIcon, setSortIcon] = useState({ icon: <FaSort />, id: "default" });

  const handleSort = (data) => {
    if (sortType === "ascending") {
      data.sort((a, b) => (a[sortQuery] < b[sortQuery] ? -1 : 1));
    } else if (sortType === "descending") {
      data.sort((a, b) => (b[sortQuery] > a[sortQuery] ? 1 : -1));
    }
  };

  const toggleSort = (id) => {
    if (sortIcon.id == "default" || sortIcon.id == "desc") {
      setSortType("ascending");
      setSortQuery(id);
      setSortIcon({
        ...sortIcon,
        icon: <FaSortUp className="text-sky-600" />,
        id: "asc",
      });
    } else if (sortIcon.id == "asc") {
      setSortType("descending");
      setSortQuery(id);
      setSortIcon({
        ...sortIcon,
        icon: <FaSortDown className="text-sky-600" />,
        id: "desc",
      });
    }
    handleSort(rows);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeader.map((col) => (
              <TableCell key={col.id}>
                <div className="flex items-center font-bold text-[15px]">
                  <p>{col.title}</p>
                  {col.id != false ? (
                    <div className="ml-1 text-[12px] hover:bg-slate-200  rounded-full">
                      <button
                        className="p-1"
                        onClick={() => toggleSort(col.id)}
                      >
                        {sortQuery != col.id ? <FaSort /> : sortIcon.icon}
                      </button>
                    </div>
                  ) : null}
                </div>
              </TableCell>
            ))}
            {monthHeader.map((col) => (
              <TableCell key={col.id} style={{ padding: "0px" }} colSpan={2}>
                <div className="font-bold text-[15px] w-full border-x">
                  <div className="flex justify-center text-nowrap border-b px-3">
                    {col.title}
                  </div>
                  <div className="flex ">
                    <div className="flex px-2 justify-center border-r text-nowrap">
                      USD to IDR
                    </div>
                    <div className="flex w-full px-2 justify-center text-nowrap">
                      EUR to IDR
                      {/* <button
                        className="p-1"
                        onClick={() => toggleSort(col.id)}
                      >
                        {sortQuery != col.id ? <FaSort /> : sortIcon.icon}
                      </button> */}
                    </div>
                  </div>
                </div>
              </TableCell>
            ))}
            <TableCell >
                <div className="flex items-center font-bold text-[15px]">
                  <p>Action</p>
                </div>
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rateDummy.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.year}
              </TableCell>
              <TableCell align="left">{row.jan.usd}</TableCell>
              <TableCell align="left">{row.jan.eur}</TableCell>

              <TableCell align="left">{row.feb.usd}</TableCell>
              <TableCell align="left">{row.feb.eur}</TableCell>
              
              <TableCell align="left">{row.mar.usd}</TableCell>
              <TableCell align="left">{row.mar.eur}</TableCell>

              <TableCell align="left">{row.apr.usd}</TableCell>
              <TableCell align="left">{row.apr.eur}</TableCell>

              <TableCell align="left">{row.may.usd}</TableCell>
              <TableCell align="left">{row.may.eur}</TableCell>

              <TableCell align="left">{row.jun.usd}</TableCell>
              <TableCell align="left">{row.jun.eur}</TableCell>

              <TableCell align="left">{row.jul.usd}</TableCell>
              <TableCell align="left">{row.jul.eur}</TableCell>

              <TableCell align="left">{row.aug.usd}</TableCell>
              <TableCell align="left">{row.aug.eur}</TableCell>

              <TableCell align="left">{row.sep.usd}</TableCell>
              <TableCell align="left">{row.sep.eur}</TableCell>

              <TableCell align="left">{row.oct.usd}</TableCell>
              <TableCell align="left">{row.oct.eur}</TableCell>

              <TableCell align="left">{row.nov.usd}</TableCell>
              <TableCell align="left">{row.nov.eur}</TableCell>

              <TableCell align="left">{row.dec.usd}</TableCell>
              <TableCell align="left">{row.dec.eur}</TableCell>

              <TableCell align="left">
                <div className="flex">
                  <Link
                    href={"/budget/?showEditRate=true&rateYear=" + row.year}
                  >
                    <MdBorderColor className="text-yellow-500 hover:text-amber-600 text-[18px]" />
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
