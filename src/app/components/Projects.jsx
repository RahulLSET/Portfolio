import { motion } from 'framer-motion';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const software = [
    {
      _id: '1',
      title: 'Weather App',
      description: ['React', 'OpenWeather API', 'Tailwind CSS'],
      image: '/portfolio.png',
      github: 'https://github.com/example/weather-app',
      deploy: 'https://weather-app.com',
    },
    {
      _id: '2',
      title: 'Todo List',
      description: ['React', 'LocalStorage'],
      image: '/myphoto2.jpeg',
      github: 'https://github.com/example/todo-list',
      deploy: 'https://todo-list.com',
    },
      {
      _id: '3',
      title: 'Todo List',
      description: ['React', 'LocalStorage'],
      image: '/myphoto2.jpeg',
      github: 'https://github.com/example/todo-list',
      deploy: 'https://todo-list.com',
    },
  ];

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="bg-gradient-to-r from-yellow-200 to-[#BFE0E3] h-auto pt-15 md:px-15 px-5 py-5 font-sans" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className=" text-slate-800 text-center text-3xl font-semibold md:text-4xl w-fit mx-auto"
      >
        <span className="text-[#4ED7F1]">Pro</span>jects
      </motion.h1>

      <div className=" my-20 max-w-full overflow-hidden  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-10/12 mx-auto">
        {/* <Carousel
          responsive={responsive}
          infinite={true}
          arrows={true}
          autoPlay={true}
          keyBoardControl={true}
          showDots={true}
          // containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          ssr={true}
          autoPlaySpeed={2000}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          className="w-full h-[500px] z-10"
        > */}
          {
          
          software.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.6 }}
                className="mt-8 relative flex w-[95%] mx-auto flex-col rounded-xl bg-dev bg-clip-border shadow-md group/card font-sans border-[0.5px] border-gray-600"
              >
                <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border shadow-cyan-500/30 shadow-xl">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={750}
                      className="w-auto h-auto min-h-full min-w-full object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-110"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
                      No Image
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-2xl font-semibold text-amber-50 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">{item.title}</h5>
                  <ul style={{ listStyleType: 'disc', marginLeft: 20, marginTop: 10 }}>
                    {item.description.map((desc, key) => (
                      <li key={key} className="text-sm text-gray-300">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex gap-x-5">
                    {item.github && (
                      <a href={item.github} target="_blank" rel="noopener noreferrer">
                        <div className="group/github flex gap-2 items-center border-[0.5px] border-gray-500 w-fit px-2 py-1 rounded-md mt-3 hover:bg-black hover:text-[#4ED7F1] transition">
                          <FaGithub className="group-hover/github:animate-bounce" />
                          <h3 className="text-sm">Code</h3>
                        </div>
                      </a>
                    )}
                    {item.deploy && (
                      <a href={item.deploy} target="_blank" rel="noopener noreferrer">
                        <div className="flex gap-2 items-center border-[0.5px] border-gray-500 w-fit px-2 py-1 rounded-md mt-3 hover:bg-black hover:text-[#4ED7F1] transition">
                          <FaExternalLinkAlt />
                          <h3 className="text-sm">Live</h3>
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))
      
          
          
          }
        {/* </Carousel> */}
      </div>
    </div>
  );
};

export default Projects;
