import React from "react";
import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";

import { AboutUs } from "../components/home/AboutUs";
import { DoctorConsultationAd } from "../components/home/DoctorConsultationAd";
import { FAQSection } from "../components/home/FAQSection";
import { HeroSection } from "../components/home/HeroSection";
import { NirvarPromo } from "../components/home/NirvarPromo";
import { OurPartner } from "../components/home/OurPartner";
import { Services } from "../components/home/Services";
import { Testimonial } from "../components/home/Testimonial";
import { Helmets } from "../components/layout/helmet";

const Home = () => {
  return (
    <>
      {/* <Helmets /> */}
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Services />
      <DoctorConsultationAd />
      <Testimonial />
      <NirvarPromo />
      <FAQSection />
      <OurPartner />
      <Footer />
    </>
  );
};

export default Home;
