import Link from "next/link";
import React from "react";
import ModalBase from "@/app/components/global/modal";
import Textfield from "@/app/components/global/textfield";
import SubmitButton from "@/app/components/global/blue-button";


const ebUser = [
  { ebID: "US005", name: "John Doe" },
  { ebID: "US003", name: "Richard Smith" },
];

const currency = [
  { id: "USD", amount: "16.500" },
  { id: "EUR", amount: "15.000" },
];

export default function editBudgetModal({year}) {
  // const addCommas = (num) =>
  //   num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");
  return (
    <ModalBase
      title={"Edit Yearly Budget"}
      closePath={"/budget"}
      subtitle={"Edit the details for budget in "+ year}
    >
      <form className="">
        <div className=" overflow-y-scroll  h-[450px]">
          <div className="w-[500px] h-full pr-5">
          <Textfield
            label={"Year"}
            id={"year"}
            mandatory={true}
            value={year}
            placeholder={"input year..."}
            onChange={""}
          />
          <Textfield
            label={"Aviation Budget"}
            id={"aviation"}
            mandatory={true}
            value={"10.000.000.000"}
            placeholder={"input aviation budget amount..."}
            onChange={""}
          />
          <Textfield
            label={"Construction Budget"}
            id={"construction"}
            value={"10.000.000.000"}
            mandatory={true}
            placeholder={"input construction budget amount..."}
            onChange={""}
          />
          <Textfield
            label={"Other's Budget"}
            id={"other"}
            value={"10.000.000.000"}
            mandatory={true}
            placeholder={"input other's budget amount..."}
            onChange={""}
          />
          {/* employee benefit */}
          <div className="my-1 w-[95%]">
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
                      value={"1.000.000.000"}
                      placeholder={"input budget amount..."}
                      onChange={""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

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
                      value={item.amount}
                      // mandatory={true}
                      placeholder={"input rate amount..."}
                      onChange={""}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          
        </div></div>
        <SubmitButton width={"w-full mt-5"} type={"submit"}>
            Submit
          </SubmitButton>
      </form>
    </ModalBase>
  );
}
