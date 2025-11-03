import React, { useState, useEffect } from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

const imageMap = {
  "project1.png": project1,
  "project2.png": project2,
  "project3.png": project3,
  "project4.png": project4
}

const Project = ({ title = "Latest from Our Blog", description = "Stay updated with the newest trends in web design and marketing.", data }) => {
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
  let displayedBlogs = data
  if (isSmallScreen && !showAll) {
    displayedBlogs = data.slice(0, 2)
  }

  return (
    <div className='mt-2 px-5 md:px-24 py-10 bg-[#F1F7FF]'>
      <div className='text-center mb-10'>
        <h2 className='text-2xl md:text-3xl font-bold text-[#000000]'>{title}</h2>
        <p className='text-[#000000] mt-2'>{description}</p>
      </div>

      {/* Responsive Grid (2 cards per row on md and above) */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {displayedBlogs.map((project) => (
          <div
            key={project.id}
            className='bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden'
          >
            <img src={imageMap[project.img]} alt={project.title} className='w-full h-64 object-cover' />
            <div className='p-5'>
              <h3 className='text-lg font-semibold text-[#000000] mb-2'>{project.title}</h3>
              <p className='text-gray-700 mb-3'>{project.description}</p>
              <a href={project.link} className='text-blue-600 font-medium hover:underline'>Read More</a>
            </div>
          </div>
        ))}
      </div>

      {/* Show button only on small screens */}
      {isSmallScreen && !showAll && (
        <div className='flex justify-center mt-10'>
          <button
            onClick={() => setShowAll(true)}
            className='bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer'
          >
            View All Projects
          </button>
        </div>
      )}
    </div>
  )
}

export default Project
