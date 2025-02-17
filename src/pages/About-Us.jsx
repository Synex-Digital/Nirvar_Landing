import React from "react";
import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/about-us/HeroSection";
import { AboutUs } from "../components/about-us/AboutUs";
import { Services } from "../components/home/Services";
import { OurPartner } from "../components/home/OurPartner";
import { Footer } from "../components/layout/Footer";
import { NirvarPromo } from "../components/home/NirvarPromo";
import { images } from "../assets/image_aseets";

const About_Us = () => {
  return (
    <>
      <Navbar />
      <HeroSection name={"About Us"} bgurl={images.ABOUT_US_PAGE_BG} />
      <AboutUs />
      <Services />
      <NirvarPromo />
      <OurPartner page="about-us" />
      <Footer page="about-us" />
    </>
  );
};

export default About_Us;
