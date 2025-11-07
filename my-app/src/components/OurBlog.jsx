import React, { useState, useEffect } from 'react'
import blogData from '../data/Home/blogData.json'
import blog1 from '../assets/Home/blog1.png'
import blog2 from '../assets/Home/blog2.png'
import blog3 from '../assets/Home/blog3.png'

const imageMap = {
    "blog1.png": blog1,
    "blog2.png": blog2,
    "blog3.png": blog3
}

const OurBlog = () => {
    const [showAll, setShowAll] = useState(false)
    const [isSmallScreen, setIsSmallScreen] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Determine which blogs to display
    let displayedBlogs = blogData
    if (isSmallScreen && !showAll) {
        displayedBlogs = blogData.slice(0, 2)
    }

    return (
        <div className='mt-2 px-4 md:px-10 py-10'>
            <div className='text-center mb-10'>
                <h2 className='text-2xl md:text-3xl font-bold text-[#000000]'>Latest from Our Blog</h2>
                <p className='text-[#000000] mt-2'>Stay updated with the newest trends in web design and marketing.</p>
            </div>

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {displayedBlogs.map((blog) => (
                    <div
                        key={blog.id}
                        className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'
                    >
                        <img src={imageMap[blog.img]} alt={blog.title} className='w-full h-64 object-cover' />
                        <div className='p-5'>
                            <h3 className='text-lg font-semibold text-[#000000] mb-2'>{blog.title}</h3>
                            <p className='text-gray-700 mb-3'>{blog.description}</p>
                            <a href={blog.link} className='text-blue-600 font-medium hover:underline'>Read More</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Show button only on small screens*/}
            {isSmallScreen && !showAll && (
                <div className='flex justify-center mt-10'>
                    <button
                        onClick={() => setShowAll(true)}
                        className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer'
                    >
                        View All Posts
                    </button>
                </div>
            )}
        </div>
    )
}

export default OurBlog
