"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Calendar } from "lucide-react";

type CustomCalendarProps = {
  icon?: React.ReactNode;
  label: string;
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
  className?: string;
};

export default function CustomCalendar({
  label,
  selectedDate,
  onDateChange,
}: CustomCalendarProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const defaultClassNames = getDefaultClassNames();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative inline-block w-full" ref={ref}>
      <div className="block text-sm font-normal mb-2">
        {label}
        <span className="absolute text-red-500 text-[10px] pl-1">*</span>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="text-sm flex justify-start items-center border w-full rounded-lg border-gray-300 bg-white px-3 py-2 text-main-stone-800 "
      >
        <div className="flex justify-start items-center gap-2 w-full">
          {<Calendar className="w-4 h-4" />}
          {selectedDate ? format(selectedDate, "dd-MM-yyyy") : "DD-MM-AA"}
        </div>
      </div>

      {open && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md ">
          <DayPicker
            captionLayout="dropdown-years"
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              onDateChange(date);
              setOpen(false);
            }}
            endMonth={new Date(2030, 0)}
            defaultMonth={selectedDate}
            classNames={{
              today: "text-primary",
              selected: "bg-primary rounded-3xl text-white border-0",
              root: `${defaultClassNames.root} shadow-lg p-5 outline-0 ring-0`,
              chevron: "fill-main-stone-800",
              caption_label: `${defaultClassNames.caption_label} text-base font-light text-main-stone-700 ml-1`,
              month_caption: `text-base font-light text-main-stone-700 h-10 pt-3 mb-3`,
              day: `${defaultClassNames.day} hover:bg-main-stone-600  rounded-3xl hover:text-main-stone-900`,
            }}
          />
        </div>
      )}
    </section>
  );
}
