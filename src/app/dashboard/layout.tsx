import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";

const dashboardPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" overflow-y-scroll w-screen h-full antialiased text-slate-300 selection:bg-red-600 selection:text-white">
        <div className="flex">
          <Sidebar />
          <div className="p-2 w-full text-slate-900">{children}</div>
        </div>
      </div>
    </>
  );
};

export default dashboardPage;
