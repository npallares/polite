"use client";

import { PrimaryButton } from "@/components/Buttons";
import EmployeeTable from "@/components/EmployeeTable/EmployeeTable";
import InfoCards from "@/components/InfoCards/InfoCards";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const handleClick = () => {
    return redirect("/dashboard_admin/colaboradores/new_entry?step=1");
  };
  return (
    <section>
      <div className="w-full justify-between flex mt-9 mb-10">
        <p className="flex items-center gap-2 mb-3 ml-4 text-2xl font-semibold text-main-stone-900">Colaboradores</p>
        <PrimaryButton value={"Nuevo colaborador"} onClick={handleClick} />
      </div>
      <div>
        <InfoCards />
      </div>
      <EmployeeTable />
    </section>
  );
};

export default page;
