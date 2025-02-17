import React from "react";
import { images } from "../../assets/image_aseets";
import { TitleBack } from "./tittle-back";


export const DoctorConsultationAd = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-8 my-8">
        <div className="w-full md:w-[45%] flex justify-center md:justify-start">
          <img
            src={images.DOCTOR_LEFT}
            alt="Doctor and Patient"
            className="w-[600px] h-[600px] object-cover rounded-lg"
            loading="lazy"
          />
        </div>
        <div className="w-full md:w-[45%] mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <TitleBack
            back={"Doctor Consultation"}
            front={"Doctor Consultation"}
          />
          <p className="text-lg text-gray-600 mx-auto md:mx-0 w-[80%] md:w-full mt-16 mb-8 ">
            With Nirvar, connecting with a doctor has never been easier. Say
            goodbye to long waiting times and endless phone calls. With just a
            few taps on your smartphone, you can book an appointment with a
            qualified healthcare professional who suits your needs.
          </p>
          <button className="bg-teal-500 text-white px-8 py-2 rounded-full hover:bg-teal-600 transition duration-300">
            Make An Appointment
          </button>
        </div>
      </div>
    </section>
  );
};
