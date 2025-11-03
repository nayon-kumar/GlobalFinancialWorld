import React, { useRef } from "react";
import meta from "../assets/meta.png";
import shopify from "../assets/shopify.png";
import google from "../assets/google.png";
import microsoft from "../assets/microsoft.png";
import semrush from "../assets/semrush.png";

const BusinessPartner = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  };

  const partners = [meta, shopify, google, microsoft, semrush];

  return (
    <div className="bg-white py-10 flex flex-col items-center overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-8">
        Our Business partners
      </h2>

      {/* Slider Section */}
      <div className="relative w-full max-w-5xl flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center"
        >
          &#10094;
        </button>

        {/* Logos Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-scroll no-scrollbar gap-10 px-10"
        >
          {partners.map((logo, index) => (
            <div
              key={index}
              className="shrink-0 flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Partner ${index + 1}`}
                className="w-40 md:w-44 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-gray-200 hover:bg-gray-300 text-black rounded-full w-8 h-8 flex items-center justify-center"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default BusinessPartner;
