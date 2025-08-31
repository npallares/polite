"use client";

import { setNewEmployee } from "@/store/employees/employeesSlice";
import { useAppDispatch } from "@/store/store";
import { AddressData, Employee, PersonalData } from "@/types/employees";
// import createNewEmployee from "@/utils/createNewEmployee";
import createNewEmployee2 from "@/utils/createNewEmployee2";
import { useEffect, useState } from "react";

interface UseColaboradores {
  addressDataHandleSubmite: (
    province: string,
    city: string,
    postalCode: string,
    address: string,
    apartment: string,
    floor: string
  ) => void;
  personalDataHandleSubmit: (
    firstName: string,
    lastName: string,
    birthDate: string,
    personalEmail: string,
    mobilePhone: number,
    gender: string
  ) => void;
  personalData: PersonalData | null;
  addressData: AddressData | null;
}

const useColaboradores = (): UseColaboradores => {
  const dispatch = useAppDispatch();
  const [personalData, setPersonalData] = useState<PersonalData | null>(null);
  const [addressData, setAddressData] = useState<AddressData | null>(null);

  useEffect(() => {
    if (personalData && addressData) {
      const newEmployee = createNewEmployee2({ personalData, addressData });
      dispatch(setNewEmployee(newEmployee));
    }
  }, [personalData, addressData, dispatch]);

  /* const createNewEmployeeInStore = (newEmployee: Employee) => {
    console.log("nico newEmployee hook", newEmployee);
    dispatch(setNewEmployee(newEmployee));
  }; */

  const personalDataHandleSubmit = (
    firstName: string,
    lastName: string,
    birthDate: string,
    personalEmail: string,
    mobilePhone: number,
    gender: string
  ) => {
    setPersonalData({
      firstName,
      lastName,
      birthDate,
      personalEmail,
      mobilePhone,
      gender,
    });
  };

  const addressDataHandleSubmite = (
    province: string,
    city: string,
    postalCode: string,
    address: string,
    apartment: string,
    floor: string
  ) => {
    setAddressData({
      province,
      city,
      postalCode,
      address,
      apartment,
      floor,
    });
  };
  return {
    personalDataHandleSubmit,
    personalData,
    addressData,
    addressDataHandleSubmite,
  };
};

export default useColaboradores;
