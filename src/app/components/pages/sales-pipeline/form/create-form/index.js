"use client";
import React, { useState } from "react";
import AccountInformationForm from "@/app/components/pages/sales-pipeline/form/account-information";
import SourceInformationForm from "@/app/components/pages/sales-pipeline/form/source-information";

import SubmitButton from "@/app/components/global/blue-button";
import dayjs from "dayjs";

export default function createSalesForm({}) {
  const [accountInfo, setAccountInfo] = useState({
    created_at: dayjs().format("YYYY-MM-DD"),
    created_by: "US001",
    /////
    sales_status: "pending", //win, lost , pending(default)
    progress : "0", // sales pipeline progress, default 0
    /////
    account_owner: "",
    business_unit: "",
    insurance_type: "",
    account_type: "",
    account_status: "", // if account_type new, then (new/affiliated) | else, then (affiliated/existing)
    existing_account: null, // nullable, in the form of insured_id, if account_status = affiliated, then user select insured_id | else if existing, then get data from insured information form
  });

  const [sourceInfo, setSourceInfo] = useState({
    source_id: null,
    status: "new",//if existing then select source and autofill source_id,
    type: null,
    name: null,
    email: null,
    mobile: null,
    agreement_no: null, 
    role: "aviation", //get user role from jwt
    created_by: "US001"//get user position from jwt
  });

  const [companyInfo, setCompanyInfo] = useState({
    company_id: null,
    name: null,
    address: null,
    phone: null,
    status: null, //insured/not_insured
  });

  const [insuredInfo, setInsuredInfo] = useState({
    insured_id: null,
    company_id: null,
    type: null, //holding/subsidiary/standalone
    holding_id: null,
  });

  const [picInfo, setPICInfo] = useState({
    pic_id: null,
    status: "new",//if existing then select pic
    name: null,
    email: null,
    mobile: null,
    role: "aviation", //get user role from jwt
    created_by: "US001"//get user position from jwt
  });

  const [salesEst, setSalesEst] = useState({
    inception_date: null,//if existing then select source and autofill source_id
    premium_currency: null,
    premium_amount: null,
    brokerage_currency: null,
    brokerage_amount: null,
    consultation_currency: null,
    consultation_amount: null,
    source_currency: null,
    source_amount: null,
  });


  const handleSelectChange = (e,obj,func) => {
    const selectValue = e.target.value;
    func({ ...obj, [e.target.id]: e.target.value });
  };

  const handleFieldChange = (e,obj,func) => {
    func({ ...obj, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    const isEmpty = Object.values(accountInfo).some(x => x == '');
    if (isEmpty==true) {
        alert("Some fields in the account information is empty, please fill the mandatory fields!");
    }
  };

  return (
    <div>
      <form onSubmit={()=> handleSubmit()}>
        <AccountInformationForm accountInfo={accountInfo} setAccountInfo={setAccountInfo} handleFieldChange={handleFieldChange} ></AccountInformationForm>
        <SourceInformationForm sourceStatus={sourceInfo.status} sourceInfo={sourceInfo} setSourceInfo={setSourceInfo} handleFieldChange={handleFieldChange} ></SourceInformationForm>
        <SubmitButton type={"submit"} width={"w-20"}>Submit</SubmitButton>
      </form>
    </div>
  );
}
