import React from "react";

export default function textStyle({label, value}) {
  return (
    <div className="grid grid-cols-2 gap-2 w-full text-[12px] mb-2">
      <p className="font-bold text-wrap">{label}</p>
      <p className="text-wrap">{value}</p>
    </div>
  );
}
