'use client'
import Image from "next/image";
import myphoto2 from '../../../public/myphoto2.jpeg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { SiLeetcode } from "react-icons/si";
import Typewriter from "./TypeWriter";
import { useEffect, useRef } from "react";

const Home = () => {
    const downloadRef = useRef(null);

    useEffect(() => {
        // auto download when portfolio loads
        if (downloadRef.current) {
            downloadRef.current.click();
        }
    }, []);

    return (
        <div className="min-h-screen md:h-auto lg:h-[710px] bg-gradient-to-r from-yellow-200 to-[#BFE0E3]" id="home">

            <div className="bg-gradient-to-r from-yellow-200 to-[#BFE0E3] md:px-15 sm:px-5 px-5 pt-24  flex flex-col-reverse lg:flex-row justify-between items-center gap-10">


                <div className="text-center lg:text-left w-full lg:w-1/2 h-[400px] flex flex-col mt-12 gap-y-4">


                    <Typewriter
                        texts={[
                            'Hi, I\'m Rahul.',
                            'I am a Developer.',
                            'I Love React.',
                            'I build cool UI.',
                        ]}
                        period={2000}
                    />


                    <motion.h1
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.5,
                        }}

                        className="text-4xl sm:text-4g md:text-7xl mt-[-12px] text-slate-800">I am <span className="text-[#4ED7F1] font-satisfy">Rahul</span> <span className="font-satisfy">Shaw</span></motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{
                            duration: 0.7,
                        }}

                        className="font-sans text-sm sm:text-md md:text-lg text-slate-600">I am a passionate full-stack developer focused on building impactful, user-centric web applications. With real-world experience delivering scalable and dynamic solutions, I strive to create seamless digital experiences. I value clean code, collaboration, and continuous learning, and I am driven to contribute meaningfully to every project I work on.<span className="text-[#4ED7F1]  ml-4">☎️ Call  Me Now .. 8420176164 </span></motion.p>
                    <div className="items-center text-amber-50 text-4xl mx-auto lg:mx-0  lg:text-3xl flex gap-x-8">


                        <motion.a
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.4,
                            }}
                            href="https://github.com/RahulKGEC" target="_blank"><FaGithub title="GitHub Profile" className="hover:cursor-pointer hover:text-[#4ED7F1] transition hover:animate-bounce text-slate-700" />
                        </motion.a>
                        <motion.a
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{
                                duration: 0.6,
                            }}
                            href="https://www.linkedin.com/in/rahul-shaw-24b447252/" target="_blank">
                            <FaLinkedin title="Linedin Profile" className=" text-slate-700 hover:cursor-pointer hover:text-[#4ED7F1] transition hover:animate-bounce" />
                        </motion.a>


                        <motion.a
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.8 }}
                            href="https://leetcode.com/u/rahul_92/" target="_blank"
                        >
                            <SiLeetcode title="LeetCode Profile" className="text-slate-700 hover:cursor-pointer hover:text-[#FFA116] transition hover:animate-bounce" />
                        </motion.a>
                    </div>
                    <div className="na py-4 border-4 px-6 w-[190px] animate__animated animate__pulse animate__infinite shadow-cyan-500/30 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-tl-2xl rounded-br-4xl shadow-lg mt-6">
                        <a
                            ref={downloadRef}
                            href="/Resume_latex.pdf"
                            download
                            className="text-xl font-semibold"
                        >
                            Download CV
                        </a>
                    </div>

                </div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-1/2 flex justify-center md:ml-5 lg:justify-end shadow-[10px_10px_0px_rgba(0,0,0,0.75)]  rounded-[12px]"
                >
                    <Image
                        src={myphoto2}
                        alt="Profile picture"
                        className=" md:h-[500px]  rounded-lg sm:h-[300px] h-[300px] object-cover"
                    />
                </motion.div>

            </div>

        </div>
    );
}
export default Home;