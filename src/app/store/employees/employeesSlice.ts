import { Employee } from "@/app/types/employees";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IEmployees {
  employees: { [key: string]: Employee };
}

const initialState: IEmployees = {
  employees: {},
};

const employeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    createNewEmployee: (
      state,
      action: PayloadAction<{ [key: string]: Employee }>
    ) => {
      state.employees = action.payload;
    },
    deleteEmployee: (state, action: PayloadAction<Employee>) => {
      const employee = action.payload;
      const { id } = employee;
      if (!!state.employees[id]) {
        delete state.employees[id];
      }
      //TODO: no se debe hacer en redux
      localStorage.setItem("employees", JSON.stringify(state));
    },
    setEployees: (
      state,
      action: PayloadAction<{ [key: string]: Employee }>
    ) => {
        state.employees = action.payload;
    },
  },
});

export const { createNewEmployee, deleteEmployee, setEployees } =
  employeesSlice.actions;

export default employeesSlice.reducer;
