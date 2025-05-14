"use client";
import React from "react";
import { FaCamera } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const GallerySection = () => {
  const galleryImages = [
    {
      src: "/gallery/galerry-img-1.jpg",
      alt: "Rhesus Macaque Monkey in Jim Corbett National Park",
      caption:
        "The playful Rhesus Macaque is commonly spotted leaping through the trees of Jim Corbett National Park.",
    },

    {
      src: "/gallery/galerry-img-2.jpg",
      alt: "Crested Serpent Eagle in Jim Corbett jungle",
      caption:
        "The Crested Serpent Eagle is often seen perched silently, scanning for prey on forest floors in Jim Corbett.",
    },

    {
      src: "/gallery/galerry-img-3.jpg",
      alt: "Indian Peacock displaying feathers in Jim Corbett",
      caption:
        "The Indian Peacock, with its dazzling plumage, is a graceful and vibrant presence in Jim Corbett’s forests.",
    },

    {
      src: "/gallery/galerry-img-4.jpg",
      alt: "Asian Elephants near the Ramganga river",
      caption:
        "Asian Elephants, often moving in herds, can be seen cooling off near the Ramganga River in Corbett.",
    },

    {
      src: "/gallery/galerry-img-5.jpg",
      alt: "Pallas's Fish Eagle flying over water",
      caption:
        "Pallas's Fish Eagle is a powerful bird of prey often spotted near water bodies in Corbett.",
    },
    {
      src: "/gallery/galerry-img-6.jpg",
      alt: "Pallas's Fish Eagle flying over water",
      caption:
        "Pallas's Fish Eagle is a powerful bird of prey often spotted near water bodies in Corbett.",
    },
    {
      src: "/gallery/galerry-img-7.jpg",
      alt: "Spotted Deer grazing in Jim Corbett",
      caption:
        "The Spotted Deer, with its elegant form, is a common sight grazing in the grasslands of Jim Corbett.",
    },

    {
      src: "/gallery/galerry-img-8.jpg",
      alt: "Rhesus Monkey moving through the jungle",
      caption:
        "Rhesus Monkeys are social animals often seen in troops, leaping playfully through the trees of Corbett.",
    },

    {
      src: "/gallery/galerry-img-9.jpg",
      alt: "Green Bee-eaters perched on a slender branch",
      caption:
        "The Green Bee-eaters, with their vibrant plumage, are often seen catching insects mid-air in Corbett.",
    },
    {
      src: "/gallery/galerry-img-10.jpg",
      alt: "Sambar Deer standing amidst dense foliage",
      caption:
        "The Sambar Deer, with its majestic antlers, is often spotted grazing in the forests of Corbett.",
    },
    {
      src: "/gallery/galerry-img-11.jpg",
      alt: "Crested Serpent Eagle in Jim Corbett jungle",
      caption:
        "The Crested Serpent Eagle is often seen perched silently, scanning for prey on forest floors in Jim Corbett.",
    },
    {
      src: "/gallery/galerry-img-12.jpg",
      alt: "Indian Peacock displaying feathers in Jim Corbett",
      caption:
        "The Indian Peacock, with its dazzling plumage, is a graceful and vibrant presence in Jim Corbett’s forests.",
    },
    {
      src: "/gallery/galerry-img-13.jpg",
      alt: "Indian Peacock displaying feathers in Jim Corbett",
      caption:
        "The Indian Peacock, with its dazzling plumage, is a graceful and vibrant presence in Jim Corbett’s forests.",
    },
    {
      src: "/gallery/galerry-img-14.jpg",
      alt: "Black-throated Monarch perched on a branch in Jim Corbett",
      caption:
        "The Black-throated Monarch, with its striking blue crest, is a charming and elusive bird in Jim Corbett’s forests.",
    },
    {
      src: "/gallery/galerry-img-15.jpg",
      alt: "Jungle Babbler standing on a log in Jim Corbett",
      caption:
        "The Jungle Babbler, with its earthy tones, is a social and lively bird often seen in Jim Corbett’s forests.",
    },
    {
      src: "/gallery/galerry-img-16.jpg",
      alt: "Jungle Babbler standing on a log in Jim Corbett",
      caption:
        "The Jungle Babbler, with its earthy tones, is a social and lively bird often seen in Jim Corbett’s forests.",
    },
    {
      src: "/gallery/galerry-img-17.jpg",
      alt: "Crested Serpent Eagle in Jim Corbett jungle",
      caption:
        "The Crested Serpent Eagle is often seen perched silently, scanning for prey on forest floors in Jim Corbett.",
    },
    {
      src: "/gallery/galerry-img-18.jpg",
      alt: "Spotted Deer grazing in Jim Corbett",
      caption:
        "The Spotted Deer, with its elegant form, is a common sight grazing in the grasslands of Jim Corbett.",
    },
    {
      src: "/gallery/galerry-img-19.jpg",
      alt: "Spotted Deer grazing in Jim Corbett",
      caption:
        "The Spotted Deer, with its elegant form, is a common sight grazing in the grasslands of Jim Corbett.",
    },
    {
      src: "/gallery/galerry-img-20.jpg",
      alt: "Red-wattled Lapwing foraging in Jim Corbett",
      caption:
        "The Red-wattled Lapwing, with its vivid markings, is often seen foraging in the open fields of Jim Corbett.",
    },
    {
      src: "/gallery/galerry-img-21.jpg",
      alt: "Black-throated Monarch flying over water in Jim Corbett",
      caption:
        "The Black-throated Monarch, with its striking blue crest, gracefully soars over water in Jim Corbett.",
    },
    {
      src: "/gallery/galerry-img-22.jpg",
      alt: "Indian Peacock displaying feathers in Jim Corbett",
      caption:
        "The Indian Peacock, with its dazzling plumage, is a graceful and vibrant presence in Jim Corbett’s forests.",
    },
    {
      src: "/gallery/galerry-img-23.jpg",
      alt: "Jungle Babbler perched on a log in Jim Corbett",
      caption:
        "The Jungle Babbler, with its earthy tones, is a social and lively bird often seen in Jim Corbett’s forests.",
    },
    {
      src: "/gallery/galerry-img-24.jpg",
      alt: "Eurasian Spoonbill wading in water in Jim Corbett",
      caption:
        "The Eurasian Spoonbill, with its unique bill, is often seen wading in the wetlands of Jim Corbett.",
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
          Step into the adventure with our <strong>Jungle Safari</strong>{" "}
          gallery from <strong>Jim Corbett</strong> National Park. Experience
          the thrill of a <strong>Jim Corbett Safari</strong> in a classic Gypsy
          jeep.
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
