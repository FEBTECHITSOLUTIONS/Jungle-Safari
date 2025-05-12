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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight mb-4">
              Jungle Safari
            </h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Experience the thrill of the wild with our guided jungle safaris.
              Explore exotic wildlife, lush forests, and unforgettable adventures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
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
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-green-100 text-sm">
              <a href="mailto:info@junglesafari.com">Email: info@junglesafari.com</a>
              <a href="tel:+919759107189">Phone: +919759107189</a>
              <li>Address: 123 Wild Trail, Jungle City, JC 45678</li>
            </ul>
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-100 hover:text-yellow-300 transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-green-700 text-center">
          <p className="text-green-100 text-sm">
            © {new Date().getFullYear()} Jungle Safari. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;