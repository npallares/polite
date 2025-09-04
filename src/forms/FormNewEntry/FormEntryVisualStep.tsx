import React from "react";
import { IoIosCheckmark } from "react-icons/io";

interface Props {
  label: string;
  index: number;
  isCurrentStep: boolean;
  isDone: boolean;
}

const FormEntryVisualStep = ({  label, index, isCurrentStep, isDone }: Props) => {
  return (
    <div className="w-29 flex flex-col justify-center items-center text-xs">
      <span
        className={`${
          isDone ? "bg-primary" : ""
        } w-10 h-10 border-2 border-primary text-primary rounded-3xl flex justify-center items-center mb-3 text-lg font-semibold`}
      >
        {isDone ? <IoIosCheckmark className="h-15 w-15 text-white" /> : index}
      </span>
      <span
        className={`${
          isCurrentStep ? "text-primary" : "text-stone-700"
        } flex justify-center items-center text-center`}
      >
        {label}
      </span>
    </div>
  );
};

export default FormEntryVisualStep;
