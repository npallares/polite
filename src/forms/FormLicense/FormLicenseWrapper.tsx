"use client"
import React from "react";
import FormLicense from "./FormLicense";
import useLicense from "@/hooks/useLicense/useLicense";

interface Props {
  id: string;
}

const FormLicenseWrapper = ({ id }: Props) => {
  const { licenseDataHandleSubmit } = useLicense({ id });
  return <FormLicense licenseDataHandleSubmit={licenseDataHandleSubmit} />;
};

export default FormLicenseWrapper;
