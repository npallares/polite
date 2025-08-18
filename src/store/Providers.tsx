"use client";

import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";
import { setEmployees } from "./employees/employeesSlice";
import MOK from "../MOK/MOK_EMPLOYESS.json"

interface Props {
  children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
  useEffect(() => {
    
    // const persisted = localStorage.getItem("employees") ?? "{}";

    console.log("Nico persisted", MOK);

    //const employees = persisted.employees ?? {};

    store.dispatch(setEmployees(MOK));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
