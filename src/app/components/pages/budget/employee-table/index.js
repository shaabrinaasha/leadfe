"use client";
import React, { useState } from "react";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa6";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";


// import TableRow from "@mui/material/TableRow";

const Table = dynamic(() =>
  import("@mui/material/Table")
);

const TableBody = dynamic(() =>
  import("@mui/material/TableBody")
);

const TableCell = dynamic(() =>
  import("@mui/material/TableCell")
);
const TableContainer = dynamic(() =>
  import("@mui/material/TableContainer")
);
const TableHead = dynamic(() =>
  import("@mui/material/TableHead")
);
const TableRow = dynamic(() =>
  import("@mui/material/TableRow")
);
import Link from "next/link";
import dynamic from "next/dynamic";

function createData(year, userID, name, amount) {
  return { year, userID, name, amount };
}

const rows = [
  createData("2024", "US001", "John Doe", "1.000.000.000"),
  createData("2024", "US002", "Richard Smith", "2.000.000.000"),
];

const tableHeader = [
  { title: "Year", id: "year" },
  { title: "Name", id: "name" },
  { title: "Personal Budget", id: "amount" },
];

export default function employeeBudgetTable() {
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
                {row.year}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">IDR {row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
