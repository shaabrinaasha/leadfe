import React from "react";

export default function submitButton({ children,width }) {
  return (
    <div className={width}>
      <button className={"text-white hover:text-black hover:bg-white hover:border-2 hover:border-sky-600 text-[12px] bg-sky-600 p-2 rounded-md w-full"}>
        {children}
      </button>
    </div>
  );
}
