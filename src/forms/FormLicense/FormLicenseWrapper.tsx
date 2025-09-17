"use client";
import React from "react";
import FormLicense from "./FormLicense";
import useLicense from "@/hooks/useLicense/useLicense";
import useNotification from "@/hooks/useNotification/useNotification";

interface Props {
  id: string;
}

const FormLicenseWrapper = ({ id }: Props) => {
  const { licenseDataHandleSubmit } = useLicense({ id });
  const { addNotificationHandler } = useNotification({
    message: "Has solicitado una licencia",
  });
  return (
    <FormLicense
      licenseDataHandleSubmit={licenseDataHandleSubmit}
      addNotificationHandler={addNotificationHandler}
    />
  );
};

export default FormLicenseWrapper;
