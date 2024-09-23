import React from "react";
import Section from "@/app/components/global/section";
import Selectfield from "@/app/components/global/selectfield";
import Textfield from "@/app/components/global/textfield";
import DatePickerMUI from "@/app/components/global/datepicker";
import SearchableSelect from "@/app/components/global/searchable-select";
import {
  accountOwnerDummy,
  businessUnitData,
  accountTypeData,
  newAccountStatusData,
  renewalAccountStatusData,
  companyDummy,
  currencyData,
} from "@/app/utils/dummy";

export default function salesEstimationForm({
  salesEst,
  setSalesEst,
  handleFieldChange,
  handleDateChange
}) {
  // console.log(salesEst);
  // const [salesEst, setSalesEst] = useState({
  //   inception_date: null, //if existing then select source and autofill source_id
  //   premium_currency: null,
  //   premium_amount: null,
  //   brokerage_currency: null,
  //   brokerage_amount: null,
  //   consultation_currency: null,
  //   consultation_amount: null,
  //   source_currency: null,
  //   source_amount: null,
  // });
  return (
    <div className="my-5">
      <Section title={"Sales Estimation"}>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 mb-3">
          <DatePickerMUI
            bigLabel={"Inception Date"}
            label={""}
            onChange={(e) => handleDateChange(e,"inception_date", salesEst, setSalesEst)}
            mandatory={true}
          />
        </div>

        <div className="grid lg:grid-cols-2 px-2 gap-3">
          {/* premium */}
          <div>
            <h2 className="font-bold text-[15px] text-sky-950 mb-2">
              Premium Estimation
            </h2>
            <div className="grid md:grid-cols-2 px-2 gap-3">
              <Selectfield
                id={"premium_currency"}
                name={"premium_currency"}
                placeholder={"Insert premium currency"}
                label={"Premium Currency"}
                defaultValue={"header"}
                onChange={(e) => handleFieldChange(e, salesEst, setSalesEst)}
                mandatory={true}
                selectData={currencyData}
              />
              <Textfield
                id={"premium_amount"}
                name={"premium_amount"}
                placeholder={"Insert premium amount..."}
                label={"Premium Amount"}
                value={salesEst.premium_amount}
                mandatory={true}
                onChange={(e) => handleFieldChange(e, salesEst, setSalesEst)}
              />
            </div>
          </div>

          {/* brokerage */}
          <div>
            <h2 className="font-bold text-[15px] text-sky-950 mb-2">
              Brokerage Fee Estimation
            </h2>
            <div className="grid md:grid-cols-2 px-2 gap-3">
              <Selectfield
                id={"brokerage_currency"}
                name={"brokerage_currency"}
                placeholder={"Insert brokerage currency"}
                label={"Brokerage Currency"}
                defaultValue={"header"}
                onChange={(e) => handleFieldChange(e, salesEst, setSalesEst)}
                mandatory={true}
                selectData={currencyData}
              />
              <Textfield
                id={"brokerage_amount"}
                name={"brokerage_amount"}
                placeholder={"Insert brokerage amount..."}
                label={"Brokerage Amount"}
                value={salesEst.brokerage_amount}
                mandatory={true}
                onChange={(e) => handleFieldChange(e, salesEst, setSalesEst)}
              />
            </div>
          </div>

          {/* source */}
          <div>
            <h2 className="font-bold text-[15px] text-sky-950 ">
              Commision Fee Estimation
            </h2>
            <p className="text-[12px] text-red-400 mb-2">
              {"*taken from brokerage fee"}
            </p>
            <div className="grid md:grid-cols-2 px-2 gap-3">
              <Selectfield
                id={"source_currency"}
                name={"source_currency"}
                placeholder={"Insert commision currency"}
                label={"Commision Currency"}
                defaultValue={"header"}
                onChange={(e) => handleFieldChange(e, salesEst, setSalesEst)}
                mandatory={true}
                selectData={currencyData}
              />
              <Textfield
                id={"source_amount"}
                name={"source_amount"}
                placeholder={"Insert commision amount..."}
                label={"Commision Amount"}
                value={salesEst.source_amount}
                mandatory={true}
                onChange={(e) => handleFieldChange(e, salesEst, setSalesEst)}
              />
            </div>
          </div>

          {/* consultation */}
          <div>
            <h2 className="font-bold text-[15px] text-sky-950 mb-2">
              Consultation Fee Estimation
            </h2>
            <div className="grid md:grid-cols-2 px-2 gap-3 lg:mt-[25px]">
              <Selectfield
                id={"consultation_currency"}
                name={"consultation_currency"}
                placeholder={"Insert consultation currency"}
                label={"Consultation Currency"}
                defaultValue={"header"}
                onChange={(e) => handleFieldChange(e, salesEst, setSalesEst)}
                mandatory={true}
                selectData={currencyData}
              />
              <Textfield
                id={"consultation_amount"}
                name={"consultation_amount"}
                placeholder={"Insert consultation amount..."}
                label={"Consultation Amount"}
                value={salesEst.consultation_amount}
                mandatory={true}
                onChange={(e) => handleFieldChange(e, salesEst, setSalesEst)}
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
