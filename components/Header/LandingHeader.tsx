"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from 'next-intl/link';


// http://localhost:3000/ru/authorization/

const LandingHeader = () => {
   const pathname = usePathname();
   const locale = pathname;
   const locale1 = pathname.split("/")[1];
   const mapLocaleToPath = (locale:any) => {
      if (locale === 'kz') return 'kk';
      if (!locale) return 'en';
      return locale;
  };
  
  const mappedLocale = mapLocaleToPath(locale1);

   // Проверьте, содержит ли путь строку "ru"
   // const containsRU = router.asPath.includes('/ru');
   const domain = process.env.NEXT_PUBLIC_MAIN_DOMAIN;

   const t = useTranslations("Index");
   const [isMenuOpen, setMenuOpen] = useState(false);
   const [windowWidth, setWindowWidth] = useState<number | undefined>(
      undefined
   );

   useEffect(() => {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
         setWindowWidth(window.innerWidth);
         setMenuOpen(false);
      };
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   return (
      <>
         <div className="headerMain">
            <div className="headerNav">
               <Link href="/">
                           <Image
                  src="/static/icons/synaq-logo.svg"
                  alt="Logo"
                  width={123}
                  height={34}
               />
               </Link>
         </div>
            <div className="headerSetting">
              <Link
                  className={
                     locale === "/"
                        ? "languageButtonActive"
                        : "languageButton"
                  }
                  href="/"
                  locale="kz"
               >
                  Қаз
               </Link>

               <Link
                  className={
                     locale === "/ru"
                        ? "languageButtonActive"
                        : "languageButton"
                  }
                  href="/"
                  locale="ru"
               >
                  Рус
               </Link>
               <Link
                  className={
                     locale === "/en" ? "languageButtonActive" : "languageButton"
                  }
                  href="/"
                  locale="en"
               >
                  Eng
               </Link>
             </div>
         </div>
      </>
   );
};

export default LandingHeader;
