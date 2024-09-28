
import React from "react";

export default function activeSales({active}) {

  return (
    <div className="bg-white col-span-2 drop-shadow-xl rounded-lg p-5">
      <h2 className="text-[18px] font-bold text-sky-950">
        Ongoing Sales Pipeline
      </h2>
      <h3 className="text-[15px]">
        total amount of ongoing sales pipeline
      </h3>
      <div className="w-full text-center items-center my-5">
        <h2 className="text-[25px] font-bold">{active}</h2>
      </div>

    </div>
  );
}
