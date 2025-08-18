"use client";

import { selectEmployees } from "@/store/employees/employeesSlice";
import { useAppSelector } from "../hooks/store";

const GetEmployeeById = () => {
  const employees = useAppSelector(selectEmployees);
  console.log("nico employees", employees);
  return employees;
};

export default GetEmployeeById;
