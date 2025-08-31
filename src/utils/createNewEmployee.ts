import { Employee } from "@/types/employees";
interface Props {
  firstName: string;
  lastName: string;
  birthDate: string;
  personalEmail: string;
  gender: string;
  mobilePhone: number;
}

const createNewEmployee = ({
  firstName,
  lastName,
  birthDate,
  personalEmail,
  gender,
  mobilePhone,
}: Props): Employee => {
  const newEmploye: Employee = {
    id: `${firstName}${lastName}`,
    personal: {
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      personalEmail: personalEmail,
      gender: gender,
      mobilePhone: mobilePhone,
    },
    job: {
      licenses: [],
    },
  };
  return newEmploye;
};

export default createNewEmployee;
