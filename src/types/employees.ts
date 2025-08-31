type UUID = string;

export enum Gender {
  Male = "male",
  Female = "female",
  NonBinary = "non_binary",
  Other = "other",
  PreferNotToSay = "prefer_not_to_say",
}

export enum EmploymentType {
  Employee = "employee", // Relationship of dependency
  SelfEmployed = "self_employed", // Monotributista
  Freelance = "freelance",
  Other = "other",
}

export enum Relationship {
  Spouse = "spouse",
  Partner = "partner",
  Parent = "parent",
  Child = "child",
  Sibling = "sibling",
  Friend = "friend",
  Other = "other",
}

// --- Utility types (brands for data with specific format) ---
export type ISODate =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
export type Email = `${string}@${string}.${string}`;
export type Phone = string & { __brand: "Phone" }; // e.g. "+54 11 1234-5678"
export type SSN = string & { __brand: "SSN" }; // 11 digits (validation outside TS)
export type BankAccount = string & { __brand: "BankAccount" }; // 22 digits

export interface Address {
  country?: string;
  state: string;
  city?: string;
  postalCode?: string;
  streetAddress: string;
  floor?: string;
  apartment?: string;
}

export interface TaxAndBankingInformation {
  employmentType: EmploymentType;
  ssn: SSN;
  bankName: string;
  bankAccount: BankAccount;
}

export interface EmergencyContact {
  firstName: string;
  lastName: string;
  relationship: Relationship;
  mobilePhone: Phone;
}

export interface Licenses {
  to: string;
  from: string;
  type: string;
}

export interface JobInformation {
  licenses: Licenses[];
}

export interface AddressData {
  country?: string;
  province?: string;
  city?: string;
  postalCode?: string;
  address?: string;
  apartment?: string;
  floor?: string;
}

export interface Person extends PersonalData, AddressData {
  // Podés agregar campos adicionales si querés
}

export interface PersonalData {
  firstName: string;
  lastName: string;
  birthDate: string;
  personalEmail: string;
  mobilePhone?: number;
  gender?: string;
}

export interface Banck {
  contractType: string;
  cuil: string;
  banck: string;
  cbu: string;
}

export interface Employee {
  id: string;
  personal: Person;
  job: JobInformation;
  banck?: Banck | undefined;
}
