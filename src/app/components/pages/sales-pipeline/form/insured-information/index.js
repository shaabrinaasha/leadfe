import React from "react";
import Section from "@/app/components/global/section";
import Selectfield from "@/app/components/global/selectfield";
import Textfield from "@/app/components/global/textfield";
import SearchableSelect from "@/app/components/global/searchable-select";
import {
  sourceTypeData,
  formStatusData,
  companyDummy,
  insuredTypeData,
  picDummy,
} from "@/app/utils/dummy";

// const [insuredInfo, setInsuredInfo] = useState({
//   insured_id: null,
//   company_id: null,
//   type: null, //holding/subsidiary/standalone
//   holding_id: null,
//   name: null,
//   address: null,
//   phone: null,
//   status: null, //insured/not_insured
// });

// const [picInfo, setPICInfo] = useState({
//   pic_id: null,
//   status: "new", //if existing then select pic
//   name: null,
//   email: null,
//   mobile: null,
//   role: "aviation", //get user role from jwt
//   created_by: "US001", //get user position from jwt
// });

export default function insuredInformationForm({
  accountStatus,
  /////
  picInfo,
  setPICInfo,
  /////
  insuredInfo,
  setInsuredInfo,
  handleFieldChange,
  handleSearchSelect,
}) {
  const newInsuredForm = () => {
    return (
      <div className="py-2 mb-5">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3  ">
          <Textfield
            id={"name"}
            name={"name"}
            placeholder={"Insert name of insured..."}
            label={"Name of Insured"}
            value={insuredInfo.name}
            mandatory={true}
            onChange={(e) => handleFieldChange(e, insuredInfo, setInsuredInfo)}
          />

          <Textfield
            id={"address"}
            name={"address"}
            placeholder={"Insert address of insured..."}
            label={"Address of Insured"}
            value={insuredInfo.address}
            mandatory={true}
            onChange={(e) => handleFieldChange(e, insuredInfo, setInsuredInfo)}
          />

          <Textfield
            id={"phone"}
            name={"phone"}
            placeholder={"Insert phone of insured..."}
            label={"Phone of Insured"}
            value={insuredInfo.phone}
            mandatory={true}
            onChange={(e) => handleFieldChange(e, insuredInfo, setInsuredInfo)}
          />
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 ">
          <Selectfield
            id={"type"}
            name={"type"}
            placeholder={"Select Insured Type"}
            label={"Insured Type"}
            defaultValue={"header"}
            onChange={(e) => handleFieldChange(e, insuredInfo, setInsuredInfo)}
            mandatory={true}
            selectData={insuredTypeData}
          />
          {insuredInfo.type == "holding" && (
            <SearchableSelect
              name={"subsidiary_id"}
              placeholder={"Select Subsidiary.."}
              label={"Subsidiary Company"}
              mandatory={true}
              onChange={(e) =>
                handleSearchSelect(
                  e,
                  "subsidiary_id",
                  insuredInfo,
                  setInsuredInfo
                )
              }
              options={companyDummy}
              useTooltip={true}
              tootltipText={
                "Select a related subsidiary company, if there are multiple then choose one"
              }
            />
          )}
          {insuredInfo.type == "subsidiary" && (
            <SearchableSelect
              name={"holding_id"}
              placeholder={"Select Holding.."}
              label={"Holding Company"}
              mandatory={true}
              onChange={(e) =>
                handleSearchSelect(e, "holding_id", insuredInfo, setInsuredInfo)
              }
              options={companyDummy}
              useTooltip={true}
              tootltipText={"Select a related holding company"}
            />
          )}
        </div>
      </div>
    );
  };

  const existingInsuredForm = () => {
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 mt-7 py-2 mb-5">
        <SearchableSelect
          name={"insured_id"}
          placeholder={"Select insured company.."}
          label={"Select Insured Company"}
          mandatory={true}
          onChange={(e) =>
            handleSearchSelect(e, "insured_id", insuredInfo, setInsuredInfo)
          }
          options={companyDummy}
          useTooltip={true}
          tootltipText={"Select an existing insured company"}
        />
      </div>
    );
  };

  const newPICForm = () => {
    return (
      <div className="pt-5">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 ">
          <Textfield
            id={"name"}
            name={"name"}
            placeholder={"Insert name of PIC..."}
            label={"PIC Name"}
            value={picInfo.name}
            mandatory={true}
            onChange={(e) => handleFieldChange(e, picInfo, setPICInfo)}
          />

          <Textfield
            id={"email"}
            name={"email"}
            placeholder={"Insert email of PIC..."}
            label={"PIC Email"}
            value={picInfo.email}
            mandatory={true}
            onChange={(e) => handleFieldChange(e, picInfo, setPICInfo)}
          />

          <Textfield
            id={"mobile"}
            name={"mobile"}
            placeholder={"Insert mobile of PIC..."}
            label={"PIC Mobile"}
            value={picInfo.mobile}
            mandatory={true}
            onChange={(e) => handleFieldChange(e, picInfo, setPICInfo)}
          />
        </div>
      </div>
    );
  };

  const existingPICForm = () => {
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 mt-7 ">
        <SearchableSelect
          name={"pic_id"}
          placeholder={"Select PIC.."}
          label={"Select PIC"}
          mandatory={true}
          onChange={(e) => handleSearchSelect(e, "pic_id", picInfo, setPICInfo)}
          options={picDummy}
          useTooltip={true}
          tootltipText={"Select an existing PIC"}
        />
      </div>
    );
  };
  console.log(insuredInfo);
  console.log(picInfo);

  return (
    <div className="my-5">
      <Section title={"Insured Information"}>
        <div className="divide-y">
          {accountStatus != "existing" && newInsuredForm()}
          {accountStatus == "existing" && existingInsuredForm()}
          <div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 mt-7 ">
              <Selectfield
                id={"status"}
                name={"status"}
                placeholder={"Select PIC Status"}
                label={"PIC Status"}
                defaultValue={"new"}
                onChange={(e) => handleFieldChange(e, picInfo, setPICInfo)}
                mandatory={true}
                selectData={formStatusData}
                useTooltip={true}
                tootltipText={"Select an 'existing' if PIC already exists in database"}
              />
            </div>
            {picInfo.status == "new" && newPICForm()}
            {picInfo.status == "existing" && existingPICForm()}
          </div>
        </div>
      </Section>
    </div>
  );
}
