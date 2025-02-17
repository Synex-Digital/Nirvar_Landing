import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { MdMailLock } from "react-icons/md";
import { Link } from "react-router-dom";
import { images } from "../../assets/image_aseets";

export const Footer = ({ page }) => {
  return (
    <footer
      className={` ${
        page === "about-us" ? "bg-[#f2f4f3]" : "bg-white"
      } text-white `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="mb-[-1px]"
      >
        <path
          fill={`${page === "about-us" ? "#08ac8c" : "#07a88c"}`}
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>

      <div
        className={` ${page === "about-us" ? "bg-[#08ac8c]" : "bg-[#07a88c]"}`}
      >
        <div className="container mx-auto px-4 flex flex-wrap justify-between gap-y-4">
          {/* First Column */}
          <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%] mb-8 sm:mb-0">
            <img src={images.FOOTER_LOGO} alt="FOOTER  LOGO" loading="lazy" />
            <p className="mt-2 text-sm sm:text-base">
              In this fast-paced world, managing our health and medical needs
              can be a daunting task. From scheduling doctor consultations to
              keeping track of medical history, it's easy to feel overwhelmed.
              That's where Nirvar comes in - the ultimate medical app designed
              to simplify your healthcare journey.
            </p>
          </div>

          {/* Second Column */}
          <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%] mb-8 sm:mb-0">
            <h3 className="font-bold text-lg mb-2">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <Link to="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Doctor Consultation
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  Why Nirvar?
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Third Column */}
          <div className="flex flex-col w-full sm:w-[45%] md:w-[30%] lg:w-[23%]">
            <h3 className="font-bold text-lg mb-2">Contact Us</h3>
            <div className="text-sm sm:text-base flex items-center gap-x-2">
              <FaLocationArrow />
              <div>House 7, Road 7, Block Link, Mirpur DOHS, Dhaka 1215</div>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <FaPhone />
              <div>
                <div>+880 190 000 0000</div>
                <div>+880 190 000 0000</div>
              </div>
            </div>
            <div className="flex items-center gap-x-2 mt-2">
              <MdMailLock />
              <div>
                <div>info@nirvar.com</div>
                <div>contact@nirvar.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social and Download Section */}
        <div className="container mx-auto flex flex-wrap justify-evenly mt-8 mb-10 px-4">
          <div className="flex items-center w-full sm:w-1/2 mb-4 sm:mb-0">
            <p className="mr-4 text-sm sm:text-base">Follow Us:</p>
            <Link to="#" className="text-2xl mx-2">
              <FaFacebookF />
            </Link>
            <Link to="#" className="text-2xl mx-2">
              <FaInstagram />
            </Link>
            <Link to="#" className="text-2xl mx-2">
              <FaTwitter />
            </Link>
            <Link to="#" className="text-2xl mx-2">
              <FaWhatsapp />
            </Link>
            <Link to="#" className="text-2xl mx-2">
              <FaLinkedinIn />
            </Link>
          </div>
          <div className="flex items-center w-full sm:w-1/2">
            <h3 className="font-bold lg:text-lg mr-2">Download Now:</h3>
            <div className="flex space-x-2">
              <Link to="#">
                <img
                  className="w-32 h-10"
                  src={images.GOOLGLE_PLAY_ICON}
                  alt="Google Play"
                  loading="lazy"
                />
              </Link>
              <Link to="#">
                <img
                  className="w-32 h-10"
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-download-on-the-mac-app-store.svg"
                  alt="App Store"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center py-4 text-sm sm:text-base">
          <p>&copy; 2023 Nirvar | Privacy Policy | Contact Us</p>
        </div>
      </div>
    </footer>
  );
};
