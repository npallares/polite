import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  bankDataHandleSubmite: (
    contractType: string,
    cuil: string,
    bank: string,
    cbu: string
  ) => void;
}

const FormNewEntryBankData = ({ bankDataHandleSubmite }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onChange", // importante para que isValid se actualice al tipear
  });

  const onSubmit = handleSubmit((data) => {
    const { contractType, cuil, bank, cbu } = data;

    const dataComprobation = Boolean(contractType && cuil && bank & cbu);

    if (dataComprobation) return;
    bankDataHandleSubmite(contractType, cuil, bank, cbu);

    reset();
    return redirect("/dashboard_admin/colaboradores/new_entry?step=3");
  });

  return (
    <>
      <div>
        <h1 className="text-sm mt-6">colaboradores</h1>
        <h2 className="text-xl font-semibold ">Nuevo Ingreso</h2>
      </div>

      {/* FORM */}
      <form
        className="w-full  space-y-6 text-main-stone-900 bg-white ml-8 border border-amber-400"
        onSubmit={onSubmit}
      >
        <div className="space-y-3">
          <div className="flex flex-col gap-4">
            {/* DATOS FISCALES*/}
            <p className="text-lg font-semibold">Datos fiscales y bancarios</p>

            {/* Datos fiscales primera linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="contractType"
                  className="block text-sm font-normal"
                >
                  {"Tipo de contratación"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="contractType"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    {...register("contractType", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="cuil" className="block text-sm font-normal">
                  {"Cuil "}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="cuil"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("cuil", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>
            </section>

            {/* Datos fiscales segunda linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <label htmlFor="bank" className="block text-sm font-normal">
                  {"Banco"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("bank", {
                      required: true,
                    })}
                    id="bank"
                    /*  placeholder="Seleccioná una fecha" */
                    className="w-68 text-sm block  rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="cbu" className="block text-sm font-normal">
                  {"CBU"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="cbu"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("cbu", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>
            </section>

            {/* botones */}
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

export default FormNewEntryBankData;
