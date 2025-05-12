"use client";
import Link from "next/link";
import React, { useState } from "react";

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
            <a
              href="/"
              className="text-3xl font-extrabold text-white tracking-tight"
            >
              Jungle Safari
            </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8">
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
          </div>

          {/* Book Now Button (Desktop) */}
          <div className="hidden md:block">
            <a
              href="/book"
              className="bg-yellow-400 text-green-900 px-5 py-2 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-lg transition-all duration-300"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
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
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden transition-all duration-300`}
      >
        <ul className="bg-green-800 px-4 pt-4 pb-6 space-y-4">
          {navitems.map((item, index) => (
            <li key={index}>
              <a
                href={item.links}
                onClick={toggleMenu}
                className="block text-white text-lg font-medium hover:text-yellow-300 transition-colors duration-300"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/book"
              onClick={toggleMenu}
              className="block bg-yellow-400 text-green-900 px-5 py-2 rounded-full font-semibold text-lg hover:bg-yellow-500 text-center transition-all duration-300"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
