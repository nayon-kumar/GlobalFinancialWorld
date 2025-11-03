import React from 'react';
import about from '../assets/Home/about.png';
import people from '../assets/Home/peple.png';
import award from '../assets/Home/award.png';
import target from '../assets/Home/target.png';
import chart from '../assets/Home/chart.png';
import statsData from '../data/Home/statsData.json';

const icons = {
    people,
    award,
    target,
    chart
};

const About = () => {
    return (
        <div className="bg-white py-16 px-6 md:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                {/* Left image */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        src={about}
                        alt="About RR Softech"
                        className="w-full max-w-md rounded-xl"
                    />
                </div>

                {/* Right content */}
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-2xl sm:text-3xl font-bold text-[#000000]">
                        About RR Softech
                    </h1>
                    <p className="text-[#000000] text-[15px] leading-relaxed">
                        RR Softech delivers innovative web and marketing solutions that empower brands to grow.
                        Our expert team focuses on creativity, performance, and measurable success.
                        <br /><br />
                        We combine cutting-edge technology with proven strategies to help businesses establish a strong online presence
                        and achieve their digital goals.
                    </p>

                    {/* Stats Section */}
                    <div className="grid grid-cols-2 gap-6 mt-8 justify-items-center lg:justify-items-start">
                        {statsData.map(stat => (
                            <div key={stat.id} className="flex items-center space-x-4">
                                <img
                                    src={icons[stat.icon]}
                                    alt={stat.label}
                                    className={`w-[51px] h-[51px] p-2 rounded-xl`}
                                    style={{ backgroundColor: stat.bgColor }}
                                />
                                <div>
                                    <h1 className="text-xl font-bold text-[#000000]">{stat.value}</h1>
                                    <p className="text-gray-500 text-sm">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <a
                        className='bg-[#2563EB] text-white px-5 py-1 rounded-xl h-[38px]'
                        href=""
                    >
                        Learn More →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
