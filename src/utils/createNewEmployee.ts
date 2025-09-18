import {
  AddressData,
  BankInformation,
  EmergencyContact,
  Employee,
  JobInformation,
  PersonalData,
} from "@/types/employees";

import { format } from "date-fns";
interface Props {
  personalData: PersonalData;
  addressData: AddressData;
  bankData: BankInformation;
  workData: JobInformation;
  contactData: EmergencyContact;
}

const createNewEmployee = ({
  personalData,
  addressData,
  bankData,
  workData,
  contactData,
}: Props): Employee => {
  const { firstName, lastName, birthDate, personalEmail, mobilePhone, gender } =
    personalData;
  const { country, province, city, postalCode, address, apartment, floor } =
    addressData;
  const { contractType, cuil, bank, cbu } = bankData;
  const { workEmail, startDate, workBranch, area, reportsTo, rol } = workData;
  const {
    firstName: contactFirstName,
    lastName: contactLastName,
    relationship,
    mobilePhone: contactMobilePhone,
  } = contactData;

  const birthDateData = new Date(birthDate);
  const birthDateFormated = format(birthDateData, "dd-MM-yyyy");

  const newEmploye: Employee = {
    id: `${firstName}${lastName}`,
    personal: {
      firstName,
      lastName,
      birthDate: birthDateFormated,
      personalEmail,
      gender: gender,
      mobilePhone: mobilePhone,
      country,
      province,
      city,
      postalCode,
      address,
      apartment,
      floor,
    },
    job: {
      workBranch,
      workEmail,
      startDate,
      area,
      rol,
      reportsTo,
      licenses: [],
    },
    bank: {
      contractType,
      cuil,
      bank,
      cbu,
    },
    emergencyContact: {
      firstName: contactFirstName,
      lastName: contactLastName,
      relationship: relationship,
      mobilePhone: contactMobilePhone,
    },
  };
  return newEmploye;
};

export default createNewEmployee;
