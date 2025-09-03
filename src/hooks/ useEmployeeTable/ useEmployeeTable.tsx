"use client";
import { selectEmployees } from "@/store/employees/employeesSlice";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import MOKDATA from "../../MOK/MOK_EMPLOYESS_2.json";
import { EmployeeInTable } from "@/components/EmployeeTable/EmployeeTable";

interface UseEmployeeTable {
  employeesTable: EmployeeInTable[] | null;
}

const useEmployeeTable = (): UseEmployeeTable => {
  const employees = useAppSelector(selectEmployees);
  const [employeesTable, setEmployeesTable] = useState<
    EmployeeInTable[] | null
  >(null);
  useEffect(() => {
    const newData = MOKDATA.map((el) => ({
      id: el.id,
      firstName: el.personal.firstName,
      lastName: el.personal.lastName,
      rol: el.job.rol,
      startDate: el.job.startDate,
      workBranch: el.job.workBranch,
      status: true,
      actions: "Ver Perfil",
    }));
    setEmployeesTable(newData);
  }, [employees]);

  return { employeesTable };
};

export default useEmployeeTable;
