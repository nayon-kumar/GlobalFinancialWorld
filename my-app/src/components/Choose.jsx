import React from 'react'
import chooseData from '../data/Home/chooseData.json'
import people from '../assets/peopleWhite.png'
import target from '../assets/targetWhite.png'
import graph from '../assets/graphWhite.png'
import headphone from '../assets/headphoneWhite.png'

const imageMap = {
    "peopleWhite.png": people,
    "targetWhite.png": target,
    "graphWhite.png": graph,
    "headphoneWhite.png": headphone
}

const Choose = () => {
    return (
        <div className='py-10 px-4 md:px-10'>
            <div className='text-center mb-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-[#000000]'>Why Choose RR Softech?</h2>
                <p className='text-[#000000] mt-2'>We combine expertise, innovation, and dedication to deliver exceptional results.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {chooseData.map((item) => (
                    <div key={item.id} className='bg-white text-[#000000] p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
                        <img
                            src={imageMap[item.img]}
                            alt={item.title}
                            className='w-[61px] h-[58px] mx-auto mb-4 bg-[#2563EB] p-3 rounded-full'
                        />
                        <h2 className='text-[20px] font-semibold mb-2'>{item.title}</h2>
                        <p className='text-[15px]'>{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Choose
