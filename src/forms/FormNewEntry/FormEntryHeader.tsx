import React from "react";
import FormEntryVisualStep from "./FormEntryVisualStep";
import { ArrowLeft } from "lucide-react";

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
        <ArrowLeft className="w-5 h-5 mr-2" />
        {"Colaboradores"}
      </div>
      <h2 className="text-xl font-semibold text-main-stone-900 mb-10">
        Nuevo Ingreso
      </h2>
      <div className="flex w-auto">
        {steps.map((el, i) => {
          const { label, id, stepInForm } = el;
          const stepCounter = Number(i + 1);
          const isCurrentStep = step === stepInForm;
          const isDone = step > stepInForm;
          return (
            <div key={id} className="mr-2">
              <FormEntryVisualStep
                index={stepCounter}
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
