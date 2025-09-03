"use client";

import { PrimaryButton } from "@/components/Buttons";
import EmployeeTable from "@/components/EmployeeTable/EmployeeTable";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const handleClick = () => {
    return redirect("/dashboard_admin/colaboradores/new_entry?step=1");
  };
  return (
    <section>
      <PrimaryButton value={"Nuevo ingreso"} onClick={handleClick} />
      <EmployeeTable />
    </section>
  );
};

export default page;
