import React from "react";
import { selectLostSalesStatus } from "@/app/utils/dummy";
import Selectfield from "@/app/components/global/selectfield";
import SubmitButton from "@/app/components/global/blue-button";
import FileInput from "@/app/components/global/filefield";
import FileDetail from "@/app/components/global/file-detail";
import EditButton from "@/app/components/global/yellow-button";

export default function input80({
  current,
  notes,
  setNotes,
  handleFieldChange,
  handleSubmit,
  data,
}) {
  return (
    <div className="border-2 border-sky-600 p-5 rounded-lg mt-5">
      <p className="text-[15px] font-semibold ">Files Input</p>
      {/* if no file uploaded */}
      {data.file == null && <div>
        <FileInput
          label={"BOR/LOA"}
          id={"bor_or_loa"}
          mandatory={true}
          maxHidden={false}
        />
        <FileInput label={"Other Docs"} id={"other"} maxHidden={false} />
        <SubmitButton
          width={"w-[100px] mt-5"}
          type={"submit"}
          onClick={handleSubmit}
        >
          Upload
        </SubmitButton>
      </div>}

      {/* if file exists */}
      {data.file != null && (
        <div>
          <FileDetail label={"BOR/LOA"} size={"3"}  />

          {data.file.other!=null && <FileDetail label={"Other Docs"} size={"3"}  />}
          
          <SubmitButton
            width={"w-[100px] mt-5"}
            type={"submit"}
            onClick={handleSubmit}
          >
            Upload
          </SubmitButton>
        </div>
      )}
    </div>
  );
}
