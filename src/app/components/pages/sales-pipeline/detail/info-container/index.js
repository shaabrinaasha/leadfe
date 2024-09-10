import React from "react";

import SalesProgressInfo from "../progress-info";
import SalesAccountInformation from "../account-info";
import SalesSourceInformation from "../source-info";
import SalesInsuredInformation from "../insured-info";
import SalesEstimationInformation from "../sales-estimation";
import { salesDetailDummy, salesDetailProgress } from "@/app/utils/dummy";

export default function salesDetailInfo() {
  return (
    <div className="grid lg:grid-cols-2 gap-4 mt-3">
      <SalesProgressInfo
        incomeEst={17000000}
        progress={salesDetailDummy.accountInfo.progress}
      />
      <SalesAccountInformation data={salesDetailDummy.accountInfo} />
      <div>
        <SalesSourceInformation data={salesDetailDummy.sourceInfo} />
        <SalesInsuredInformation data={salesDetailDummy.insuredInfo} picData={salesDetailDummy.picInfo} />
      </div>
      <SalesEstimationInformation data={salesDetailDummy.salesEst} />
    </div>
  );
}
