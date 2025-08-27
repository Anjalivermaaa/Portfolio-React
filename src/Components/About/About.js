import React from 'react'
import profile from '../../assets/profileImage.jpeg'; // Assuming you have a profile image in assets
// import ReactTypingEffect from 'react-typing-effect';
import { Typewriter } from 'react-simple-typewriter'
import Tilt from 'react-parallax-tilt';
import resume from '../../assets/ANJALI_VERMA_Fullstack_Resume.pdf';
const About = () => {
  return (
    <div id="about" className='py-4 px-[7vw] lg:px-[6vw] font-sans mt-16 md:mt-24 lg:mt-32'>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            {/* Left Side */}
            <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
                {/* Greetings */}
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-2 leading-tight'>
                    Hi, I am 
                </h1>
                {/* Name */}
                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
                    Anjali Verma
                </h2>
                {/* Skills Heading with typing effect */}
                <h3 className='text-xl sm:text-2xl md:xl font-semibold mb-4 text-[#8245ec] leading-tight'>
                    <span className='text-white'>
                        I am a {" "}
                    </span>
                    <Typewriter  words={['Full Stack Developer', 'UI/UX Designer', 'Coder']} loop={true} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={2000} />

                </h3>
                <p className='text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
                    I am a passionate web developer with a keen interest in creating dynamic and responsive web applications. I love exploring new technologies and continuously improving my skills to deliver the best user experience.
                </p>
                {/* Resume Button */}
                <a href={resume} target='_blank' rel='noopener noreferrer' 
                // className='bg-[#8245ec] text-white px-6 py-3 rounded-lg hover:bg-[#6f3bbd] transition duration-300'
                className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105'
                style={{
                    backgroundColor: 'linear-gradient(90deg, #8245ec, #a855f7',
                    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                }}
                >
                    Download Resume
                </a>
            </div>
            {/* Right Side */}
            {/* <div className="md:w-1/2 flex justify-center md:justify-end">
                <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] lg:w-[35rem] border-4 border-purple-700 rounded-full' tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} transitionSpeed={1000} scale={1.05} gyroscope={20}>
                    <img src={profile} alt="Anjali Verma"
                    //  className="rounded-full mt-4 w-40 h-100 object-cover border-4 shadow-lg"  
                    className='rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130, 69, 236, 0.5)]'
                    />

                </Tilt>
            </div> */}
            <div className="mb-4 md:w-1/2 flex justify-center md:justify-end">
                <Tilt
                    tiltMaxAngleX={20}
                    tiltMaxAngleY={20}
                    perspective={1000}
                    transitionSpeed={1000}
                    scale={1.05}
                    gyroscope={true}
                    className="rounded-full"
                >
                    <img
                    src={profile}
                    alt="Anjali Verma"
                    // className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] lg:w-[35rem] 
                    //             rounded-full object-contain border-4 border-purple-700 
                    //             drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                    className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] lg:w-[35rem] 
             rounded-full object-cover object-top border-4 border-purple-700 
             drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
                    />
                </Tilt>
            </div>
        </div>
        
    </div>
  )
}

export default About