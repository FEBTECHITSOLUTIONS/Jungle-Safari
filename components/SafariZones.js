"use client";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const SafariZones = () => {
  const zones = [
    {
      name: "Bijrani Zone",
      image: "/zones/bijrani.webp",
      alt: "Bijrani Zone in Jim Corbett Safari",
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
      name: "Dhela Zone",
      image: "/zones/dhela.webp",
      alt: "Dhela Zone in Jim Corbett Jungle Safari",
      description:
        "A relatively new zone, Dhela offers a quieter safari experience with dense forests and grasslands, perfect for spotting Royal Bengal Tigers and diverse wildlife.",
      wildlife: [
        "Royal Bengal Tiger",
        "Spotted Deer",
        "Wild Boar",
        "Bird Species",
      ],
      bestTime: "November to June",
    },
    {
      name: "Jhirna Zone",
      image: "/zones/jhirna.webp",
      alt: "Jhirna Zone in Jim Corbett National Park",
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

    {
      name: "Durga Devi Zone",
      image: "/zones/durgadevi.webp",
      alt: "Durga Devi Zone in Jim Corbett Safari",
      description:
        "Known for its hilly terrain and the Mandal River, Durga Devi Zone is a haven for birdwatchers and offers chances to spot Royal Bengal Tigers and elephants.",
      wildlife: [
        "Royal Bengal Tiger",
        "Elephant",
        "Hornbill",
        "Mahseer Fish",
        "Leopard",
      ],
      bestTime: "November to June",
    },
    {
      name: "Dhikala Zone",
      image: "/zones/dhiklana.webp",
      alt: "Dhikala Zone in Jim Corbett Jungle Safari",
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
      name: "Sitabani Buffer Zone",
      image: "/zones/sitabanibuffer.webp",
      alt: "Sitabani Buffer Zone in Jim Corbett National Park",
      description:
        "A buffer zone offering a serene experience, Sitabani is ideal for nature lovers with opportunities to see Royal Bengal Tigers, deer, and ancient temples.",
      wildlife: [
        "Royal Bengal Tiger",
        "Sambar Deer",
        "Barking Deer",
        "Reptiles",
      ],
      bestTime: "Year-Round",
    },
    {
      name: "Garjiya Zone",
      image: "/zones/garjiya.webp",
      alt: "Garjiya Zone in Jim Corbett Jungle Safari",
      description:
        "Located near the Kosi River, Garjiya Zone is known for its scenic beauty and offers a good chance to spot Royal Bengal Tigers and crocodiles.",
      wildlife: ["Royal Bengal Tiger", "Crocodile", "Gharial", "Bird Species"],
      bestTime: "November to June",
    },
    {
      name: "Phato Zone",
      image: "/zones/phato.webp",
      alt: "Phato Zone in Jim Corbett Safari",
      description:
        "A lesser-known zone, Phato offers an offbeat safari experience with dense forests, ideal for spotting Royal Bengal Tigers and other wildlife.",
      wildlife: ["Royal Bengal Tiger", "Leopard", "Sloth Bear", "Wild Boar"],
      bestTime: "November to June",
    },
    {
      name: "Bhandarpani Zone",
      image: "/zones/bhandarpani.webp",
      alt: "Bhandarpani Zone in Jim Corbett National Park",
      description:
        "Bhandarpani is one of the serene and less-crowded zones of Jim Corbett, ideal for bird watchers and wildlife photographers seeking peaceful jungle experiences.",
      wildlife: [
        "Royal Bengal Tiger",
        "Leopard",
        "Elephant",
        "Sloth Bear",
        "Various Bird Species",
      ],
      bestTime: "November to June",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in">
          {/* <FaMapMarkerAlt className="text-yellow-500 h-8 w-8" /> */}
          Safari Zones in Jim Corbett
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-lg  max-w-xl md:max-w-2xl text-green-700 mb-12 mx-auto text-center animate-fade-in delay-100">
          Explore the diverse <strong>Jungle Safari</strong> zones of{" "}
          <strong>Jim Corbett</strong> National Park. Each zone offers a unique{" "}
          <strong>Jim Corbett Safari</strong> experience, from tiger sightings
          to birdwatching adventures.
        </p>

        {/* Zones Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8  ">
          {zones.map((zone) => (
            <div
              key={zone.name}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[500px] "
            >
              {/* Image */}
              <div className="relative h-48 w-full mb-2 rounded-lg overflow-hidden">
                <Image
                  src={zone.image}
                  alt={zone.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Zone Name */}
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">
                {zone.name}
              </h3>

              {/* Description */}
              <p className="text-green-800  text-sm leading-relaxed  text-justify mb-2 ">
                {zone.description}
              </p>

              {/* Wildlife Highlights */}
              <h4 className="text-lg font-semibold text-green-900 mb-2">
                Wildlife Highlights
              </h4>
              <ul className="text-slate-300 text-sm mb-2 space-y-1 list-disc list-inside flex flex-wrap *:mr-2">
                {zone.wildlife.map((animal, index) => (
                  <span
                    key={index}
                    className="border border-slate-700 w-fit h-fit font-semibold tracking-wide px-1.5 py-1 rounded-md text-xs bg-gradient-to-bl from-slate-800/90 via-teal-900/90 to-teal-700/90 text-slate-100 hover:bg-gradient-to-br hover:from-teal-700 hover:via-teal-900 hover:to-slate-800 transition-all duration-300"
                  >
                    {animal}
                  </span>
                ))}
              </ul>

              {/* Best Time to Visit */}
              <p className="text-green-800 text-sm">
                <span className="font-semibold">Best Time to Visit:</span>{" "}
                {zone.bestTime}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="mt-12 text-center animate-fade-in delay-200">
          <Link
            target="_blank"
            href="https://api.whatsapp.com/send?phone=+919759107189&text=Hello%20Jungle%20Safari%20Team,%20I%20need%20your%20service"
            className="inline-block bg-gradient-to-bl to-green-800 via-green-600 from-green-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
            aria-label="Contact Jungle Safari Team via WhatsApp"
            title="Contact us on WhatsApp"
          >
            Whatsapp Us
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default SafariZones;
