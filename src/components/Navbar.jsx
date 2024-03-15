"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineBars4 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import { navLink } from "./Helper";
import { Login, Search, Shoping } from "./Icon";
const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarHandler = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <nav className="z-10 lg:pt-[37px] pt-6 flex-grow-0 bg-light-white">
      <div className="container max-w-[1164px] px-3 mx-auto">
        <div className="flex items-center justify-between max-w-[1152px] mx-auto ps-[22px] pe-[18px] lg:py-[18px] py-3 bg-white rounded-full shadow-navbarShadow">
          <Image
            src="/assets/images/header/logo.png"
            width={90}
            height={39}
            alt="Logo"
          />
          <ul className="hidden lg:flex gap-[30px] ps-24">
            {navLink.map((value, index) => {
              return (
                <li key={index} className="flex flex-col items-center group">
                  <Link
                    aria-label={value.title}
                    className="text-Rich-Black text-opacity-70 group-hover:text-opacity-100 font-Syne font-normal sm:text-sm text-xsm transition-all ease-in-out duration-300"
                    href={value.path}
                  >
                    {value.title}
                  </Link>
                  <span>
                    <div className="w-[7px] h-[7px] bg-yellow rounded-full group-hover:opacity-100 opacity-0 transition-all ease-in-out duration-300"></div>
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="lg:hidden flex items-center gap-4">
            <div className="cursor-pointer">
              <Shoping />
            </div>
            <div className="cursor-pointer">
              <Search />
            </div>
            <button
              className="block lg:hidden text-Rich-Black text-3xl"
              onClick={sidebarHandler}
            >
              <HiOutlineBars4 className="sm:w-10 sm:h-10 w-7 h-7" />
            </button>
            <div className="sm:block hidden">
              <button className="text-Rich-Black bg-linear-gradient-btn hover:shadow-buttonShadow transition-all ease-in-out duration-300 py-2.5 px-5 rounded-full font-ClashDisplay flex items-center gap-1 font-medium sm:text-sm text-xsm">
                <span>
                  <Login />
                </span>
                Login
              </button>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <div className="cursor-pointer">
              <Shoping />
            </div>
            <div className="cursor-pointer">
              <Search />{" "}
            </div>
            <button className="text-Rich-Black bg-linear-gradient-btn hover:shadow-buttonShadow transition-all ease-in-out duration-300 py-2.5 px-5 rounded-full font-ClashDisplay flex items-center gap-1 font-medium sm:text-sm text-xsm">
              <span>
                <Login />
              </span>
              Login
            </button>
          </div>
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
        className={`lg:hidden fixed inset-y-0 left-0 w-full bg-white z-50 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="p-4 min-h-screen flex flex-col justify-center items-center">
          <button
            className="text-Rich-Black text-sm absolute top-10 right-7"
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
                    className="text-Richblack font-Inter font-normal text-md transition-all ease-in-out duration-300"
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
          <button className="text-Rich-Black sm:hidden bg-linear-gradient-btn hover:shadow-buttonShadow transition-all ease-in-out duration-300 py-2.5 px-5 rounded-full font-ClashDisplay flex items-center gap-1 font-medium sm:text-sm text-xsm">
            <span>
              <Login />
            </span>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
