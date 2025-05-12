"use client";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const SafariZones = () => {
  const zones = [
    {
      name: "Dhikala Zone",
      description:
        "The heart of Jim Corbett, Dhikala Zone is renowned for its vast grasslands and dense forests, offering the best chances to spot Royal Bengal Tigers.",
      wildlife: ["Royal Bengal Tiger", "Asian Elephant", "Sambar Deer", "Hog Deer"],
      bestTime: "November to June",
    },
    {
      name: "Bijrani Zone",
      description:
        "A favorite for wildlife enthusiasts, Bijrani Zone features mixed forests and open meadows, ideal for spotting leopards and diverse birdlife.",
      wildlife: ["Leopard", "Chital Deer", "Sloth Bear", "Over 300 Bird Species"],
      bestTime: "October to June",
    },
    {
      name: "Jhirna Zone",
      description:
        "Open year-round, Jhirna Zone is known for its accessibility and rich biodiversity, including sightings of wild boars and nilgai.",
      wildlife: ["Wild Boar", "Nilgai", "Jackal", "Barking Deer"],
      bestTime: "Year-Round",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900 tracking-tight mb-6 flex items-center justify-center gap-3">
          <FaMapMarkerAlt className="text-yellow-400 h-8 w-8" />
          Safari Zones in Jim Corbett
        </h2>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-green-700 mb-12 max-w-3xl mx-auto text-center">
          Explore the diverse <strong>Jungle Safari</strong> zones of{" "}
          <strong>Jim Corbett</strong> National Park. Each zone offers a unique{" "}
          <strong>Jim Corbett Safari</strong> experience, from tiger sightings to birdwatching adventures.
        </p>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {zones.map((zone) => (
            <div
              key={zone.name}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl font-semibold text-yellow-400 mb-2">
                {zone.name}
              </h3>
              <p className="text-green-800 mb-4">{zone.description}</p>
              <h4 className="text-lg font-semibold text-green-900 mb-2">Wildlife Highlights</h4>
              <ul className="text-green-800 text-sm mb-4 space-y-1 list-disc list-inside">
                {zone.wildlife.map((animal, index) => (
                  <li key={index}>{animal}</li>
                ))}
              </ul>
              <p className="text-green-800 text-sm">
                <span className="font-semibold">Best Time to Visit:</span> {zone.bestTime}
              </p>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-green-900 mb-6">
            Jim Corbett Safari Map
          </h3>
          <div className="relative h-96 w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Jipsy.webp"
              alt="Map of Jim Corbett Safari Zones"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-green-900 opacity-20"></div>
            <p className="absolute bottom-4 left-4 text-white text-sm italic">
              Placeholder: Interactive map of Jim Corbett Safari Zones coming soon!
            </p>
          </div>
          <p className="text-green-700 mt-6 max-w-2xl mx-auto">
            Navigate the <strong>Jim Corbett Safari</strong> zones with our map, highlighting
            key areas like Dhikala, Bijrani, and Jhirna for your <strong>Jungle Safari</strong> adventure.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="inline-block bg-yellow-400 text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          >
            Book Your Safari Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafariZones;