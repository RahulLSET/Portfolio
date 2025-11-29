'use client';
import { motion } from 'framer-motion';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import skillcard from '../data/skillCard';
import SkillCard from './SkillCard';

const About = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, partialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0
    }
  };

  return (
    <div
      className='py-5 pb-20 bg-gradient-to-r from-[#BFE0E3] to-pink-200  sm:px-5 mx-0 pt-10 w-full'
      id='skills'
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className='text-slate-800 text-amber-50 text-center  text-3xl font-semibold text-shadow-2xs md:text-4xl lg:text-4xl'
      >
        Ski<span className='text-[#4ED7F1]'>ll</span>s
      </motion.h1>

   
      {/* <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        autoPlay={true}
        keyBoardControl={true}
        showDots={true}
        containerClass="carousel-container"
        ssr={true}
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="w-full h-[460px] z-10 "
      > */}
      <div className="na   mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto">

        {skillcard && skillcard.map((item, key) => (
          <SkillCard item={item} key={key} />
        ))}
      </div>

      {/* </Carousel> */}
    </div>
  );
};

export default About;
