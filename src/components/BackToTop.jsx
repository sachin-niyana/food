"use client";
import { useState, useEffect } from "react";
import { TiArrowUpThick } from "react-icons/ti";
const BackToTop = () => {
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isBackToTopVisible && (
        <button
          onClick={scrollToTop}
          className="fixed sm:bottom-5 bottom-12 sm:right-5 right-3 sm:w-[54px] sm:h-[54px] w-[40px] h-[40px] bg-green animate-bounce bg-linear-gradient-btn text-white flex justify-center border-[2px] shadow-backToTopShadow border-white items-center rounded-full z-50 transition-all duration-300 "
        >
          <TiArrowUpThick className="sm:w-6 sm:h-6" />
        </button>
      )}
    </>
  );
};
export default BackToTop;
