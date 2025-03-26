import React from "react";
import { images } from "../../assets/image_aseets";

export const AboutUs = () => {
  return (
    <div className="bg-white my-16" id="about-us">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[50%]">
            <img
              src={images.ABOUT_US_PAGE_LEFT}
              alt="Doctor and Patient"
              className="md:w-[500px] md:h-[500px] object-cover rounded-lg w-full h-full"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-[50%] mt-8 md:mt-0 md:ml-8 px-4 ">
            <h2 className="text-[#1b8677] mb-8 text-3xl mt-16 font-bold">
              Introducing Nirvar:
              <br /> Your All-in-One Medical App
            </h2>
            <p className="text-[#1b0d1c] mb-16 text-xl mt-8 font-medium">
              Your health, simplified. Nirvar is the all-in-one medical app that
              connects you with doctors, offers a range of tests, delivers
              medicine right to your doorstep, and stores your complete medical
              history securely in one place. With features like BPM monitoring
              and diabetes tracking, we empower you to take charge of your
              well-being. Plus, our blood bank ensures lifesaving donations are
              just a tap away. Experience convenience and care at your
              fingertips with Nirvar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
