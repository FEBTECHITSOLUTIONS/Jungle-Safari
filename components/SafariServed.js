"use client";
import React from "react";
import { FaCarSide } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const SafariServed = () => {
  const safariTypes = [
    {
      name: "Jeep Jungle Safari",
      rate: "7500/Jeep",
      rateforeign: "15000/Jeep",
      timing: "Morning 5:30 AM - 9:30 AM | Evening 2:00 PM - 6:00 PM ",
      image: "/jeepJungleSafari.jpg",
      alt: "Jeep Jungle Safari in Jim Corbett National Park",
      description:
        "The Jeep Jungle Safari is the most popular way to explore Jim Corbett National Park, offering an intimate and thrilling wildlife experience. Perfect for small groups of 6 people +1 child, this safari allows you to navigate through zones like Dhikala, Bijrani, and Jhirna. Accompanied by an expert guide, you'll have the best chances to spot Royal Bengal Tigers, leopards, and a variety of bird species. The open jeep provides unobstructed views, making it ideal for photography enthusiasts. Safaris typically last 3 hours, either in the morning or afternoon, ensuring you experience the park's vibrant ecosystem.",
      highlights: [
        "Bijrani",
        "Garjiya",
        "Jhirna",
        "Dhela",
        "Durgadevi",
        "Phato",
        "Sitabani",
      ],
      points: [
        "Maximum 6 Persons & 1 Child (b/w - 5 to 12 years) are allowed in ONE Jeep",
        "Permission of CTR, Jeep, Driver, Permit, All Entries & Taxes.",
        "Guide Fee to be paid by the guest on the spot directly.",
        "Pick & drop is not included from hotels.",
        "No Refund Policy.",
      ],
    },
    {
      name: "Canter Safari",
      rate: "2500/Person",
      rateforeign: "5000/Person",
      image: "/canterSafari.jpg",
      timing: "Morning 5:30 AM - 11.00 AM | Evening 11:00 PM - 6:00 PM ",

      alt: "Canter Safari in Jim Corbett National Park",
      description:
        "The Canter Safari in Jim Corbett is designed for larger groups, accommodating up to 16 people in a single vehicle. This open-air bus-like vehicle offers a group adventure, covering core zones like Dhikala, which are renowned for their high tiger-sighting probability. The elevated seating provides a safe and comfortable vantage point to spot wildlife such as elephants, deer, and jackals. Canter Safaris are scheduled twice daily—morning and afternoon—and last around 4-5 hours. This option is perfect for families or groups looking to explore the park together while enjoying a guided tour through Jim Corbett's diverse landscapes.",
      highlights: ["Dhiklana"],
      points: [
        "INR 2500 / Person ( ONE Canter has 16 Seats )",
        "INR 5000 / Person ( ONE Canter has 16 Seats )",
        "No Refund Policy.",
      ],
    },
    {
      name: "Elephant Ride",
      rate: "4000/Elephant",
      image: "/elephantRide.jpg",
      timing: "Morning (6:00 AM - 10:00 AM) | Evening (3:00 AM - 6:00 AM) ",

      alt: "Elephant Ride Safari in Jim Corbett National Park",
      description:
        "An Elephant Ride/Safari in Jim Corbett offers a unique and traditional way to explore the park's dense forests and grasslands. Riding atop an elephant, you'll get up close to nature, accessing areas that vehicles can't reach. This eco-friendly safari is perfect for those seeking a serene experience, with opportunities to spot wildlife like deer, wild boars, and even Royal Bengal Tigers from a unique perspective. The ride typically lasts 1 hour and is available in select zones like Bijrani and Dhikala. It's a favorite for photography lovers and those wanting a more intimate connection with the park's natural beauty.",
      highlights: ["Dhikuli"],
      points: [
        "Max 4 Persons allowed on each Elephant",
        "Duration is 1 hour for each Elephant",
        "No Refund Policy.",
      ],
    },
  ];

  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-bl pb-2 bg-clip-text text-transparent  to-green-900  from-green-300 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in">
          {/* <FaCarSide className="text-yellow-500 h-8 w-8" /> */}
          Safari Services in Jim Corbett
        </h2>

        {/* Subheading */}
        <p className="text-sm md:text-lg  max-w-xl md:max-w-2xl text-green-700 mb-12 mx-auto text-center animate-fade-in delay-100">
          Choose your perfect <strong>Jungle Safari</strong> experience in{" "}
          <strong>Jim Corbett</strong> National Park. We offer a variety of{" "}
          <strong>Jim Corbett Safari</strong> options to suit every adventurer.
        </p>

        {/* Safari Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {safariTypes.map((safari) => (
            <div
              key={safari.name}
              className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col min-h-[600px]"
            >
              {/* Image */}
              <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
                <Image
                  src={safari.image}
                  alt={safari.alt}
                  layout="fill"
                  loading="lazy"
                  objectFit="cover"
                  className="transform hover:scale-105 transition-transform duration-300"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAb/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/2Q=="
                />
              </div>

              {/* Safari Name */}
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2  flex justify-between items-center">
                <span className=""> {safari.name}</span>
              </h3>
              <div className="text-white  *:px-2 *:py-1 *:rounded-md text-xs md:text-[13px] mb-2 font-semibold tracking-wider flex justify-between ">
                <span className="flex bg-gradient-to-tl from-green-600 to-green-400">
                  Indian: ₹{safari.rate}
                </span>
                {safari.rateforeign && (
                  <span className="flex bg-gradient-to-tl from-blue-600 to-blue-400 border4">
                    Foreigner: ₹{safari.rateforeign}
                  </span>
                )}
              </div>
              {/* <h4></h4> */}

              {/* Description */}
              <div className="text-green-800 mb-0 text-sm leading-relaxed  text-justify ">
                <ul className=" text-sm   font-semibold list-disc list-inside min-h-40">
                  {safari.points.map((point, index) => (
                    <li className="leading-relaxed pb-2 text-[15px]" key={index}>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <ul className="text-slate-300 mt-3 text-sm mb-2 space-y-1 list-disc list-inside flex flex-wrap *:mr-2">
                {safari.highlights.map((keyzones, index) => (
                  <span
                    key={index}
                    className="border border-slate-700 w-fit h-fit font-semibold tracking-wide px-1.5 py-1 rounded-md text-xs bg-gradient-to-bl from-slate-800/90 via-teal-900/90 to-teal-700/90 text-slate-100 hover:bg-gradient-to-br hover:from-teal-700 hover:via-teal-900 hover:to-slate-800 transition-all duration-300"
                  >
                    {keyzones}
                  </span>
                ))}
              </ul>

              <p className="mt-3 text-[12px] text-blue-400 font-semibold text-center">
                {safari.timing}
              </p>
              <p className="mt-2 text-[13px] text-green-400 font-semibold text-center">
                Safari Timing Varies as Season Changes
              </p>
              {/* button */}
              <div className="mt-5 w-full animate-bounce mb-2 mx-auto text-center">
                <Link
                  href="https://api.whatsapp.com/send?phone=+919759107189%E2%80%AC&text=Hello%20Jungle%20Safari%20Team,%20I%20need%20your%20service"
                  className="relative text-sm px-4 py-2 bg-gradient-to-tl to-red-400 via-red-500 from-red-600/80 text-white  rounded-full font-semibold  hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
                >
                  Book Now
                  <div className="size-3 bg-green-500 absolute -top-0 animate-pulse duration-75 -right-0.5 rounded-full"></div>
                </Link>
              </div>
              {/* button ends */}
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

export default SafariServed;
