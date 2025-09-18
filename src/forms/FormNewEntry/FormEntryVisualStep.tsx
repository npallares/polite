import { Check } from "lucide-react";
import React from "react";

interface Props {
  label: string;
  index: number;
  isCurrentStep: boolean;
  isDone: boolean;
}

const FormEntryVisualStep = ({  label, index, isCurrentStep, isDone }: Props) => {
  return (
    <div className="w-29 flex flex-col justify-center items-center text-xs z-30">
      <span
        className={`${
          isDone ? "bg-primary" : "bg-white"
        } w-10 h-10 border-3 border-primary text-primary rounded-3xl flex justify-center items-center mb-3 text-lg font-semibold outline-white outline-10`}
      >
        {isDone ? <Check className="h-6 w-6 text-white" /> : index}
      </span>
      <span
        className={`${
          isCurrentStep || isDone ? "text-primary" : "text-main-stone-800"
        } flex justify-center items-center text-center font-semibold`}
      >
        {label}
      </span>
    </div>
  );
};

export default FormEntryVisualStep;
