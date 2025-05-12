"use client";
import React from "react";
import { FaCamera } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/tiger.webp",
      alt: "Gypsy Jeep in Jim Corbett Jungle Safari",
      caption: "Ride in a Gypsy jeep for an exciting Jungle Safari in Jim Corbett National Park.",
    },
    {
      src: "/elephant.webp",
      alt: "Jungle Safari Jeep in Jim Corbett",
      caption: "Explore the wild with a Gypsy jeep on a thrilling Jim Corbett Safari adventure.",
    },
    {
      src: "/hornbill.webp",
      alt: "Jim Corbett Safari Gypsy Jeep",
      caption: "Experience the rugged terrain of Jim Corbett in a Gypsy jeep during a Jungle Safari.",
    },
    {
      src: "/ghariyal.webp",
      alt: "Gypsy Jeep Safari in Jim Corbett National Park",
      caption: "Spot wildlife from a Gypsy jeep on a Jim Corbett Jungle Safari tour.",
    },
    {
      src: "/eagle.webp",
      alt: "Jim Corbett Gypsy Jeep Adventure",
      caption: "Enjoy a Gypsy jeep ride through the forests of Jim Corbett on a Jungle Safari.",
    },
    {
      src: "/serpentEagle.webp",
      alt: "Jungle Safari Gypsy Jeep in Jim Corbett",
      caption: "Capture the adventure of a Jim Corbett Safari in a classic Gypsy jeep.",
    },
    {
      src: "/sloth.webp",
      alt: "Jungle Safari Gypsy Jeep in Jim Corbett",
      caption: "Capture the adventure of a Jim Corbett Safari in a classic Gypsy jeep.",
    },
    {
      src: "/kingfisher.webp",
      alt: "Jungle Safari Gypsy Jeep in Jim Corbett",
      caption: "Capture the adventure of a Jim Corbett Safari in a classic Gypsy jeep.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in">
          <FaCamera className="text-yellow-400 h-8 w-8" />
          Jim Corbett Safari Gallery
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-green-700 mb-12 max-w-3xl mx-auto text-center animate-fade-in delay-100">
          Step into the adventure with our <strong>Jungle Safari</strong> gallery from{" "}
          <strong>Jim Corbett</strong> National Park. Experience the thrill of a{" "}
          <strong>Jim Corbett Safari</strong> in a classic Gypsy jeep.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative cursor-pointer group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="object-cover w-full h-64 sm:h-72 lg:h-80 transform group-hover:scale-105 transition-transform duration-300"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/2Q=="
                onError={(e) => (e.target.src = "/images/fallback.jpg")}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-green-900 bg-opacity-75 text-white p-3 text-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                {image.caption}
              </div>
            </div>
          ))}
        </div>
        

        {/* Call to Action */}
        <div className="mt-12 text-center animate-fade-in delay-200">
          <Link
            href="/book"
            className="inline-block bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          >
            Book Your Safari Adventure
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;