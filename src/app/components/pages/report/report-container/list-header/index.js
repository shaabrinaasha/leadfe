import Searchfield from "@/app/components/global/searchfield";
// import dynamic from "next/dynamic";
import SalesListFilter from "@/app/components/pages/sales-pipeline/sales-list/filter-dropdown";
import { useEffect, useState } from "react";
import CreateButton from "@/app/components/global/blue-button";
import { MdAdd } from "react-icons/md";
import Link from "next/link";

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
    <div className="flex justify-between items-center">
      {/* <SalesListSearch /> */}
      <div className="mt-2">
        <div className="lg:w-72">
          <Searchfield
            id={"search_bar"}
            placeholder={"search account owner, name of insured..."}
            onChange={handleSearch}
          />
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
        <Link href={"/sales-pipeline/create"}>
          <CreateButton type={"button"} width={"w-[170px]"}>
            <div className="flex items-center justify-between">
              <MdAdd className="text-[15px]" />
              <p>Create Sales Pipeline</p>
            </div>
          </CreateButton>
        </Link>
      </div>
    </div>
  );
}
