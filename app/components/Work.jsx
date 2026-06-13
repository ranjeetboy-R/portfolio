'use client'

import { workData } from '@/public/assets'
import { ArrowRight, Forward } from 'lucide-react'
import { motion } from 'motion/react';
import React from 'react'

const Work = () => {

    return (
        <div id='work' className='flex flex-col items-center mx-auto max-w-6xl w-full px-5 my-40'>
            <div className="flex flex-col items-center">
                <p className='text-sm ovo dark:text-slate-400'>My portfolio</p>

                <h1 className='text-3xl font1'>My latest work</h1>
                <p className='text-center md:w-md mt-5 dark:text-slate-300 text-slate-600 ovo text-sm'>Welcome to my portfolio showcasing modern website development and intelligent AI agent solutions, built with creativity, performance, and real-world impact.</p>
            </div>

            <div className="flex justify-center flex-wrap gap-10 mt-10 w-full">
                {
                    workData.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}

                            key={index} className="max-w-100 w-full md:hover:-translate-y-1 relative p-2 hover:shadow-lg transition-all group border border-slate-300 dark:border-slate-600 rounded-xl overflow-hidden aspect-square">
                            <img src={work.img} alt="image" className='absolute top-0 left-0 object-cover w-full h-full' />

                            <a href={work.link} target='_blank' className="absolute bottom-3 left-3 right-3 dark:bg-blue-200 bg-slate-300 dark:text-black transition-all rounded-lg shadow-md shadow-black flex justify-between items-center md:p-3 p-3">
                                <h1 className='font-semibold'>{work.title}</h1>

                                <div target='_blank' className="cursor-pointer">
                                    <Forward className='size-8' />
                                </div>
                            </a>
                        </motion.div>
                    ))
                }
            </div>
            <a href='https://github.com/ranjeetboy-R/' target='_blank' className="flex items-center px-5 py-3 mx-auto mt-10 border border-slate-300 dark:border-slate-600 hover:dark:border-slate-400 dark:text-slate-400 hover:dark:text-slate-100 rounded-full gap-2 text-slate-600 hover:text-slate-800 transition-all cursor-pointer hover:border-slate-500">
                Show more <ArrowRight />
            </a>
        </div>
    )
}

export default Work