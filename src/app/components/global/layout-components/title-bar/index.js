import React from "react";
import dynamic from "next/dynamic";

const ProfileDropdown = dynamic(() => import("../profile-dropdown"), {
  ssr: false,
});

export default function titleBar({ title }) {
  return (
    <div className="p-3">
      <div className=" flex justify-between items-center">
        <h1 className="font-bold text-sky-950 text-[32px]">{title}</h1>
        <ProfileDropdown />
      </div>
    </div>
  );
}
