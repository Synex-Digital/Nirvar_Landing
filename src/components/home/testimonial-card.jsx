import React from "react";

const TestimonialCard = ({ name, role, image, testimonial }) => {
  return (
    <div className="mb-16">
      <div className="bg-white p-6 rounded-[20px] shadow-md w-full max-w-md mx-auto h-[450px] overflow-hidden">
        <div className="flex flex-col sm:flex-row items-center sm:space-x-5 mb-4">
          <div className="bg-white rounded-full shadow-md flex-shrink-0">
            <img
              src={image}
              alt={name}
              className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-full"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0">
            <h2 className="text-center sm:text-left text-lg sm:text-xl font-bold">
              {name}
            </h2>
            <h3 className="text-center sm:text-left font-semibold text-teal-500">
              {role}
            </h3>
          </div>
        </div>
        <p className="text-center sm:text-left text-gray-600 sm:w-[80%] mx-auto sm:mx-0 mt-4">
          {testimonial}
        </p>

        <div className="absolute bottom-16 right-8 p-4">
          <svg
            fill="#d1ddea"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20" // Adjust size as needed
          >
            <path d="M116,72v88a48.05436,48.05436,0,0,1-48,48,8,8,0,0,1,0-16,32.036,32.036,0,0,0,32-32v-8H40a16.01833,16.01833,0,0,1-16-16V72A16.01833,16.01833,0,0,1,40,56h60A16.01833,16.01833,0,0,1,116,72ZM216,56H156a16.01833,16.01833,0,0,0-16,16v64a16.01833,16.01833,0,0,0,16,16h60v8a32.036,32.036,0,0,1-32,32,8,8,0,0,0,0,16,48.05436,48.05436,0,0,0,48-48V72A16.01833,16.01833,0,0,0,216,56Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
