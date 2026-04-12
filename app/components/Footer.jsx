import { LucideMail } from 'lucide-react'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Footer = () => {

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
        <div id='contact' className='flex flex-col mx-auto w-full px-5 '>
            <div className="flex flex-col items-center">
                <a href="#top">
                    <Image src={isDarkMode ? "/LOGO_DARK.png" : "/LOGO_LIGHT.png" } alt='' width={140} height={40} className='' />
                </a>
                <div className="flex items-center gap-2 mt-2 text-slate-500">
                    <LucideMail className='size-4' />
                    <p className='text-sm font1'>ranjeet162114@gmail.com</p>
                </div>
                <div className="flex md:px-20 md:justify-between md:flex-row flex-col justify-center border-slate-300 dark:border-slate-600 items-center mt-5 border-t w-full py-3">
                    <p className='text-sm font1 text-slate-600 ovo'>© 2026 Ranjeet kumar. All rights reserved.</p>
                    <ul className='flex items-center gap-5 md:mt-0 mt-2'>
                        <li className='hover:-translate-y-1 duration-300 transition-all'><a className='font1 text-slate-600 hover:dark:text-slate-300 hover:text-slate-900 transition-all' target='_blank' href="https://github.com/ranjeetboy-R/">GitHub</a></li>
                        <li className='hover:-translate-y-1 duration-300 transition-all'><a className='font1 text-slate-600 hover:dark:text-slate-300 hover:text-slate-900 transition-all' target='_blank' href="https://www.linkedin.com/feed/">Linkedin</a></li>
                        <li className='hover:-translate-y-1 duration-300 transition-all'><a className='font1 text-slate-600 hover:dark:text-slate-300 hover:text-slate-900 transition-all' target='_blank' href="https://www.fiverr.com/ranjeeto?public_mode=true">Fiverr</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer