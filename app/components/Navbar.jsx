"use client"

import { Menu, TrendingUp, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { ModeToggle } from './ModeToggle'
import { useTheme } from 'next-themes'

const Navbar = () => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const [isDarkMode, setIsDarkMode] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        const dark = theme === "dark"
        setIsDarkMode(dark)

        const systemMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (systemMode && theme === 'system') {
            setIsDarkMode(true)
        }
    }, [theme]);

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

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
            <nav className={`fixed z-50 w-full flex items-center justify-between md:px-30 px-5 py-4 ${isScroll ? 'bg-white/50 dark:bg-zinc-900/80 backdrop-blur-lg' : ''}`}>
                <a href="#top">
                    <Image src={isDarkMode ? '/LOGO_DARK.png' : '/LOGO_LIGHT.png'} alt='' width={140} height={40} className='' />
                </a>
                <ul className={`hidden md:flex text-slate-700 hover:text-slate-950 dark:text-slate-400 items-center gap-5 shadow-lg px-7 py-2 rounded-full ${isScroll ? 'bg-white dark:bg-transparent dark:border-slate-500 dark:border' : 'bg-white/50 dark:bg-zinc-800'}`}>
                    <li><a className='hover:dark:text-slate-200 dark:text-slate-300' href="#top">Home</a></li>
                    <li><a className='hover:dark:text-slate-200' href="#about">About me</a></li>
                    <li><a className='hover:dark:text-slate-200' href="#services">Services</a></li>
                    <li><a className='hover:dark:text-slate-200' href="#work">My Work</a></li>
                    <li><a className='hover:dark:text-slate-200' href="#contact">Contact me</a></li>
                </ul>
                <div className="flex items-center gap-5">
                    <div className="shadow-lg rounded-full cursor-pointer">
                        <ModeToggle />
                    </div>
                    <a href="#contact" className="dark:text-white/70 dark:border-slate-500 hover:dark:border-slate-400 hover:dark:text-white flex items-center gap-1 border border-slate-300 py-2 px-5 rounded-full cursor-pointer text-slate-800 hover:border-slate-400 transition-all">
                        Contact
                        <TrendingUp />
                    </a>
                    <button onClick={openMenu} className="dark:text-white/70 hover:dark:text-white md:hidden flex items-center group gap-1 shadow-lg  rounded-full p-2 text-slate-500 cursor-pointer hover:text-slate-700">
                        <Menu />
                    </button>
                </div>

                {/* Mobile Menu preview */}
                <div ref={sideMenuRef} className="translate-x-64 duration-500 transition-all p-5 fixed top-0 right-0 w-64 z-50 bg-emerald-50 dark:bg-zinc-900 shadow-lg shadow-black/50 h-screen">
                    <button onClick={closeMenu} className="fixed top-5 right-5 flex items-center group gap-1 shadow-lg  rounded-full p-2 text-slate-500 dark:text-slate-300 cursor-pointer hover:text-slate-700">
                        <X />
                    </button>
                    <ul className='flex flex-col font1 p-5 gap-5 mt-5'>
                        <li><a onClick={closeMenu} className='ovo' href="#top">Home</a></li>
                        <li><a onClick={closeMenu} className='ovo' href="#about">About me</a></li>
                        <li><a onClick={closeMenu} className='ovo' href="#services">Services</a></li>
                        <li><a onClick={closeMenu} className='ovo' href="#work">My Work</a></li>
                        <li><a onClick={closeMenu} className='ovo' href="#contact">Contact me</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar