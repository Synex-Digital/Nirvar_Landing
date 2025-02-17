import React from "react";
import { FAQItem } from "./FAQItem";
import { TitleBack } from "./tittle-back";

export const FAQSection = () => {
  const faqItems = [
    {
      question: "What products does Nirvar have?",
      answer: "Answer to question 1",
    },
    {
      question: "What do you mean by 'Zero Subscription Fee'?",
      answer: "Answer to question 2",
    },
    {
      question: "What products does Nirvar have?",
      answer: "Answer to question 1",
    },
    {
      question: "What do you mean by 'Zero Subscription Fee'?",
      answer: "Answer to question 2",
    },
    // ... more FAQ items
  ];

  return (
    <section className="bg-[#ffffff] pb-8">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="mb-[-1px]">
        <path
          fill="#ccddd8" // Updated fill color
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        />
      </svg>
      <div className="relative bg-[#ccddd8]">
        <div className="w-full flex justify-center items-center flex-col mb-12">
          <TitleBack back="FAQ" front="FAQ" />
        </div>
        <div className="bg-gray-200 p-12  rounded-lg container mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
      <svg
        className="" // You can add a class name here for styling
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ccddd8" // Fill color
          fillOpacity="1"
          d="M0,160L60,181.3C120,203,240,245,360,245.3C480,245,600,203,720,154.7C840,107,960,53,1080,37.3C1200,21,1320,43,1380,53.3L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
    </section>
  );
};

