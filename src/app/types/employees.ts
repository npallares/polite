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

// --- 1) Personal Information ---
export interface Address {
  country?: string; // select
  state: string; // *
  city?: string; // select
  postalCode?: string;
  streetAddress: string; // *
  floor?: string; // *
  apartment?: string; // *
}

export interface Person {
  fullName: string; // *
  birthDate: ISODate; // *
  personalEmail: Email; // *
  mobilePhone: Phone; // *
  gender: Gender; // *
  address: Address;
  dni: string;
}

// --- 2) Tax and Banking Information ---
export interface TaxAndBankingInformation {
  employmentType: EmploymentType; // *
  ssn: SSN; // *
  bankName: string; // *
  bankAccount: BankAccount; // *
}

// --- 3) Job Information ---
export interface JobInformation {
  workEmail: Email; // *
  startDate: ISODate; // *
  branch: string; // *
  department: string; // *
  role: string; // *
  reportsTo: string; // * (id or name of supervisor)
}

// --- 4) Emergency Contact ---
export interface EmergencyContact {
  fullName: string; // *
  relationship: Relationship; // *
  mobilePhone: Phone; // *
}

export interface Employee {
  id: UUID;
  personal: Person;
  taxAndBanking: TaxAndBankingInformation;
  job: JobInformation;
  emergencyContact: EmergencyContact;
}
