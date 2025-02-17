import React from "react";
import { FaBriefcaseMedical, FaMobileAlt } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";

const MedicalApp = () => {
  return (
    <div className="bg-white  container mx-auto px-4 py-16">
      {/* Header Section */}
      <header className="bg-blue-500 text-white py-8 px-12">
        <h1 className="text-3xl font-bold">Think Healthy, Think Nirvar</h1>
        <p className="text-lg mt-4">
          Nirvar is more than just a medical app - it's your personal health
          companion. From connecting with doctors to managing medical history,
          ordering medicines, monitoring vital signs, accessing informative
          content, and finding healthcare facilities - Nirvar has got you
          covered. Experience the future of healthcare management today with
          Nirvar.
        </p>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="bg-gray-100 p-8">
            <div className="text-center flex flex-col items-center">
              <FaMobileAlt className="w-20 h-20 mb-4 text-[#ec983d]" />

              <h2 className="text-2xl font-semibold mb-2">Medical App</h2>
              <p className="text-lg">
                One App gives all solution regarding your health and medical
                need
              </p>
            </div>
          </div>

          {/* Middle Column */}
          <div className="bg-gray-100 p-8">
            <div className="text-center flex flex-col items-center">
              <FaUserDoctor className="w-20 h-20 mb-4 text-[#ec983d]" />
              <h2 className="text-2xl font-semibold mb-2">Online Doctor</h2>
              <p className="text-lg">
                Connect with your preffered doctor from anytime, anywhere.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-gray-100 p-8">
            <div className="text-center flex flex-col items-center">
              <FaBriefcaseMedical className="w-20 h-20 mb-4 text-[#ec983d]" />
              <h2 className="text-2xl font-semibold mb-2">Medical Store</h2>
              <p className="text-lg">
                Will keep track of your medicine needs. Ordering medicine just
                one tap away.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalApp;
