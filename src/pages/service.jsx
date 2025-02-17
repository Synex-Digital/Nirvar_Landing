import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/about-us/HeroSection";
import NirvarApp from "../components/services/NirvarApp";
import MedicalApp from "../components/services/MedicalApp";
import { OurPartner } from "../components/home/OurPartner";
import { Footer } from "../components/layout/Footer";
import { images } from "../assets/image_aseets";

const service = () => {
  return (
    <>
      <Navbar />
      <HeroSection name={"Why Nirvar?"} bgurl={images.ABOUT_US_PAGE_BG} />
      <NirvarApp />
      <MedicalApp />
      <OurPartner page="about-us" />
      <Footer page="about-us" />
    </>
  );
};

export default service;
