"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { setEmployees } from "./employeesSlice/employeesSlice";
import MOK from "../MOK/MOK_EMPLOYESS_2.json";
import { Employee } from "@/types/employees";
import { loadState } from "@/utils/storage";

interface Props {
  children: React.ReactNode;
}

type EmployesState = {
  employees: Employee[];
};

const LOCAL_STORAGE_KEY = "employees";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    const fallbackSlice: EmployesState = {
      employees: MOK,
    };
    const persistedSlice = loadState<EmployesState>(
      LOCAL_STORAGE_KEY,
      fallbackSlice
    );

    store.dispatch(setEmployees(persistedSlice.employees));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
