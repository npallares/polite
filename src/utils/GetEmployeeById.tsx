"use client";

import { selectEmployees } from "@/store/employees/employeesSlice";
import { useAppSelector } from "../hooks/store";

const GetEmployeeById = (id: string) => {
  const employees = useAppSelector(selectEmployees);
  console.log("nico employees", employees, id);
  return employees;
};

export default GetEmployeeById;
