import React from "react";
import Link from "next/link";
import Image from "next/image";
import { navLink } from "./common/Helper";
import {
  FooterFacebookIcon,
  FooterInstagramIcon,
  FooterLinkedInIcon,
  FooterTwitterIcon,
} from "./common/Icon";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div
      className="min-[769px]:bg-footer-cartoon-bg bg-footer-cartoon-bg-2 sm:bg-center bg-right bg-cover bg-no-repeat"
      id="About"
    >
      <div className="container mx-auto max-w-[1152px] px-3">
        <div className="lg:pt-[51px] lg:pb-[38px] pb-[30px] sm:pt-[45px] pt-[65px] flex flex-wrap flex-col lg:flex-row items-center justify-between">
          <Link href="#" target="_blank">
            <Image
              className="sm:w-[171px] sm:h-[74px] w-[101px] h-[44px]"
              width={171}
              height={74}
              src={"/assets/images/footer/svg/footer-logo.svg"}
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
        <p className="text-center text-Rich-Black lg:pt-[38px] pt-[30px] lg:pb-12 pb-[30px] font-Syne text-sm font-normal ">
          ©Copyright {currentYear}. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
