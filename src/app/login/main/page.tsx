import { CircleArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const mainPage = () => {
  return (
    <section className="flex flex-col justify-center items-center w-screen h-screen  border-amber-600 text-primary">
      <div className="h-80 border-red-600 flex justify-center flex-col items-center ">
        <div className="flex justify-center items-center w-full h-15 hover:bg-complementary p-6 cursor-pointer">
          <Link
            className="flex flex-1 items-center mr-2"
            href="/dashboard/license/UNO-1"
          >
            <CircleArrowRight className="mr-2" />
            <span>Licencias</span>
          </Link>
        </div>
        <div className="flex justify-center items-center w-full h-15 hover:bg-complementary p-6 cursor-pointer">
          <Link
            className="flex flex-1 items-center mr-2"
            href="/dashboard_admin/colaboradores"
          >
            <CircleArrowRight className="mr-2" />
            <span>Colaboradores</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default mainPage;

//https://github.com/juansaintgenez-eng/politehr.git
