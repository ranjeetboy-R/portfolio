import { ArrowDownToLine, ArrowRight } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Header = () => {
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
        <div className="relative h-screen">
            <img src={isDarkMode ? '/header-dark-img.png' : '/header_background.png'} className={`absolute top-0 left-0 w-full h-full object-cover select-none`} />
            <div id='top' className='absolute top-0 w-full left-0 z-10 h-screen md:p-0 p-5 flex items-center justify-center flex-col'>
                <div className="shadow-[2px_2px_20px_rgba(0,0,0,0.3)] border border-white rounded-full">
                    <img src="/ranjeet.jpeg" alt='ranjeet' className='dark:shadow-cyan-300/30 shadow-[2px_2px_20px_rgba(0,0,0,0.3)] aspect-square w-40 rounded-full select-none' />
                </div>

                <p className='text-black dark:text-white/90 ovo mt-5'>Hi! I'm Ranjeet Kumar 👋</p>

                <h1 className='text-center mt-3 font1 dark:text-white text-slate-800 text-3xl'>A Full-Stack  Web Developer & <br /> AI Automation Enthusiast.
                </h1>

                <p className='text-center md:max-w-lg max-w-md dark:text-white/50 text-slate-500 font1 text-sm mt-3 w-full'>I build modern, fast, and user-friendly web applications using the latest technologies. I also create AI-powered automation solutions to help businesses grow.
                </p>

                <div className="flex items-center gap-3 justify-center mt-7">
                    <a href='#contact' className="shadow-[2px_2px_20px_rgba(0,0,0,0.3)] dark:shadow-cyan-300/30 hover:dark:shadow-cyan-300/50 bg-black/90 text-sm flex items-center gap-1 hover:text-white cursor-pointer dark:bg-white dark:text-black hover:bg-black transition-all text-white/90 px-5 py-3 rounded-full">
                        Contact with me <ArrowRight className='size-4' />
                    </a>
                    <a href='/ranjeet-resume.pdf' download={true} className="hover:shadow-[2px_2px_20px_rgba(0,0,0,0.2)] border border-slate-300 dark:border-slate-600 hover:dark:border-slate-400 hover:border-slate-500 text-sm flex items-center gap-1 cursor-pointer transition-all px-5 py-3 rounded-full">
                        Download resume <ArrowDownToLine className='size-4' />
                    </a>
                </div>
            </div>
            <a
                href="https://wa.me/919205478065?text=Hello%20I%20want%20to%20know%20about%20your%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 z-50 bg-green-200 dark:bg-white/30 p-4 cursor-pointer hover:scale-110 transition-all animate-pulse hover:animate-none rounded-full"
            >
                <img src="/whatsapp.webp" alt="" className='w-8' />
            </a>
        </div>

    )
}

export default Header