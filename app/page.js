import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import SafariPackage from "@/components/SafariPackage";
import SafariZones from "@/components/SafariZones";
import React from "react";
import GallerySection from "@/components/GallerySection";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <SafariPackage />
      <SafariZones />
      <GallerySection />
    </>
  );
};

export default Home;
