"use client";

import Image from "next/image";
import React from "react";
import Icons from "../Icons";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { useForm } from "react-hook-form";

interface Props {
  id: string;
}

const FormLicense = ({ id }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange", // importante para que isValid se actualice al tipear
  });

  const onSubmit = handleSubmit((data) => {
    console.log("Formulario enviado", data);
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
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
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
              <label htmlFor="desde" className="block text-sm font-normal">
                Desde <span className="text-red-500 text-[10px]">*</span>
              </label>
              <div className="flex flex-col gap-2 w-64">
                <input
                  {...register("licenseFrom", {
                    required: true,
                  })}
                  id="date"
                  type="date"
                  placeholder="Seleccioná una fecha"
                  className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="hasta" className="block text-sm font-normal">
                Hasta{" "}
                <span className="absolute text-red-500 text-[8px] pl-1">*</span>
              </label>
              <div className="flex flex-col gap-2 w-64">
                <input
                  {...register("licenseTo", { required: true })}
                  id="date"
                  type="date"
                  placeholder="Seleccioná una fecha"
                  className="text-sm block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
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
