import React, { useEffect, useState } from 'react';
import Style from "./Home.module.css"
import Squares from './../Squares/Squares';
import { FaArrowRight, FaBriefcase, FaCertificate, FaCode, FaCube, FaDownload, FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa';
import NavBar from './../NavBar/NavBar';
import AnimatedGradientTextDemo from '../AnimatedGradientTextDemo/AnimatedGradientTextDemo';
import { motion } from 'framer-motion';
import LoopingGradientText from '../LoopingGradientText/LoopingGradientText';
import TextGenerateEffect from '../TextGenerateEffect/TextGenerateEffect';
import Skills from './../Skills/Skills';
import Lanyard from './../Lanyard/Lanyard';
import { useTranslation } from 'react-i18next';
import { VelocityScroll } from '../VelocityScroll/VelocityScroll';
import Spline from '@splinetool/react-spline';
import { ButtonMovingBorder } from '../ButtonMovingBorder/ButtonMovingBorder';
import { MdModelTraining } from 'react-icons/md';
import ProjectSection from '../ProjectSection/ProjectSection';
import { NavbarProvider } from '../../contexts/NavbarContext';
import { SiGmail } from 'react-icons/si';
import Contact from './../Contact/Contact';
// import { i18n } from 'i18next';
// import { i18next } from 'i18next';

export default function Home() {
    const { t , i18n: i18next } = useTranslation();

  // 3D هتتحكم في ظهور واخفاء الصور ال state دا 
  const [is3dEnabled, setIs3dEnabled] = useState(true);

    // stateهبعتها للزار هتغير حالة ال  function 
  const toggle3dAssets = () => {
    setIs3dEnabled(prev => !prev);
  };

    // Data untuk card statistik
  const stats = [
    { icon: <FaCode />, value: "+24", title: t('title1'), description: t('descr1') },
    { icon: <MdModelTraining />, value: "1", title: t('title2'), description: t('descr2') },
    { icon: <FaGlobe />, value: "+1", title: t('title3'), description: t('descr3') },
  ];

  // useEffect(()=>{

  // }, [i18next ])

  return (<>
      {/* <AdminProvider> */}
  <NavbarProvider>
    <div className="relative min-h-screen bg-[#060010] overflow-hidden">
      {/*  مع شوية تعديلاتreactbist  خلفية البورتوفليو جايه من ال  */}
      <div className="absolute inset-0 z-0">
        <Squares speed={0.3} squareSize={35} direction="diagonal" borderColor="rgba(255, 255, 255, 0.03)" hoverFillColor="rgba(31, 137, 187, 0.53)" />
      </div>

      {/* state بتغير في حالة ال function عن طريق D3D زرار هيتحكم في ظهر واخفاء الصور ال  */}
      <button
        onClick={toggle3dAssets} title={`Toggle 3D Assets (${is3dEnabled ? 'On' : 'Off'})`}
        className={`cursor-pointer fixed top-24 right-4 z-50 p-3 rounded-full border backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-110
          ${is3dEnabled
            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_2px_#00ffdc80]'
            : 'bg-slate-800/50 border-slate-700 text-slate-400'
          }`}
      >
        <FaCube className="h-5 w-5" />
      </button>

      {/* NavBar  ال  */}
      <NavBar />
      {/* بتاع بقيت الصفحه CONTAINER دا هيكون ال  MAIN  الـ  */}
      <main className="relative z-10 px-8 max-w-7xl mx-auto">
        {/* الصورة والنص الي قصدها  */}
        <section id="home" className="flex flex-col md:flex-row items-center gap-10 pt-20 pb-16 lg:pt-0 lg:pb-20">
          <div className="flex-1 text-white space-y-6 pt-16 md:pt-40 order-last md:order-none">
            <motion.div className='text-start' initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}>
              <AnimatedGradientTextDemo />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }} className="uppercase text-start text-4xl md:text-[53px] font-moderniz font-bold leading-tight select-none" style={{ color: "#00ffdc", textShadow: `2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc` }}>
              {t('welcom')}
              <span style={{ display: 'block', marginTop: '0.4em' }}>{t('portfolio')}</span>
            </motion.h1>
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}>
              <LoopingGradientText colors={["#40f2ffff", "#4079ff", "#40fffcff", "#4079ff", "#40f9ffff"]} animationSpeed={3} className="custom-class font-cascadia font-bold" />
            </motion.div>
            <motion.div className='text-start' initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}>
              <TextGenerateEffect key={t("intro")} words={t("intro")} />
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}>
              <Skills />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }} className="flex flex-row gap-4 mt-8">
              <a href="https://github.com/Abdelazemelwan1" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_24px_2px_#00ffdc]">
                  <FaGithub className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-cyan-300" />
              </a>
              <a href="https://www.instagram.com/abdelazem_elwan?igsh=ZzlsZjc5dDY3aXNp&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_24px_2px_#00ffdc]">
                  <FaInstagram className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-cyan-300" />
              </a>
              <a href="https://www.linkedin.com/in/abdelazem-elwan-904619252" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_24px_2px_#00ffdc]">
                  <FaLinkedin className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-cyan-300" />
              </a>
              <a title='راسلني علي ال  Gmail' href="mailto:abdelazemelwan123@gmail.com?subject=Hello&body=I%20want%20to%20contact%20you" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/[0.8] text-white transition-all duration-300 hover:border-cyan-400 hover:bg-slate-800 hover:shadow-[0_0_24px_2px_#00ffdc]">
                  <SiGmail className="h-6 w-6 text-slate-400 transition-all duration-300 group-hover:text-cyan-300" />
              </a>
            </motion.div>
          </div>
          <div className="hidden lg:flex flex-1 justify-center h-[600px] w-full order-first lg:order-none">
            {is3dEnabled && (
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} fov={18} transparent={true} />
            )}
          </div>
        </section>

        {/*ABOUT ال   */}
        <section id="about" className="py-12 md:py-18 gap-0 w-full mx-0 pt-20"  style={{ width: "100vw", position: "relative", left: "50%", right: "50%", marginLeft: "-50vw", marginRight: "-50vw" }}>
          {/* motion and About ME */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-center w-full">
            <div className={`relative flex w-full flex-col items-center justify-center overflow-hidden mb-20`}>
                <VelocityScroll  defaultVelocity={3} numRows={1} className={`${i18next.language === "en" ? "max-w-full" : ""}    leading-[1.2]`}>
                    <span className="font-moderniz font-bold  " style={{ fontSize: "2.5rem", lineHeight: "1.1", color: "#00ffdc", textShadow: "2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc", background: "none", WebkitBackgroundClip: "unset", WebkitTextFillColor: "unset", animation: "none"}}>
                        {t('abaotMe')} <span style={{ color: "#fff" }}>{t('me')}</span>
                    </span>
                </VelocityScroll>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#060010]"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#060010]"></div>
                <VelocityScroll   defaultVelocity={-3} numRows={1} className={`${i18next.language === "en" && ""}`}>
                    <span className="font-moderniz font-bold" style={{ fontSize: "2.5rem", lineHeight: "1.1", color: "#00ffdc", textShadow: "2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc", background: "none", WebkitBackgroundClip: "unset", WebkitTextFillColor: "unset", animation: "none" }}>
                        {t('abaotMe')}  <span style={{ color: "#fff" }}>{t('me')}</span>
                    </span>
                </VelocityScroll>
            </div>
            <p className="text-lg text-cyan-200/70 mt-2 font-cascadia px-1 mb-20">
              {t('prag')} 
            </p>
          </motion.div>
          {/* والمعلومات الي قصدها عني3D 3 الصورة ال  */}
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/*img 3D ال  */}
            {is3dEnabled && (
              <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }} className="md:w-1/3 flex justify-center">
                <div className="w-full h-[420px] md:h-[530px] flex items-center justify-center">
                  <Spline scene="https://prod.spline.design/FcZ66SFMX1YbF-0I/scene.splinecode" />
                </div>
              </motion.div>
            )}
            {/*About ال  */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: "easeOut" }} className={`text-white text-center md:text-left px-4 md:px-8 transition-all duration-700 ${is3dEnabled ? 'md:w-1/2' : 'md:w-2/3'}`}>
              <p className="text-4xl text-gray-300 font-moderniz my font-black uppercase text-start" style={{ textShadow: "2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc" }}>{t('hello')}</p>
              <h3 className="text-4xl  text-white my-2 font-moderniz font-black uppercase text-start" style={{ textShadow: "2px 2px 0 #000754, 4px 4px 0 #4079ff, 0 4px 12px #40ffaa, 0 1px 0 #00ffdc" }}>{t('nameHello')}</h3>
              <p className="text-white/80 leading-relaxed mt-4 font-cascadia text-justify">
                {t('introAbout')}              
              </p>
              <div  className={`my-6 bg-slate-900/50 border-[#00ffdc] p-4 italic text-white/70 font-cascadia text-start ${i18next.language === "en" ? "border-l-4 rounded-r-lg" : "border-r-4 rounded-l-lg"}`}>
                "{t('shall')}"
              </div>
              <div className="flex flex-row sm:flex-row gap-4 mt-8 justify-center md:justify-start items-center">
                <ButtonMovingBorder as="a" href="https://drive.google.com/file/d/1izMRneqkDedXi1Ln670RHTl_ShWk7BWt/view?usp=sharing"  download duration={3000} borderRadius="0.75rem" className="bg-slate-900/[0.8] border border-slate-800 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_24px_8px_#40ffaa]" target="_blank">
                  <FaDownload /> {t('cv')}
                </ButtonMovingBorder>
                <ButtonMovingBorder as="a" href="#projects" duration={3000} borderRadius="0.75rem" className="bg-slate-900/[0.8] border border-slate-800 text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_24px_8px_#40ffaa]">
                  <FaBriefcase /> {t('proj')}
                </ButtonMovingBorder>
              </div>
            </motion.div>
          </div>
          {/* ... Statistik ... */}
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-10 px-6 md:px-8 xl:px-0">
            {stats.map((stat, index) => (
              <div key={index} className="group relative p-6 rounded-2xl bg-gradient-to-br from-slate-900/80 to-slate-950/70 border border-slate-800/80 shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_24px_0px_#00ffdc50] cursor-pointer">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <div className="p-3 mb-4 rounded-full bg-slate-800/80 border border-slate-700/60 w-max group-hover:bg-cyan-900/50 group-hover:border-cyan-600/70 transition-all duration-300">
                      <div className="text-2xl text-slate-400 group-hover:text-cyan-300 transition-colors duration-300 ">{stat.icon}</div>
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 group-hover:text-slate-300 transition-colors duration-300 md:text-start">{stat.title}</h3>
                    <p className="text-xs text-slate-500 mt-1  w-full">{stat.description}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-5xl font-bold text-white transition-all duration-300 group-hover:text-cyan-300">{stat.value}</p>
                    <FaArrowRight className="text-slate-600 mt-auto group-hover:text-cyan-400 transition-all duration-300 -rotate-45" />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* عرض المشاريع  */}
        <section id="projects" className="md:py-0">
          <ProjectSection />
        </section>

        {/*contact ال  */}
        <Contact />

        {/* FOOTER */}
        <footer className="py-8 text-center text-gray-400">
          <div className="text-[10px] md:text-[14px]">© {new Date().getFullYear()} {t("reserved")}</div>
          <div className="text-xs mt-2">{t("foot")}</div>
        </footer>

      </main>
    </div>
  </NavbarProvider>
  {/* </AdminProvider> */}
  </>)
}
