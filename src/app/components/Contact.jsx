import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaSquareUpwork } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SiFiverr, SiLeetcode } from "react-icons/si";
import 'animate.css';

const Contact = () => {
    return (
        <>
            <div className="px-5 md:px-15 bg-gradient-to-r from-pink-200 to-[#BFE0E3] h-auto pb-10 pt-10" id='contact'>
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.4 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='mb-5 text-slate-800 text-center text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl'
                >
                    Contact with <span className='text-[#4ED7F1]'>Me</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='text-center text-slate-600 font-semibold text-sm text-shadow-2xs md:text-base text-gray-300 w-full md:w-[50%] mx-auto'
                >
                    Whether you have a question, a project idea, or just want to say hello, feel free to get in touch— I am always open to connecting and happy to chat.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className='flex gap-x-2 md:gap-x-10 items-center justify-center mt-5 px-5'
                >
                    <a href="https://github.com/RahulKGEC" target='_blank'>
                        <FaGithub className='bg-dev hover:animate-bounce hover:text-[#4ED7F1] p-2 text-5xl rounded-full' />
                    </a>
                    <a href="https://www.linkedin.com/in/rahul-shaw-24b447252/" target='_blank'>
                        <FaLinkedin className='bg-dev hover:animate-bounce hover:text-[#4ED7F1] p-2 text-5xl rounded-full' />
                    </a>
                    <a href="https://leetcode.com/u/rahul_92/" target='_blank'>
                        <SiLeetcode className='bg-dev hover:animate-bounce hover:text-[#4ED7F1] p-2 text-5xl rounded-full' />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                    className="mt-5 shadow-cyan-500/30 shadow-2xl border border-gray-600 w-full max-w-md mx-auto px-5 py-3 rounded-md font-sans min-h-[120px] overflow-hidden animate__animated animate__pulse animate__infinite"
                >
                    <div className="flex items-center justify-center gap-x-3 text-xl text-slate-800">
                        <MdEmail className="text-md" />
                        <h1>Email me at</h1>
                    </div>

                    <p className="mt-3 text-center text-lg break-words text-[#4ED7F1] hover:cursor-pointer">
                        <a href="mailto:rahulshawtechsunset@gmail.com">
                            rahulshawtechsunset@gmail.com
                        </a>
                    </p>
                </motion.div>

            </div>

            <div className='bg-gradient-to-r from-[#BFE0E3] to-pink-200 border-t-[1px] px-5 py-10 border-gray-600 text-slate-800 font-semibold flex items-center text-gray-400 text-md'>
                <p className='mx-auto font-bold'>&copy; Rahul Shaw. All rights reserved</p>
            </div>
        </>
    );
};

export default Contact;
