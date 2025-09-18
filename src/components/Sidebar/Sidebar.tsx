"use client";
import MenuItems from "../MenuItems/MenuItems";
import { JSX } from "react";
import { CalendarClock, File, LayoutDashboard, User } from "lucide-react";

interface IMenuItem {
  path: string;
  icon: JSX.Element;
  title: string;
  id: string;
}

const Sidebar = () => {
  const menuItems: IMenuItem[] = [
    {
      path: "/dashboard/main",
      icon: <LayoutDashboard className="w-4 h-4" />,
      title: "Home",
      id: "main",
    },
    {
      path: "/dashboard/license/UNO-1",
      icon: <CalendarClock className="w-4 h-4" />,
      title: "Licencias",
      id: "license",
    },
    {
      path: "/dashboard/receipts",
      icon: <File className="w-4 h-4" />,
      title: "Recibos",
      id: "receipts",
    },
    {
      path: "/dashboard/profile",
      icon: <User className="w-4 h-4" />,
      title: "Mis Datos",
      id: "profile",
    },
  ];
  return (
    <div
      id="menu"
      className="bg-main-white min-h-screen z-10 text-slate-300 w-77 left-0 overflow-hideen border-amber-400 "
    >
      <div id="nav" className="w-full px-6 pl-4 ">
        <section className="flex text-lg md:text-2xl font-bold text-white my-9">
          <span className="text-primary text-2xl pl-4 font-semibold">
            Polite
          </span>
          <span className="text-xs ml-1 pt-0.5 text-brand-600">HR</span>.
        </section>

        <p className="text-xs tracking-widest text-main-stone-700 pl-4 mb-3">
          MENU
        </p>
        <MenuItems menuItems={menuItems} />
      </div>
    </div>
  );
};

export default Sidebar;
