import Searchfield from "@/app/components/global/searchfield";
// import dynamic from "next/dynamic";
import YearPicker from "../year-picker";
import SalesListFilter from "@/app/components/pages/sales-pipeline/sales-list/filter-dropdown";
import { useEffect, useState } from "react";
import CreateButton from "@/app/components/global/blue-button";
import { MdAdd } from "react-icons/md";
import Link from "next/link";
import dayjs from "dayjs";

export default function reportHeader({ setFilteredList, data }) {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    handleFilter();
  }, [query, searchQuery]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    handleFilter();
  };

  const handleFilter = () => {
    // const query = e.target.value;
    const queryFilter = data.filter(
      (item) =>
        (item.account_owner
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase()) ||
          item.insured_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        item.business_unit.toLowerCase().startsWith(query.toLowerCase())
    );

    const queryAll = data.filter(
      (item) =>
        (item.account_owner
          .toLowerCase()
          .startsWith(searchQuery.toLowerCase()) ||
          item.insured_name
            .toLowerCase()
            .includes(searchQuery.toLowerCase())) &&
        item.business_unit.toLowerCase().startsWith("")
    );

    {
      query == "all" ? setFilteredList(queryAll) : setFilteredList(queryFilter);
    }
  };
  return (
    <div className="flex justify-between">
      {/* <SalesListSearch /> */}
      <div className="">
        <div className="grid grid-cols-2 gap-4  ">
          <p className="text-sky-950 font-semibold text-[15px] mt-4">Year</p>
          <YearPicker  />
          <p className="text-sky-950 font-semibold text-[15px]">Current Date</p>
          <p className="text-sky-950 font-semibold text-[15px]">{dayjs().format("DD MMM YYYY")}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-52 mr-1">
          <SalesListFilter
            query={query}
            setQuery={setQuery}
            handleFilter={handleFilter}
          />
        </div>
      </div>
    </div>
  );
}
