import React from "react";
import Section from "@/app/components/global/section";
import Text from "../text-style";

export default function salesSourceInformation({ data }) {
  return (
    <div className="mb-5">
      <Section title={"Source Information"} height={"h-full "}>
        <div className="grid grid-cols-2 p-[5px]">
          <div>
            <Text label={"Source Type"} value={data.type} />
            <Text label={"Source Name"} value={data.name} />
            <Text label={"Source Email"} value={data.email} />
            <Text label={"Source Mobile"} value={data.mobile} />
          </div>
          <div>
            <Text label={"Agreement/ Contract No."} value={data.agreement_no} />
          </div>
        </div>
      </Section>
    </div>
  );
}
