import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import FormEntryVisualStep from "./FormEntryVisualStep";

interface Props {
  step: string;
}

type Step = { id: string; label: string };

const steps: Step[] = [
  { id: "personal", label: "Información personal" },
  { id: "bank", label: "Datos fiscales y bancarios" },
  { id: "work", label: "Información laboral" },
  { id: "contact", label: "Contacto de emergencia" },
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
          const { label, id } = el;
          const isCurrentStep = step === id;
          return (
            <div key={id} className="mr-2 border border-amber-500">
              <FormEntryVisualStep
                index={i}
                step={id}
                label={label}
                isCurrentStep={isCurrentStep}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FormEntryHeader;
