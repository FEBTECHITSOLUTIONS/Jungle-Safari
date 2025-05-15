"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Hero = () => {
  // Array of images to scroll through
  const images = [
    "/dearup.jpg",
    "/elephant.jpg",
    "tiger.webp",
    "/bijranitiger.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to handle image scrolling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-green-900 text-white h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Transition */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url('${image}')`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        >
          <div className="absolute inset-0 bg-green-900 opacity-60"></div>
        </div>
      ))}

      {/* Image Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentImageIndex
                ? "bg-yellow-500"
                : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-wide mb-6 animate-fade-in-up">
          Explore The Jim Corbett Park
        </h1>
        <p className="text-xl sm:text-2xl lg:text-3xl mb-8 text-green-100 opacity-90 animate-fade-in-up delay-100">
          Jim Corbett Safari Booking
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
