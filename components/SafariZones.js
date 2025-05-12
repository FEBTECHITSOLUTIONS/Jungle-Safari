"use client";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const SafariZones = () => {
  const zones = [
    {
      name: "Dhikala Zone",
      description:
        "The heart of Jim Corbett, Dhikala Zone is renowned for its vast grasslands and dense forests, offering the best chances to spot Royal Bengal Tigers in their natural habitat.",
      wildlife: [
        "Royal Bengal Tiger",
        "Asian Elephant",
        "Sambar Deer",
        "Hog Deer",
      ],
      bestTime: "November to June",
    },
    {
      name: "Bijrani Zone",
      description:
        "A favorite for wildlife enthusiasts, Bijrani Zone features mixed forests and open meadows, ideal for spotting Royal Bengal Tigers, leopards, and diverse birdlife.",
      wildlife: [
        "Royal Bengal Tiger",
        "Leopard",
        "Chital Deer",
        "Sloth Bear",
        "Over 300 Bird Species",
      ],
      bestTime: "October to June",
    },
    {
      name: "Jhirna Zone",
      description:
        "Open year-round, Jhirna Zone is known for its accessibility and rich biodiversity, with opportunities to spot Royal Bengal Tigers alongside wild boars and nilgai.",
      wildlife: [
        "Royal Bengal Tiger",
        "Wild Boar",
        "Nilgai",
        "Jackal",
        "Barking Deer",
      ],
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
          <strong>Jim Corbett Safari</strong> experience, from tiger sightings
          to birdwatching adventures.
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
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-green-900 mb-6">
            Jim Corbett Safari Map
          </h3>
          <div className="relative h-96 w-full max-w-7xl max-h-full mx-auto rounded-lg overflow-hidden shadow-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4032.0759003639455!2d79.06801346656812!3d29.398295154002643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDIzJzUzLjMiTiA3OcKwMDQnMDUuOCJF!5e1!3m2!1sen!2sin!4v1747045650881!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen=""
              className="w-full"
              
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="text-green-700 mt-6 max-w-2xl mx-auto">
            Navigate the <strong>Jim Corbett Safari</strong> zones with our map,
            highlighting key areas like Dhikala, Bijrani, and Jhirna for your{" "}
            <strong>Jungle Safari</strong> adventure.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+919759107189&text=Hello%20Jungle%20Safari%20Team,%20I%20need%20your%20service"
            className="inline-block bg-gradient-to-bl to-green-800 via-green-600 from-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          >
            Whatsapp Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SafariZones;
