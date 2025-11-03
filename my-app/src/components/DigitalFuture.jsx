import React from 'react';
import { Link } from 'react-router-dom';

const DigitalFuture = ({
  title = "Let's Build Your Digital Future",
  subtitle = "Contact our team today to discuss your next project.",
  bgColor = '#2563EB',
  textColor = '#FFFFFF',
  // Button 1 (optional)
  button1Text = "Contact Us →",
  button1Link = "/contact",
  button1Visible = true,
  button1Style = "bg-white text-[#2563EB] hover:bg-gray-100",
  // Button 2 (optional)
  button2Text = "Get Free Quote",
  button2Link = "/quote",
  button2Visible = true,
  button2Style = "bg-[#2563EB] text-white border-2 border-white hover:bg-[#1E40AF]",
}) => {
  return (
    <div
      className='py-16 px-4 md:px-10 text-center transition-all duration-300'
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {/* Text Section */}
      <div className='mb-8'>
        <h1 className='text-2xl md:text-4xl font-bold mb-4'>{title}</h1>
        <p className='text-base md:text-lg'>{subtitle}</p>
      </div>

      {/* Button Section */}
      <div className='flex justify-center gap-4 flex-wrap'>
        {button1Visible && (
          <Link to={button1Link}>
            <button
              className={`px-6 h-10 rounded-lg font-semibold cursor-pointer transition ${button1Style}`}
            >
              {button1Text}
            </button>
          </Link>
        )}
        {button2Visible && (
          <Link to={button2Link}>
            <button
              className={`px-6 h-10 rounded-lg font-semibold cursor-pointer transition ${button2Style}`}
            >
              {button2Text}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DigitalFuture;
