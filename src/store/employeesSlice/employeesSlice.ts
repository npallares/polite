import { Employee, Licenses } from "@/types/employees";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EMPLOYEE_MOK from "../../MOK/MOK_EMPLOYESS_2.json";
import { RootState } from "../index";
import { loadState, saveState } from "@/utils/storage";

export enum LoadingStatus {
  Uninitialized = "Uninitialized",
  Loading = "Loading",
  Errored = "Errored",
  Loaded = "Loaded",
}
interface EmployesState {
  employees: Employee[];
}

const LOCAL_STORAGE_KEY = "employees";

const initialState: EmployesState = loadState<EmployesState>(
  LOCAL_STORAGE_KEY,
  {
    employees: EMPLOYEE_MOK,
  }
);

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },

    setNewEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees = [...state.employees, action.payload];
      saveState(LOCAL_STORAGE_KEY, state);
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
      saveState(LOCAL_STORAGE_KEY, state);
    },
  },
});

export const { setEmployees, setJobsLicenseToEmployee, setNewEmployee } =
  employeesSlice.actions;
export const selectEmployees = (state: RootState) => state.employees.employees;

export default employeesSlice.reducer;
