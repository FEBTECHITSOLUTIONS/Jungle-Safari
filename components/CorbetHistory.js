"use client";
import React from "react";
import {
  FaAirbnb,
  FaBus,
  FaHistory,
  FaPlane,
  FaRoad,
  FaRoute,
  FaTrain,
} from "react-icons/fa";
import Link from "next/link";

const CorbettHistory = () => {
  const travelOptions = [
    {
      mode: "By Air",
      icons: <FaPlane />,
      description:
        "While not the most ideal, you can fly from Delhi to Pantnagar, the nearest airport, which is about 80 km from Jim Corbett National Park. Daily flights are available, and from Pantnagar, a cab ride of around 2 hours will bring you to the park.",
    },

    {
      mode: "By Train",
      icons: <FaTrain />,
      description:
        "Ramnagar is the closest railway station, well-connected to major cities like Delhi, Varanasi, Haridwar, and Lucknow. Travelers from other parts of India can take a train to Delhi and then a connecting train to Ramnagar, making it an accessible option for rail enthusiasts.",
    },
    {
      mode: "By Bus",
      icons: <FaBus />,
      description:
        "Buses to Ramnagar are available from cities like Delhi, Haridwar, and Dehradun. Once in Ramnagar, reaching the camping site of Jim Corbett National Park is straightforward, with local transport options readily available for the short distance.",
    },
    {
      mode: "By Road",
      icons: <FaRoad />,
      description:
        "Travel to Jim Corbett by road from Delhi via Noida, Kashipur, and finally Ramnagar. The journey takes approximately 7-8 hours, covering a scenic route that offers glimpses of rural India. It's a convenient option for those who prefer driving or hiring a cab.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* History Section */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-green-900 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in">
            {/* <FaHistory className="text-yellow-500 h-8 w-8" /> */}
            History of Jim Corbett
          </h2>
          <p className="text-lg text-green-800 max-w-4xl mx-auto text-center leading-relaxed animate-fade-in delay-100">
            Established in 1936 as Hailey National Park, Jim Corbett National
            Park was named after William Malcolm Hailey, the governor of the
            United Province at the time. In the 1950s, it was renamed Ramganga
            National Park before being finally named after Jim Corbett, a
            renowned British writer, hunter, and naturalist who played a key
            role in its establishment. As one of India&#39;s oldest tiger
            reserves, the park has been a sanctuary for wildlife since its
            inception, with animal hunting strictly prohibited since the
            1930s—not just tigers, but also birds, reptiles, and other mammals.
            In 1991, a buffer zone was added, expanding its area and making it
            one of the largest wildlife sanctuaries in India. Today, a{" "}
            <strong>Jungle Safari</strong> in <strong>Jim Corbett</strong>{" "}
            offers an unparalleled experience, preserving the legacy of
            conservation that began nearly a century ago.
          </p>
        </div>

        {/* How to Reach Section */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-green-900 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in">
            {/* <FaRoute className="text-yellow-500 h-8 w-8" /> */}
            How to Reach Jim Corbett
          </h2>
          <p className="text-lg text-green-700 mb-12 max-w-3xl mx-auto text-center animate-fade-in delay-100">
            Planning your <strong>Jim Corbett Safari</strong>? Here are the best
            ways to reach <strong>Jim Corbett</strong> National Park for your{" "}
            <strong>Jungle Safari</strong> adventure.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travelOptions.map((option) => (
              <div
                key={option.mode}
                className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-2xl font-semibold text-yellow-500 mb-2  flex justify-between items-center">
                  {option.mode}
                  {option.icons}
                </h3>
                <p className="text-green-800 text-sm leading-relaxed text-justify">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
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

export default CorbettHistory;
