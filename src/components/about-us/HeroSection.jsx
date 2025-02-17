import React from "react";

export const HeroSection = ({ name, bgurl }) => {
  return (
    <section
      className=" bg-cover relative "
      style={{
        backgroundImage: `url(${bgurl})`,
      }}
    >
      <div className="container mx-auto flex  flex-col md:flex-row p-8 md:p-20 text-white">
        {/* Left Text Section */}
        <div className="md:pr-10 flex items-center justify-center w-full h-[200px]">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            {name}
          </h1>
        </div>
      </div>
      {/* Wave SVG you can customize the color and size as needed */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fff"
          fillOpacity="1"
          className="w-full h-full "
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
    </section>
  );
};
