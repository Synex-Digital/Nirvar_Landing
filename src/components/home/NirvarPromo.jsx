import React from "react";
import { Link } from "react-router-dom";
import { TitleBack } from "./tittle-back";

import Img from "../../assets/Asset-1.webp";
import { images } from "../../assets/image_aseets";

export const NirvarPromo = () => {
  return (
    <section className="bg-white pt-8">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Left Side Image */}
          <div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
            <div className="grid grid-cols-1 gap-4">
              <img
                src={Img}
                alt="Patient Info"
                className="rounded-lg  w-full h-full object-cover`"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Side Text Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <TitleBack back={"Why nirvar"} front={"Why nirvar"} />
            <ul className="pt-16 space-y-4">
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✔</span>
                <p>
                  Easily book appointments with qualified healthcare
                  professionals, eliminating long waiting times and phone calls.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✔</span>
                <p>
                  Securely store and access your complete medical history in one
                  place, eliminating the need for paper documents and enabling
                  easy retrieval of past diagnoses and treatments.
                </p>
              </li>
              <li className="flex items-start">
                <span className="text-teal-500 mr-2">✔</span>
                <p>
                  Stay informed about the latest healthcare advancements and
                  gain valuable insights into leading a healthier lifestyle
                  through informative medical blogs and tips within the app.
                </p>
              </li>
            </ul>

            {/* Learn More Button */}
            <button className="mt-8 bg-teal-500 text-white py-3 px-10 rounded-full shadow-lg hover:bg-teal-600 transition duration-300">
              Learn More
            </button>

            {/* Download Section */}
            <div className="mt-6">
              <p className="text-gray-600">Download The App Now:</p>
              <div className="flex items-center mt-3 flex-wrap">
                <Link to="#">
                  <img
                    src={images.GOOLGLE_PLAY_ICON}
                    alt="Google Play"
                    className="h-20 w-60"
                  />
                </Link>
                <img
                  src={images.SCAN_PIC_NIRVAR_PROMO}
                  alt="QR Code"
                  className="h-20"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
