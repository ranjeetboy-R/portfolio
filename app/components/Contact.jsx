import { ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from "motion/react";

const Contact = () => {

    const [result, setResult] = useState("");
    const [sending, setSending] = useState(false)

    const emptyInputData = {
        name: '',
        email: '',
        message: ''
    }
    const [inputData, setInputData] = useState(emptyInputData)

    const handleInput = (e) => {
        setInputData({
            ...inputData, [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        setSending(true)
        formData.append("access_key", "bd0a40e8-6cf0-462c-9e8d-0b455390b3f7");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        setResult(data.success ? "Message send successfully!" : "Error");
        setSending(false)
        setInputData(emptyInputData)

        setTimeout(() => {
            setResult('')
        }, 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            id='contact' className='flex flex-col mx-auto max-w-2xl w-full px-5 mb-40'>
                
            <div className="flex flex-col items-center">

                <motion.p
                initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                className='text-sm ovo dark:text-slate-300'>Connect with me</motion.p>

                <motion.h1
                initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                className='text-3xl font1'>Get in touch</motion.h1>

                <motion.p
                initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                className='text-center dark:text-slate-300 md:w-md mt-5 text-slate-600 ovo text-sm'>I'd love to here from you! if you have any questions, comment of feedback please use the form below.</motion.p>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col gap-5 mt-5">
                <div className="flex md:flex-row flex-col md:justify-between gap-5 items-center">
                    
                    <motion.input
                    initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    value={inputData.name} onChange={handleInput} required type="text" name='name' placeholder='Enter your name' className="capitalize border border-slate-300 dark:border-slate-600 hover:dark:border-slate-400 rounded-md hover:border-slate-500 transition-all hover:pl-3 p-2 w-full outline-none" />

                    <motion.input
                    initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    value={inputData.email} onChange={handleInput} required type="email" name='email' placeholder='Enter email id' className="border border-slate-300 dark:border-slate-600 hover:dark:border-slate-400 rounded-md hover:border-slate-500 transition-all hover:pl-3 p-2 w-full outline-none" />

                </div>

                <motion.textarea
                initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                value={inputData.message} onChange={handleInput} required rows={6} type="text" name='message' placeholder='Write your message here...' className="border border-slate-300 dark:border-slate-600 hover:dark:border-slate-400 rounded-md hover:border-slate-500 transition-all hover:pl-3 p-2 w-full outline-none" />

                <motion.button
                initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                disabled={sending} className="disabled:cursor-not-allowed disabled:opacity-50 dark:bg-teal-800 hover:dark:bg-teal-900 flex items-center px-5 py-3 justify-center rounded-full text-sm gap-2 text-slate-100 hover:text-slate-100 transition-all cursor-pointer hover:bg-black bg-black/90 hover:shadow-[1px_1px_20px_rgba(0,0,0,0.4)] hover:scale-95 active:scale-85">
                    {
                        sending ? "Sending..." : 'Submit now'
                    }
                    <ArrowRight className='size-4' />
                </motion.button>
            </form>
            {
                result &&
                <p className={`${result === "Message send successfully!" ? 'bg-green-100 dark:bg-slate-900' : 'bg-rose-100 dark:bg-slate-900'} mt-5 text-center rounded-md py-2`}>{result}</p>
            }
        </motion.div>
    )
}

export default Contact