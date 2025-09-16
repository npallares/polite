// DatePicker.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

type CustomCalendarProps = {
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
};

export default function CustomCalendar({
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
    <div className="relative inline-block" ref={ref}>
      <label className="block text-sm font-normal mb-2" htmlFor="licenseTo">
        Hasta <span className="text-red-500 text-[8px] pl-1">*</span>
      </label>
      <label
        onClick={() => setOpen(!open)}
        className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500"
      >
        {selectedDate ? format(selectedDate, "dd/MM/yyyy") : "Selecciona fecha"}
      </label>

      {open && (
        <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md">
          <DayPicker
            captionLayout="dropdown-years"
            mode="single"
            selected={selectedDate}
            onSelect={(date) => {
              onDateChange(date);
              setOpen(false);
            }}
            classNames={{
              today: "text-primary border border-primary",
              selected:
                "border-primary bg-primary rounded-3xl text-white border-0",
              root: `${defaultClassNames.root} shadow-lg p-5 outline-0 ring-0`,
              chevron: "fill-main-stone-800",
            }}
          />
        </div>
      )}
    </div>
  );
}
  