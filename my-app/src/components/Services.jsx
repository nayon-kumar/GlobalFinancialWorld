import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import servicesData from '../data/Home/servicesData.json';
import web from '../assets/Home/web.png';
import ppc from '../assets/Home/ppc.png';
import seo from '../assets/Home/seo.png';
import social from '../assets/Home/social.png';
import graphics from '../assets/Home/graphics.png';

const imageMap = {
  "web.png": web,
  "ppc.png": ppc,
  "seo.png": seo,
  "social.png": social,
  "graphics.png": graphics
};

const Services = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1024);
      setVisibleCount(window.innerWidth < 1024 ? 3 : servicesData.length);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleViewAll = () => setVisibleCount(servicesData.length);

  return (
    <div className='bg-[#F9FAFB] py-16 px-6 md:px-10 lg:px-16'>
      <div className='text-center mb-10'>
        <h2 className='text-2xl md:text-3xl font-bold text-[#000000]'>Our Services</h2>
        <p className='text-[#000000] mt-2'>Complete digital solutions tailored to your business goals.</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {servicesData.slice(0, visibleCount).map(service => (
          <div key={service.id} className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow text-left'>
            <img
              src={imageMap[service.img]}
              alt={service.title}
              className='mb-4 w-[70px] h-[70px] p-3 rounded-xl'
              style={{ backgroundColor: service.bgColor }}
            />
            <h3 className='text-[22px] font-bold mb-2'>{service.title}</h3>
            <p className='text-[#000000] mb-4'>{service.desc}</p>
            <Link to={service.path} className='text-blue-600 font-semibold'>
              Learn More →
            </Link>
          </div>
        ))}
      </div>

      {isSmallScreen && visibleCount < servicesData.length && (
        <div className='flex justify-center mt-10'>
          <button
            onClick={handleViewAll}
            className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer'
          >
            View All Services
          </button>
        </div>
      )}
    </div>
  );
};

export default Services;
