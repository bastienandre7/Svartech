"use client"
import { Section } from "./Section"
import * as React from "react"
import { useEffect, useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";

export const Header = () => {

    const [activeTheme, setActiveTheme] = useState<string>('system');

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "system" || !savedTheme) {
        applySystemTheme();
        setActiveTheme("system");
    } else {
        applyTheme(savedTheme);
        setActiveTheme(savedTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
        if (!savedTheme || savedTheme === "system") {
            applySystemTheme();
        }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
    }, []);

    const applyTheme = (theme: string) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
    }
    };

    const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme)
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'system') {
        applySystemTheme();
    } else {
        applyTheme(newTheme);
    }
    };

    const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    }

    return(
        <header className="sticky top-0 z-10">
            <Section>
                <div className="flex items-center space-x-4 justify-between">
                    <div className="flex items-center space-x-4">
                        <img src="/images/LogoSvartech.jpg" alt="Logo Svartech" className="h-12 w-auto"/>
                        <h1 className="text-xl">SVARTECH</h1>
                    </div>
                    <div className="flex items-center">
                        <a 
                            className="mx-5" 
                            href="https://www.instagram.com/svartech_uzes/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            >
                            <FaInstagram size={20} />
                        </a>

                        {activeTheme !== "light" && (
                            <button className="" onClick={() => handleThemeChange("light")}><IoIosSunny size={20} /></button>
                            
                        )}
                        {activeTheme !== "dark" && (
                            <button onClick={() => handleThemeChange("dark")}><IoMoonOutline size={20} /></button>
                        )}
                    </div>
                </div>                
            </Section>
        </header>
    )
}