import { ArrowDownToLine, ArrowRight } from 'lucide-react'
import { motion } from "motion/react"
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
            <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(143,212,255,0.12)_12%,rgba(0,255,225,0.10)_35%,rgba(0,217,255,0.10)_60%,rgba(0,238,255,0)_90%)]"></div>

            <div id='top' className='absolute top-0 w-full left-0 z-10 h-screen md:p-0 p-5 flex items-center justify-center flex-col'>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                    className="shadow-[2px_2px_20px_rgba(0,0,0,0.3)] border border-white rounded-full"
                >
                    <img src="/ranjeet.jpeg" alt='ranjeet' className='dark:shadow-cyan-300/30 shadow-[2px_2px_20px_rgba(0,0,0,0.3)] aspect-square w-40 rounded-full select-none' />
                </motion.div>

                <motion.p
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                className='text-black dark:text-white/90 ovo mt-5'>Hi! I'm Ranjeet Kumar 👋</motion.p>

                <motion.h3
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className='text-center mt-3 font1 dark:text-white text-slate-800 text-3xl'
                >A Full-Stack  Web Developer & <br /> AI Automation Enthusiast.
                </motion.h3>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }} className='text-center md:max-w-lg max-w-md dark:text-white/50 text-slate-500 font1 text-sm mt-3 w-full'>I build modern, fast, and user-friendly web applications using the latest technologies. I also create AI-powered automation solutions to help businesses grow.
                </motion.p>

                <div className="flex items-center gap-3 justify-center mt-7">
                    <motion.a
                        initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href='#contact' className="shadow-[2px_2px_20px_rgba(0,0,0,0.3)] dark:shadow-cyan-300/30 hover:dark:shadow-cyan-300/50 bg-black/90 text-sm flex items-center gap-1 hover:text-white cursor-pointer dark:bg-white dark:text-black hover:bg-black transition-all text-white/90 px-5 py-3 rounded-full">
                        Contact with me <ArrowRight className='size-4' />
                    </motion.a>

                    <motion.a
                        initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }} href='/ranjeet-resume.pdf' download={true} className="hover:shadow-[2px_2px_20px_rgba(0,0,0,0.2)] border border-slate-300 dark:border-slate-600 hover:dark:border-slate-400 hover:border-slate-500 text-sm flex items-center gap-1 cursor-pointer transition-all px-5 py-3 rounded-full">
                        Download resume <ArrowDownToLine className='size-4' />
                    </motion.a>
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