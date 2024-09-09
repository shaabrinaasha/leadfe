import React from "react";
import Section from "@/app/components/global/section";
import Selectfield from "@/app/components/global/selectfield";
import Textfield from "@/app/components/global/textfield";
import SearchableSelect from "@/app/components/global/searchable-select";
import { sourceTypeData, formStatusData, sourceDummy } from "@/app/utils/dummy";

export default function sourceInformationForm({
  sourceInfo,
  setSourceInfo,
  handleFieldChange,
  sourceStatus,
  handleSearchSelect,
}) {
  const newSourceForm = () => {
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 mt-7">
        <Selectfield
          id={"type"}
          name={"type"}
          placeholder={"Select Source Type"}
          label={"Source Type"}
          defaultValue={"header"}
          onChange={(e) => handleFieldChange(e, sourceInfo, setSourceInfo)}
          mandatory={true}
          selectData={sourceTypeData}
        />

        <Textfield
          id={"name"}
          name={"name"}
          placeholder={"Insert source name..."}
          label={"Source Name"}
          value={sourceInfo.name}
          mandatory={true}
          onChange={(e) => handleFieldChange(e, sourceInfo, setSourceInfo)}
        />

        <Textfield
          id={"email"}
          name={"email"}
          placeholder={"Insert source email..."}
          label={"Source Email"}
          value={sourceInfo.email}
          mandatory={true}
          onChange={(e) => handleFieldChange(e, sourceInfo, setSourceInfo)}
        />

        <Textfield
          id={"mobile"}
          name={"mobile"}
          placeholder={"Insert source mobile..."}
          label={"Source Mobile"}
          value={sourceInfo.mobile}
          mandatory={true}
          onChange={(e) => handleFieldChange(e, sourceInfo, setSourceInfo)}
        />

        <Textfield
          id={"agreement_no"}
          name={"agreement_no"}
          placeholder={"Insert agreement or contract no..."}
          label={"Agreement/Contract No."}
          value={sourceInfo.agreement_no}
          onChange={(e) => handleFieldChange(e, sourceInfo, setSourceInfo)}
        />
      </div>
    );
  };

  const existingSourceForm = () => {
    return (
      <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 mt-7">
        <SearchableSelect
          name={"source_id"}
          placeholder={"Select Existing Source.."}
          label={"Select Source"}
          mandatory={true}
          onChange={(e) =>
            handleSearchSelect(e, "source_id", sourceInfo, setSourceInfo)
          }
          options={sourceDummy}
          useTooltip={true}
          tootltipText={"Search and select existing source"}
        />
      </div>
    );
  };
  console.log(sourceInfo);

  return (
    <div className="my-5">
      <Section title={"Source Information"}>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-3 mb-3">
          <Selectfield
            id={"status"}
            name={"status"}
            placeholder={"Select Source Status"}
            label={"Source Status"}
            defaultValue={"new"}
            onChange={(e) => handleFieldChange(e, sourceInfo, setSourceInfo)}
            mandatory={true}
            selectData={formStatusData}
            useTooltip={true}
            tootltipText={
              "Select 'existing' if source already exists in app database"
            }
          />
        </div>
        {sourceStatus == "new" && newSourceForm()}
        {sourceStatus == "existing" && existingSourceForm()}
      </Section>
    </div>
  );
}
