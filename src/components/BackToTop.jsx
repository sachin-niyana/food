"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
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
          className="fixed bottom-5 right-5 sm:w-[54px] sm:h-[54px] bg-green animate-bounce bg-linear-gradient-btn text-white p-4 rounded-full z-50 transition-all duration-300 "
        >
          <FaArrowUp className="sm:w-6 sm:h-6" />
        </button>
      )}
    </>
  );
};
export default BackToTop;
