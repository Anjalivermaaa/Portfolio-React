import React from 'react'
import { experiences } from '../../constants'

const Experince = () => {
  return (
    <div id="experience" className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[13vw] font-sans bg-skills-gradient clip-path-custom-2'>
        {/* Section Title */}
        <div className='text-center mb-16'>
            <h2 className='text-4xl font-bold text-white'>
                EXPERIENCE
            </h2>
            <div className='w-32 h-1 bg-purple-600 mx-auto mt-4 rounded'></div>
            <p className='text-gray-400 mt-4 text-lg font-semibold'>
                A summary of my professional journey and key milestones.
            </p>
        </div>
        {/* Experience Timeline */}
        <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((exp, index) => (
            <div key={exp.id} className="relative flex mb-20">
            {/* Timeline Circle */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-900 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10">
                <img
                src={exp.img}
                alt={exp.company}
                className="w-full h-full object-cover rounded-full bg-purple-700 border-4 border-white"
                />
            </div>

            {/* Experience Content */}
            <div
                className={`
                relative sm:w-1/2 w-full mt-20 sm:mt-0 p-6 sm:p-8 
                rounded-2xl bg-gray-900 border border-white backdrop-blur-md 
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                transform transition-transform duration-300 hover:scale-105
                ${index % 2 === 0 ? "sm:pr-12 sm:mr-auto" : "sm:pl-12 sm:ml-auto"}
                `}
            >
                {/* Card Header */}
                <div className="flex items-center space-x-6 mb-4">
                <div className="w-16 h-16 sm:w-20 bg-white rounded-md overflow-hidden">
                    <img
                    src={exp.img}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {exp.role}
                    </h3>
                    <h4 className="text-sm text-gray-300">{exp.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{exp.duration}</p>
                </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4">{exp.desc}</p>

                {/* Skills */}
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                {exp.skills.map((skill, idx) => (
                    <li
                    key={idx}
                    className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                    {skill}
                    </li>
                ))}
                </ul>
            </div>
            </div>
        ))}
        </div>

    </div>
  )
}

export default Experince



