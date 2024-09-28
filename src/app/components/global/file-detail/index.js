import React from "react";
import { MdFileCopy, MdDownload } from "react-icons/md";

export default function fileDetail({ label, size, onClick }) {
  return (
    <div className="flex items-center justify-between rounded-lg my-4 w-full py-2 px-3 drop-shadow-lg bg-slate-200">
      <div className="flex items-center">
        <MdFileCopy className="mr-3" />
        <div className="grid grid-cols-2 gap-3 items-center">
          <p className="text-[12px] font-semibold text-sky-950">{label}</p>
          <p className="text-[12px]">{size}MB</p>
        </div>
      </div>

      <button type="button" onClick={onClick}>
        <MdDownload className="text-sky-500 hover:text-black" />
      </button>
    </div>
  );
}
