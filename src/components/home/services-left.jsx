import React from "react";

const MedicalHistoryTracking = ({ title, description, imgink }) => {
  return (
    <div className="w-full">
      <div className="flex justify-center mb-4">
        <div className="bg-white p-4 rounded-full">
          <img src={imgink} alt="medical_icon" loading="lazy" />
        </div>
      </div>
      <h2 className="text-center text-2xl font-bold mb-4">{title}</h2>
      <p className="text-center text-base">{description}</p>
    </div>
  );
};

export default MedicalHistoryTracking;
