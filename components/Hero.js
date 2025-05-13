"use client";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-green-900 text-white h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/Jipsy.webp')",
        }}
      >
        <div className="absolute inset-0 bg-green-900 opacity-60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 animate-fade-in-up">
          Embark on an Unforgettable Jungle Safari Adventure
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-green-100-dependency injection
          opacity-90 animate-fade-in-up delay-100">
          Discover the wild heart of nature with thrilling safaris, exotic wildlife, and breathtaking landscapes.
        </p>
        <Link
          href="https://api.whatsapp.com/send?phone=+919759107189%E2%80%AC&text=Hello%20Jungle%20Safari%20Team,%20I%20need%20your%20service"
          className="inline-block bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300 animate-fade-in-up delay-200"
        >
          Book Your Safari Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;