"use client";
import React, { useEffect, useState } from "react";
import { salesDetailProgress } from "@/app/utils/dummy";
import YellowButton from "@/app/components/global/yellow-button";
import NotesField from "../notes-field";
import Input40 from "../file-input/input-40";
import Input60 from "../file-input/input-60";
import Input80 from "../file-input/input-80";
import Input100 from "../file-input/input-100";
import axios from "axios";

export default function tabContent({ current, flag, setFlag, handleNext }) {
  // const [dataFetch, setDataFetch] = useState({
  //   0: "",
  //   5: "",
  //   10: "",
  //   20: "",
  //   40: "",
  //   60: "",
  //   80: "",
  //   100: "",
  // });

  const [dataFetch, setDataFetch] = useState(null);

  useEffect(() => {
    axios
      .get("/progress-dummy.json")
      .then((res) => console.log(setDataFetch(res.data)))
      .catch((err) => console.log(err));
  }, []);

  const [title, setTitle] = useState({
    progress: "",
    label: "Loading...",
    requirements: "",
  });

  const [notes, setNotes] = useState({
    notes: "",
    salesPipelineStatus: null,
  });

  const matchProgress = (arr) => {
    const findResult = arr.find((x) => x.progress == current);
    setTitle(findResult);
  };

  useEffect(() => {
    matchProgress(salesDetailProgress);
  }, [current]);

  const handleFieldChange = (e, obj, func) => {
    func({ ...obj, [e.target.id]: e.target.value });
  };

  const handleSubmitNote = () => {
    // const index = "p" + current;
    if (parseInt(current) < 40) {
      setFlag((flag) => {
        return {
          ...flag,
          [current]: {
            status: true,
            notes: true,
            file: flag[current].file,
          },
        };
      });
    } else {
      setFlag((flag) => {
        return {
          ...flag,
          [current]: {
            status: flag[current].status,
            notes: true,
            file: flag[current].file,
          },
        };
      });
    }
  };

  const handleEnabled = () => {
    const toint = parseInt(current);
    if (toint < 40 && flag[current].status == true) {
      return true;
    } else if (
      toint >= 40 &&
      (flag[current].status == true || flag[current].file == false)
    ) {
      return true;
    }
    return false;
  };

  const handleSubmit = (param) => {
    setFlag({
      ...flag,
      [current]: {
        status: flag[current].status,
        notes: flag[current].notes,
        file: true,
      },
    });
  };

  return (
    <div className="mt-5">
      <div className="flex justify-between">
        <div>
          <h1 className=" text-[18px] font-semibold text-sky-950">
            {title.label}
          </h1>
          <p className=" text-[15px] font-medium text-gray-500">
            {title.requirements}
          </p>
        </div>

        <YellowButton
          disabled={handleEnabled()}
          width={"w-[150px]"}
          type={"button"}
          onClick={handleNext}
        >
          Move to Next Stage
        </YellowButton>
      </div>
      {(current == "40") && (dataFetch == null ? (
        <p>Loading...</p>
      ) : (
        <Input40
          handleSubmit={handleSubmit}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
          data={dataFetch["40"]}
        />
      ))}

      {current == "60" && (dataFetch == null ? (
        <p>Loading...</p>
      ) : (
        <Input60
          handleSubmit={handleSubmit}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
          data={dataFetch["60"]}
        />
      ))}

      {current == "80" && (dataFetch == null ? (
        <p>Loading...</p>
      ) : (
        <Input80
          handleSubmit={handleSubmit}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
           data={dataFetch["80"]}
        />
      ))}

      {current == "100" && (dataFetch == null ? (
        <p>Loading...</p>
      ) : (
        <Input100
          handleSubmit={handleSubmit}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
          data={dataFetch["100"]}
        />
      ))}

      {dataFetch == null ? (
        <p>Loading...</p>
      ) : (
        <NotesField
          handleSubmitNote={handleSubmitNote}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
          data={dataFetch[current]}
        />
      )}
    </div>
  );
}
