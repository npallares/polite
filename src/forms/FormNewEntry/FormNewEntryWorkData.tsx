import { PrimaryButton, SecondaryButton } from "@/components/Buttons";
import { redirect } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { format } from "date-fns";
import CustomCalendar from "@/components/CustomDatePicker/CustomCalendar";

interface Props {
  workDataHandlerSubmite: (
    workEmail: string,
    startDate: string,
    workBranch: string,
    area: string,
    rol: string,
    reportsTo?: string
  ) => void;
}

const FormNewEntryWorkData = ({ workDataHandlerSubmite }: Props) => {
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
    const { workEmail, startDate, workBranch, area, rol, reportsTo } = data;

    const dataComprobation = Boolean(
      workEmail && startDate && workBranch && rol && area && reportsTo
    );

    if (!dataComprobation) return;

    workDataHandlerSubmite(
      workEmail,
      format(startDate, "dd-MM-yyyy"),
      workBranch,
      area,
      rol,
      reportsTo
    );
    reset();

    return redirect("/dashboard_admin/colaboradores/new_entry?step=4");
  });

  return (
    <>
      {/* FORM */}
      <form
        className="w-full pl-9 space-y-6 text-main-stone-900 bg-white ml-8border-amber-400"
        onSubmit={onSubmit}
      >
        <div className="space-y-3">
          <div className="flex flex-col gap-4">
            {/* INFORMACION PERSONAL*/}
            <p className="text-lg font-semibold">Información laboral</p>

            {/* primera linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <div
                  className="block text-sm font-normal"
                >
                  {"Email laboral"}
                   <span className="absolute text-red-500 text-[10px] pl-1">
                    *
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="workEmail"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    {...register("workEmail", {
                      required: true,
                      pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "Formato de email inválido",
                      },
                    })}
                  ></input>
                </div>
              </div>

              <div className="space-y-2 w-70">
                <Controller
                  name="startDate"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <CustomCalendar
                      label={"Fecha de inicio"}
                      selectedDate={value}
                      onDateChange={onChange}
                    />
                  )}
                />
              </div>

              <div className="space-y-2">
                <div
                  className="block text-sm font-normal"
                >
                  {"Sucursal"}
                   <span className="absolute text-red-500 text-[10px] pl-1">
                    *
                  </span>
                </div>
                <div className="relative">
                  <input
                    {...register("workBranch", {
                      required: true,
                    })}
                    id="workBranch"
                    /*  placeholder="Seleccioná una fecha" */
                    className="w-68 text-sm block  rounded-lg border border-gray-300 bg-white px-3 py-2 text-main-stone-800 outline-none"
                  />
                </div>
              </div>
            </section>

            {/*segunda linea */}
            <section className="flex gap-6">
              <div className="space-y-2">
                <div className="block text-sm font-normal">
                  {"Area"}
                   <span className="absolute text-red-500 text-[10px] pl-1">
                    *
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="area"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("area", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>
              <div className="space-y-2">
                <div className="block text-sm font-normal">
                  {"Rol"}
                   <span className="absolute text-red-500 text-[10px] pl-1">
                    *
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="rol"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("rol", {
                      required: true,
                    })}
                  ></input>
                </div>
              </div>
              <div className="space-y-2">
                <div
                  className="block text-sm font-normal"
                >
                  {"Reporta a"}
                   <span className="absolute text-red-500 text-[10px] pl-1">
                    *
                  </span>
                </div>
                <div className="relative">
                  <input
                    id="reportsTo"
                    className="w-68 text-main-stone-800 appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
                    /*  placeholder="Ingrese nombre y apellido" */
                    {...register("reportsTo", {
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

export default FormNewEntryWorkData;
