import React from "react";
import { selectLostSalesStatus } from "@/app/utils/dummy";
import Selectfield from "@/app/components/global/selectfield";
import SubmitButton from "@/app/components/global/blue-button";

export default function notesField({
  current,
  notes,
  setNotes,
  handleFieldChange,
  handleSubmitNote,
}) {
  return (
    <div className="border-2 border-sky-600 p-5 rounded-lg mt-5">
      <form >
        {parseInt(current) >= 40 && (
          <div className="w-36 mb-3">
            <Selectfield
              id="salesPipelineStatus"
              label={"Sales Pipeline Status"}
              name={"salesPipelineStatus"}
              placeholder={"Select Status"}
              defaultValue={"header"}
              onChange={(e) => handleFieldChange(e, notes, setNotes)}
              selectData={selectLostSalesStatus}
            />
          </div>
        )}
        <div className="mb-4 mx-1 w-full  ">
          <label
            className="flex text-slate-900 text-[13px] font-semibold mb-2 items-center"
            htmlFor={"notes"}
          >
            Notes
          </label>
          <div className="w-full flex justify-end items-center relative">
            <textarea
              className=" border border-slate-300 content-start h-[100px] focus:border-sky-500 focus:border-[1px] rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-[12px] "
              id={"notes"}
              type={"text"}
              placeholder={"insert notes here..."}
              onChange={(e) => handleFieldChange(e, notes, setNotes)}
              value={notes.notes}
            />
          </div>
        </div>
        <SubmitButton width={"w-[100px] mt-5"} type={"submit"} onClick={handleSubmitNote}>
          Submit
        </SubmitButton>
      </form>
    </div>
  );
}
