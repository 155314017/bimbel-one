/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import SelectField from "../../../components/small/SelectField";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

const localizer = dayjsLocalizer(dayjs);

export default function DetailStudent({ student, onBack }: any) {
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex items-center gap-8">
        <button
          onClick={() => onBack()}
          className="border-2 border-[#125B9A] w-[40px] h-[40px] rounded-full transition-all ease hover:bg-slate-100"
        >
          <FontAwesomeIcon className="text-[#125B9A]" icon={faArrowLeft} />
        </button>

        <div className="flex gap-3">
          <h1 className="text-xl font-bold capitalize"> {student.full_name} </h1>
          <span
            className={`px-2 rounded-md font-bold tracking-wide text-[12px] flex items-center
      ${
        student.status === "active"
          ? "bg-green-100 text-green-500"
          : "bg-red-100 text-red-500"
      }`}
          >
            {student.status}
          </span>
        </div>
      </div>

      <div className="flex mt-8 gap-5">
        <div className="flex flex-col w-[20%] gap-4">
          <button className="border-2 border-slate-300 rounded-[10px] h-[55px] p-1 capitalize text-[14px] text-[#125B9A] tracking-wide transition-all duration-300 hover:border-b-8 hover:border-[#125B9A]">
            add daily notes
          </button>
          <button className="border-2 border-slate-300 rounded-[10px] h-[55px] p-1 capitalize text-[14px] text-[#125B9A] tracking-wide transition-all duration-300 hover:border-b-8 hover:border-[#125B9A]">
            add daily task
          </button>
          <SelectField
            options={options}
            value={selectedOption}
            onChange={(value) => setSelectedOption(value)}
            placeholder="Teacher"
          />
        </div>
        <div className="w-full h-[510px] flex justify-center items-center">
          <Calendar
            localizer={localizer}
            // events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
}
