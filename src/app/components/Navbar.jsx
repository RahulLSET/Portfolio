'use client';
import React, { useState, useEffect } from 'react';
import '../components/Hamburger.css';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const toggleMenu = () => {
        setShow((prev) => !prev);
    };

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id);
        }
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, { threshold: 0.6 });

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <div className=" z-100 backdrop-filter backdrop-blur-lg bg-opacity-0 fixed top-0 px-5 md:px-10 lg:px-15 text-amber-50 h-16 lg:h-20 py-4 md:py-8 w-full flex justify-between items-center">
                <h1 className=" md:text-4xl sm:text-2xl text-xl font-anton text-amber-50 text-slate-800">
                    Rahul <span className="text-[#4ED7F1]">Shaw</span>
                </h1>

                <nav className="hidden lg:flex ">
                    <ul className="flex items-center font-sans sm:gap-5 md:gap-4 gap-2 text-md">
                        <li onClick={() => handleScrollToSection('home')} className='hover:bg-[rgb(78,215,241)] px-4 py-2.5 transition duration-300 rounded-lg hover:cursor-pointer'>
                            <span className='text-slate-800 font-bold'>Home</span>
                        </li>
                        <li onClick={() => handleScrollToSection('skills')} className='hover:bg-[rgb(78,215,241)] px-4 py-2.5 transition duration-300 rounded-lg hover:cursor-pointer'>
                            <span className='text-slate-800 font-bold'>Skills</span>
                        </li>
                        <li onClick={() => handleScrollToSection('qualification')} className='hover:bg-[rgb(78,215,241)] px-4 py-2.5 transition duration-300 rounded-lg hover:cursor-pointer'>
                            <span className='text-slate-800 font-bold'>Qualification</span>
                        </li>
                        <li onClick={() => handleScrollToSection('projects')} className='hover:bg-[rgb(78,215,241)] px-4 py-2.5 transition duration-300 rounded-lg hover:cursor-pointer'>
                            <span className='text-slate-800 font-bold'>Projects</span>
                        </li>
                        <li onClick={() => handleScrollToSection('contact')} className='hover:bg-[rgb(78,215,241)] px-4 py-2.5 transition duration-300 rounded-lg hover:cursor-pointer'>
                            <span className='text-slate-800 font-bold'>Contact</span>
                        </li>
                    </ul>
                </nav>

                <div className="block lg:hidden">
                    <input
                        type="checkbox"
                        id="checkbox"
                        checked={show}
                        onChange={toggleMenu}
                        className="hidden"
                    />
                    <label htmlFor="checkbox" className="toggle">
                        <div className="bars" id="bar1"></div>
                        <div className="bars" id="bar2"></div>
                        <div className="bars" id="bar3"></div>
                    </label>
                </div>
            </div>

            <AnimatePresence>
                {show && (
                    <motion.div
                        key="mobileMenu"
                        initial={{
                            clipPath: 'inset(0% 0% 100% 0%)',
                            opacity: 1,
                        }}
                        animate={{
                            clipPath: 'inset(0% 0% 0% 0%)',
                            opacity: 1,
                            transition: {
                                duration: 0.4,
                                ease: 'easeOut',
                            },
                        }}
                        exit={{
                            clipPath: 'inset(0% 0% 100% 0%)',
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: 'easeInOut',
                            },
                        }}
                        className="w-full backdrop-filter backdrop-blur-lg bg-opacity-0 text-black py-5 lg:px-15 md:px-10 px-5 z-50 shadow-lg lg:hidden fixed left-0 top-16"
                    >
                        <ul className="space-y-6 textlg sm:text-lg md:text-xl">
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#home">Home</a></li>
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#skills">Skills</a></li>
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#qualification">Qualification</a></li>
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#projects">Projects</a></li>
                            <li className="cursor-pointer text-amber-50 font-sans"><a href="#contact">Contact</a></li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
