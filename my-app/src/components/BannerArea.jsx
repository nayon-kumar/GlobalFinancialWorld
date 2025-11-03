import React from 'react'

const BannerArea = ({
  title,
  description,
  primaryBtn,
  secondaryBtn,
  image
}) => {
  return (
    <div className="bg-[#F1F7FF] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 lg:px-24 py-10 md:gap-10 lg:gap-16 lg:h-[614px]">
      {/* Text Section */}
      <div className="text-center md:text-left mt-8 md:mt-0 md:w-1/2 space-y-5">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#000000]">
          {title}
        </h1>
        <p className="text-[#000000] text-base sm:text-lg leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 min-w-[180px] cursor-pointer">
            {primaryBtn}
          </button>
          <button className="border border-blue-600 text-[#2563EB] px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 min-w-[180px] cursor-pointer">
            {secondaryBtn}
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={image}
          alt="Banner"
          className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain rounded-2xl"
        />
      </div>
    </div>
  )
}

export default BannerArea
