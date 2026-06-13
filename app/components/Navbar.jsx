"use client"

import { TrendingUp} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { ModeToggle } from './ModeToggle'
import { useTheme } from 'next-themes'
import { RiMenu3Fill } from '@remixicon/react'
import MobileMenu from './mobileMenu';

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)

    const [isDarkMode, setIsDarkMode] = useState(false)
    const [openMenu, setOpenMenu] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        const dark = theme === "dark"
        setIsDarkMode(dark)

        const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (systemMode && theme === 'system') {
            setIsDarkMode(true)
        }
    }, [theme]);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <nav className={`fixed z-20 overflow-hidden w-full flex items-center justify-between md:px-30 px-5 py-4 ${isScroll ? 'bg-white/50 dark:bg-zinc-900/80 backdrop-blur-lg' : ''}`}>
                <a href="#top">
                    <img src={isDarkMode ? '/LOGO_DARK.png' : '/LOGO_LIGHT.png'} alt='' className='md:w-40 w-30' />
                </a>
                <ul className={`hidden md:flex text-slate-700 hover:text-slate-950 dark:text-slate-400 items-center gap-5 shadow-lg px-7 py-2 rounded-full ${isScroll ? 'bg-white dark:bg-transparent dark:border-slate-500 dark:border' : 'bg-white/50 dark:bg-zinc-800'}`}>
                    <li><a className='hover:dark:text-slate-100 dark:text-slate-100' href="#top">Home</a></li>
                    <li><a className='hover:dark:text-slate-100 dark:text-slate-200/80' href="#about">About me</a></li>
                    <li><a className='hover:dark:text-slate-100 dark:text-slate-200/80' href="#services">Services</a></li>
                    <li><a className='hover:dark:text-slate-100 dark:text-slate-200/80' href="#work">My Work</a></li>
                    <li><a className='hover:dark:text-slate-100 dark:text-slate-200/80' href="#contact">Contact me</a></li>
                </ul>
                <div className="flex items-center gap-5">
                    <div className="shadow-lg rounded-full cursor-pointer">
                        <ModeToggle />
                    </div>
                    <a href="#contact" className="hidden dark:text-white/70 dark:border-slate-500 hover:dark:border-slate-400 hover:dark:text-white md:flex items-center gap-1 border border-slate-300 py-2 md:px-5 px-3 md:text-base text-sm rounded-full cursor-pointer text-slate-800 hover:border-slate-400 transition-all">
                        Contact
                        <TrendingUp className='md:size-5 size-4' />
                    </a>
                    <button onClick={()=> setOpenMenu(true)} className="dark:text-white/70 hover:dark:text-white md:hidden flex items-center group gap-1  rounded-full md:p-2 text-slate-500 cursor-pointer hover:text-slate-700">
                        <RiMenu3Fill />
                    </button>
                </div>
            </nav>

            <MobileMenu setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </>
    )
}

export default Navbar