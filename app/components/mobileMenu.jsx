'use client'

import { X } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useRef, useState } from 'react'

const mobileMenu = ({setOpenMenu, openMenu}) => {
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

    return (
        <div>
            {/* Mobile Menu preview */}
            <div ref={sideMenuRef} className={`${openMenu ? 'translate-x-0' : 'translate-x-150'} md:hidden duration-500 transition-all p-5 rounded-l-4xl fixed top-0 left-0 w-full z-50 bg-blue-50 dark:bg-zinc-900 shadow-lg shadow-black/50 h-fit`}>

                <div className="flex justify-between items-center">
                    <a href="#top">
                        <img src={isDarkMode ? '/LOGO_DARK.png' : '/LOGO_LIGHT.png'} alt='' className='w-30' />
                    </a>

                    <button onClick={()=> setOpenMenu(false)} className="flex items-center group gap-1 shadow-lg rounded-full p-2 text-slate-500 dark:text-slate-300 cursor-pointer hover:text-slate-700">
                        <X />
                    </button>
                </div>

                <ul className='flex flex-col p-5 font-semibold gap-5'>
                    <li><a onClick={()=> setOpenMenu(false)} href="#top">Home</a></li>
                    <li><a onClick={()=> setOpenMenu(false)} href="#about">About me</a></li>
                    <li><a onClick={()=> setOpenMenu(false)} href="#services">Services</a></li>
                    <li><a onClick={()=> setOpenMenu(false)} href="#work">My Work</a></li>
                    <li><a onClick={()=> setOpenMenu(false)} href="#contact">Contact me</a></li>
                </ul>
            </div>
        </div>
    )
}

export default mobileMenu