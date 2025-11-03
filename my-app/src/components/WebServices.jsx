import React from 'react'
import chooseData from '../data/WebData/webServicesData.json'
import people from '../assets/mobile.png'
import target from '../assets/design.png'
import graph from '../assets/code2.png'
import headphone from '../assets/trolley2.png'
import spreed from '../assets/spreed.png'
import headPhone from '../assets/headPhone.png'

const imageMap = {
    "peopleWhite.png": people,
    "targetWhite.png": target,
    "graphWhite.png": graph,
    "headphoneWhite.png": headphone,
    "spreed.png": spreed,
    "headPhone.png": headPhone

}

const WebServices = ({ title = "Why Choose RR Softech?", description = "We combine expertise, innovation, and dedication to deliver exceptional results." }) => {
    return (
        <div className='py-10 px-5 md:px-20 bg-[#F1F7FF]'>
            <div className='text-center mb-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-[#000000]'>{title}</h2>
                <p className='text-[#000000] mt-2'>{description}</p>
            </div>

            {/*3 cards per row */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {chooseData.map((item) => (
                    <div 
                        key={item.id} 
                        className='bg-white text-[#000000] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-left'
                    >
                        <img
                            src={imageMap[item.img]}
                            alt={item.title}
                            className='w-[61px] h-[58px] mb-4 bg-[#2563EB] p-3 rounded-xl'
                        />
                        <h2 className='text-[20px] font-semibold mb-2'>{item.title}</h2>
                        <p className='text-[15px]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WebServices
