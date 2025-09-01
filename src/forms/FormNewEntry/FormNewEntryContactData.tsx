import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { redirect } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  contactDataHandleSubmite: (
    firstName: string,
    lastName: string,
    relationship: string,
    mobilePhone: number
  ) => void;
}

const FormNewEntryContactData = ({ contactDataHandleSubmite }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onChange", // importante para que isValid se actualice al tipear
  });

  const onSubmit = handleSubmit((data) => {
    const { firstName, lastName, relationship, mobilePhone } = data;

    const dataComprobation = Boolean(
      firstName && lastName && relationship && mobilePhone
    );
    console.log("Formulario prev", data, dataComprobation);

    if (!dataComprobation) return;

    console.log("Formulario enviado", data);
    contactDataHandleSubmite(firstName, lastName, relationship, mobilePhone);
    

    reset();
    console.log("Form colaboradores", "reset");
    return redirect("/dashboard_admin/colaboradores/");
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
            {/* CONTACTO PERSONAL*/}
            <p className="text-lg font-semibold">Contacto de emergencia</p>

            {/* primera linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="firstName"
                  className="block text-sm font-normal"
                >
                  {"Nombre"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="firstName"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    {...register("firstName", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-sm font-normal">
                  {"Apellido"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="lastName"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("lastName", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>
            </section>

            {/*segunda linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="relationship"
                  className="block text-sm font-normal"
                >
                  {"Vinculo / parentezco"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="relationship"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("relationship", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="mobilePhone"
                  className="block text-sm font-normal"
                >
                  {"Celular"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="mobilePhone"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("mobilePhone", {
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

export default FormNewEntryContactData;
