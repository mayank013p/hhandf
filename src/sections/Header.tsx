"use client"; // Ensure this is present
import Link from "next/link";
import { Link as ScrollLink, Element } from "react-scroll";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof HTMLElement) {
        if (!event.target.closest(".menu-container") && isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Want to know the policies? let&apos;s go!
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container rounded-lg bg-[#ffffff]  bg-opacity-50 py5">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon
              className="h-5 w-5 md:hidden cursor-pointer"
              onClick={toggleMenu}
            />
            <nav className="hidden md:flex gap-6 text-black items-center ">
              {/* Horizontal Menu for Larger Screens */}
              <a href="">
                <ScrollLink to="home" smooth={true} duration={500}>
                  Home
                </ScrollLink>
              </a>
              <a href="">
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </a>
              <a href="">
                <ScrollLink to="ourgoals" smooth={true} duration={500}>
                  Our-Goals
                </ScrollLink>
              </a>
              <a href="">
                <ScrollLink to="test" smooth={true} duration={500}>
                  What-are-we
                </ScrollLink>
              </a>
              <Link href="/services" className="text-black">
                Services
              </Link>
              <a href="">
                <ScrollLink to="" smooth={true} duration={500}>
                  Contact us
                </ScrollLink>
              </a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium">
              <Link href="/services">
                Explore now!
              </Link>
              </button>
            </nav>
            {/* Vertical Mobile Menu */}
            <nav
              className={`md:hidden ${
                isMenuOpen
                  ? "block absolute bg-white bg-opacity-90 top-16 left-0 w-full p-6 z-30 menu-container"
                  : "hidden"
              }`}
            >
              <div className="flex flex-col items-start gap-4 text-lg">
                <a href="">
                  <ScrollLink to="home" smooth={true} duration={500}>
                    Home
                  </ScrollLink>
                </a>
                <a href="">
                  <ScrollLink to="about" smooth={true} duration={500}>
                    About
                  </ScrollLink>
                </a>
                <a href="">
                  <ScrollLink to="ourgoals" smooth={true} duration={500}>
                    Our-Goals
                  </ScrollLink>
                </a>
                <a href="">
                  <ScrollLink to="test" smooth={true} duration={500}>
                    What-are-we
                  </ScrollLink>
                </a>
                <Link href="/services" className="text-black">
                Services
              </Link>
                <a href="">
                  <ScrollLink to="" smooth={true} duration={500}>
                    Contact us
                  </ScrollLink>
                </a>
                <button className="bg-black text-white px-4 py-2 rounded-lg font-medium">
                  Get for free
                </button>
              </div>
              {/* Close Button for Mobile Menu */}
              <button
                className="absolute top-4 right-4 text-black font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                X
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
