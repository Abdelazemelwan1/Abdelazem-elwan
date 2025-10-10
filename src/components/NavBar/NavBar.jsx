import React, { useEffect, useRef, useState } from 'react';
import Style from "./NavBar.module.css"
import { AnimatePresence, motion } from 'framer-motion';
import NameLogo from "./../../assets/Blue 3D Abstract Letter S Logo.png";
import i18n from "i18next";
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from "react-icons/md";


export default function NavBar() {
    const { t } = useTranslation();
    const { i18n: i18next } = useTranslation();
    const menuRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const langButtonRef = useRef(null);

  const toggleLanguage = () => {
    const newLang = i18next.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    setIsMenuOpen(false);
  };
    const CLIP_PATH = 'polygon(0 0, 100% 0, 100% 80%, 68% 80%, 64% 100%, 36% 100%, 32% 80%, 0 80%)';
    const [isScrolled, setIsScrolled] = useState(false); //scroll لل  
    const [isMenuOpen, setIsMenuOpen] = useState(false); //NavBar بتاع ال Dropdown بتاع ال  menu لل

useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      !toggleButtonRef.current.contains(event.target) 
      // &&
      // !langButtonRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  const NavLink = ({ href, children }) => (
    <li>
      <a
        href={href}
        onClick={() => setIsMenuOpen(false)} 
        className="relative block text-white font-[sans-serif] font-bold text-lg tracking-wider py-2 transition-transform duration-300 hover:scale-110 group"
      >
        {children}
        <span className="absolute bottom-1 left-0 block h-[2px] w-0 bg-[#00ffdc] transition-all duration-500 group-hover:w-full"></span>
      </a>
    </li>
  );

  return (<>
    <AnimatePresence>
      <motion.div className="fixed top-0 left-0 w-full z-50 pointer-events-none" initial={{ opacity: 0, y: -60 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -60 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        {!isScrolled && ( <div className="pointer-events-none absolute left-0 right-0 z-10" style={{ top: '0', height: '90px', WebkitClipPath: CLIP_PATH, clipPath: CLIP_PATH, background: 'linear-gradient(90deg, #00fff0, #00ffdc, #4079ff, #40ffaa, #00fff0)', backgroundSize: '300% 100%', animation: 'gradientShadowMove 6s linear infinite', opacity: 1, filter: 'drop-shadow(0 16px 24px rgba(64,255,170,0.35))',}}></div>)}
        
        <header
              className={`pt-3 pb-3 relative z-20 pointer-events-auto transition-all duration-300
                ${isScrolled
                  ? "glassmorphism-header"
                  : "bg-[#11142F]"
                }`}
              style={{
                WebkitClipPath: CLIP_PATH,
                clipPath: CLIP_PATH,
                ...(isScrolled
                  ? {
                      backgroundColor: "rgba(17, 20, 47, 0.71)",
                      backdropFilter: "blur(7px) saturate(180%)",
                      WebkitBackdropFilter: "blur(7px) saturate(180%)",
                      border: "1px solid rgba(255,255,255,0.125)"
                    }
                  : {}
                )
              }}
            >
                            <nav className="container mx-auto flex items-center justify-between flex-wrap pb-4 md:pb-0 lg:pb-4 px-4">
           {/*بداية الاسم في الموبايل والزرار بتاع الدروبدون */}
                <div className="w-full flex items-center justify-between md:hidden">
                  {/* Mobile: Brand Logo & Text (Left) */}
                  <a href="#home" className="flex items-center gap-3">
                    <img src={NameLogo} alt="Bangzen Logo" className="h-12 w-12 flex-shrink-0" />
                    <div>
                      <h1 className="font-black text-md text-[#00ffdc] whitespace-nowrap">{t('name')}</h1>
                      <p className="font-black text-[11px] text-[#000754]" style={{ textShadow: '0.5px 0.5px 0 #00ffdc, -0.5px -0.5px 0 #00ffdc, 0.5px -0.5px 0 #00ffdc, -0.5px 0.5px 0 #00ffdc' }}>
                        {t('nameLat')}
                      </p>
                    </div>
                  </a>
                  {/* Mobile: Hamburger Button (Right) */}
                  <button   ref={toggleButtonRef}
  onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer text-[#00ffdc] text-3xl pointer-events-auto">
                    &#9776;
                  </button>
                </div>
                  {/*نهاية الاسم في الموبايل والزرار بتاع الدروبدون */}
                  {/* بداية الناف في الكمبيوتر */}
                <div className="hidden w-full md:flex items-center justify-around">
                  {/* بداية الهوم والابوت  */}
                  <ul className="flex items-center list-none gap-x-20">
                    <NavLink href="#home">{t('home')}</NavLink>
                    <NavLink href="#about">{t('about')}</NavLink>
                  </ul>
                 {/* نهاية الهوم والابوت  */}

                  {/* بداية الاسم الي ف النص بالصورة  */}
                  <a href="#home" className="flex items-center gap-3">
                    <img src={NameLogo} alt="Bangzen Logo" className="h-12 w-12" />
                    <div className="block">
                      <h1 className="font-black text-lg xl:text-xl text-[#00ffdc] ">{t('name')}</h1>
                      <p className="font-black text-[12px] xl:text-sm text-[#000754]" style={{ textShadow: '0.5px 0.5px 0 #00ffdc, -0.5px -0.5px 0 #00ffdc, 0.5px -0.5px 0 #00ffdc, -0.5px 0.5px 0 #00ffdc' }}>
                        {t('nameLat')}
                      </p>
                    </div>
                  </a>
                    {/* نهاية الاسم الي ف النص بالصورة  */}

                  {/* بداية البروجكت والكونتكت وزرار الادمن */}
                  <div className="flex items-center gap-4">
                    <ul className="flex items-center list-none gap-16">
                      <NavLink href="#projects">{t('project')}</NavLink>
                      <NavLink href="#contact">{t('contact')}</NavLink>
                    </ul>
                    {/* لغة نافبار  */}
                    <button 
                    ref={menuRef} 
                      onClick={toggleLanguage}
                      className=" cursor-pointer hidden lg:flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 pointer-events-auto"
                    >
                      <MdOutlineLanguage className="text-lg text-slate-400" />
                      <span>
                        {i18next.language === "ar" ?   "English": "العربية"}
                      </span>
                    </button>
                  
                  </div>
                   {/* نهاية البروجكت والكونتكت وزرار الادمن */}

                </div>
                <button 
                  onClick={toggleLanguage}
                  className=" m-auto cursor-pointer hidden md:flex lg:hidden w-full items-center justify-center gap-2 py-3 text-slate-400 hover:text-cyan-400 transition-colors duration-300 pointer-events-auto"
                >
                  <MdOutlineLanguage className="text-lg text-slate-400" />
                  <span>
                    {i18next.language === "ar" ?   "English": "العـــربيــة"}
                  </span>
                </button>
                {/* نهاية الناف في الكمبيوتر */}
                 {/* بداية الهوم والابوت والابروجكت والكونتكت والادمن */}
                <AnimatePresence>
                  {isMenuOpen && (
                    <motion.div 
                    // ref={menuRef} 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className="w-full basis-full md:hidden"
                    >
                      {/* This is the list that now appears in a row */}
                      <ul  
                      // ref={menuRef}
                        className="flex flex-row flex-wrap justify-center items-center gap-x-6 gap-y-3 mt-4 list-none">
                        <NavLink href="#home">{t('home')}</NavLink>
                        <NavLink href="#about">{t('about')}</NavLink>
                        <NavLink href="#projects">{t('project')}</NavLink>
                        <NavLink href="#contact">{t('contact')}</NavLink>
                        <li  ref={menuRef}  className='block w-full m-auto '>
                          <button  
                            ref={langButtonRef}
                            onClick={toggleLanguage}
                            className="m-auto cursor-pointer flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-300 pointer-events-auto"
                          >
                            <MdOutlineLanguage className="text-lg text-slate-400" />
                            <span>
                              {i18next.language === "ar" ?   "English": "العربية"}
                            </span>
                          </button>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
           {/* نهاية الهوم والابوت والابروجكت والكونتكت والادمن */}
</nav>
            </header>
      </motion.div>
    </AnimatePresence>


      <style>
        {`
          @keyframes gradientShadowMove {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

  </>)
}
