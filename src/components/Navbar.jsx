"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { navLink } from "./Helper";
import { Search, Shoping } from "./Icon";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="z-10 py-[18px] flex-grow-0 bg-light-white">
      <div className="container max-w-[1152px] mx-auto px-3">
        <div className="flex items-center justify-between max-w-[1152px] mx-auto ps-[22px] pe-[18px] py-[18px] bg-white rounded-full">
          <Image
            src="/assets/images/header/logo.png"
            width={90}
            height={39}
            alt="Logo"
          />
          <ul className="hidden lg:flex gap-[30px] ">
            {navLink.map((value, index) => {
              return (
                <li key={index}>
                  <Link
                    aria-label={value.title}
                    className="text-Rich-Black text-opacity-70 hover:text-opacity-100 font-Syne font-normal sm:text-sm text-xsm transition-all ease-in-out duration-300"
                    href={value.path}
                  >
                    {value.title}
                    <span className="w-[7px] h-[7px] bg-yellow rounded-full hover:opacity-100 opacity-0"></span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="hidden lg:flex items-center gap-4">
            <Shoping />
            <Search />
            <button className="text-Rich-Black hover:text-Rich-Black hover:bg-light-white transition-all ease-in-out duration-300 py-[13px] px-[19px] rounded-lg font-Oswald font-semibold sm:text-sm text-xsm">
              CONTACT US
            </button>
          </div>
          <button
            className="block lg:hidden text-white text-3xl"
            onClick={sidebarHandler}
          >
            <HiOutlineBars4 className="sm:w-10 sm:h-10 w-7 h-7" />
          </button>
        </div>
      </div>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black opacity-50 z-50"
          onClick={sidebarHandler}
        ></div>
      )}
      <div
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-black z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 min-h-screen flex flex-col justify-center items-center">
          <button
            className="text-white text-sm absolute top-6 right-5"
            onClick={sidebarHandler}
          >
            <RxCross1 className="sm:w-10 sm:h-10 w-7 h-7" />
          </button>
          <ul className="flex flex-col items-center space-y-4 my-5">
            {navLink.map((value, index) => {
              return (
                <li key={index}>
                  <Link
                    aria-label={value.title}
                    className="text-Rich-Black font-Inter font-normal sm:text-sm text-xsm  transition-all ease-in-out duration-300"
                    key={index}
                    href={value.path}
                    onClick={sidebarHandler}
                  >
                    {value.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <button className="text-light-white bg-green hover:text-Rich-Black hover:bg-light-white transition-all ease-in-out duration-300 py-[13px] px-[19px] rounded-lg font-Oswald font-semibold sm:text-sm text-xsm">
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
