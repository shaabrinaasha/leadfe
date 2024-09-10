import React from "react";
import Section from "@/app/components/global/section";
import Text from "../text-style";

export default function salesInsuredInformation({ data,picData }) {
  // insuredInfo: {
  //   insured_id: "IN001",
  //   company_id: "CP001",
  //   name: "PT. Whitesky Aviation",
  //   address:
  //     "Secure Building, Tower A, 1st Floor, Jl. Raya Protokol Halim Perdanakusuma, RT.5/RW.10, Halim Perdana Kusumah, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13610",
  //   phone: "0218092365",
  // },
  // picInfo: {
  //   pic_id: "PC001",
  //   name: "Richard Smith",
  //   email: "Richardsmith@gmail.com",
  //   mobile: "+62 812897329773",
  // },
  return (
    <div className="mb-2">
      <Section title={"Insured Information"} height={"h-full "}>
        <div className="pl-2 pr-10">
          <div>
            <Text label={"Name of Insured"} value={data.name} />
            <Text label={"Address"} value={data.address} />
            <Text label={"Phone"} value={data.phone} />
            <Text label={"PIC Name"} value={picData.name} />
            <Text label={"PIC Email"} value={picData.email} />
            <Text label={"PIC Mobile"} value={picData.mobile} />
          </div>
          {/* <div>
            <Text label={"Agreement/ Contract No."} value={data.agreement_no} />
          </div> */}
        </div>
      </Section>
    </div>
  );
}
