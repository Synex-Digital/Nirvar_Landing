import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "../../assets/image_aseets";

export const Navbar = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <section className="bg-gradient-to-r from-teal-500 to-green-500">
      <nav className="p-4 flex items-center justify-between container mx-auto">
        <div className="flex items-center">
          <img
            src={images.FOOTER_LOGO}
            alt="Salon - Your Trusted E-Commerce Partner"
            className="w-56"
            loading="eager"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-white items-center">
          <Link to="/" className="hover:text-gray-300" title="Navigate to Home">
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300"
            title="Learn About Us"
          >
            About Us
          </Link>
          <Link
            to="/service"
            className="hover:text-gray-300"
            title="Explore Services"
          >
            Service
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-gray-300"
            title="Privacy Policy"
          >
            Privacy Policy
          </Link>
          <Link
            to={"/admin.nirvartech.com"}
            className="flex items-center bg-white text-teal-500 px-4 py-2 rounded-lg hover:bg-gray-200"
            title="Login to your account"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h10a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm8 4a1 1 0 10-2 0v3a1 1 0 001 1h4a1 1 0 000-2h-3V8z"
                clipRule="evenodd"
              />
            </svg>
            <span className="ml-2">LOGIN</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="flex md:hidden items-center bg-white text-[#14B8A6] px-4 py-2 rounded-lg hover:bg-gray-200"
          onClick={toggleMenu}
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#14B8A6"
          >
            <path
              d="M4 6H20M4 12H20M4 18H20"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Mobile Links */}
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } absolute top-16 left-0 w-full bg-gradient-to-r from-teal-500 to-green-500 text-white flex-col space-y-4 py-4 px-6 md:hidden z-10`}
        >
          <Link to="/" className="hover:text-gray-300" onClick={toggleMenu}>
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/service"
            className="hover:text-gray-300"
            onClick={toggleMenu}
          >
            Service
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-gray-300"
            title="Privacy Policy"
          >
            Privacy Policy
          </Link>
          <a
            href="mailto:team.nirvartech@gmail.com"
            target="_blank"
            onclick="window.open('your WS URL');"
          >
            Contact Us
          </a>
          <Link to={"https://admin.nirvartech.com/login"}>Login</Link>
        </div>
      </nav>
    </section>
  );
});
