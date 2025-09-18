
// src/components/ProjectSection.jsx
import React, { useState, useEffect } from 'react';
import Style from "./ProjectSection.module.css"
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaHtml5, FaCss3Alt,  FaJsSquare, FaTools, FaFigma, FaGithub, FaTimes, FaDownload, FaBootstrap, FaSass, FaFire } from 'react-icons/fa';
import { SiTailwindcss, SiVercel, SiExpress, SiTypescript, SiJquery,  SiRedux, SiReactquery,  SiReactrouter, SiSwiper, SiReacthookform } from 'react-icons/si';
import { PiCodeBold } from "react-icons/pi";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { useNavbar } from './../../contexts/NavbarContext';
import { IoLogoFirebase, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";


// image React
import pro1 from "./../../assets/project/Screenshot 2025-09-03 162748.png";
import pro2 from "./../../assets/project/Screenshot 2025-09-03 163623.png";
import pro3 from "./../../assets/project/Screenshot 2025-09-03 164146.png";
import pro4 from "./../../assets/project/Screenshot 2025-09-03 170142.png";
import pro5 from "./../../assets/project/Screenshot 2025-09-06 112549.png";
import pro6 from "./../../assets/project/Screenshot 2025-09-03 175305.png";
// image JavaScript
import js1 from "./../../assets/project/Screenshot 2025-09-03 185800.png";
import js2 from "./../../assets/project/Screenshot 2025-09-03 191303.png";
import js3 from "./../../assets/project/Screenshot 2025-09-03 192236.png";
import js4 from "./../../assets/project/Screenshot 2025-09-03 193852.png";
import js5 from "./../../assets/project/Screenshot 2025-09-03 195619.png";
import js6 from "./../../assets/project/Screenshot 2025-09-04 100539.png";
// image HTML & CSS & BOOTSTRAP
import ht1 from "./../../assets/project/Screenshot 2025-09-03 203509.png";
import ht2 from "./../../assets/project/Screenshot 2025-09-03 204300.png";
import ht3 from "./../../assets/project/Screenshot 2025-09-03 205121.png";
import ht4 from "./../../assets/project/Screenshot 2025-09-03 205602.png";
import ht5 from "./../../assets/project/Screenshot 2025-09-03 210327.png";
import ht6 from "./../../assets/project/Screenshot 2025-09-03 213944.png";
import ht7 from "./../../assets/project/Screenshot 2025-09-03 231608.png";
import ht8 from "./../../assets/project/Screenshot 2025-09-03 233311.png";
import ht9 from "./../../assets/project/Screenshot 2025-09-03 234327.png";
import ht10 from "./../../assets/project/Screenshot 2025-09-04 092213.png";
import ht11 from "./../../assets/project/Screenshot 2025-09-04 093309.png";
import ht12 from "./../../assets/project/Screenshot 2025-09-04 094511.png";
import { useTranslation } from 'react-i18next';
import { MdModelTraining } from 'react-icons/md';


// ===================================
// All Project Abdelazem (Elwan)
// ===================================
const dummyProjects = [
  // project React 6
  {
    title: "E-Commerce API",
    description: "React e-commerce site built a modern and responsive e-commerce using React, tailwindcss, TanStackQuery.... .",
    tech: ["React", "TailwindCSS", "TanStackQuery" , "React Hooks"  ,"Swiper", "JWT", "Formik & Yup" , "react-hot-toast" ],
    link: "https://e-commerc-app-ten.vercel.app/",
    image: pro1,
    category: "React.js",
  },
  {
    title: "E-Commerce API",
    description: "React E-commerce Website Built a modern and responsive e-Commerce web application that feature a complete shopping journey from product discovery to checkout. .",
    tech: ["React", "TailwindCSS", "Redux Toolkit", "React Hooks"  ,"Axios", "Formik & Yup" ,],
    link: "https://e-commerc-app-ten.vercel.app/",
    image: pro2,
    category: "React.js",
  },
  {
    title: "DashBoards App",
    description: "React Data Visualization Website Created a  modern and responsive web application for private clinic owners that features a complete registration journey from patient entry to discharge. ",
    tech: ["React", "TailwindCSS", "Firebase" ,"Material UI", "Lottie Animations" , ],
    link: "https://crud-web-master-bice.vercel.app/",
    image: pro3,
    category: "React.js",
  },
  {
    title: "TEC APP",
    description: "React Ecommerce Website small  ecommerce web with React ,Tailwind , TanStak Query, with a pagination for portability between API components to ensure clean architecture and fast performance And switch between dark mood and light mood",
    tech: ["React", "TailwindCSS", "Swiper" ,"TanStackQuery", "Axios",  "Formik & Yup",   ],
    link: "https://small-e-commerc-web-master.vercel.app/",
    image: pro4,
    category: "React.js",
  },
  {
    title: "كـــــرم الشـــــام Karam EL-Sham",
    description: "Karam El Shaa Restaurant project built with React and TailwindCSS for a modern responsive design, using JSON Server with Axios for dynamic data fetching, and enhancing the UI with AOS animations and Swiper for interactive menus.",
    tech: ["React", "TailwindCSS",   "Swiper" ,  "react-router-dom", "JSON Server", "AOS" ],
    link: "https://karan-elsham.vercel.app/",
    image: pro5,
    category: "React.js",
  },
  {
    title: "React Routing",
    description: "React Routing & Typing Effect Project  Built with React, featuring routing for smooth navigation and a typing animation library that displays text character by character for an interactive feel.",
    tech: ["React", "react-router-dom", "react-typed" ,  ],
    link: "https://react-one-sigma-seven.vercel.app/",
    image: pro6,
    category: "React.js",
  },

// project JavaScript 6
  {
    title: "Yummy API",
    description: "An interactive food showcase built with HTML, Bootstrap, and JavaScript. Features regex-based search and a clean, responsive design for easy browsing.",
    tech: ["JavaScript", "Bootstrap" , "Api"  , "Html", "Regex"],
    link: "https://abdelazemelwan1.github.io/Yummy_API/",
    image: js1,
    category: "JavaScript",
  },
  {
    title: "Weather APP",
    description: "A JavaScript weather app that fetches live data via API to display the current temperature and a 3-day forecast based on your location.",
    tech: ["JavaScript", "Bootstrap" ,  "Html", "Api",],
    link: "https://abdelazemelwan1.github.io/Weather/",
    image: js2,
    category: "JavaScript",
  },
  {
    title: "Login System",
    description: "A complete Login & Register system built with JavaScript. Includes regex-based validation for email and password, user authentication on login, and the ability to create new accounts with proper input validation.",
    tech: ["JavaScript", "Bootstrap" ,"Html", "Regex", ],
    link: "https://abdelazemelwan1.github.io/login/index.html",
    image: js3,
    category: "JavaScript",
  },
  {
    title: "Bookmarker",
    description: "A JavaScript project that lets users add website links with titles, validates input to prevent duplicates, and displays clickable links for easy access.",
    tech: ["JavaScript", "Bootstrap" , "Html","Regex" ,],
    link: "https://abdelazemelwan1.github.io/Bookmarker/",
    image: js4,
    category: "JavaScript",
  },
  {
    title: "Crud System",
    description: "A full JavaScript CRUD system with image support, allowing users to create, edit, delete, and manage data seamlessly.",
    tech: ["JavaScript", "Bootstrap" , "Html","Regex" ,],
    link: "https://abdelazemelwan1.github.io/crud/",
    image: js5,
    category: "JavaScript",
  },
  {
    title: "Game Reviews",
    description: "An interactive movie website built with HTML, CSS, Bootstrap, JavaScript, and API, featuring foreign films like action and cartoons in a responsive layout Users can view details for each movie or access a page to watch it directly.",
    tech: ["JavaScript", "Bootstrap" ,"CSS" , "Html", "API" ,],
    link: "https://abdelazemelwan1.github.io/-Game-Reviews/",
    image: js6,
    category: "JavaScript",
  },

  // project HTML & CSS & Bootstrap 12
  {
    title: "mealify",
    description: "A responsive restaurant website built with HTML, CSS, and Bootstrap 5, showcasing chefs, dishes, and restaurant details. Includes a Dark/Light Mode for a modern and user-friendly experience.",
    tech: ["Html", "CSS" , "Bootstrap"],
    link: "https://abdelazemelwan1.github.io/mealify/",
    image: ht7,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "Kerri",
    description: "An interactive personal website built with HTML, CSS, and Bootstrap, featuring a JavaScript typewriter effect to showcase info, skills, services, and social links in a fully responsive design.",
    tech: ["Html", "CSS" , "Bootstrap"],
    link: "https://abdelazemelwan1.github.io/Kerri/",
    image: ht12,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "Bezel",
    description: "A personal website built with HTML, CSS, and Bootstrap, featuring a typewriter effect to showcase info, skills, services, and work in a clean responsive design.",
    tech: ["Html", "CSS" , "Bootstrap"],
    link: "https://abdelazemelwan1.github.io/Bezel/",
    image: ht9,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "EliteCorp",
    description: "A website built with HTML, CSS, and Bootstrap, showcasing office designs and a variety of electronics, along with highlighting the people behind these products and services. It features a clean, well-structured layout, and is fully responsive to provide a smooth experience across all devices .",
    tech: ["Html", "CSS" , "Bootstrap"],
    link: "https://abdelazemelwan1.github.io/EliteCorp/",
    image: ht11,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "DevFolio",
    description: "A personal portfolio website built with HTML, CSS, and Bootstrap. It showcases skills, services, projects, and achievements with an elegant design, plus integrated social media links.",
    tech: ["Html", "CSS" , "Bootstrap"],
    link: "https://abdelazemelwan1.github.io/DevFolio/",
    image: ht8,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "Lfaspes",
    description: "A fully developed website built with HTML, CSS, and Bootstrap, showcasing a wide range of clothing collections with well-structured sections, including fashion logos and popular clothing brands, with a fully responsive design that works smoothly across all devices.",
    tech: ["Html", "CSS" , "Bootstrap"],
    link: "https://abdelazemelwan1.github.io/lfaspes/",
    image: ht10,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "JYM",
    description: "An interactive website designed to showcase gym workouts and available trainers with their expertise , Includes guided explanations on how to perform exercises correctly with visuals , Fully responsive design, optimized for all devices",
    tech: ["Html", "CSS" , "Media Query"],
    link: "https://abdelazemelwan1.github.io/The-jam/",
    image: ht6,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "Pedie",
    description: "simple project built with HTML and CSS to showcase cat images and information. It highlights clean design, responsive layout, and strengthens my front-end development skills.",
    tech: ["Html", "CSS" , "Media Query"],
    link: "https://abdelazemelwan1.github.io/My-First-Project/",
    image: ht1,
    category: "Html & CSS & Bootstrap",
  },
    {
    title: "Portfolio",
    description: "A simple personal portfolio built with HTML, CSS, and Media Query. Showcases skills, experience, and education in a clean, responsive design.",
    tech: ["Html", "CSS" , "Media Query"],
    link: "https://abdelazemelwan1.github.io/personal-portfolio/",
    image: ht3,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "Fokir",
    description: "Fokir is a simple personal website built with HTML, CSS, and Media Query for responsive design. It includes sections like About, Services, and Portfolio with images and videos. The goal is to showcase clean design and my skills in creating responsive layouts.",
    tech: ["Html", "CSS" , "Media Query"],
    link: "https://abdelazemelwan1.github.io/fokir/",
    image: ht2,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "Solar Panel Installers ",
    description: "A simple website built with HTML, CSS, and Media Query for a responsive design. Showcases houses and installation/decor services with images and details. The goal is to highlight my skills in creating clean and user-friendly layouts.",
    tech: ["Html", "CSS" , "Media Query"],
    link: "https://abdelazemelwan1.github.io/Solar/",
    image: ht4,
    category: "Html & CSS & Bootstrap",
  },
  {
    title: "SpiderMan",
    description: "An entertainment website about Spider-Man, built with HTML, CSS, and Media Query for a responsive design. It showcases Spider-Man’s movies and series with images, titles, and details. The goal is to highlight my skills in organizing content and creating engaging, mobile-friendly web pages.",
    tech: ["Html", "CSS" , "Media Query"],
    link: "https://abdelazemelwan1.github.io/Spider-Man/",
    image: ht5,
    category: "Html & CSS & Bootstrap",
  },

];

// ===================================
// All techStack Abdelazem
// ===================================
const techStack = {
    frontend: [
    { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
    // { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-[#F7DF1E]" /> },
    { name: "TypeScript", icon: <SiTypescript  className="text-[#3078C6]" /> },
    { name: "Jquery", icon: <SiJquery  className="text-[#FFFFFF]" /> },
    { name: "SASS", icon: <FaSass  className="text-[#C76293]" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
    { name: "Bootstrap CSS", icon: <FaBootstrap  className="text-[#8210F9]" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" /> },
  ],
  // backend: [
  //   { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" /> },
  //   { name: "Express", icon: <SiExpress className="text-white" /> },
  // ],
  database: [
    { name: "Firebase ", icon: <IoLogoFirebase className="text-[#DD2C00]" /> }
    // { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    // { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
  ],
  tools: [
    { name: "Git & GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Vercel", icon: <SiVercel className="text-white" /> },
    { name: "Figma", icon: <FaFigma className="text-[#F24E1E]" /> },
    { name: "Other Tools", icon: <FaTools className="text-gray-400" /> },
  ],
};

// ===================================
// كلمة عرض أعمالي 
// ===================================
const LineShadowText = ({ children, className, shadowColor = "#4079ff", ...props }) => {
    return (
        <motion.span
            style={{ "--shadow-color": shadowColor }}
            className={`relative w-full z-0 line-shadow-effect ${className}`}
            data-text={children}
            {...props}
        >
            {children}
        </motion.span>
    );
};


// ===================================
// UI  Project 
// ===================================
const ProjectCard = ({ project }) => {
    const techIcons = {
    "TanStackQuery": <SiReactquery />, "React": <FaReact />, "TailwindCSS": <SiTailwindcss />,
    "react-router-dom": <SiReactrouter />, "Swiper": <SiSwiper />,"Redux Toolkit": <TbBrandRedux />,
    "React Hooks": <SiReacthookform />, "Express": <SiExpress />,  "JWT": "🔑","Firebase": <FaFire />,
    "JavaScript": <IoLogoJavascript />, "Bootstrap": <FaBootstrap />,  "html": <IoLogoHtml5 />,"CSS": <FaCss3Alt />,"Html": <IoLogoHtml5 />,
    };

    return (
    <a
    href={project.link} target="_blank" rel="noopener noreferrer"
    //  transition-all hover:scale-[1.06]
        className="ease-in-out z-10 group relative h-64 sm:h-72 rounded-2xl overflow-hidden transition-shadow duration-500 hover:shadow-lg hover:shadow-cyan-500/30"
        style={{ background: `url('${project.image}') center/cover no-repeat`, cursor: 'pointer' ,transformOrigin: 'center',}}
    >
        <div className=" absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300 flex flex-col justify-between p-4 sm:p-6 text-white">
        <div>
            <h3 className="text-lg sm:text-xl font-bold text-cyan-300">{project.title}</h3>
            <p className="text-slate-300 mt-2 text-xs sm:text-sm leading-relaxed">{project.description}</p>
        </div>
        <div className="flex items-end justify-between">
            <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((t, i) => (
                <span key={i} className="flex items-center gap-1 text-xs font-mono px-2 py-1 rounded-full bg-cyan-900/70 text-cyan-200 border border-cyan-800/30 backdrop-blur-sm">
                {techIcons?.[t] || t}
                </span>
            ))}
            </div>
            <FaExternalLinkAlt className="text-slate-300 group-hover:text-cyan-200 transition-colors duration-300" />
        </div>
        </div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute inset-0 rounded-2xl border border-cyan-300/10 pointer-events-none"></div>
    </a>
    );
};


function ProjectSection() {
  const { t } = useTranslation();
  
  const [activeTab, setActiveTab] = useState('Projects');
  const [projectCategory, setProjectCategory] = useState('React.js');
  const [previewCertificate, setPreviewCertificate] = useState(null);
  const { hideNavbar, showNavbar } = useNavbar();

  useEffect(() => {
    if (previewCertificate) {
      hideNavbar();
    } else {
      showNavbar();
    }
  }, [previewCertificate, hideNavbar, showNavbar]);

  useEffect(() => {
    return () => {
      showNavbar();
    };
  }, [showNavbar]);
// contant Tabe
  const tabs = [
    { id: 'Projects', label: t("Projects"), icon: <PiCodeBold className="text-[1.7em] mb-1" /> },
    { id: 'Certificate', label: t("traning"), icon: <MdModelTraining className="text-[1.5em] mb-1" /> },
    { id: 'Tech Stack', label: t("Tech"), icon: <LiaLayerGroupSolid className="text-[1.5em] mb-1" /> },
  ];

    const filteredProjects = dummyProjects.filter(project => {
    if (projectCategory === '') {
      return true; // يعيد كل المشاريع إذا لم يتم اختيار فئة محددة
    }
    return project.category === projectCategory;
  });


  return (
    <section id="project" className="py-7">
      
      <style>{`
        @keyframes line-shadow-anim { 0% { background-position: 0 0; } 100% { background-position: 100% 100%; } }
        .line-shadow-effect::after { content: attr(data-text); position: absolute; z-index: -1; left: 0.04em; top: 0.04em; background-image: linear-gradient(45deg, transparent 45%, var(--shadow-color) 45%, var(--shadow-color) 55%, transparent 0); background-size: 0.06em 0.06em; -webkit-background-clip: text; background-clip: text; color: transparent; animation: line-shadow-anim 30s linear infinite; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
      {/* SHOWCASE PORTFOLIO عرض اعمالي  */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-20 w-full"
      >
        <h2 className="text-[28px] xs:4xl md:text-5xl  font-bold font-moderniz w-full">
            <span className='text-start max-w-full' style={{ color: "#fff" }}><LineShadowText shadowColor="#bbbbbb">{t('SHOWCASE')}</LineShadowText></span>
            {' '}
            <span className='text-start max-w-full' style={{color: "#00ffdc"}}><LineShadowText shadowColor="#00b3a4">{t('PORTFOLIO')}</LineShadowText></span>
        </h2>
      </motion.div>
        {/* Taap and Contant */}
      <div className="w-full">
        {/* Taab */}
        <div className="flex justify-center mb-12">
          <motion.div
            layout
            className="inline-flex w-full max-w-4xl rounded-3xl p-2 shadow-lg border border-slate-800 bg-gradient-to-r from-[#101624] via-[#0a1627] to-[#0a223a] backdrop-blur-md"
            style={{ background: "linear-gradient(90deg, #101624 0%, #0a1627 50%, #0a223a 100%)", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex flex-1 flex-col items-center justify-center px-2 py-7 rounded-2xl font-semibold text-base transition-colors duration-300 outline-none ${activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-cyan-300"}`}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                style={{ zIndex: 1, minWidth: 0 }}
              >
                {activeTab === tab.id && (
                  <motion.span
                    layoutId="tab-underline"
                    className="absolute inset-0 bg-gradient-to-br from-[#0a223a] to-[#101624] rounded-2xl"
                    transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    style={{ zIndex: -1, opacity: 0.96 }}
                  />
                )}
                <span className="relative z-10 flex flex-col items-center gap-2">
                  {tab.icon}
                  <span className="font-bold">{tab.label}</span>
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
          {/* contant taab */}
        <div className="rounded-3xl p-0 md:p-6 shadow-xl border border-slate-800/60 mx-auto max-w-7xl bg-clip-padding" style={{ background: "rgba(17, 24, 39, 0.55)", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.18)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -10, opacity: 0 }} transition={{ duration: 0.3 }}  className="p-6 md:p-10">
              {activeTab === 'Projects' && (
                <>
                  <div className=" gap-4 mb-8 grid grid-cols-2 md:grid-cols-4">
                    <button className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 border ${projectCategory === '' ? 'bg-cyan-700/80 text-white border-cyan-400 shadow-cyan-500/10 shadow-lg' : 'bg-slate-900/60 text-cyan-200 border-slate-700 hover:bg-cyan-800/40 hover:text-white'}`} onClick={() => setProjectCategory('')}>All Project</button>
                    <button className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 border ${projectCategory === 'React.js' ? 'bg-cyan-700/80 text-white border-cyan-400 shadow-cyan-500/10 shadow-lg' : 'bg-slate-900/60 text-cyan-200 border-slate-700 hover:bg-cyan-800/40 hover:text-white'}`} onClick={() => setProjectCategory('React.js')}>React.js</button>
                    <button className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 border ${projectCategory === 'JavaScript' ? 'bg-cyan-700/80 text-white border-cyan-400 shadow-cyan-500/10 shadow-lg' : 'bg-slate-900/60 text-cyan-200 border-slate-700 hover:bg-cyan-800/40 hover:text-white'}`} onClick={() => setProjectCategory('JavaScript')}>JavaScript</button>
                    <button className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 border ${projectCategory === 'Html & CSS & Bootstrap' ? 'bg-cyan-700/80 text-white border-cyan-400 shadow-cyan-500/10 shadow-lg' : 'bg-slate-900/60 text-cyan-200 border-slate-700 hover:bg-cyan-800/40 hover:text-white'}`} onClick={() => setProjectCategory('Html & CSS & Bootstrap')}>Html & CSS & Bootstrap</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((p, i) => <ProjectCard key={i} project={p} />)
                    ) : (
                      <div className="col-span-full text-center text-slate-400 py-12">No projects in this category yet.</div>
                    )}
                  </div>
                </>
              )}
              {activeTab === 'Certificate' && (<div className="space-y-8">
                <h3 className="text-xl font-bold text-cyan-300 capitalize mb-4 border-b-2 border-slate-800 pb-2 text-start"> - {t("descr2")}</h3>
                <h1 className='text-white text-start'>* {t("trening1")}</h1>
                <h1 className='text-white text-start'>* {t("trening2")}</h1>
                <h1 className='text-white text-start'>* {t("trening3")}</h1>
                </div>)}
              {activeTab === 'Tech Stack' && (
                <div className="max-w-4xl mx-auto space-y-8">
                  {Object.entries(techStack).map(([category, techs]) => (
                    <div key={category}>
                      <h3 className="text-xl font-bold text-cyan-300 capitalize mb-4 border-b-2 border-slate-800 pb-2 ">{category}</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {techs.map((tech, i) => (
                          <div key={i} className="flex flex-col items-center justify-center gap-3 p-4 rounded-xl bg-slate-900/70 border border-slate-800 transition-all duration-300 hover:bg-slate-800/50 hover:border-cyan-500/30">
                            <div className="text-4xl">{tech.icon}</div>
                            <p className="text-sm text-slate-300">{tech.name}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      
      <AnimatePresence>
        {previewCertificate && (
          <CertificatePreviewModal 
            certificate={previewCertificate}
            onClose={() => setPreviewCertificate(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default ProjectSection;
