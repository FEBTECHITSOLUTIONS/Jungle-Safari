import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import SafariPackage from "@/components/SafariPackage";
import SafariZones from "@/components/SafariZones";
import React from "react";
import GallerySection from "@/components/GallerySection";
import SafariServed from "@/components/SafariServed";
import CorbettHistory from "@/components/CorbetHistory";
import Map from "@/components/map";
import ContactForm from "@/components/ContactForm";
import CorbettParkActivities from "@/components/CorbettParkActivities";

const Home = () => {
  return (
    <div className="bg-slate-300">
      <Hero />
      <SafariServed />
      <CorbettHistory />
      <AboutSection />
      {/* <SafariPackage /> */}
      {/* <CorbettParkActivities/> */}
      <SafariZones />
      <GallerySection />
      <Map />
      <ContactForm />
    </div>
  );
};

export default Home;
