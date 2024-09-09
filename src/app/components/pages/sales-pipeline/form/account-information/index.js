import React from "react";
import Section from "@/app/components/global/section";
import Selectfield from "@/app/components/global/selectfield";
import Textfield from "@/app/components/global/textfield";
import SearchableSelect from "@/app/components/global/searchable-select";
import {
  accountOwnerDummy,
  businessUnitData,
  accountTypeData,
  newAccountStatusData,
  renewalAccountStatusData,
  companyDummy
} from "@/app/utils/dummy";

export default function accountInformationForm({
  accountInfo,
  setAccountInfo,
  handleFieldChange,
  handleSearchSelect,
}) {
  // console.log(accountInfo);
  return (
    <div className="my-5">
      <Section title={"Account Information"}>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3">
          <Selectfield
            id={"account_owner"}
            name={"account_owner"}
            placeholder={"Select Account Owner"}
            label={"Account Owner"}
            defaultValue={"header"}
            onChange={(e) => handleFieldChange(e, accountInfo, setAccountInfo)}
            mandatory={true}
            selectData={accountOwnerDummy}
          />
          <Selectfield
            id={"business_unit"}
            name={"business_unit"}
            placeholder={"Select Business Unit"}
            label={"Business Unit"}
            defaultValue={"header"}
            onChange={(e) => handleFieldChange(e, accountInfo, setAccountInfo)}
            mandatory={true}
            selectData={businessUnitData}
          />
          <Textfield
            id={"insurance_type"}
            name={"insurance_type"}
            placeholder={"Insert insurance type..."}
            label={"Type of Insurance"}
            value={accountInfo.insurance_type}
            useTooltip={true}
            tootltipText={"test"}
            mandatory={true}
            onChange={(e) => handleFieldChange(e, accountInfo, setAccountInfo)}
          />
          <Selectfield
            id={"account_type"}
            name={"account_type"}
            placeholder={"Select New or Renewal"}
            label={"Account Type"}
            defaultValue={"header"}
            onChange={(e) => handleFieldChange(e, accountInfo, setAccountInfo)}
            mandatory={true}
            selectData={accountTypeData}
          />
          <Selectfield
            id={"account_status"}
            name={"account_status"}
            placeholder={"Select Account Status"}
            label={"Account Status"}
            defaultValue={"header"}
            onChange={(e) => handleFieldChange(e, accountInfo, setAccountInfo)}
            useTooltip={true}
            disabled={
              accountInfo.account_type == "" || accountInfo.account_type == null
                ? true
                : false
            }
            tootltipText={
              "Select the status of current account based on relationship with other accounts, please select ACCOUNT TYPE first to determine status"
            }
            mandatory={true}
            selectData={
              accountInfo.account_type == "renewal"
                ? renewalAccountStatusData
                : newAccountStatusData
            }
          />
          {accountInfo.account_status == "affiliated" && (
            <SearchableSelect
              name={"existing_account"}
              placeholder={"Select Existing Account"}
              label={"Existing Account"}
              mandatory={true}
              onChange={(e) =>
                handleSearchSelect(e, "existing_account", accountInfo, setAccountInfo)
              }
              options={companyDummy}
              useTooltip={true}
              tootltipText={"Select company account that is affiliated with this account"}
            />
          )}
        </div>
      </Section>
    </div>
  );
}
