import React from "react";
import TestimonialSlider from "../slider/TestimonialSlider";
import TestimonialCard from "./testimonial-card";
import { TitleBack } from "./tittle-back";

export const Testimonial = () => {
  return (
    <section className="bg-[#fff]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mb-[-1px]"
      >
        <path
          fill="#ccddd8" // Updated fill color
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      <div className="bg-[#ccddd8]">
        <div className="container mx-auto">
          <div className="ml-10 lg:ml-0">
            <TitleBack front={"Testimonial"} back={"Testimonial"} />
          </div>
          <div className="py-12"/>
          <TestimonialSlider />
        </div>
      </div>

      <svg
        className="" // Add your desired class name here for styling
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ccddd8" // Fill color
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </section>
  );
};

