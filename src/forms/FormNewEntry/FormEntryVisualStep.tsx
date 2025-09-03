import React from "react";

interface Props {
  step: string;
  label: string;
  index: number;
  //isDone?: boolean;
  isCurrentStep: boolean;
}


const FormEntryVisualStep = ({ step, label, index, isCurrentStep }: Props) => {
  return (
    <div className="w-29 flex flex-col justify-center items-center text-xs">
      <span className="w-10 h-10 border-2 border-primary text-primary rounded-3xl flex justify-center items-center mb-3 text-lg font-semibold">
        {index}
      </span>
      <span
        className={`${
          isCurrentStep ? "text-primary" : "text-red-500"
        } flex justify-center items-center text-center`}
      >
        {label}
      </span>
    </div>
  );
};

export default FormEntryVisualStep;
