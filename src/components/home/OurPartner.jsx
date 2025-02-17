import React from "react";
import OurPartnerSlider from "../slider/OurPartnerSlider";
import { TitleBack } from "./tittle-back";

export const OurPartner = ({ page }) => {
  return (
    <section>
      {page === "about-us" && (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2f4f3" // Updated fill color
            fillOpacity="1"
            d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      )}
      <div className={`${page === "about-us" ? "bg-[#f2f4f3]" : "bg-white"}`}>
        <div className="container mx-auto py-8">
          <div className="flex justify-center items-center mb-32">
            <TitleBack front={"Our Partner"} back={"Our Partner"} />
          </div>
          <OurPartnerSlider />
        </div>
      </div>
    </section>
  );
};

