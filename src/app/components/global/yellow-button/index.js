import React from "react";

export default function yellowButton({
  children,
  width,
  onClick,
  type,
  disabled = false,
}) {
  return (
    <div className={width}>
      <button
        disabled={disabled}
        type={type}
        onClick={onClick}
        className={
          "text-white border-2 border-slate-50  text-[12px]  p-2 rounded-md w-full " + ((disabled==false) ? "hover:text-black hover:bg-white hover:border-2 hover:border-amber-400 bg-amber-500" : "bg-gray-300")
        }
      >
        {children}
      </button>
    </div>
  );
}
