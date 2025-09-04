import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import FormEntryVisualStep from "./FormEntryVisualStep";

interface Props {
  step: number;
}

type Step = { id: string; label: string; stepInForm: number };

const steps: Step[] = [
  { id: "personal", label: "Información personal", stepInForm: 1 },
  { id: "bank", label: "Datos fiscales y bancarios", stepInForm: 2 },
  { id: "work", label: "Información laboral", stepInForm: 3 },
  { id: "contact", label: "Contacto de emergencia", stepInForm: 4 },
];

const FormEntryHeader = ({ step }: Props) => {
  return (
    <section className="ml-8 mb-8">
      <div className="flex justify-start items-center text-sm mt-6 text-main-stone-900 ">
        <IoIosArrowRoundBack className="w-6 h-6" />
        {"Colaboradores"}
      </div>
      <h2 className="text-xl font-semibold text-main-stone-900 mb-10">
        Nuevo Ingreso
      </h2>
      <div className="flex w-auto">
        {steps.map((el, i) => {
          const { label, id, stepInForm } = el;
          const isCurrentStep = step === stepInForm;
          const isDone = step > stepInForm;
          return (
            <div key={id} className="mr-2">
              <FormEntryVisualStep
                index={i}
                label={label}
                isCurrentStep={isCurrentStep}
                isDone={isDone}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FormEntryHeader;
