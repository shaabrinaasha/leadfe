"use client";
import React, { useEffect, useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import RoleButton from "@/app/components/global/blue-button";
import DeleteButton from "@/app/components/global/red-button";
import { MdBorderColor } from "react-icons/md";
// import { salesList } from "@/app/utils/dummy";

// const Table = dynamic(() =>
//   import("@mui/material/Table")
// );

// const TableBody = dynamic(() =>
//   import("@mui/material/TableBody")
// );

// const TableCell = dynamic(() =>
//   import("@mui/material/TableCell")
// );
// const TableContainer = dynamic(() =>
//   import("@mui/material/TableContainer")
// );
// const TableHead = dynamic(() =>
//   import("@mui/material/TableHead")
// );
// const TableRow = dynamic(() =>
//   import("@mui/material/TableRow")
// );


import TableRow from "@mui/material/TableRow";
import Link from "next/link";
import dayjs from "dayjs";
import dynamic from "next/dynamic";


const tableHeader = [
  { title: "Sales ID", id: "sales_id" },
  { title: "Date of Input", id: "created_at" },
  { title: "Account Owner", id: "account_owner" },
  { title: "Name of Insured", id: "insured_name" },
  { title: "Insurance Type", id: "insurance_type" },
  { title: "Progress", id: "progress" },
  { title: "Estimated Income", id: "estimated_income" },
  { title: "Action", id: false },
];


export default function salesListTable({ data }) {
  // const [salesList, setList] = useState([
  //   {
  //     sales_id: "",
  //     created_at: "",
  //     account_owner: "",
  //     insured_name: "",
  //     insurance_type: "",
  //     progress: "",
  //     estimated_income: "",
  //     business_unit: "",
  //   },
  // ]);

  const [salesList, setList] = useState(data);

  // useEffect(() => {
  //   setList(data)
  // }, []);


  const [sortQuery, setSortQuery] = useState("");
  const [sortType, setSortType] = useState("");
  const [sortIcon, setSortIcon] = useState({ icon: <FaSort />, id: "default" });

  const handleSort = (data) => {
    if (sortQuery == "progress" || sortQuery == "estimated_income") {
      if (sortType === "ascending") {
        data.sort((a, b) =>
          parseInt(a[sortQuery]) < parseInt(b[sortQuery]) ? -1 : 1
        );
      } else if (sortType === "descending") {
        data.sort((a, b) =>
          parseInt(b[sortQuery]) > parseInt(a[sortQuery]) ? 1 : -1
        );
      }
    } else {
      if (sortType === "ascending") {
        data.sort((a, b) => (a[sortQuery] < b[sortQuery] ? -1 : 1));
      } else if (sortType === "descending") {
        data.sort((a, b) => (b[sortQuery] > a[sortQuery] ? 1 : -1));
      }
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
    handleSort(data);
  };

  return (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeader.map((col) => (
              <TableCell key={col.id}>
                <div className="flex items-center font-bold text-[15px]">
                  <p className="text-nowrap">{col.title}</p>
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
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                className="hover:text-sky-600 hover:font-semibold "
              >
                <Link href={"/sales-pipeline/"+row.sales_id}>{row.sales_id}</Link>
              </TableCell>
              <TableCell align="left">
                {dayjs(row.created_at).format("DD MMM YYYY")}
              </TableCell>
              <TableCell align="left">{row.account_owner}</TableCell>
              <TableCell align="left">{row.insured_name}</TableCell>
              <TableCell align="left">{row.insurance_type}</TableCell>
              <TableCell align="left">
                <div
                  className={
                    (row.progress == "100"
                      ? "bg-gradient-to-b from-emerald-400 to-emerald-500"
                      : "bg-gradient-to-b from-amber-400 to-amber-500") + " p-2 flex justify-center rounded-3xl text-white"
                  }
                >
                  {row.progress}%
                </div>
              </TableCell>
              <TableCell align="left">
                IDR {parseInt(row.estimated_income).toLocaleString()}
              </TableCell>
              <TableCell align="left">
                <div className="flex">
                  <Link
                    href={"/budget/?showEditBudget=true&budgetYear=" + row.year}
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

