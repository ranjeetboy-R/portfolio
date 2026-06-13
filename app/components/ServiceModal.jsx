'use client'

import { Modal } from 'antd';
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
        <Modal
            open={openModal}
            title={`${selectedService?.title?.[0]} Details`}
            onCancel={() => handleClose(false)}
            footer={null}
            centered
            className='md:max-w-3xl! md:w-full! md:m-5!'
        >

            <div className={`animate-scaleIn transition-all duration-800 bg-white w-full md:px-5 rounded-lg`}>

                <h1 className="text-xl font-bold text-slate-700 font1 mt-3">
                    {selectedService?.title?.[1]}
                </h1>

                <p className="mt-2 text-zinc-700 text-justify">
                    {selectedService?.description?.[1]}
                </p>

                <div className="flex flex-col mt-5">
                    <h1 className='font-bold text-lg text-slate-700 font1'>Skills</h1>
                    <div className="flex items-center mt-2 gap-2 flex-wrap">
                        {
                            selectedService?.skills?.map((skill) => (
                                <div key={skill} className="border border-slate-300 hover:border-slate-500 rounded-full px-3 font1 py-1 text-sm font-medium text-slate-800 bg-slate-50 transition-all">{skill}</div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex flex-col mt-5">
                    <h1 className='font-bold text-lg text-slate-700 font1'>Experience</h1>
                    <p className="mt-1 text-zinc-700 text-sm text-justify">
                        {selectedService?.experience}
                    </p>
                </div>

                <div className="flex flex-col mt-5">
                    <h1 className='font-bold text-lg text-slate-700 font1'>Projects ({selectedService?.projects?.length || ''})</h1>
                    <div className="flex flex-col gap-3 mt-3 md:mb-5 mb-10">
                        {
                            selectedService?.projects?.map((project, index) => (
                                <div className="border border-slate-300 transition-all bg-slate-50 hover:translate-x-1 p-3 rounded-lg" key={index}>
                                    <h1 className='font-medium text-slate-700'>{project.title}</h1>
                                    <p className='text-zinc-600 mt-1 text-sm'>{project.desc}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default ServiceModal