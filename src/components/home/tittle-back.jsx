import React from "react";

export const TitleBack = ({ back, front }) => {
  return (
    <div className="flex justify-start items-center px-4 lg:px-0">
      <div className="relative flex flex-col items-center">
        <h2 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] text-[#ebf8f5] font-semibold">
          {back}
        </h2>

        <h2 className="absolute top-8 sm:top-12 md:top-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#666666] font-semibold">
          {front}
        </h2>
      </div>
    </div>
  );
};
