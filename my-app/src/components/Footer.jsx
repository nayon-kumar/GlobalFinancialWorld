import React from 'react'
import footerData from '../data/Footer/footerData.json'
import facebook from '../assets/Footer/facebook.png'
import twitter from '../assets/Footer/twitter.png'
import instagram from '../assets/Footer/instagram.png'
import linkedin from '../assets/Footer/linkedin.png'
import location from '../assets/Footer/location.png'
import email from '../assets/Footer/email.png'
import call from '../assets/Footer/call.png'

const iconMap = {
  "facebook.png": facebook,
  "twitter.png": twitter,
  "instagram.png": instagram,
  "linkedin.png": linkedin,
  "location.png": location,
  "email.png": email,
  "call.png": call
}

const Footer = () => {
  return (
    <div className='bg-[#0F172A] text-white pt-10 pb-5'>
      <div className='px-4 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8'>
        {/* Logo & Social */}
        <div className='space-y-4 lg:col-span-4'>
          <h1 className='text-2xl font-bold'>
            {footerData.logo.name.split(' ')[0]} <span className='text-[#FF6A00]'>{footerData.logo.highlight}</span>
          </h1>
          <p>{footerData.logo.description}</p>
          <div className='flex gap-4 mt-2'>
            {footerData.logo.social.map((social, index) => (
              <img key={index} src={iconMap[social.img]} alt={social.alt} className='w-6 h-6 cursor-pointer' />
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className='space-y-2 lg:col-span-2'>
          <h4 className='font-semibold text-lg mb-2'>Quick Links</h4>
          <div className='flex flex-col gap-1'>
            {footerData.quickLinks.map((link, index) => (
              <a key={index} href="" className='hover:text-gray-400 transition'>{link}</a>
            ))}
          </div>
        </div>

        {/* Our Services */}
        <div className='space-y-2 lg:col-span-2'>
          <h4 className='font-semibold text-lg mb-2'>Our Services</h4>
          <div className='flex flex-col gap-1'>
            {footerData.services.map((service, index) => (
              <a key={index} href="" className='hover:text-gray-400 transition'>{service}</a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className='space-y-2 lg:col-span-4'>
          <h4 className='font-semibold text-lg mb-2'>Contact Info</h4>
          {footerData.contactInfo.map((contact, index) => (
            <div key={index} className='flex items-start gap-2'>
              <img src={iconMap[contact.icon]} alt="" className='w-5 h-5 mt-1' />
              <p>{contact.text}</p>
            </div>
          ))}
        </div>
      </div>

      <hr className='border-t mt-5' style={{ borderColor: '#8C8C8C' }} />

      <p className='text-center mt-4'>© {new Date().getFullYear()} RR Softech. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
