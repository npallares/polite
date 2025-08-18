import React from "react";

function CalendarIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <rect
        x="3"
        y="4"
        width="18"
        height="18"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 2v4M16 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

const FormLicense = () => {
  return (
    <form className="w-full max-w-3xl space-y-6 text-main-stone-900 bg-white">
      <h1 className="text-3xl mt-8">Licencias</h1>
      <h2>¿Qué tipo de licencia vas a solicitás?</h2>
      {/* Tipo de licencia */}
      <div className="space-y-2">
        <label htmlFor="tipo" className="block text-sm font-medium">
          Tipo de licencia <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            id="tipo"
            className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 pr-9 text-sm outline-none focus:border-gray-500"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Seleccionar
            </option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>

          {/* caret */}
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z" />
          </svg>
        </div>
      </div>

      {/* Seleccioná la fecha */}
      <div className="space-y-3">
        <p className="text-sm font-semibold">Seleccioná la fecha</p>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Desde */}
          <div className="space-y-2">
            <label htmlFor="desde" className="block text-sm font-medium">
              Desde <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
              </span>
              <input
                id="desde"
                type="text"
                placeholder="DD - MM - AA"
                className="w-full rounded-md border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500"
                required
              />
            </div>
          </div>

          {/* Hasta */}
          <div className="space-y-2">
            <label htmlFor="hasta" className="block text-sm font-medium">
              Hasta <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                <CalendarIcon className="h-4 w-4 text-gray-500" />
              </span>
              <input
                id="hasta"
                type="text"
                placeholder="DD - MM - AA"
                className="w-full rounded-md border border-gray-300 bg-white pl-9 pr-3 py-2 text-sm outline-none placeholder:text-gray-400 focus:border-gray-500"
                required
              />
            </div>
          </div>

          {/* Hasta */}
          <div className="space-y-2">
            <button>cargar datos</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormLicense;
