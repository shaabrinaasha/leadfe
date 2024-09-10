import React from "react";

export default function progressDonut({ progress }) {
  const calcProgress = (progress) => {
    switch (progress) {
      case "0":
        return "100";
      case "5":
        return "95";
      case "10":
        return "90";
      case "20":
        return "80";
      case "40":
        return "70";
      case "60":
        return "50";
      case "80":
        return "40";
      case "90":
        return "30";
      case "100":
        return "0";
      default:
        break;
    }
  };
  return (
    <div>
      {/* <!-- Circular Progress -->  */}
      <div className="relative size-[140px]">
        <svg
          className="size-full -rotate-90"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <!-- Background Circle --> */}
          <circle
            cx="18"
            cy="18"
            r="13"
            fill="none"
            className="stroke-current text-gray-200 "
            stroke-width="4"
          ></circle>
          {/* <!-- Progress Circle --> */}
          <circle
            cx="18"
            cy="18"
            r="13"
            fill="none"
            className="stroke-current text-amber-400"
            stroke-width="4"
            stroke-dasharray="100"
            stroke-dashoffset={calcProgress(progress)}
            stroke-linecap="round"
          ></circle>
        </svg>

        {/* <!-- Percentage Text --> */}
        <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
          <span className="text-center text-2xl font-bold text-gray-600 ">
            {progress+"%"}
          </span>
        </div>
      </div>
      {/* <!-- End Circular Progress --> */}
    </div>
  );
}
