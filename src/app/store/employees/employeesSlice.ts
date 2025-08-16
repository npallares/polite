import { Employee } from "@/app/types/employees";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import EMPLOYEE_MOK from "../../MOK/MOK_EMPLOYESS.json";

interface IEmployees {
  employees: Employee[];
}

const initialState: IEmployees = {
  employees: EMPLOYEE_MOK,
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployees: (state, action: PayloadAction<Employee[]>) => {
      state.employees = action.payload;
    },
  },
});

export const { setEmployees } = employeesSlice.actions;

export default employeesSlice.reducer;
