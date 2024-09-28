"use client";
import React, { useEffect, useState } from "react";
import Tab from "../tab";
import TabContent from "../tab-content";

export default function tabContainer() {
  const [current, setCurrent] = useState("0");
  const [progressStatus, setProgressStatus] = useState("0");
  const [flag, setFlag] = useState({
    0: {
      status: true,
      notes: false,
      file: false,
    },
    5: {
      status: false,
      notes: false,
      file: false,
    },
    10: {
      status: false,
      notes: false,
      file: false,
    },
    20: {
      status: false,
      notes: false,
      file: false,
    },
    40: {
      status: false,
      notes: false,
      file: false,
    },
    60: {
      status: false,
      notes: false,
      file: false,
    },
    80: {
      status: false,
      notes: false,
      file: false,
    },
    100: {
      status: false,
      notes: false,
      file: false,
    },
    endorsement: {
      status: false,
      notes: false,
      file: false,
    },
  });

  const handleNext = () => {
    const toint = parseInt(current);
    const progressInt = parseInt(progressStatus);
    if (toint < 10) {
      const calc = toint + 5;
      setCurrent(calc.toString());

      setFlag({
        ...flag,
        [current]: {
          status: true,
          notes: flag[current].notes,
          file: flag[current].file,
        },
      });

      toint >= progressInt ? setProgressStatus(calc.toString()) : null;
    } else if (toint == 10 || toint == 90) {
      const calc = toint + 10;
      setCurrent(calc.toString());
      toint >= progressInt ? setProgressStatus(calc.toString()) : null;
      setFlag({
        ...flag,
        [current]: {
          status: true,
          notes: flag[current].notes,
          file: flag[current].file,
        },
      });
    } else if (toint <= 80 && toint >= 20) {
      const calc = toint + 20;
      setCurrent(calc.toString());
      toint >= progressInt ? setProgressStatus(calc.toString()) : null;
      setFlag({
        ...flag,
        [current]: {
          status: true,
          notes: flag[current].notes,
          file: flag[current].file,
        },
      });
    }
  };
  console.log(flag);
  return (
    <div className="p-2">
      <Tab
        setProgressStatus={setProgressStatus}
        progressStatus={progressStatus}
        current={current}
        setCurrent={setCurrent}
        flag={flag}
        setFlag={setFlag}
      ></Tab>
      <TabContent
        handleNext={handleNext}
        flag={flag}
        setFlag={setFlag}
        current={current}
        progressStatus={progressStatus}
      ></TabContent>
    </div>
  );
}
