import FormLicenseWrapper from "@/forms/FormLicense/FormLicenseWrapper";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  const { id } = await params;
  return <FormLicenseWrapper id={id} />;
};

export default page;
