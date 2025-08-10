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
    icon: <LuLayoutDashboard className="w-5 h-5" />,
    title: "Home",
  },
  {
    path: "/dashboard/license",
    icon: <IoCalendarOutline className="w-5 h-5" />,
    title: "Licencias",
  },
  {
    path: "/dashboard/receipts",
    icon: <IoDocumentOutline className="w-5 h-5" />,
    title: "Recibos",
  },
  {
    path: "/dashboard/profile",
    icon: <CgProfile  className="w-5 h-5" />,
    title: "Mis Datos",
  },
];

const MenuItems: React.FC = () => {
  const pathName = usePathname();
  return menuItems.map((item) => {
    const { path, icon, title } = item;
    const isActive = pathName === path;
    return (
      <div
        key={title}
        className="flex justify-center w-full  h-12 border-red-600"
      >
        <Link
          href={path}
          className={`w-full rounded px-2 inline-flex space-x-2 items-center hover:bg-complementary transition ease-linear duration-150 text-main-stone-800 ${
            isActive ? "bg-complementary text-primary" : ""
          }`}
        >
          <div>{icon}</div>
          <div className="flex flex-col">{title}</div>
        </Link>
      </div>
    );
  });
};

export default MenuItems;
