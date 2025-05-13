"use client";
import React from "react";
import { FaCamera } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const GallerySection = () => {
const galleryImages = [
  {
    src: "/tiger.webp",
    alt: "Royal Bengal Tiger in Jim Corbett National Park",
    caption: "The majestic Royal Bengal Tiger is the star attraction of Jim Corbett National Park.",
  },
  {
    src: "/elephant.webp",
    alt: "Asian Elephant roaming in Jim Corbett jungle",
    caption: "Asian Elephants can often be seen in herds during jungle safaris in Jim Corbett.",
  },
  {
    src: "/hornbill.webp",
    alt: "Great Hornbill bird perched on a tree",
    caption: "The Great Hornbill, with its vibrant colors, is a striking sight in Jim Corbett’s forests.",
  },
  {
    src: "/ghariyal.webp",
    alt: "Gharial resting near the Ramganga river",
    caption: "Gharials, known for their long snouts, are commonly found in the Ramganga River of Corbett.",
  },
  {
    src: "/eagle.webp",
    alt: "Pallas's Fish Eagle flying over water",
    caption: "Pallas's Fish Eagle is a powerful bird of prey often spotted near water bodies in Corbett.",
  },
  {
    src: "/serpentEagle.webp",
    alt: "Crested Serpent Eagle on a tree branch",
    caption: "The Crested Serpent Eagle is a common raptor seen soaring above Corbett's forest canopy.",
  },
  {
    src: "/sloth.webp",
    alt: "Sloth Bear walking in the jungle",
    caption: "Sloth Bears are shy creatures that roam the forest floor searching for insects and fruits.",
  },
  {
    src: "/kingfisher.webp",
    alt: "White-throated Kingfisher near a forest stream",
    caption: "The White-throated Kingfisher adds a splash of color to the park’s vibrant birdlife.",
  },
];


  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-bl pb-2 bg-clip-text text-transparent  to-green-900  from-green-300 tracking-tight mb-6 flex items-center justify-center gap-3 animate-fade-in">
          {/* <FaCamera className="text-yellow-500 h-8 w-8" /> */}
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
        {/* <div className="mt-12 text-center animate-fade-in delay-200">
          <Link
            href="/book"
            className="inline-block bg-yellow-500 text-green-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 hover:shadow-xl transition-all duration-300"
          >
            Book Your Safari Adventure
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default GallerySection;