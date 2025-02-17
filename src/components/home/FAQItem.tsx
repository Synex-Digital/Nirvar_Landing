import React, { useState } from 'react';

export const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white p-4 rounded-lg mb-4">
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <h3 className="font-bold text-lg">{question}</h3>
        <span className="text-gray-500">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && (
        <p className="text-gray-700 mt-2 transition-all">{answer}</p>
      )}
    </div>
  );
};
