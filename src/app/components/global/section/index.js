import React from "react";

export default function section({children,height,width,title}) {
  return (
    <div className="m-2">
      <div className="relative mb-3">
        <div className={"border-2 border-sky-600 rounded-lg " + height + " " + width }>
          <h1 className="bg-white h-2 absolute left-3 top-0 mb-0 leading-[0.1] text-sky-600">
            {title}
          </h1>
          <div className="p-3 mt-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
