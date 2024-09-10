import React from "react";
import Section from "@/app/components/global/section";
import Text from "../text-style";
import { formatCount } from "@/app/utils/functions";

export default function salesEstimationInformation({ data }) {
  // salesEst: {
  //   inception_date: "10 Jan 2024", //if existing then select source and autofill source_id
  //   premium_currency: "IDR",
  //   premium_amount: "100000000",
  //   brokerage_currency: "IDR",
  //   brokerage_amount: "15000000",
  //   consultation_currency: "IDR",
  //   consultation_amount: "2000000",
  //   source_currency: "IDR",
  //   source_amount: "5000000",
  //   endorsement_currency: "IDR",
  //   endorsement_amount: "70000000",
  // },
  return (
    <div className="">
      <Section title={"Account Information"} height={"h-full "}>
        <div className="p-[5px] pb-[15px]">
          <div className="grid grid-cols-2 ">
            <Text label={"Inception Date"} value={data.created_at} />
          </div>
          <div className="grid grid-cols-2 p-[5px]">
            <div>
              <div>
                <p className="text-[15px] font-semibold text-gray-500 mb-2">
                  Premium Estimation
                </p>
                <Text
                  label={"Premium Currency"}
                  value={data.premium_currency}
                />
                <Text label={"Premium Amount"} value={parseInt(data.premium_amount).toLocaleString()} />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-gray-500 mb-2">
                  Brokerage Estimation
                </p>
                <Text
                  label={"Brokerage Currency"}
                  value={data.brokerage_currency}
                />
                <Text
                  label={"Brokerage Amount"}
                  value={parseInt(data.brokerage_amount).toLocaleString()}
                />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-gray-500 mb-2">
                  Source Estimation
                </p>
                <Text label={"Source Currency"} value={data.source_currency} />
                <Text label={"Source Amount"} value={parseInt(data.source_amount).toLocaleString()} />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-gray-500 mb-2">
                  Consultation Estimation
                </p>
                <Text
                  label={"Consultation Currency"}
                  value={data.consultation_currency}
                />
                <Text
                  label={"Consultation Amount"}
                  value={parseInt(data.consultation_amount).toLocaleString()}
                />
              </div>
            </div>
            <div>
              <div>
                <p className="text-[15px] font-semibold text-gray-500 mb-2">
                  Endorsement Estimation
                </p>
                <Text
                  label={"Endorsement Currency"}
                  value={data.endorsement_currency}
                />
                <Text
                  label={"Endorsement Amount"}
                  value={parseInt(data.endorsement_amount).toLocaleString()}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
