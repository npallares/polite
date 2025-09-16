"use client";

import Image from "next/image";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Icons from "@/components/Icons";
import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import CustomCalendar from "@/components/CustomDatePicker/CustomCalendar";
import { format } from "date-fns";

interface Props {
  licenseDataHandleSubmit: (to: string, from: string, type: string) => void;
}

const FormLicense = ({ licenseDataHandleSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
    control,
  } = useForm({
    mode: "onChange", // importante para que isValid se actualice al tipear
  });

  const onSubmit = handleSubmit((data) => {
    const { licenseFrom, licenseType, licenseTo } = data;
    console.log("nico data", data);
    const dataComprobation = Boolean(licenseFrom && licenseType && licenseTo);
    if (!dataComprobation) return;
    licenseDataHandleSubmit(
      format(licenseFrom, "yyyy-MM-dd"),
      format(licenseTo, "yyyy-MM-dd"),
      licenseType
    );
    return reset();
  });

  return (
    <form
      className="w-full max-w-3xl space-y-6 text-main-stone-900 bg-white ml-8"
      onSubmit={onSubmit}
    >
      <h1 className="text-xl font-semibold mt-8">Licencias</h1>
      <h2 className="font-medium">¿Qué tipo de licencia vas a solicitás?</h2>
      {/* Tipo de licencia */}
      <div className="space-y-2">
        <label htmlFor="tipo" className="block text-sm font-normal">
          Tipo de licencia <span className="text-red-500 text-[10px]">*</span>
        </label>
        <div className="relative">
          <select
            id="tipo"
            className="w-50 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
            defaultValue=""
            {...register("licenseType", {
              required: true,
            })}
          >
            <option value="" disabled>
              Seleccionar
            </option>
            <option value="VACATION">Vacaciones</option>
            <option value="PARENTAL_LEAVE">Maternidad / Paternidad</option>
            <option value="SICK_LEAVE">Enfermedad</option>
          </select>
        </div>

        <Image alt="caret" src={Icons.Caret} className="absolute -mt-7 ml-43" />
      </div>

      {/* Seleccioná la fecha */}
      <div className="space-y-3">
        <p className="text-sm font-medium">Seleccioná la fecha</p>

        <div className="flex flex-col gap-4">
          <section className="flex gap-6">
            <div className="space-y-2">
              <Controller
                name="licenseFrom"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CustomCalendar
                    label={"Desde"}
                    selectedDate={value}
                    onDateChange={onChange}
                  />
                )}
              />
            </div>

            <div className="space-y-2">
              <Controller
                name="licenseTo"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <CustomCalendar
                    label={"Hasta"}
                    selectedDate={value}
                    onDateChange={onChange}
                  />
                )}
              />
            </div>
          </section>

          <div className="flex gap-4">
            <SecondaryButton value="Volver" />
            <PrimaryButton
              disabled={!isValid}
              type="submit"
              value="Continuar"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormLicense;
