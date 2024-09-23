import Link from "next/link";
import React from "react";
import ModalBase from "@/app/components/global/modal";
import Textfield from "@/app/components/global/textfield";
import SubmitButton from "@/app/components/global/blue-button";
import Selectfield from "@/app/components/global/selectfield";
const monthData = [
  {
    label: "January",
    value: "jan",
  },
  {
    label: "February",
    value: "feb",
  },
  {
    label: "March",
    value: "mar"
  },
  {
    label: "April",
    value: "apr"
  },
  {
    label: "May",
    value: "may"
  },
  {
    label: "June",
    value: "jun"
  },
  {
    label: "July",
    value: "jul"
  },
  {
    label: "August",
    value: "aug"
  },
  {
    label: "September",
    value: "sep"
  },
  {
    label: "October",
    value: "oct"
  },
  {
    label: "November",
    value: "nov"
  },
  {
    label: "December",
    value: "dec"
  },

];

const currency = [
  { id: "USD", amount: "" },
  { id: "EUR", amount: "" },
];

export default function addRateModal() {
  return (
    <ModalBase
      title={"Add New Exchange Rate"}
      closePath={"/budget"}
      subtitle={"Add a new exchange rate every month"}
    >
      <form className="">
        <div className="  h-[300px]">
          <div className="w-[400px] h-full pr-5">
            <Textfield
              label={"Year"}
              id={"year"}
              mandatory={true}
              placeholder={"input year..."}
              onChange={""}
            />
            <Selectfield
              id={"month"}
              name={"month"}
              placeholder={"Select Month"}
              label={"Month"}
              defaultValue={"header"}
              // onChange={(e) =>
              //   handleFieldChange(e, accountInfo, setAccountInfo)
              // }
              mandatory={true}
              selectData={monthData}
            />
            {/* <Textfield
            label={"Aviation Budget"}
            id={"aviation"}
            mandatory={true}
            placeholder={"input aviation budget amount..."}
            onChange={""}
          />
          <Textfield
            label={"Construction Budget"}
            id={"construction"}
            mandatory={true}
            placeholder={"input construction budget amount..."}
            onChange={""}
          />
          <Textfield
            label={"Other's Budget"}
            id={"other"}
            mandatory={true}
            placeholder={"input other's budget amount..."}
            onChange={""}
          /> */}
            {/* employee benefit */}
            {/* <div className="my-1 w-[95%]">
            <p className="text-[13px] font-semibold text-black">
              Employee Benefit
            </p>
            <div className="grid grid-cols-2">
              <div className="text-[12px] font-semibold text-sky-950 flex">
                User
              </div>
              <div className="text-[12px] font-semibold text-sky-950 flex">
                Budget Amount <p className="text-red-600">*</p>
              </div>
            </div>

            <div className="grid grid-cols-2">
              <div>
                {ebUser.map((user, idx) => (
                  <p
                    className="text-[13px] font-regular text-black flex ml-2 py-4"
                    key={user.ebID}
                  >
                    {idx + 1}. {user.name}
                  </p>
                ))}
              </div>
              <div>
                {ebUser.map((user, idx) => (
                  <div key={user.ebID}>
                    <Textfield
                      // label={"Other's Budget"}
                      id={user.ebID}
                      // mandatory={true}
                      placeholder={"input budget amount..."}
                      onChange={""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div> */}

            {/* currency */}
            <div className="my-1 w-[95%]">
              <p className="text-[13px] font-semibold text-black">
                Exchange Rate
              </p>
              <div className="grid grid-cols-2">
                <div className="text-[12px] font-semibold text-sky-950 flex">
                  Currency
                </div>
                <div className="text-[12px] font-semibold text-sky-950 flex">
                  Exchange Rate to IDR <p className="text-red-600">*</p>
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div>
                  {currency.map((item, idx) => (
                    <p
                      className="text-[13px] font-regular text-black flex ml-2 py-4"
                      key={item.id}
                    >
                      {idx + 1}. {item.id}
                    </p>
                  ))}
                </div>
                <div>
                  {currency.map((item, idx) => (
                    <div key={item.id}>
                      <Textfield
                        // label={"Other's Budget"}
                        id={item.id}
                        // mandatory={true}
                        placeholder={"input rate amount..."}
                        onChange={""}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SubmitButton width={"w-full mt-5"} type={"submit"}>
          Submit
        </SubmitButton>
      </form>
    </ModalBase>
  );
}
