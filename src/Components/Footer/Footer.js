import React from 'react'
import {FaFacebook, FaLinkedin, FaInstagram, FaGithub} from 'react-icons/fa'

const Footer = () => {



    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section){
            section.scrollIntoView({behavior: "smooth"})
        }
    }
  return (
    <div className='text-white py-8 px-[12vw] md:px[7vw] lg:px-[20vw]'>
        <div className='container mx-auto text-center'>
            <h2 className='text-xl font-semibold text-purple-500'>
                Anjali Verma
            </h2>
            {/* Navigation Links */}
            <div className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
                {
                    [
                        {name: "About", id:'about'},
                        {name: "Skills", id:'skills'},
                        {name: "Experience", id:'experience'},
                        {name: "Work", id:'work'},

                    ].map((item, index) => (
                        <button key={index} onClick={() => handleScroll(item.id)} className='hover:text-purple-500 text-sm sm:text-base my-1'>
                            {item.name}
                        </button>
                    ))
                }
            </div>

            {/* Social Media Icons */}
            <div className='flex flex-wrap justify-center space-x-4 mt-6'>
                {
                    [
                        {icon: <FaGithub />, link: "https://github.com/Anjalivermaaa"},
                        {icon: <FaLinkedin />, link: "https://www.linkedin.com/in/anjaliverma84/"},
                        {icon: <FaInstagram />, link: "https://www.instagram.com/anjali.lifelogs?igsh=czQ0ZmEyZDZyanE0"},

                    ].map((item, index)=>(
                        <a key={index} target='_blank' href={item.link} rel='noopener noreferrer' className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110' >
                            {item.icon}
                        </a> 
                    ))
                }
            </div>
            
            {/* Copyrigt text */}
            <p className='text-sm text-gray-400 mt-6'>
                © 2025 Anjali Verma. All rights reserved.
            </p>
        </div>

    </div>
  )
}

export default Footer