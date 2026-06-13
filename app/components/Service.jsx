'use client'

import { servicesData } from '@/public/assets'
import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import ServiceModal from './ServiceModal'
import { motion } from 'motion/react'

const Service = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedService, setSelectedService] = useState(null)

    return (
        <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: -30 }}
            transition={{ duration: 1 }}
            id='services' className='flex flex-col mx-auto md:px-40 w-full px-5 mt-40'>
            <div className="flex flex-col items-center">
                <p className='text-sm ovo dark:text-slate-400'>What i offers</p>

                <h1 className='text-3xl font1'>My services</h1>

                <p className='text-center md:w-md mt-5 text-slate-600 dark:text-slate-300 ovo text-sm'>I believe in continuous learning and always try to improve my coding and problem-solving skills.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-3 mt-5">
                {
                    servicesData.map((service) => (
                        <div key={service.id} className="flex flex-col gap-1 relative group dark:border-slate-600 hover:dark:border-slate-500 hover:dark:bg-zinc-900 hover:-translate-y-1 border border-slate-200 hover:border-slate-300 hover:bg-cyan-50 rounded-lg p-5 hover:shadow-[3px_3px_0_rgba(0,0,0,0.8)] transition-all">
                            <div className="w-8 h-8 rounded-md bg-cyan-500 flex items-center justify-center">
                                <service.icon className='size-4 text-white' />
                            </div>
                            <h1 className='font1 mt-2'>{service.title[0]}</h1>
                            <p className='text-xs ovo dark:text-slate-300 mt-1 text-slate-600'>{service.description[0]}
                            </p>
                            <div onClick={() => { setSelectedService(service); setOpenModal(true) }} className="md:hidden md:group-hover:flex flex absolute top-0 right-3 items-center w-fit gap-2 cursor-pointer hover:text-black py-2 transition-all dark:text-slate-300 text-slate-600">
                                Read more <ArrowRight className='size-5 mt-0.5' />
                            </div>
                        </div>
                    ))
                }
            </div>

            <ServiceModal selectedService={selectedService} setSelectedService={setSelectedService} openModal={openModal} setOpenModal={setOpenModal} />

        </motion.div>
    )
}

export default Service