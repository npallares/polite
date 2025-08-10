"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { setEployees } from "./employees/employeesSlice";

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    const persisted = JSON.parse(localStorage.getItem("employees") ?? "{}");

    const employees = persisted.employees ?? {};

    store.dispatch(setEployees(employees));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
