"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface IMenuItem {
  path: string;
  icon: JSX.Element;
  title: string;
  id: string;
}

interface Props {
  menuItems: IMenuItem[];
}

const MenuItems = ({ menuItems }: Props) => {
  const pathName = usePathname();
  return menuItems.map((item) => {
    const { path, icon, title, id } = item;
    console.log("items", item, pathName);
    const isActive = pathName.includes(id);
    return (
      <div
        key={title}
        className="flex justify-center w-full h-10 border-red-600 my-1 "
      >
        <Link
          href={path}
          className={`w-full rounded-xl px-4 inline-flex space-x-2 items-center hover:bg-complementary transition ease-linear duration-150 text-main-stone-700 ${
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
