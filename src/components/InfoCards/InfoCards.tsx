import React from "react";

const infoCards = [
  { label: "Total colaboradores", metric: 222 },
  { label: "Ingreso del mes", metric: 12 },
  { label: "Bajas del mes", metric: 12 },
  { label: "Antiguedad Promedio", metric: 4.5 },
];

const InfoCards = () => {
  return (
    <section className="w-full flex justify-between">
      {infoCards.map((el, i) => {
        const { label, metric } = el;
        const isAntiqueMetric = label.includes("Antiguedad")
        return (
          <div
            key={i}
            className="w-auto h-auto mr-3 mb-7 flex-1 justify-center items-center p-3 rounded-lg bg-main-stone-500 border border-main-stone-600 text-sm font-light last:mr-0 text-main-stone-900"
          >
            <p className="text-main-stone-900">{label}</p>
            <p className="mt-1 text-lg font-semibold text-main-stone-900">
              {metric} {isAntiqueMetric ? " años" : ""}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default InfoCards;
