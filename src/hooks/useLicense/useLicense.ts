"use client";

import {
  selectEmployees,
  setJobsLicenseToEmployee,
} from "@/store/employees/employeesSlice";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { Licenses } from "@/types/employees";
import getLicenseByData from "@/utils/getLicenseByData";
import { useEffect, useState } from "react";

interface UseLicense {
  licenseDataHandleSubmit: (to: string, from: string, type: string) => void;
  licenseData: Licenses | null;
}

interface Props {
  id: string;
}

const useLicense = ({ id }: Props): UseLicense => {
  const dispatch = useAppDispatch();
  const employees = useAppSelector(selectEmployees);
  const currentEmployee = employees.employees.filter((el) => el.id === id);
  const [licenseData, setLicenseData] = useState<Licenses | null>(null);

  useEffect(() => {
    const comprobation = licenseData && id && currentEmployee;
    if (comprobation) {
      const newLicenseByData = getLicenseByData({
        licenseFrom: licenseData.from,
        licenseType: licenseData.type,
        licenseTo: licenseData.to,
      });
      if (newLicenseByData) {
        dispatch(
          setJobsLicenseToEmployee({
            employeeId: id,
            currentLicense: newLicenseByData,
          })
        );
      }
    }
  }, [id, dispatch, licenseData, currentEmployee]);

  const licenseDataHandleSubmit = (to: string, from: string, type: string) => {
    setLicenseData({
      to,
      from,
      type,
    });
  };

  return { licenseData, licenseDataHandleSubmit };
};

export default useLicense;
