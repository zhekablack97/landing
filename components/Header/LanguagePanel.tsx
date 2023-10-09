"use client";

import { useRouter } from "next/router";
import React from "react";
import { useTranslation } from "next-i18next";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";

const LanguagePanel = () => {
   const pathname = usePathname();
   const locale = pathname;
   const t = useTranslations("Index");

   return (
      <div className="mobileLanguage">
         <Link
            className={
               locale === "/" ? "languageButtonActive1" : "languageButton1"
            }
            href="/"
            locale="kz"
         >
            Қаз
         </Link>
         <Link
            className={
               locale === "/ru" ? "languageButtonActive1" : "languageButton1"
            }
            href="/"
            locale="ru"
         >
            Рус
         </Link>
         <Link
            className={
               locale === "/en" ? "languageButtonActive1" : "languageButton1"
            }
            href="/"
            locale="en"
         >
            Eng
         </Link>
      </div>
   );
};

export default LanguagePanel;
