"use client";

import { useAppDispatch } from "@/hooks/store";
import { useForm } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "../Buttons";
import { setJobsLicenseToEmployee } from "@/store/employees/employeesSlice";
import getLicenseByData from "@/utils/getLicenseByData";

const FormColaboradores = () => {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onChange", // importante para que isValid se actualice al tipear
  });

  const onSubmit = handleSubmit((data) => {
    //console.log("Formulario enviado", data);
    const { licenseFrom, licenseType, licenseTo } = data;

    const newLicenseByData = getLicenseByData({
      licenseFrom,
      licenseType,
      licenseTo,
    });
    console.log("Formulario enviado", newLicenseByData);
    if (newLicenseByData)
      dispatch(
        setJobsLicenseToEmployee({
          employeeId: "id",
          currentLicense: newLicenseByData,
        })
      );
    reset();
  });

  return (
    <>
      <div>
        <h1 className="text-sm mt-6">colaboradores</h1>
        <h2 className="text-xl font-semibold ">Nuevo Ingreso</h2>
        <p>Información personal</p>
      </div>
      <form
        className="w-full flex  max-w-3xl space-y-6 text-main-stone-900 bg-white ml-8 border border-amber-400"
        onSubmit={onSubmit}
      >
        {/* Seleccioná la fecha */}
        {/* Tipo de licencia */}

        <div className="space-y-3">
          <div className="flex flex-col gap-4">
            <section className="flex gap-6">
              <div className="space-y-2">
                <label htmlFor="tipo" className="block text-sm font-normal">
                  Nombre y apellido{" "}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="tipo"
                    className="w-50 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    placeholder="Ingrese nombre y apellido"
                    {...register("licenseType", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="desde" className="block text-sm font-normal">
                  Fecha de nacimiento{" "}
                  <span className="text-red-500 text-[10px]">*</span>
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
                  Email personal{" "}
                  <span className="absolute text-red-500 text-[8px] pl-1">
                    *
                  </span>
                </label>
                <div className="flex flex-col gap-2 w-64">
                  <input
                    {...register("licenseTo", { required: true })}
                    id="date"
                    placeholder="Ingrese email"
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
    </>
  );
};

export default FormColaboradores;
