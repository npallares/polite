import FormLicense from "@/components/FormLicense/FormLicense";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  console.log("Employee :", id);
  return <FormLicense id={id} />;
};

export default page;
