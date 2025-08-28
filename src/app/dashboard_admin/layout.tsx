import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarAdmin from "@/components/SidebarAdmin/SidebarAdmin";


const dashboardPageAdmin = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" overflow-y-scroll w-screen h-full antialiased text-slate-300 selection:bg-red-600 selection:text-white">
        <div className="flex">
          <SidebarAdmin />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default dashboardPageAdmin;
