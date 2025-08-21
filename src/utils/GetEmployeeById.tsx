"use client";

import { selectEmployees } from "@/store/employees/employeesSlice";
import { useAppSelector } from "../hooks/store";

const GetEmployeeById = (id: string): boolean => {
  const employees = useAppSelector(selectEmployees);
  const currentEmployee = employees.employees.filter((el) => el.id === id);
  console.log("nico currentEmployee", currentEmployee);
  console.log("nico employees", employees, id);
  if (currentEmployee.length > 0) return true;
  return false;
};

export default GetEmployeeById;
