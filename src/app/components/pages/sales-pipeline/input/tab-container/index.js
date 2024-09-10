"use client";
import React, { useEffect, useState } from "react";
import Tab from "../tab";
import TabContent from "../tab-content";

export default function tabContainer() {
  const [current, setCurrent] = useState("0");
  const [progressStatus, setProgressStatus] = useState("0");
  const [flag, setFlag] = useState({
    0: {
      status: false,
      notes: false,
    },
    5: {
      status: false,
      notes: false,
    },
    10: {
      status: false,
      notes: false,
    },
    20: {
      status: false,
      notes: false,
    },
    40: {
      status: false,
      notes: false,
    },
    60: {
      status: false,
      notes: false,
    },
    80: {
      status: false,
      notes: false,
    },
    100: {
      status: false,
      notes: false,
    },
    endorsement: {
      status: false,
      notes: false,
    },
  });

  const handleNext = () => {
    const toint = parseInt(current);
    if (toint < 10) {
      const calc = toint + 5;
      setCurrent(calc.toString());
    } else if (toint == 10 || toint == 90) {
      const calc = toint + 10;
      setCurrent(calc.toString());
    } else if (toint <= 80 && toint >= 20) {
      const calc = toint + 20;
      setCurrent(calc.toString());
    }
  };
  console.log(current)
  return (
    <div className="p-2">
      <Tab
        setProgressStatus={setProgressStatus}
        progressStatus={progressStatus}
        current={current}
        setCurrent={setCurrent}
      ></Tab>
      <TabContent
        handleNext={handleNext}
        flag={flag}
        setFlag={setFlag}
        current={current}
      ></TabContent>
    </div>
  );
}
