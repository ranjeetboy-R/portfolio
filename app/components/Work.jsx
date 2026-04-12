import { workData } from '@/public/assets'
import { ArrowRight, Forward } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const Work = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        const dark = theme === "dark"
        setIsDarkMode(dark)
    }, [theme]);

    return (
        <div id='work' className='flex flex-col mx-auto max-w-6xl w-full px-5 my-40'>
            <div className="flex flex-col items-center">
                <p className='text-sm ovo dark:text-slate-400'>My portfolio</p>
                <h1 className='text-3xl font1'>My latest work</h1>
                <p className='text-center md:w-md mt-5 dark:text-slate-300 text-slate-600 ovo text-sm'>Welcome to my portfolio showcasing modern website development and intelligent AI agent solutions, built with creativity, performance, and real-world impact.</p>
            </div>

            <div className="grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-3 mt-10">
                {
                    workData.map((work, index) => (
                        <div key={index} className="hover:-translate-y-1 relative p-3 hover:shadow-lg transition-all group border border-slate-300 dark:border-slate-600 rounded-xl overflow-hidden aspect-square">
                            <img src={work.img} alt="" className='absolute top-0 left-0 object-cover w-full h-full' />

                            {
                                isDarkMode ?
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/60 group-hover:bg-black/10 transition-all"></div>
                                    :
                                    <div className="absolute top-0 left-0 w-full h-full bg-black/20 dark:bg-white/80 opacity-0 group-hover:opacity-100 transition-all"></div>
                            }

                            <div className="absolute bottom-3 left-3 right-3 bg-white/90 dark:bg-gray-900/50 group-hover:dark:bg-gray-900/80 group-hover:bg-white transition-all rounded-lg shadow-[3px_3px_3px_rgba(0,0,0,0.3)] flex justify-between items-center p-3">
                                <div className="flex flex-col">
                                    <h1 className='text-sm font-medium'>{work.title}</h1>
                                    <p className='text-xs dark:text-slate-300 mt-1 ovo'>{work.description.slice(0, 25)}...</p>
                                </div>
                                <a href={work.link} target='_blank' className="border border-slate-300 aspect-square rounded-full p-1.5 group-hover:bg-lime-300 dark:bg-white/20 dark:border-slate-400 hover:dark:bg-white/60 hover:bg-white transition-all dark:text-slate-300 bg-slate-100 cursor-pointer hover:dark:text-black shadow-[-2px_2px_0_rgba(0,0,0,0.9)]">
                                    <Forward className='size-3' />
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="flex items-center px-5 py-3 mx-auto mt-5 border border-slate-300 dark:border-slate-600 hover:dark:border-slate-400 dark:text-slate-400 hover:dark:text-slate-100 rounded-full text-sm gap-2 text-slate-600 hover:text-slate-800 transition-all cursor-pointer hover:border-slate-500">
                Show more <ArrowRight className='size-4' />
            </button>
        </div>
    )
}

export default Work