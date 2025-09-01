"use client"

import { PrimaryButton } from "@/components/Buttons";
import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  const handleClick = () => {
    return redirect("/dashboard_admin/colaboradores/new_entry?step=1");
  }
  return <PrimaryButton value={"Nuevo ingreso"} onClick={handleClick} />;
};

export default page;
