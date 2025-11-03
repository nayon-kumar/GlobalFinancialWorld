import React from "react";

// Automatically import all images from the assets folder
const images = import.meta.glob("../assets/*", { eager: true, import: "default" });

// Helper to get image from imported assets
const getImage = (filename) => {
  const match = Object.entries(images).find(([path]) => path.includes(filename));
  return match ? match[1] : "";
};

const Why = ({
  features = [], // Array of features [{img: "", title: "", desc: ""}]
  bannerImage = "",
  sectionTitle = "Why Businesses Choose Our PPC Services",
  containerClass = "py-16 px-6 md:px-16 lg:px-20 bg-gray-50",
}) => {
  return (
    <div className={containerClass}>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        {sectionTitle}
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Features */}
        <div className="flex-1 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <img
                src={getImage(feature.img)}
                alt={feature.title}
                className="bg-[#2563EB] p-2 rounded-xl w-[50px] h-[50px] shrink-0"
              />
              <div>
                <h4 className="text-lg font-semibold mb-1">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        {bannerImage && (
          <div className="flex-1 w-full lg:w-auto flex justify-center">
            <img
              src={getImage(bannerImage)}
              alt="Service Banner"
              className="w-full max-w-md object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Why;
