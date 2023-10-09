"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from 'next-intl/link';


// http://localhost:3000/ru/authorization/

const Footer = () => {
    const t = useTranslations("Index");

    return (
        <>
            <div className="footer-background">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="footer-left">
                            <div className="footer-icon">
                                <Image
                                    className="footer-img"
                                    src="/static/icons/facebook.svg"
                                    alt="Logo"
                                    width={23}
                                    height={23}
                                />
                                <Image
                                    className="footer-img"
                                    src="/static/icons/instagram.svg"
                                    alt="Logo"
                                    width={23}
                                    height={23}
                                />
                                <Image
                                    className="footer-img"
                                    src="/static/icons/linked-in.svg"
                                    alt="Logo"
                                    width={23}
                                    height={23}
                                />
                            </div>
                            <p className="footer-p">Beyim Tech © 2023 </p>
                        </div>
                        <div className="footer-right">
                            <p className="footer-p">{t("footer2")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;