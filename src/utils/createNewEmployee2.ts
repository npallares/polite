import { AddressData, Employee, PersonalData } from "@/types/employees";
interface Props {
  personalData: PersonalData;
  addressData: AddressData;
}

const createNewEmployee2 = ({ personalData, addressData }: Props): Employee => {
  const { firstName, lastName, birthDate, personalEmail, gender, mobilePhone } =
    personalData;
  const { country, province, city, postalCode, address, apartment, floor } =
    addressData;
    
  const newEmploye: Employee = {
    id: `${firstName}${lastName}`,
    personal: {
      firstName,
      lastName,
      birthDate,
      personalEmail,
      gender,
      mobilePhone,
      country,
      province,
      city,
      postalCode,
      address,
      apartment,
      floor,
    },
    job: {
      licenses: [],
    },
  };
  return newEmploye;
};

export default createNewEmployee2;
