"use client";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navItems = [
    { name: "Home", links: "/" },
    { name: "About", links: "/about" },
    { name: "Packages", links: "/packages" },
    { name: "Gallery", links: "/gallery" },
    { name: "Contact", links: "/contact" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com",
      icon: <FaFacebook className="h-6 w-6" />,
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: <FaTwitter className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: <FaInstagram className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-extrabold  mb-4 tracking-wide">
              Jim Corbett Jungle Safari
            </h3>
            <p className="text-green-100 text-sm tracking-wide leading-relaxed max-w-80">
              Experience the thrill of the wild with our guided jungle safaris.
              Explore exotic wildlife, lush forests, and unforgettable
              adventures.
            </p>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.links}
                    className="text-green-100 hover:text-yellow-300 transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                </li> 
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4 tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-2 text-green-100 text-sm *:tracking-wide">
              <li>
                <Link
                  href="mailto:corbettjunglesafari39@gmail.com"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Email: corbettjunglesafari39@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919759107189"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Phone: +91 97591 07189
                </Link>
              </li>
              <li>
                <Link
                  href="https://maps.app.goo.gl/U6P54fGABYZ7eF8h8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Address: 93X9+782 sewal Khaliya, Uttarakhand
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-300"
                  aria-label={`Follow us on ${social.name}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p className="text-green-100 text-lg font-semibold tracking-wide">
            © {new Date().getFullYear()} Jungle Safari | All rights reserved |
            Developed By FebTech
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
