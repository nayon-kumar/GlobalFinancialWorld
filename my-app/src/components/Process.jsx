import React from 'react'
import chooseData from '../data/WebData/processDataWeb.json'
import people from '../assets/trolley.png'
import target from '../assets/pen.png'
import graph from '../assets/code.png'
import headphone from '../assets/rocket.png'

const imageMap = {
    "peopleWhite.png": people,
    "targetWhite.png": target,
    "graphWhite.png": graph,
    "headphoneWhite.png": headphone
}

const Process = () => {
    return (
        <div className='py-10 px-5 md:px-24 bg-[#F1F7FF]'>
            <div className='text-center mb-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-[#000000]'>Our Web Design Process</h2>
            </div>

            {/* Changed lg:grid-cols-4 → lg:grid-cols-3 */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {chooseData.map((item, index) => (
                    <div
                        key={item.id}
                        className='relative bg-white text-[#000000] p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
                    >
                        {/* Serial number circle at top-left */}
                        <div className='absolute -top-3 -left-3 w-8 h-8 bg-[#2563EB] text-white rounded-full flex items-center justify-center font-semibold text-sm'>
                            {index + 1}
                        </div>

                        <img
                            src={imageMap[item.img]}
                            alt={item.title}
                            className='w-[61px] h-[58px] mx-auto mb-4 bg-[#E5EFFF] p-3 rounded-xl'
                        />
                        <h2 className='text-[20px] font-semibold mb-2'>{item.title}</h2>
                        <p className='text-[15px]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Process
