import { IoLogoReact } from "react-icons/io5";
import MenuItems from "../MenuItems/MenuItems";

const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-main-white min-h-screen z-10 text-slate-300 w-70 left-0 overflow-hideen border-amber-400"
    >
      <div id="logo" className="my-4 px-6">
        <section className="text-lg md:text-2xl font-bold text-white">
          <div className="">
            <IoLogoReact />
          </div>
          <span className="text-primary  text-4xl">Polite</span>
          <span className="text-primary text-sm">HR</span>.
        </section>
        <section className="flex items-center text-lg md:text-2xl font-bold text-white ">
          <p className="text-sm  text-main-stone-900">MENU</p>
        </section>
      </div>

      <div id="nav" className="w-full px-6">
        <MenuItems />
      </div>
    </div>
  );
};

export default Sidebar;
