"use client";
import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import RoleButton from "@/app/components/global/blue-button";
import DeleteButton from "@/app/components/global/red-button";

import TableRow from "@mui/material/TableRow";
import Link from "next/link";

function createData(username, name, email, mobile, role) {
  return { username, name, email, mobile, role };
}

const rows = [
  createData(
    "john.doe",
    "John Doe",
    "john.doe@leadbrokers-id",
    "+6285893271826",
    "Aviation"
  ),
  createData(
    "jane.doe",
    "Jane Doe",
    "jane.doe@leadbrokers-id",
    "+6285893271132",
    "Construction"
  ),
  createData(
    "dianna.dan",
    "Dianna Daniella Florentine",
    "dianna.dan@leadbrokers-id",
    "+6285893278927",
    "Employee Benefit"
  ),
  createData(
    "ahmad.razi",
    "Ahmad Razi",
    "ahmad.razi@leadbrokers-id",
    "+6285893271826",
    "Management"
  ),
];

const tableHeader = [
  { title: "Username", id: "username" },
  { title: "Name", id: "name" },
  { title: "Email", id: "email" },
  { title: "Mobile", id: "mobile" },
  { title: "Role", id: "role" },
  { title: "Action", id: false },
];

export default function StaffAccessTable() {
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
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.username}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.mobile}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
              <TableCell align="left">
                <div className="flex">
                  <Link href={"/staff-access/?showChangeRole=true&userID="+row.username+"&userRole="+row.role}>
                    <RoleButton width={"w-[100px]"}>Change Role</RoleButton>
                  </Link>
                  <Link href={"/staff-access/?showDeleteUser=true&userID="+row.username}>
                    <DeleteButton>Delete</DeleteButton>
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
