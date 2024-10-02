"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import logo from "../../../../../assets/x.webp";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [navBg, setNavBg] = useState("bg-gray-800");

  const navItems = [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/cars", title: "Cars" },
    { id: 3, link: "/about", title: "About Us" },
    { id: 4, link: "/contact", title: "Contact" },
  ];

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
    setNavBg(currentScrollPos > 10 ? "bg-gray-800" : "bg-transparent");
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 shadow-sm transition-transform duration-300 ${navBg} ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="hidden md:block lg:block">
            <Link href="/" className="flex items-center gap-2 text-white">
              <Image src={logo} alt="Car logo" width={80} height={40} />
              <span className="font-bold text-xl">X Man</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:block lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ id, link, title }) => (
                <Link
                  key={id}
                  href={link}
                  className="hover:scale-105 px-3 py-2 hover:border-b border-white duration-150 font-semibold inline-block text-white"
                >
                  {title}
                </Link>
              ))}
            </div>
          </div>

          {/* Hamburger Menu (for mobile view) */}
          <div className="-mr-2 flex md:hidden shadow-md text-blue-500">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-gray-800 lg:hidden py-2 px-2 shadow-sm fixed left-0 top-0 h-[100vh] w-2/3 transition-transform duration-300 ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="-mr-2 bg-gray-800 md:hidden shadow-md inline-block text-white p-3">
            <Hamburger toggled={isOpen} toggle={setIsOpen} />
          </div>

          <div className="flex flex-col bg-gray-800 justify-start items-start h-full mt-16">
            {navItems.map(({ id, link, title }) => (
              <Link
                key={id}
                href={link}
                className="block px-3 py-2 ms-6 rounded-md font-medium text-lg mb-2 text-white"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
