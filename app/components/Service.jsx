import { servicesData } from '@/public/assets'
import { ArrowRight, Bot, Crop, Frame, Globe } from 'lucide-react'
import React, { useState } from 'react'
import ServiceModal from './ServiceModal'

const Service = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedService, setSelectedService] = useState(1)

    return (
        <div id='services' className='flex flex-col mx-auto max-w-4xl w-full px-5 mt-40'>
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
                                <Globe className='size-4 text-white' />
                            </div>
                            <h1 className='font1 mt-2'>{service.title}</h1>
                            <p className='text-xs ovo dark:text-slate-300 mt-1 text-slate-600'>{service.description}
                            </p>
                            <div onClick={()=> {setSelectedService(service.id); setOpenModal(true)}} className="hidden group-hover:flex absolute top-0 right-3 items-center w-fit gap-2 cursor-pointer hover:text-black py-2 transition-all dark:text-slate-300 text-xs text-slate-600">
                                Read more <ArrowRight className='size-4 mt-0.5' />
                            </div>
                            <ServiceModal id={selectedService} openModal={openModal} setOpenModal={setOpenModal} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Service