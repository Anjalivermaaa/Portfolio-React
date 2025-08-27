import React, {  useState, useEffect, useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ImCross } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
    const menuItems = [
        {id: "about", label: "About"},
        {id: "skills", label: "Skills"},
        {id: "experience", label: "Experience"},
        {id: "work", label: "Work"},
        // {id: "education", label: "Education"},
        {id: "contact", label: "Contact"},
    ]

    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);


  const menuRef = useRef(null); // ref for menu popup

    //Check scroll and change the navbar background color

    // useEffect(() => {
    //     const handleScroll = () => {
    //         setIsScrolled(window.scrollY > 50);
    //     }
    // })
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);


    //Smooth Scroll Functionality
    // const handleMenuClick = (section) => {
    //     setActiveSection(section);
    //     setIsOpen(false);
    //     // Scroll to the section if needed
    //     // const element = document.getElementById(section);
    //     // if (element) {
    //     //     element.scrollIntoView({ behavior: 'smooth' });
    //     // }
    // }
    const handleMenuClick = (section) => {
        setActiveSection(section);
        setIsOpen(false);

        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };


    return (
    <div className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg-px[20vw] ${isScrolled ? 'bg-[#050414] bg-opacity-90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className='text-white py-5 flex justify-between items-center'>

            {/* LOGO */}
            <div className='text-lg font-semibold cursor-pointer'>
                <span className='text-[#8245ec]'>&lt;</span>
                <span className='text-white'>Anjali</span>
                <span className='text-[#8245ec]'>/</span>
                <span className='text-white'>Verma</span>
                <span className='text-[#8245ec]'>&gt;</span>
            </div>

            {/* Menu buttons */}
            <div className=''>
                <ul className="hidden md:flex space-x-8 text-gray-300">
                    {menuItems.map((item)=>{
                        return (<li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#84245ec]" : ""}`}>
                            <button  onClick={() => handleMenuClick(item.id)} className="">
                                {item.label}
                            </button>
                        </li>)
                    })}
                </ul>
            </div>
            {/* Social Media Icons */}
            <div className='hidden md:flex space-x-4'>
                <a 
                    href='https://github.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-[#8245ec] '>
                        <FaGithub size={24} />
                        
                </a>

                <a 
                    href='https://linkedin.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-gray-300 hover:text-[#8245ec] '>
                        <FaLinkedin size={24} />
                        
                </a>

            </div>
            
            {/* Hamburger*/}
            <div className="flex md:hidden">
                <button className="text-grey-300 hover:text-[#8245ec]" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RxCross2 size={24} /> : <HiMenu size={24} />}
                </button>
            </div>

            {/* Logic if Hamburger is open */}
            {isOpen && (
                <div ref={menuRef} className='absolute top-16 right-0 bg-[#050414] w-full  md:w-auto p-4 rounded-lg shadow-lg z-50'>
                    <ul className="flex flex-col items-center">
                        {menuItems.map((items)=>{
                            return (
                                <li key={items.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === items.id ? "text-[#8245ec]" : ""}`}>
                                    <button onClick={() => handleMenuClick(items.id)} className="block py-2 px-4">
                                        {items.label}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                    {/* Divider */}
                    <div className="border-t border-gray-700 my-3"></div>
                    <div className=' p-4 flex justify-center  space-x-4'>
                        <a 
                            href='https://github.com/Anjalivermaaa'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-300 hover:text-[#8245ec] '>
                                <FaGithub size={24} />
                                
                        </a>

                        <a 
                            href='https://www.linkedin.com/in/anjaliverma84/'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-300 hover:text-[#8245ec] '>
                                <FaLinkedin size={24} />
                                
                        </a>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navbar