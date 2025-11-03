import React from 'react';
import litePlan from '../assets/litePlan.png';
import proPlan from '../assets/proPlan.png';
import enterpricePlan from '../assets/enterpricePlan.png';

const imageMap = {
  "litePlan.png": litePlan,
  "proPlan.png": proPlan,
  "enterpricePlan.png": enterpricePlan
};

const Plan = ({
  plans = [], // Array of plans, each with title, price, period, features, image
  sectionTitle = "Choose Your PPC Plan",
  sectionSubtitle = "Flexible options to match your marketing goals",
  bgColor = "#F1F7FF",
  button1Text = "Add to Cart",
  button2Text = "Get Started",
  button1Style = "bg-blue-600 text-white hover:bg-blue-700",
  button2Style = "border border-[#2563EB] text-blue-600 hover:bg-blue-600 hover:text-white"
}) => {
  return (
    <div className={`py-16 px-6`} style={{ backgroundColor: bgColor }}>
      <h2 className='text-3xl font-bold text-center mb-5'>{sectionTitle}</h2>
      <p className='text-center mb-12'>{sectionSubtitle}</p>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className='relative bg-white border-2 border-[#2563EB] rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 text-center p-8 pt-12'
          >
            {/* Top Icon */}
            <div className='absolute -top-7 left-1/2 transform -translate-x-1/2 bg-white border border-[#2563EB] rounded-full p-3'>
              <img
                src={imageMap[plan.image]}
                alt={`${plan.title} icon`}
                className='w-8 h-8'
              />
            </div>

            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{plan.title}</h3>
            <p className='text-green-600 text-3xl font-bold'>
              {plan.price} <span className='text-lg text-gray-600'>{plan.period}</span>
            </p>

            <ul className='text-left mt-6 space-y-2'>
              {plan.features.map((feature, i) => (
                <li key={i} className='flex items-center gap-2 text-gray-700'>
                  <span className='text-green-500 font-bold'>✔</span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className='mt-6 space-y-3'>
              <button className={`cursor-pointer w-full py-2 rounded-md ${button1Style}`}>
                {button1Text}
              </button>
              <button className={`cursor-pointer w-full py-2 rounded-md ${button2Style}`}>
                {button2Text}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
