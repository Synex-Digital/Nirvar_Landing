import React from "react";
import { images } from "../../assets/image_aseets";
import MedicalHistoryTracking from "./services-left";
import { TitleBack } from "./tittle-back";

export const Services = () => {
  return (
    <section className="bg-white ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mb-[-1px]"
      >
        <path
          fill="#c1f2f2" // Updated fill color
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      <div className="bg-[#c1f2f2] px-8 ">
        <div className=" container mx-auto ">
          <TitleBack back="Services" front="Services" />

          <div className="flex flex-col lg:flex-row lg:space-x-10 justify-between items-center pt-8 mt-8">
            {/* Content Section */}
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col gap-y-16">
                <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-6">
                  <MedicalHistoryTracking
                    imgink={images.SERVICES_ICON_01}
                    title="Medical History Tracking"
                    description="The most ective method of prescribing drugs. The doctor selects the patient, adds prescriptions, dosages, and directions depending on the patient's medical history and condition, and ensures compliance with current legislation through the platform."
                  />
                  <MedicalHistoryTracking
                    imgink={images.SERVICES_ICON_02}
                    title="Digital Prescription
"
                    description="Nirvar's advanced medical history tracking capability. Gone are the days of having to manually track and manage medical history. Nirvar's AI-powered system can automatically track and analyze medical history, providing valuable insights and recommendations for better health outcomes."
                  />
                </div>
                <div className="flex flex-col lg:flex-row space-y-16 lg:space-y-0 lg:space-x-6">
                  <MedicalHistoryTracking
                    imgink={images.SERVICES_ICON_03}
                    title="Doctor Consultation"
                    description="With Nirvar, connecting with a doctor has never been easier. Say goodbye to long waiting times and endless phone calls. With just a few taps on your smartphone, you can book an appointment with a qualified healthcare professional who suits your needs."
                  />
                  <MedicalHistoryTracking
                    imgink={images.SERVICES_ICON_04}
                    title="My Health"
                    description="Nirvar offers a comprehensive suite of features that cater to all aspects of your health management. In the My Health section, you can monitor your vital signs such as BPM beats per minute  and keep track of conditions like diabetes with ease."
                  />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
              <img
                src={images.SERVICES_RIGHT}
                alt="services"
                className="w-full h-auto rounded-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#c1f2f2" // Fill color
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </section>
  );
};
