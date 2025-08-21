import MenuItems from "../MenuItems/MenuItems";

const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-main-white min-h-screen z-10 text-slate-300 w-77 left-0 overflow-hideen border-amber-400 "
    >
      <div id="nav" className="w-full px-6 pl-4 ">
        <section className="text-lg md:text-2xl font-bold text-white my-9">
          <div className=""></div>
          <span className="text-primary text-2xl pl-4 font-semibold">
            Polite
          </span>
          <span className="fixed text-xs ml-1 text-brand-600">HR</span>.
        </section>

        <p className="text-xs tracking-widest text-main-stone-700 pl-4 mb-3">
          MENU
        </p>
        <MenuItems />
      </div>
    </div>
  );
};

export default Sidebar;
