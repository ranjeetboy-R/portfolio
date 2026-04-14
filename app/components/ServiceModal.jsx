import { X } from 'lucide-react'
import React, { useEffect } from 'react'

const ServiceModal = ({ selectedService, setSelectedService, openModal, setOpenModal }) => {

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [openModal]);

    const handleClose = () => {
        setOpenModal(false)
        setSelectedService(null)
    }

    return (
        <div
            className={`${openModal ? "block bg-black/90" : "hidden"
                } fixed inset-0 overflow-auto p-5 [overflow-style:none] [scrollbar-width:none] h-screen z-50 `}
        >
            <div className={`animate-scaleIn transition-all mx-auto duration-800 max-w-3xl bg-white dark:bg-zinc-800 w-full p-5 md:p-10 rounded-lg`}>

                <div className="flex justify-between items-center">
                    <h1 className='font-medium text-slate-600 dark:text-slate-300'>{selectedService?.title?.[0]} Details</h1>

                    <button onClick={() => handleClose(false)} className='border w-8 aspect-square rounded-md hover:border-slate-500 transition-all cursor-pointer hover:bg-slate-100 dark:bg-transparent'>X</button>
                </div>

                <h1 className="text-lg font-medium font1 mt-3">
                    {selectedService?.title?.[1]}
                </h1>

                <p className="mt-2 text-zinc-700 dark:text-slate-200 text-justify">
                    {selectedService?.description?.[1]}
                </p>

                <div className="flex flex-col mt-5">
                <h1 className='font-bold text-slate-700 dark:text-white font1'>Skills</h1>
                <div className="flex items-center mt-2 gap-2 flex-wrap">
                    {
                        selectedService?.skills?.map((skill, index) => (
                            <div className="border hover:border-slate-500 rounded-full px-3 font1 py-1 text-xs font-medium text-slate-800 dark:bg-transparent dark:text-slate-200 bg-zinc-50 transition-all">{skill}</div>
                        ))
                    }
                </div>
                </div>

                <div className="flex flex-col mt-5">
                    <h1 className='font-bold text-slate-700 dark:text-white font1'>Experience</h1>
                    <p className="mt-1 text-zinc-700 text-sm text-justify dark:text-zinc-300">
                        {selectedService?.experience}
                    </p>
                </div>

                <div className="flex flex-col mt-5">
                    <h1 className='font-bold text-slate-700 dark:text-white font1'>Projects</h1>
                    <div className="flex flex-col gap-3 mt-3">
                    {
                        selectedService?.projects?.map((project, index)=>(
                            <div className="border hover:scale-105 hover:border-slate-500 dark:hover:border-slate-400 transition-all hover:translate-x-1 hover:bg-zinc-50 dark:bg-transparent p-3 rounded-lg" key={index}>
                                <h1 className='font-medium text-slate-700 dark:text-white'>{project.title}</h1>
                                <p className='text-zinc-600 dark:text-slate-300 mt-1 text-sm'>{project.desc}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceModal