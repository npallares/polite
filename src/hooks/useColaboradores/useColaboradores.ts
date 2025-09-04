"use client";

import { setNewEmployee } from "@/store/employees/employeesSlice";
import { useAppDispatch } from "@/store/store";
import {
  AddressData,
  BankInformation,
  EmergencyContact,
  JobInformation,
  PersonalData,
} from "@/types/employees";
import createNewEmployee from "@/utils/createNewEmployee";
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
  bankDataHandleSubmite: (
    contractType: string,
    cuil: string,
    bank: string,
    cbu: string
  ) => void;
  workDataHandlerSubmite: (
    workEmail: string,
    startDate: string,
    workBranch: string,
    area: string,
    rol: string,
    reportsTo?: string
  ) => void;
  contactDataHandleSubmite: (
    firstName: string,
    lastName: string,
    relationship: string,
    mobilePhone: number
  ) => void;
  personalData: PersonalData | null;
  addressData: AddressData | null;
  bankData: BankInformation | null;
  workData: JobInformation | null;
  contactData: EmergencyContact | null;
}

const useColaboradores = (): UseColaboradores => {
  const dispatch = useAppDispatch();
  const [personalData, setPersonalData] = useState<PersonalData | null>(null);
  const [addressData, setAddressData] = useState<AddressData | null>(null);
  const [bankData, setBankData] = useState<BankInformation | null>(null);
  const [workData, setWorkData] = useState<JobInformation | null>(null);
  const [contactData, setContactData] = useState<EmergencyContact | null>(null);

  useEffect(() => {
    const comprobation =
      personalData && addressData && bankData && workData && contactData;
    if (comprobation) {
      const newEmployee = createNewEmployee({
        personalData,
        addressData,
        bankData,
        workData,
        contactData,
      });
      dispatch(setNewEmployee(newEmployee));
    }
  }, [personalData, addressData, bankData, workData, dispatch, contactData]);

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
  const bankDataHandleSubmite = (
    contractType: string,
    cuil: string,
    bank: string,
    cbu: string
  ) => {
    setBankData({
      contractType,
      cuil,
      bank,
      cbu,
    });
  };
  const workDataHandlerSubmite = (
    workEmail: string,
    startDate: string,
    workBranch: string,
    area: string,
    rol: string,
    reportsTo?: string
  ) => {
    setWorkData({
      workEmail,
      workBranch,
      startDate,
      area,
      rol,
      reportsTo,
    });
  };
  const contactDataHandleSubmite = (
    firstName: string,
    lastName: string,
    relationship: string,
    mobilePhone: number
  ) => {
    setContactData({
      firstName,
      lastName,
      relationship,
      mobilePhone,
    });
  };

  return {
    contactDataHandleSubmite,
    contactData,
    workDataHandlerSubmite,
    workData,
    bankDataHandleSubmite,
    bankData,
    personalDataHandleSubmit,
    personalData,
    addressData,
    addressDataHandleSubmite,
  };
};

export default useColaboradores;
