import React from "react";
import { selectLostSalesStatus } from "@/app/utils/dummy";
import Selectfield from "@/app/components/global/selectfield";
import SubmitButton from "@/app/components/global/blue-button";
import FileInput from "@/app/components/global/filefield";

export default function input100({
  current,
  notes,
  setNotes,
  handleFieldChange,
  handleSubmitNote,
}) {
  return (
    <div className="border-2 border-sky-600 p-5 rounded-lg mt-5">
      <p className="text-[15px] font-semibold ">Files Input</p>
      <FileInput label={"Certificate"} id={"certificate"} />
      <FileInput label={"Cover Note"} id={"cover_note"} />
      <FileInput label={"Policy"} id={"policy"} />
      <FileInput label={"Invoice"} id={"invoice"} />
      <FileInput label={"Other Docs"} id={"other"} maxHidden={false} />
      <SubmitButton
        width={"w-[100px] mt-5"}
        type={"submit"}
        onClick={handleSubmitNote}
      >
        Upload
      </SubmitButton>
    </div>
  );
}
