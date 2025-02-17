import React from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/image_aseets";

function NirvarApp() {
  return (
    <>
     <section>
  <div className="container mx-auto px-4 py-16">
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-x-12 justify-between">
      <div className="lg:w-[60%] w-full">
        <h2 className="text-[#80c3d0] text-3xl font-semibold">
          Nirvar: Your All-in-One Medical App
          By combining the power of technology, user-centric design, and a commitment to data security, Nirvar is reshaping the healthcare landscape, making life easier for patients and healthcare providers alike.
        </h2>
        <div className="mt-8 lg:mt-16">
          <p className="text-[#70838b] text-base font-medium">
            With their innovative solutions, they are paving the way for a future where managing medical data is effortless, secure, and empowers individuals to take control of their health journeys. Nirvar continually invests in research and development to stay at the forefront of technological advancements in the healthcare industry. By collaborating with medical experts, engineers, and designers, the company ensures its solutions are continuously refined and aligned with the evolving needs of healthcare providers and patients. Nirvar is dedicated to simplifying life, securely storing medical data, and revolutionizing medical management. Through their innovative solutions, including a digital prescription platform and comprehensive medical management system, Nirvar empowers healthcare professionals to deliver efficient and personalized care while enabling patients to actively participate in their health journeys. By combining advanced technology, data security, and user-centric design, Nirvar is reshaping the healthcare landscape for the better.
          </p>
        </div>
        <div className="mt-12 lg:mt-24">
          <p className="text-gray-600">Download The App Now:</p>
          <div className="flex items-center mt-3 flex-wrap gap-4">
            <Link to="/download">
              <img
                src={images.GOOLGLE_PLAY_ICON}
                alt="Google Play"
                className="h-16 lg:h-20 w-48 lg:w-60"
              />
            </Link>
            <img
              src={images.SCAN_PIC_NIRVAR_PROMO}
              alt="QR Code"
              className="size-16 lg:size-20"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] w-full">
        <img
          className="w-full h-full object-cover"
          src={images.SERVICES_PAGE_LEFT}
          alt="Nirvar App Preview"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
}

export default NirvarApp;
