import { useState } from "react";
import React from "react";

const AccordionSection = ({ title, des, isOpen, onToggle }) => {
  return (
    <div className="border border-gray-200 shadow-md rounded-lg mb-4 overflow-hidden transition-all duration-300">
      <div
        className="flex justify-between items-center p-5 cursor-pointer bg-gray-50 hover:bg-gray-100"
        onClick={onToggle} 
      >
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <span className="text-2xl transform transition-transform duration-300">
          {isOpen ? '🔼' : '🔽'}
        </span>
      </div>

      {isOpen && (
        <div className="p-5 border-t border-gray-200 bg-white">
          <p className="text-gray-600 leading-relaxed">{des}</p>
        </div>
      )}
    </div>
  );
};

const Grocerry = () => {
  const [openSection, setOpenSection] = useState("first"); 
  const sections = [
    {
      id: "first",
      title: "Our Commitment to Freshness",
      des: "We partner with local farms and trusted suppliers to ensure that every item you receive is at its peak freshness. Our quality control team meticulously inspects all products to meet the highest standards before they are delivered to your door."
    },
    {
      id: "second",
      title: "Locally Sourced Products",
      des: "Supporting our community is at the heart of what we do. We prioritize sourcing products from local growers and producers, which not only guarantees fresher goods for you but also helps strengthen the local economy."
    },
    {
      id: "third",
      title: "Fast & Reliable Delivery",
      des: "Our dedicated delivery network is optimized for speed and reliability. We use insulated packaging to maintain the perfect temperature for your groceries, ensuring they arrive at your doorstep just as fresh as when they left our store."
    }
  ];

  const handleToggle = (sectionId) => {
    setOpenSection(openSection === sectionId ? null : sectionId);
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        Our Grocery Service
      </h1>
      <div>
        {sections.map((section) => (
          <AccordionSection
            key={section.id}
            title={section.title}
            des={section.des}
            isOpen={openSection === section.id}
            onToggle={() => handleToggle(section.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Grocerry;
