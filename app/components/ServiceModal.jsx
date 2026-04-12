import { aiAutomation, Deployment, uiUxDesign, WebDevelopment } from '@/public/assets'
import { Modal } from 'antd'
import React from 'react'

const ServiceModal = ({ id, openModal, setOpenModal }) => {

    const service = () => {
        if (id === 1) return WebDevelopment;
        else if (id === 2) return aiAutomation;
        else if (id === 3) return uiUxDesign;
        else if (id === 4) return Deployment;
    }

    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <div className="">
            <Modal open={openModal} onCancel={handleClose} footer={null} title="My recent Projects">
                {

                }
            </Modal>
        </div>
    )
}

export default ServiceModal