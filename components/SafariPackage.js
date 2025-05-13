"use client";
import React from "react";
import { FaPaw } from "react-icons/fa";
import Link from "next/link";

const SafariPackage = () => {
  const packages = [
    {
      name: "Basic Jungle Safari",
      price: "₹5,999",
      duration: "2 Days / 1 Night",
      features: [
        "Jeep Safari in Jim Corbett",
        "Standard Accommodation",
        "Guided Wildlife Tour",
        "Meals (Breakfast & Dinner)",
      ],
      description:
        "Experience the thrill of a Jungle Safari in Jim Corbett National Park with our budget-friendly package, perfect for first-time adventurers.",
    },
    {
      name: "Premium Jim Corbett Safari",
      price: "₹12,999",
      duration: "3 Days / 2 Nights",
      features: [
        "Jeep & Canter Safari",
        "Deluxe Accommodation",
        "Expert-Led Wildlife Tours",
        "All Meals Included",
        "Evening Bonfire",
      ],
      description:
        "Immerse yourself in the wild with our Premium Jim Corbett Safari, offering extended tours and enhanced comfort for nature lovers.",
    },
    {
      name: "Luxury Safari Adventure",
      price: "₹24,999",
      duration: "4 Days / 3 Nights",
      features: [
        "Private Jeep Safari",
        "Luxury Resort Stay",
        "Personalized Wildlife Tours",
        "Gourmet Meals",
        "Spa Session & River Visit",
      ],
      description:
        "Indulge in an exclusive Jungle Safari at Jim Corbett with our Luxury package, featuring premium amenities and private tours.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900 tracking-tight mb-6 flex items-center justify-center gap-3">
          <FaPaw className="text-yellow-500 h-8 w-8" />
          Jim Corbett Safari Packages
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-green-700 mb-12 max-w-3xl mx-auto">
          Discover our curated <strong>Jungle Safari</strong> packages at{" "}
          <strong>Jim Corbett</strong> National Park. From budget-friendly adventures
          to luxurious escapes, our <strong>Jim Corbett Safari</strong> tours offer
          unforgettable wildlife experiences.
        </p>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                {pkg.name}
              </h3>
              <p className="text-3xl font-bold text-green-900 mb-2">{pkg.price}</p>
              <p className="text-green-700 mb-4">{pkg.duration}</p>
              <p className="text-green-800 mb-6 flex-grow">{pkg.description}</p>
              <ul className="text-green-800 text-sm mb-6 space-y-2 text-left">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaPaw className="text-yellow-500 h-4 w-4 mt-1" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/book"
                className="mt-auto bg-yellow-500 text-green-900 px-6 py-3 rounded-full font-semibold text-base hover:bg-yellow-500 hover:shadow-md transition-all duration-300"
              >
                Book Now
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            href="/book"
            className="inline-block bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          >
            Customize Your Jungle Safari
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafariPackage;