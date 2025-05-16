"use client";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaMap,
} from "react-icons/fa";

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
      name: "Youtube",
      href: "https://www.youtube.com/@pankajnegi5102",
      icon: <FaYoutube className="h-6 w-6" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/pankaj_corbett/",
      icon: <FaInstagram className="h-6 w-6" />,
    },
    {
      name: "Google Maps",
      href: "https://www.google.com/maps/place/%F0%9D%97%9D%F0%9D%97%B6%F0%9D%97%BA+%F0%9D%97%96%F0%9D%97%BC%F0%9D%97%BF%F0%9D%97%AF%F0%9D%97%B2%F0%9D%98%81%F0%9D%98%81+%F0%9D%98%80%F0%9D%97%AE%F0%9D%97%B3%F0%9D%97%AE%F0%9D%97%BF%F0%9D%97%B6(+%F0%9D%99%85%F0%9D%99%AA%F0%9D%99%A3%F0%9D%99%9C%F0%9D%99%A1%F0%9D%99%9A+%F0%9D%99%A8%F0%9D%99%96%F0%9D%99%9B%F0%9D%99%96%F0%9D%99%A7%F0%9D%99%9E+)/@29.3999293,79.0590957,863m/data=!3m1!1e3!4m6!3m5!1s0x390a15f608f9c2b1:0x764de3476ad671fd!8m2!3d29.3981021!4d79.0682685!16s%2Fg%2F11m6xhyrcv?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D",
      icon: <FaMap className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="bg-green-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-5">
          {/* Brand Info */}
          <div>
            <h3 className="text-sm md:text-2xl font-extrabold  mb-4 tracking-wide">
              Jim Corbett Jungle Safari
            </h3>
            <p className="text-green-100 text-sm tracking-wide leading-relaxed text-justify max-w-80">
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
            <ul className="space-y-2  text-green-100 text-sm *:tracking-wide">
              <li>
                <Link
                  href="mailto:corbettjunglesafari39@gmail.com"
                  className="hover:text-yellow-300 flex items-center transition-colors duration-300"
                >
                  <span className="hidden md:flex">Email:</span>{" "}
                  <span className="ml-1">corbettjunglesafari39@gmail.com</span>
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+919759107189"
                  className="hover:text-yellow-300 flex items-center transition-colors duration-300"
                >
                  <span className="hidden md:flex">Phone:</span>{" "}
                  <span className="ml-1">+91 97591 07189</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://maps.app.goo.gl/U6P54fGABYZ7eF8h8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow-300 flex items-center transition-colors duration-300"
                >
                  <span className="hidden md:flex">Address:</span>{" "}
                  <span className="ml-1">
                    {" "}
                    93X9+782 sewal Khaliya, Uttarakhand
                  </span>
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
            Developed By{" "}
            <Link href="https://anasmalikportfolio.vercel.app/" target="_blank">
              Anas Malik
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
