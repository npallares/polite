import { Employee, Licenses } from "@/types/employees";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EMPLOYEE_MOK from "../../MOK/MOK_EMPLOYESS.json";
import { RootState } from "../index";

export enum LoadingStatus {
  Uninitialized = "Uninitialized",
  Loading = "Loading",
  Errored = "Errored",
  Loaded = "Loaded",
}
interface EmployesState {
  status: LoadingStatus;
  employees: Employee[];
  error: string | null;
}

const initialState: EmployesState = {
  status: LoadingStatus.Uninitialized,
  employees: EMPLOYEE_MOK,
  error: null,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
    setNewEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = [...state.employees, action.payload];
      console.log("nico payload", action.payload);
    },
    setJobsLicenseToEmployee: (
      state,
      action: PayloadAction<{ employeeId: string; currentLicense: Licenses[] }>
    ) => {
      const { employeeId, currentLicense } = action.payload;

      const employee = state.employees.find((emp) => emp.id === employeeId);
      if (employee) {
        const prev = employee.job.licenses ?? [];
        employee.job.licenses = [...prev, ...currentLicense];
      }
    },
  },
});

export const { setEmployees, setJobsLicenseToEmployee, setNewEmployee } =
  employeesSlice.actions;
export const selectEmployees = (state: RootState) => state.employees;

export default employeesSlice.reducer;
