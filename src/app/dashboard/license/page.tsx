"use client";
import FormLicense from "@/components/FormLicense/FormLicense";
import GetEmployeeById from "@/utils/GetEmployeeById";
import React from "react";

const page = () => {
  const employee = GetEmployeeById();
  console.log("Employee :", employee);
  return <FormLicense />;
};

export default page;
