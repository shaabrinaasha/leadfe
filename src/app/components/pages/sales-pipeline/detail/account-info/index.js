import React from "react";
import Section from "@/app/components/global/section";
import Text from "../text-style";

export default function salesAccountInformation({data}) {
    // accountInfo: {
    //     created_at: "01 Jan 2024",
    //     created_by: "US001",
    //     sales_status: "pending", //win, lost , pending(default)
    //     progress: "10",
    //     account_owner: "John Doe",
    //     business_unit: "Aviation",
    //     insurance_type: "Aviation Aircraft",
    //     account_type: "New",
    //     account_status: "Affiliated with Existing Account",
    //     existing_account: "PT. Blacksky Aviation",
    //   },
  return (
    <div className="">
      <Section title={"Account Information"} height={"h-full "}>
        <div className="grid grid-cols-2 p-[5px]">
            <div>
            <Text label={"Date of Input"} value={data.created_at} />
            <Text label={"Account Owner"} value={data.account_owner} />
            <Text label={"Business Unit"} value={data.business_unit} />
            <Text label={"Insurance Type"} value={data.insurance_type} />
            <Text label={"Account  Type"} value={data.account_type} />
            </div>
            <div>
            <Text label={"Account  Status"} value={data.account_status} />
            <Text label={"Existing Account"} value={data.existing_account} />
            </div>
        </div>
      </Section>
    </div>
  );
}
