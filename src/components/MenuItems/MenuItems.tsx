"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";
import { CgProfile } from "react-icons/cg";
import {
  IoBrowsersOutline,
  IoCalculator,
  IoCalendarNumberOutline,
  IoCalendarOutline,
  IoDocumentOutline,
  IoFastFood,
  IoHeartCircle,
} from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

interface IMenuItem {
  path: string;
  icon: JSX.Element;
  title: string;
}

const menuItems: IMenuItem[] = [
  {
    path: "/dashboard/main",
    icon: <LuLayoutDashboard className="w-4 h-4" />,
    title: "Home",
  },
  {
    path: "/dashboard/license/01",
    icon: <IoCalendarOutline className="w-4 h-4" />,
    title: "Licencias",
  },
  {
    path: "/dashboard/receipts",
    icon: <IoDocumentOutline className="w-4 h-4" />,
    title: "Recibos",
  },
  {
    path: "/dashboard/profile",
    icon: <CgProfile  className="w-4 h-4" />,
    title: "Mis Datos",
  },
];

const MenuItems: React.FC = () => {
  const pathName = usePathname();
  return menuItems.map((item) => {
    const { path, icon, title } = item;
    // console.log("items", item, pathName);
    const isActive = pathName.includes(path);
    return (
      <div
        key={title}
        className="flex justify-center w-full h-10 border-red-600 my-1 "
      >
        <Link
          href={path}
          className={`w-full rounded-xl px-4 inline-flex space-x-2 items-center hover:bg-complementary transition ease-linear duration-150 text-main-stone-800 ${
            isActive ? "bg-complementary text-primary" : ""
          }`}
        >
          <div>{icon}</div>
          <div className="flex flex-col text-sm font-medium">{title}</div>
        </Link>
      </div>
    );
  });
};

export default MenuItems;
