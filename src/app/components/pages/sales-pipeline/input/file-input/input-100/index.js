import React from "react";
import { selectLostSalesStatus } from "@/app/utils/dummy";
import Selectfield from "@/app/components/global/selectfield";
import SubmitButton from "@/app/components/global/blue-button";
import FileInput from "@/app/components/global/filefield";
import FileDetail from "@/app/components/global/file-detail";
import EditButton from "@/app/components/global/yellow-button";

export default function input100({
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
      {data.file == null &&<div>
        <FileInput label={"Certificate"} id={"certificate"} />
        <FileInput label={"Cover Note"} id={"cover_note"} />
        <FileInput label={"Policy"} id={"policy"} />
        <FileInput label={"Invoice"} id={"invoice"} />
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
          {/* <FileDetail label={"BOR/LOA"} size={"3"}  /> */}
          {data.file.certificate!=null && <FileDetail label={"Certificate"} size={"3"}  />}
          {data.file.cover_note!=null && <FileDetail label={"Cover Note"} size={"3"}  />}
          {data.file.policy!=null && <FileDetail label={"Policy"} size={"3"}  />}
          {data.file.invoice!=null && <FileDetail label={"Invoice"} size={"3"}  />}
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
