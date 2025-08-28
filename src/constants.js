import htmlLogo from './assets/HTMLlogo.webp';
import cssLogo from './assets/CSSLogo.png';
import jsLogo from './assets/JavaScriptLogo.png';
import reactLogo from './assets/ReactJSLogo.svg';
import reduxLogo from './assets/ReduxLogo.png';
import nextLogo from '/Users/anjali/Personal Projects/PORTFOLIO WEBSITE/portfolio/src/assets/nextjsLogo.png';
import tailwindLogo from './assets/tailwindcssLogo.png';   
import bootstrapLogo from './assets/BootstrapLogo.png';


// import nodeLogo from './assets/node.png';
import nodeLogo from './assets/nodejs.png';
import expressLogo from './assets/express.png';
import djangoLogo from './assets/Django.png';
import RESTLogo from './assets/REST.webp';
// import mongoLogo from './assets/mongo.png';
import mongoLogo from './assets/MongoDb.svg';
import postgresqlLogo from './assets/postgresql.png';
import mysqlLogo from './assets/mysql.png';
import rabbitmqLogo from './assets/rabbitMQ.png';

import pythonLogo from './assets/Python.webp';
import javaLogo from './assets/Java.png';

import gitLogo from './assets/Git.png';
import githubLogo from './assets/github.png';
import dockerLogo from './assets/Docker.svg';
import AWS from './assets/AWSS3.png';
import postmanLogo from './assets/postman.png';
import vscodeLogo from './assets/vscode.png';
import figmaLogo from './assets/figma.png';
import vercelLogo from './assets/vercel.png';
import netlifyLogo from './assets/netlify.svg';
import { node } from 'prop-types';


import appsuccessor from './assets/appsuccessor.png';
import Newton from './assets/NS.webp';


import portfolioImg from './assets/portfolio.png';
import tictacttoe from './assets/tictactoe.png'
import internalDashboard from './assets/analytics_dashboard.png'
import taskManager from './assets/taskManager.png'
import linktest from './assets/linktester.png'
import tvmaze from './assets/tvmaze.png'

export const SkillsInfo = [
    {
        title: 'Frontend',
        skills: [
            {name: 'HTML', logo: htmlLogo},
            {name: 'CSS', logo:cssLogo},
            {name: 'JavaScript', logo:jsLogo},
            {name: 'React JS', logo:reactLogo},
            {name: 'Redux', logo:reduxLogo},
            {name: 'Next.js', logo:nextLogo},
            {name: 'Tailwind CSS', logo:tailwindLogo},
            {name: 'Bootstrap', logo:bootstrapLogo},
        ]
    },
    {
        title: 'Backend',
        skills: [
            {name: 'Node JS', logo: nodeLogo},
            {name: 'Express JS', logo:expressLogo},
            {name: 'Django', logo:djangoLogo},
            {name: 'REST APIs', logo:RESTLogo},

            {name: 'MongoDB', logo:mongoLogo},
            {name: 'MySQL', logo:mysqlLogo},
            {name: 'PostgreSQL', logo:postgresqlLogo},
            {name: 'Rabbit MQ', logo:rabbitmqLogo},

        ]   
    },
    {
        title: 'Languages',
        skills: [
            {name: 'Python', logo: pythonLogo},
            {name: 'Java', logo:javaLogo},
            {name: 'JavaScript', logo:jsLogo},
        ]   
    },
    {
        title: 'Tools',
        skills: [
            {name: 'Git', logo: gitLogo},
            {name: 'Github', logo:githubLogo},
            {name: 'Docker', logo:dockerLogo},
            {name: 'AWS S3', logo:AWS},
            {name: 'Postman', logo:postmanLogo},
            {name: 'VS Code', logo:vscodeLogo},
            {name: 'Figma', logo:figmaLogo},
            {name: 'Vercel', logo:vercelLogo},
            {name: 'Netlify', logo:netlifyLogo},
        ]   
    }

]


