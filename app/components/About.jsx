import { aboutData, tools } from '@/public/assets'
import { RiCodeSSlashFill } from '@remixicon/react'
import { FolderOpenDot, GraduationCap } from 'lucide-react'
import React from 'react'

const About = () => {
    return (
        <div id='about' className='flex flex-col mx-auto max-w-4xl w-full px-5'>
            <div className="flex flex-col items-center">
                <p className='text-sm ovo dark:text-slate-300'>Introduction</p>
                <h1 className='text-3xl font1'>About me</h1>
            </div>
            <div className="md:grid md:grid-cols-3 flex justify-center flex-col items-center gap-5 md:mt-10 mt-5">

                <div className=''>
                    <img src="/ranjeet3.jpeg" alt='' className='rounded-xl w-60 h-full shadow-[3px_3px_10px_rgba(0,0,0,0.3)] object-cover' />
                </div>

                <div className="col-span-2 flex flex-col gap-3 md:p-0 p-5">
                    <p className='text-sm dark:text-slate-300 text-justify md:text-left'>I am a passionate Full-Stack Web Developer with experience in building responsive and dynamic web applications. I enjoy working with technologies like React, Next.js, Node.js, NestJS, and MongoDB. I also use n8n for Generative AI and automation workflows.
                    </p>

                    <div className="grid md:grid-cols-3 gap-3 mt-3">
                        {
                            aboutData.map((data, index) => (
                                <div key={index} className="flex flex-col gap-1 hover:-translate-y-1 border border-slate-200 dark:border-slate-700 hover:dark:border-slate-400 hover:dark:bg-zinc-900 hover:border-slate-300 hover:bg-teal-50 rounded-lg p-3 hover:shadow-[3px_3px_0_rgba(0,0,0,0.8)] transition-all">
                                    <data.icon className='size-5 text-slate-600 dark:text-slate-300' />
                                    <h1 className='font1'>{data.title}</h1>
                                    <p className='text-xs ovo text-slate-600 dark:text-slate-400'>{data.description}</p>
                                </div>
                            ))
                        }

                    </div>
                    <p className='text-sm text-slate-700 dark:text-slate-400 mt-2'>Tools I use</p>
                    <div className="flex items-center gap-3">
                        {
                            tools.map((tool, index) => (
                                <div className="hover:border-slate-400
                                dark:border-slate-600 hover:dark:border-slate-400 dark:bg-zinc-600 transition-all hover:-translate-y-1 hover:shadow-[3px_3px_1px_rgba(0,0,0,0.3)] w-10 h-10 p-1.5 border border-slate-300 rounded-md" key={index}>
                                    <img src={tool} alt='tools' className='object-contain w-full h-full' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About