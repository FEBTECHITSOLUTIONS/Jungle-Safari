"use client";
import React from "react";
import { FaLeaf } from "react-icons/fa";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900 tracking-tight mb-6 flex items-center justify-center gap-3">
          <FaLeaf className="text-yellow-400 h-8 w-8" />
          Discover the Jungle Safari Experience
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-green-700 mb-8 max-w-3xl mx-auto">
          Embark on a thrilling <strong>Jungle Safari</strong> at{" "}
          <strong>Jim Corbett</strong>, India’s premier wildlife destination. Our{" "}
          <strong>Jim Corbett Safari</strong> tours offer an unforgettable adventure
          through lush forests, exotic wildlife, and breathtaking landscapes.
        </p>

        {/* Detailed Text */}
        <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Why Choose Our Jungle Safari?
            </h3>
            <p className="text-green-800 text-base">
              At <strong>Jungle Safari</strong>, we specialize in curated{" "}
              <strong>Jim Corbett Safari</strong> experiences. From spotting Royal
              Bengal Tigers to exploring the rich biodiversity of{" "}
              <strong>Jim Corbett</strong> National Park, our expert guides ensure a
              safe and immersive adventure.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
              Adventure Awaits
            </h3>
            <p className="text-green-800 text-base">
              Whether you’re a thrill-seeker or a nature lover, our{" "}
              <strong>Jim Corbett</strong> tours cater to all. Join us for a{" "}
              <strong>Jungle Safari</strong> that combines excitement, education, and
              eco-friendly exploration in the heart of the wild.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <Link
            href="/packages"
            className="inline-block bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          >
            Explore Our Safari Packages
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;