export const experiences = [
    {
        id: 0,
        img: appsuccessor,
        role: "Software Engineer",
        company: "Appsuccessor Media Pvt. Ltd.",
        duration: "Dec 2022 - Apr 2025",
        desc: "Built and maintained full-stack web applications, ensuring scalability and performance. Designed and developed reusable UI components and optimized backend APIs for better efficiency. Contributed to deployment and production workflows, improving delivery speed and stability. Collaborated with cross-functional teams to deliver high-quality features and meet business goals.",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Docker", "AWS S3", "Python", "Django", "REST APIs", "PostgreSQL", "MySQL"]
    },
        {
        id: 1,
        img: Newton,
        role: "Full Stack Developer Intern",
        company: "Newton School",
        duration: "Feb 2022 - Aug 2022",
        desc: "Gained strong problem-solving skills by practicing Data Structures & Algorithms in Java, Built multiple projects using the MERN stack (MongoDB, Express, React, Node.js) to strengthen full-stack development skills, Learned to develop REST APIs and integrate frontend with backend for end-to-end functionality, Worked on collaborative coding exercises and assignments to simulate real-world development workflows.",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Express JS", "MongoDB", "Java"]
    },
] 


export const projects = [
    {
        id: 0,
        title: "Portfolio Website",
        desc: "A personal portfolio website to showcase my skills, projects, and experience. Built with React and Tailwind CSS for a modern and responsive design.",
        image: portfolioImg,
        techStack: ["Tailwind CSS", "React JS", "Email JS"],
        github: "https://github.com/Anjalivermaaa/Portfolio-React",//"https://test.com",
        webApp: "https://anjalicodes.netlify.app/"
    },
    {
        id: 1,
        title: "Task Manager",
        desc: "A web application to manage and track tasks. Features include task creation, editing, deletion, and categorization. Built with React for the frontend and Node.js with Express for the backend.",
        image: taskManager,
        techStack: ["React JS", "Tailwind CSS", "Django", "PostgreSQL"],
        github: "",//"https://test.com",
        webApp: ""//"https://test.com"
    },
    {
        id: 2,
        title: "LinkTester Panel Internal Access Control & Analytics Dashboard",
        desc: "A platform built to test, track, and analyze links with integrated analytics and secure internal access control for authorized usage.",
        image: linktest,
        techStack: ["CSS", "React JS", "Django", "REST APIs", "PostgreSQL"],
        github: "",//"https://test.com",
        webApp: ""//"https://test.com"
    },
    {
        id: 3,
        title: "Analytic Dashboard - Internal Access Control",
        desc: "A centralized dashboard designed for monitoring, analyzing, and managing internal data with secure access control for authorized users.",
        image: internalDashboard,
        techStack: ["CSS", "React JS", "Django", "REST APIs", "PostgreSQL"],
        github: "",//"https://test.com",
        webApp: "http://t2-linktester.appanalytics.in.s3-website.ap-south-1.amazonaws.com/dashboard"
    },
    {
        id: 4,
        title: "TV Maze Search Application",
        desc: "A web app that allows users to search and explore TV shows with detailed information, providing a seamless and interactive browsing experience.",
        image: tvmaze,
        techStack: ["React JS"],
        github: "",//"https://test.com",
        webApp: ""//"https://test.com"
    },

    // {
    //     id: 4,
    //     title: "Dynamic Calender Application",
    //     desc: "A personal portfolio website to showcase my skills, projects, and experience. Built with React and Tailwind CSS for a modern and responsive design.",
    //     image: "https://i.ibb.co/7W8K0ZV/portfolio.png",
    //     techStack: ["React JS", "Tailwind CSS"],
    //     github: "https://test.com",
    //     webApp: "https://test.com"
    // },
    {
        id: 5,
        title: "Tic Tac Toe Game",
        desc: "A fun and interactive two-player game with smooth design and engaging gameplay experience.",
        image: tictacttoe,
        techStack: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/Anjalivermaaa/Tic-Tac-Toe",
        webApp: "https://anjalicodestictactoe.netlify.app/"
    },

]

export const education = [
    {
        id: 0,
        img: "",
        school: "IGNOU",
        date: "Jan 2022 - Jan 2024",
        grade: "",
        desc: "",
        degree: "Master of Computer Application - MCA"
    },
    {
        id: 1,
        img: "",
        school: "Shyam Lal Collefe, University of Delhi",
        date: "Aug 2018 - Jul 2021",
        grade: "",
        desc: "",
        degree: "Bachelor of Science - BSC (Computer Science)"
    },
    {
        id: 2,
        img: "",
        school: "Navin Bharti Sr. Sec. School, Delhi",
        date: "Apr 2017 - Mar 2018",
        grade: "",
        desc: "",
        degree: "12th"
    },
    {
        id: 3,
        img: "",
        school: "K. D. Field Public School, Delhi",
        date: "Apr 2017 - Mar 2018",
        grade: "",
        desc: "",
        degree: "12th"
    },

]