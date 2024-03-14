import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLink } from "./Helper";
import {
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterLinkedInIcon,
  FooterTwitterIcon,
} from "./Icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-footer-cartoon-bg bg-cover bg-no-repeat" id="About">
      <div className="container mx-auto max-w-[1152px] px-3">
        <div className="pt-[38px] md:pt-[51px] pb-[38px] flex flex-wrap flex-col lg:flex-row items-center justify-between">
          <Link href="#" target="_blank">
            <Image
              width={171}
              height={74}
              src={"/assets/images/footer/footer-logo.png"}
              alt="company-logo"
            />
          </Link>
          <ul className="flex gap-2 sm:gap-[30px] py-5 lg:py-0 ">
            {navLink.map((value, index) => {
              return (
                <li key={index} className="flex flex-col  items-center ">
                  <Link
                    aria-label={value.title}
                    className="text-Rich-Black   font-Syne font-normal sm:text-sm text-sm relative after:absolute after:bottom-0 after:bg-black after:h-[2px] after:w-0 after:transition-all after:duration-500 after:left-0 after:rounded-md after:hover:w-full "
                    href={value.path}
                  >
                    {value.title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="flex gap-2.5">
            <Link
              className="transition-all duration-500 hover:-translate-y-1"
              href="https://www.linkedin.com/"
              target="_blank"
            >
              <FooterLinkedInIcon />
            </Link>
            <Link
              href="https://twitter.com/"
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
            >
              <FooterTwitterIcon />
            </Link>
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
            >
              <FooterFacebookIcon />
            </Link>
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              className="transition-all duration-500 hover:-translate-y-1"
            >
              <FooterInstagramIcon />
            </Link>
          </div>
        </div>
        <div className="bg-[#55524D] h-[2px] w-full rounded-md"></div>
        <p className="text-center text-Rich-Black pt-[38px] pb-12 font-Syne text-sm font-normal ">
          ©Copyright {currentYear}. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
