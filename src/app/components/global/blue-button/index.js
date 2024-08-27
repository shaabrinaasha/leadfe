import React from "react";

export default function submitButton({ children,width,onClick, type }) {
  return (
    <div className={width}>
      <button type={type} onClick={onClick} className={"text-white border-2 border-slate-50 hover:text-black hover:bg-white hover:border-2 hover:border-sky-600 text-[12px] bg-sky-600 p-2 rounded-md w-full"}>
        {children}
      </button>
    </div>
  );
}
