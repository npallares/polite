import FormLicense from "@/app/components/FormLicense/FormLicense";
import getEmployeeById from "@/app/utils/getEmployeeById";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  const employee = getEmployeeById(id);
  console.log("Employee :", employee);
  return <FormLicense />;
};

export default page;
