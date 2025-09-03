"use client";

import useEmployeeTable from "@/hooks/ useEmployeeTable/ useEmployeeTable";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

export type EmployeeInTable = {
  id: string;
  firstName: string;
  lastName: string;
  rol: string;
  startDate: string;
  workBranch: string;
  status: boolean;
  actions: string;
};

const columns: ColumnDef<EmployeeInTable>[] = [
  { header: "Nombre", accessorKey: "firstName" },
  { header: "Apellido", accessorKey: "lastName" },
  { header: "Rol", accessorKey: "rol" },
  { header: "Fecha de inicio", accessorKey: "startDate" },
  { header: "Sucursal", accessorKey: "workBranch" },
  { header: "Status", accessorKey: "status" },
  {
    header: "Acciones",
    accessorKey: "actions",
  },
];

const EmployeeTable = () => {
  const { employeesTable } = useEmployeeTable();
  const [data, setData] = useState<EmployeeInTable[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    if (employeesTable) setData(employeesTable);
  }, [employeesTable]);

  //const data = JSON.stringify(employeesTable);
  console.log("Nico data table", data);

  //if(!employeesTable)
  const table = useReactTable<EmployeeInTable>({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSorting: true,
  });

  if (!table) return;

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ml-4">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600"
                >
                  {header.isPlaceholder ? null : header.column.getCanSort() ? (
                    <button
                      onClick={header.column.getToggleSortingHandler()}
                      className="inline-flex items-center gap-1 hover:text-gray-800"
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                      {/* Indicador de orden */}
                      <svg
                        viewBox="0 0 20 20"
                        className={`h-3 w-3 transition ${
                          header.column.getIsSorted() === "asc"
                            ? "rotate-180 opacity-100"
                            : header.column.getIsSorted() === "desc"
                            ? "opacity-100"
                            : "opacity-30"
                        }`}
                        aria-hidden
                      >
                        <path d="M5 7l5 5 5-5" fill="currentColor" />
                      </svg>
                    </button>
                  ) : (
                    flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody className="divide-y divide-gray-100">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-gray-50 focus-within:bg-gray-50"
            >
              {row.getVisibleCells().map((cell) => {
                const cellData = cell.column.columnDef;
                if (cell.id.includes("actions"))
                  return (
                    <button
                      key={cellData.id}
                      className="px-4 py-4 whitespace-nowrap align-middle text-primary font-semibold cursor-pointer"
                    >
                      {"Ver Perfil"}
                    </button>
                  );
                return (
                  <td
                    key={cell.id}
                    className="px-4 py-4 whitespace-nowrap text-gray-700 align-middle"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Footer opcional (paginación / cargar más) */}
      <div className="flex items-center justify-center p-3">
        <button className="inline-flex items-center rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
          Cargar más
        </button>
      </div>
    </div>
  );
};

export default EmployeeTable;
