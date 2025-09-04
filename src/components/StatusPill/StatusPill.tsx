// components/StatusPill.tsx
import React from "react";

type Props = { value: boolean };

export default function StatusPill({ value }: Props) {
  const label = value ? "Activo" : "Inactivo";
  const classes = value
    ? "bg-emerald-50 text-emerald-600 ring-1 ring-inset ring-emerald-200"
    : "bg-gray-100 text-gray-600 ring-1 ring-inset ring-gray-300";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${classes}`}
    >
      {label}
    </span>
  );
}
