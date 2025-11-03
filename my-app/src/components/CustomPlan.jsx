import React from "react";
import checkIcon from "../assets/check.png";

// Automatically import all images from the assets folder
const images = import.meta.glob("../assets/*", { eager: true, import: "default" });

// Helper function to get image by filename
const getImage = (filename) => {
  const match = Object.entries(images).find(([path]) => path.includes(filename));
  return match ? match[1] : "";
};

const CustomPlan = ({
  data = null, // JSON data
  defaultButtonText = "Get My Custom Quote",
  containerClass = "max-w-6xl mx-auto my-14 px-4"
}) => {
  if (!data) return <p className="text-center py-10">No plan data available</p>;

  return (
    <div className={containerClass}>
      {/* Heading & Subtitle */}
      <div className="text-center mb-10">
        <h1 className="text-3xl max-w-[913px] mx-auto md:text-4xl font-bold text-[#000000] mb-3">
          {data.header?.topTitle}
        </h1>
        <p className="text-gray-600 max-w-[1300px] mx-auto">
          {data.header?.subtitle}
        </p>
      </div>

      {/* Card Section */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 my-10 flex flex-col lg:flex-row px-4 sm:px-6 lg:px-0 relative z-10">

        {/* LEFT SECTION */}
        <div className="lg:w-1/2 text-white flex lg:border-r-2 lg:border-[#CDC9C9] flex-col justify-between relative">
          {/* Card Header */}
          <div className="bg-[#00316A] flex flex-col items-center lg:rounded-tl-2xl text-center p-8 border-b border-white/20 relative">
            {/* Floating Icon */}
            <div className="absolute -top-8 bg-white rounded-full p-3 shadow-md z-20 border border-[#E5E5E5]">
              <img
                src={getImage(data.header?.icon)}
                alt="Plan Icon"
                className="w-10 h-10"
              />
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-2">
              {data.header?.cardTitle}
            </h2>
            <p className="text-sm">{data.header?.startingText}</p>
            <p className="text-3xl font-bold text-[#4ADE80] mt-1">
              {data.header?.startingAt}{" "}
              <span className="text-base font-normal text-white">
                {data.header?.period}
              </span>
            </p>
          </div>

          {/* Pricing Details */}
          <div className="p-8">
            <h3 className="text-lg font-semibold mb-4 text-black">
              {data.pricingTitle || "How we determine pricing"}
            </h3>
            <div className="space-y-6 text-sm leading-relaxed">
              {data.pricingDetails?.map((item, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3 mb-1">
                    <img
                      src={getImage(item.icon)}
                      alt={item.title}
                      className="w-6 h-6"
                    />
                    <h4 className="font-semibold text-black">{item.title}</h4>
                  </div>
                  <p className="text-black ml-9">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:w-1/2 p-8 rounded-br-2xl bg-white flex flex-col justify-center items-center text-center">
          <div className="w-full">
            <h3 className="text-lg font-semibold mb-6 text-gray-900">
              {data.includedTitle || "Included for All PPC Plans:"}
            </h3>
            <ul className="space-y-4 text-gray-700 text-sm text-left">
              {data.includedItems?.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <img src={checkIcon} alt="check" className="w-5 h-5 mt-0.5" />
                  <span className="text-black">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button className="mt-6 bg-[#2563EB] hover:bg-[#00254E] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 mx-auto">
            {data.buttonText || defaultButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomPlan;
