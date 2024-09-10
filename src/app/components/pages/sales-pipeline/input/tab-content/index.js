"use client";
import React, { useEffect, useState } from "react";
import { salesDetailProgress } from "@/app/utils/dummy";
import YellowButton from "@/app/components/global/yellow-button";
import NotesField from "../notes-field";
import Input40 from "../file-input/input-40";
import Input60 from "../file-input/input-60";
import Input80 from "../file-input/input-80";
import Input100 from "../file-input/input-100";

export default function tabContent({ current, flag, setFlag, handleNext }) {
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
          },
        };
      });
    } else {
      setFlag((flag) => {
        return {
          ...flag,
          [current]: {
            status: true,
            notes: true,
          },
        };
      });
    }
  };

  //   const formatFlagIndex = () => {
  //     const index = "p" + current;
  //   }
  // console.log(flag[current])
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
          //   disabled={flag[current].status == false ? true : false}
          width={"w-[150px]"}
          type={"button"}
          onClick={handleNext}
        >
          Move to Next Stage
        </YellowButton>
      </div>
      {current == "40" && (
        <Input40
          handleSubmitNote={handleSubmitNote}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
        />
      )}

      {current == "60" && (
        <Input60
          handleSubmitNote={handleSubmitNote}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
        />
      )}

      {current == "80" && (
        <Input80
          handleSubmitNote={handleSubmitNote}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
        />
      )}

      {current == "100" && (
        <Input100
          handleSubmitNote={handleSubmitNote}
          handleFieldChange={handleFieldChange}
          notes={notes}
          setNotes={setNotes}
        />
      )}

      <NotesField
        handleSubmitNote={handleSubmitNote}
        handleFieldChange={handleFieldChange}
        notes={notes}
        setNotes={setNotes}
      ></NotesField>
    </div>
  );
}
