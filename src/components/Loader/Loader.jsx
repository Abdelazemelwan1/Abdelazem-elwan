import React, { useEffect, useState } from 'react';
import Style from "./Loader.module.css"
import { motion, AnimatePresence } from 'framer-motion';
import DotGrid from '../DotGrid/DotGrid';
import Spline from '@splinetool/react-spline';
import { Github, Linkedin, Instagram } from 'lucide-react';
 


export default function Loader({onFinished}) {
    const [typedText, setTypedText] = useState('');
    const [showContent, setShowContent] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);

    //  يعني خلص الانميشن وهيخش علي البورتوفوليو  true   الي بناءا عليها لما تكون ب  isAssetLoadedال 
    const [isAssetLoaded, setIsAssetLoaded] = useState(false);
    const fullText = "www.Abdelazemmohamedelwan.com";


//   علشان بناء عليها هعمل الانميشن والصور وهنادي عليها في الصورة ع تنقلني علي البورتفوليو   isAssetLoaded هعدل فيها علي ال function 
  const handleAssetLoad = () => {  
    setIsAssetLoaded(true);
  };

  //بهد نص ثانية ولو اتغيرت قبل النص ثانية هيمسحها  true لــ  showContent هتغير حاله ال 
  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(initialTimer);
  }, []);


  //تعديل الـ Effect الرئيسي للتحقق من حالة تحميل الأصول (Assets)
  useEffect(() => {
    if (showContent) {
      //typingTimer وازود حرف واحد بس وبعد لما تتنفذ أو حصل أي تغير وخلصت يمسح ال Slice واعمل منها  fullText بال  typedText الي هي الاسم كامل هينفذ بعد وقت معين تغير ال fullText اصغر من ال length الي هي فاضيو ال typedText  لو 
      if (typedText.length < fullText.length) {
        const typingTimer = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 120);
        return () => clearTimeout(typingTimer);
      } 
      // exitTimer ولو حصل تغير او خلصت يمسح ال  App الي جاية من props  لأن بناء عليها هعرض ال التحميل وبعد وقت معينن برضو هينفذ ال  true ل setFadeOut ينفذلي بعد وقت معين تغير ال  true  بــ isAssetLoadedوال  typedText == fullText  لو ال 
      else if (typedText.length === fullText.length && isAssetLoaded) {
        const exitTimer = setTimeout(() => {
          setFadeOut(true);
          setTimeout(onFinished, 1000); // Tunggu animasi fade-out
        }, 1500); // Jeda setelah semua selesai
        return () => clearTimeout(exitTimer);
      }
    }
    //دي array هتشتغل لو حصل تغير في أي عنصر من ال 
  }, [typedText, showContent, fullText, onFinished, isAssetLoaded]);

return (<>
  <AnimatePresence>
    {fadeOut == false && <>
      <motion.div  className="fixed inset-0 z-50 flex flex-col items-center justify-center text-white bg-[#060010]" exit={{opacity: 0, filter: 'blur(10px)', transition: { duration: 1, ease: 'easeInOut' }}}>
        <DotGrid />
        {showContent && <>
          <motion.div className='text-center relative z-10 p-4' initial={{ opacity : 0 , y: -20 }} animate={{opacity : 1 , y : 0 , transition : {duration : 0.8 , ease : "easeInOut"}}}>
              {/* 3D الصورة ال   */}
              <div className="flex justify-center mb-2 mt-[-24px] md:mt-[-32px]">
                <div className="w-[320px] h-[180px] md:w-[480px] md:h-[260px]">
                  {/* true لــ  setIsAssetLoadedالي بتغير ال  handleAssetLoad  الي اسمها  function هيضيف الصوره وبعد متخلص من الانميشن بتاعها هينفذ ال */}
                  <Spline 
                    scene="https://prod.spline.design/FcZ66SFMX1YbF-0I/scene.splinecode" 
                    onLoad={handleAssetLoad}
                    />
                    {/* <Spline
        scene="https://prod.spline.design/UUhrBq6YTQ5ZGGpT/scene.splinecode" 
        onLoad={handleAssetLoad}
      /> */}
                </div>
              </div>
              {/* الاسم الكبير الثابت */}
              <motion.h1 className="text-4xl md:text-6xl font-moderniz font-bold mb-4" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.2, ease: "easeOut" } }}>
                Abdelazem Mohamed Elwan
              </motion.h1>
              {/*  الي مخزنه في متغيرwww.Abdelazemmohamedelwan.com ال */}
              <motion.div className="font-cascadia text-lg md:text-xl text-gray-400 mb-8 break-all" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 0.8, delay: 0.5 } }}>
                <span>{typedText}</span>
                <span className="animate-blink">|</span>
              </motion.div>
              {/* لينكات السوشيل ميديا */}
              <motion.div className="flex justify-center gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.8 } }}>
                <a href="https://github.com/Abdelazemelwan1" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffdc] transition-all duration-300 transform hover:scale-110">
                  <Github size={32} />
                </a>
                <a href="https://www.linkedin.com/in/abdelazem-elwan-904619252" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffdc] transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={32} />
                </a>
                <a href="https://www.instagram.com/abdelazem_elwan?igsh=ZzlsZjc5dDY3aXNp&utm_source=qr" target="_blank" rel="noopener noreferrer" className="hover:text-[#00ffdc] transition-all duration-300 transform hover:scale-110">
                  <Instagram size={32} />
                </a>
              </motion.div>

          </motion.div>
        </>}
      </motion.div>
    </>}
  </AnimatePresence>
  </>)
}


