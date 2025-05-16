"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaPhone, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navitems = [
    { name: "Home", links: "/" },
    { name: "About", links: "/about" },
    { name: "Packages", links: "/packages" },
    { name: "Gallery", links: "/gallery" },
    { name: "Contact", links: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 shadow-xl w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-sm md:text-2xl lg:text-3xl font-extrabold text-white tracking-tight"
            >
              Jim Corbett Jungle Safari
            </Link>
          </div>

          {/* Desktop Nav Links */}
          {/* <div className="hidden md:flex space-x-8">
            <ul className="flex space-x-6 items-center">
              {navitems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={`${item.links}`}
                    className="text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Book Now Button (Desktop) */}

          <div className="flex gap-4">
            <Link
              href="https://api.whatsapp.com/send?phone=+919759107189%E2%80%AC&text=Hello%20Jungle%20Safari%20Team,%20I%20need%20your%20service"
              onClick={toggleMenu}
              className="flex gap-2 justify-center items-center text-xs md:text-[15px] tracking-wide bg-gradient-to-tl from-cyan-500 to-lime-300 md:bg-yellow-500 text-slate-700 md:text-green-900 px-2 py-1.5  md:px-5 md:py-2 rounded-full font-semibold  hover:bg-yellow-500 text-center transition-all duration-300"
            >
              {" "}
              <FaWhatsapp size={22} />
              <span className="hidden md:block">Whatsapp Us</span>
            </Link>
            <Link
              href="tel:9759107189"
              onClick={toggleMenu}
              className="flex gap-2 justify-center items-center text-xs md:text-[15px] tracking-wide bg-gradient-to-tl from-cyan-500 to-lime-300 md:bg-yellow-500 text-slate-700 md:text-green-900 px-2 py-1.5  md:px-5 md:py-2 rounded-full font-semibold  hover:bg-yellow-500 text-center transition-all duration-300"
            >
              {" "}
              <FaPhoneAlt size={16} />
              <span className="hidden md:block">Call Us</span>
            </Link>
          </div>
          {/* Mobile Menu Button */}
          {/* <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="text-white hover:text-yellow-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
