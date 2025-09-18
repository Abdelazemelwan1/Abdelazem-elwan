import { useEffect, useState } from 'react';
import './App.css'
import Home from './components/Home/Home';
import Loader from './components/Loader/Loader';
import React from "react";
// import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { FaShieldAlt } from 'react-icons/fa';
import cookies from "js-cookie"
// import i18next from 'i18next';

i18n
  .use(initReactI18next).use(LanguageDetector).use(HttpApi)
  .init({
    fallbackLng: "en",
    detection: {
      order: ['cookie','htmlTag','querystring',  'localStorage', 'sessionStorage', 'navigator',  'path', 'subdomain'],
      caches : ["cookie"],
    },
    backend:{
        loadPath: '/locale/{{lng}}/translation.json',

    }
  
  });


/*
 *  الغلاف الرئيسي الذي يدير حالة التحميل
 * ويتنقّل بين شاشة التحميل والبورتفوليو الرئيسي.
 */
function App() {

  const { t } = useTranslation();


// تتابع حالة التحميل هل ب true 
  const [isLoading, setIsLoading] = useState(true);


  // function  بتغير حالة التحميل من  true  ل false  وهيتم إرسالها عن طريق البروبس لتنفيزها بعد انتهاء من انيميشن التحميل 
  const handleLoaderFinished = () => {
    setIsLoading(false);
  };

  const lng =cookies.get("i18next") || "en";
  useEffect(()=>{
    window.document.dir = i18n.dir();

  },[lng ])
  return (
    <>
  {/* <h2 className='absolute text-white z-[9999999999999999999]'>{t('Welcome to React')}</h2>; */}

      {/* portfolio يعرض ال  false  يعرض الصفحه الي فيها التحميل ولو بــ  true  لو بــ  isLoading هعمل كوندشن بال */}

      {isLoading ? <Loader onFinished={handleLoaderFinished} /> : <Home />}


    </>
  )
}

export default App

















// function App() {

//   return 
// }


