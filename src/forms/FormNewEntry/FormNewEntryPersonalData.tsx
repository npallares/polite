"use client";

import { useForm } from "react-hook-form";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons";
import { redirect } from "next/navigation";


interface Props {
  personalDataHandleSubmit: (
    firstName: string,
    lastName: string,
    birthDate: string,
    personalEmail: string,
    mobilePhone: number,
    gender: string
  ) => void;
  addressDataHandleSubmite: (
    province: string,
    city: string,
    postalCode: string,
    address: string,
    apartment: string,
    floor: string
  ) => void;
}

const FormNewEntryPersonalData = ({
  personalDataHandleSubmit,
  addressDataHandleSubmite,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm({
    mode: "onChange", // importante para que isValid se actualice al tipear
  });

  const onSubmit = handleSubmit((data) => {
    const {
      firstName,
      lastName,
      birthDate,
      personalEmail,
      gender,
      mobilePhone,
      province,
      city,
      postalCode,
      address,
      apartment,
      floor,
    } = data;
    console.log("Formulario prev", data);

    if (
      !firstName ||
      !lastName ||
      !birthDate ||
      !personalEmail ||
      !gender ||
      !mobilePhone ||
      !province ||
      !city ||
      !postalCode ||
      !address ||
      !apartment ||
      !floor
    )
      return;

    console.log(
      "Formulario enviado",
      firstName,
      lastName,
      birthDate,
      personalEmail,
      province,
      city,
      postalCode,
      address,
      apartment,
      floor
    );

    personalDataHandleSubmit(
      firstName,
      lastName,
      birthDate,
      personalEmail,
      gender,
      mobilePhone
    );

    addressDataHandleSubmite(
      province,
      city,
      postalCode,
      address,
      apartment,
      floor
    );
    reset();
    console.log("Form colaboradores", "reset");
    return redirect("/dashboard_admin/colaboradores/new_entry?step=2");
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
            {/* INFORMACION PERSONAL*/}
            <p className="text-lg font-semibold">Información personal</p>

            {/* Información personal primera linea */}
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
                  {"Apellido "}
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

              <div className="space-y-2">
                <label
                  htmlFor="birthDate"
                  className="block text-sm font-normal"
                >
                  {"Fecha de nacimiento "}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="flex flex-col gap-2 w-64">
                  <input
                    {...register("birthDate", {
                      required: true,
                    })}
                    id="birthDate"
                    type="date"
                    /*  placeholder="Seleccioná una fecha" */
                    className="w-68 text-sm block  rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* Información personal segunda linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="personalEmail"
                  className="block text-sm font-normal"
                >
                  {"Email personal"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="personalEmail"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("personalEmail", {
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
                  {"Teléfono Celular"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("mobilePhone", {
                      required: true,
                    })}
                    id="mobilePhone"
                    type="number"
                    /*  placeholder="Seleccioná una fecha" */
                    className="w-68 text-sm block rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="gender" className="block text-sm font-normal">
                  {"Genero"}
                  <span className="absolute text-red-500 text-[8px] pl-1">
                    *
                  </span>
                </label>
                <div className="flex flex-col gap-2 w-64">
                  <input
                    {...register("gender", { required: true })}
                    id="gender"
                    /*  placeholder="Ingrese email" */
                    className="w-68 text-sm block rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </section>

            {/* DOMICILIO */}
            <p className="text-lg font-semibold pt-5">Domicilio</p>

            {/* Domicilio personal primera linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <label htmlFor="country" className="block text-sm font-normal">
                  {"Pais"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("country", {
                      required: true,
                    })}
                    id="country"
                    type="string"
                    /*  placeholder="Seleccioná una fecha" */
                    className="w-68 text-sm block rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="province" className="block text-sm font-normal">
                  {"Provincia"}
                  <span className="absolute text-red-500 text-[8px] pl-1">
                    *
                  </span>
                </label>
                <div className="relative ">
                  <input
                    {...register("province", { required: true })}
                    id="province"
                    /*  placeholder="Ingrese email" */
                    className="w-68 text-sm block rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="city" className="block text-sm font-normal">
                  {"Ciudad"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="city"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("city", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>
            </section>

            {/* Domicilio personal primera linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="postalCode"
                  className="block text-sm font-normal"
                >
                  {"Codigo postal"}
                  <span className="text-red-500 text-[10px]">*</span>
                </label>
                <div className="relative">
                  <input
                    {...register("postalCode", {
                      required: true,
                    })}
                    id="postalCode"
                    type="string"
                    /*  placeholder="Seleccioná una fecha" */
                    className="w-68 text-sm block rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="address" className="block text-sm font-normal">
                  {"address"}
                  <span className="absolute text-red-500 text-[8px] pl-1">
                    *
                  </span>
                </label>
                <div className="relative ">
                  <input
                    {...register("address", { required: true })}
                    id="address"
                    /*  placeholder="Ingrese email" */
                    className="w-68 text-sm block rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2 flex items-end">
                <div className="w-68 flex items-center justify-between">
                  <div>
                    <label
                      htmlFor="floor"
                      className="block text-sm font-normal mb-2"
                    >
                      {"Floor"}
                      <span className="text-red-500 text-[10px]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="Piso"
                        className="w-31 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                        /*  placeholder="Ingrese nombre y apellido" */
                        {...register("floor", {
                          required: true,
                        })}
                      ></input>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="apartment"
                      className="block text-sm font-normal mb-2"
                    >
                      {"Departamento"}
                      <span className="text-red-500 text-[10px]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="apartment"
                        className="w-31 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                        /*  placeholder="Ingrese nombre y apellido" */
                        {...register("apartment", {
                          required: true,
                        })}
                      ></input>
                    </div>
                  </div>
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

export default FormNewEntryPersonalData;
